import Footer from '@/components/generic/Footer';
import { Header } from '@/components/generic/Header';
import { TokenProp } from '@/libs/oAuth';
import '@toast-ui/editor/dist/toastui-editor.css';
import type { Editor as ToastEditor } from '@toast-ui/react-editor';
import { Button, Flex, Grid, GridItem, Select, Textarea, Skeleton, FormControl, FormLabel, FormHelperText, Input, Spacer, useToast, Box } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

/**
 * CSR 전용 에디터
 */
const Editor = dynamic(() => import('@/components/Editor'), { ssr: false });

import { useEffect, useRef, useState } from 'react';
import { ContentFrame } from '@/components/generic/ContentFrame';
import { createBoard } from '@/libs/backend/boardRequest';
import { exampleMainCategoryData, exampleMidCategoryData } from '@/libs/backend/exampledata';
import { MainCategory, MidCategory, getAllMainCategory, getSpecificAllMidCategory } from '@/libs/backend/categoryRequest';
import { statusToast } from '@/components/Toast';

/**
 * 글쓰기 페이지
 */
export default function WriteBoard(props: TokenProp) {
  // Markdown 에디터
  const editorRef = useRef<ToastEditor>(null);

  // 실제 Markdown 데이터
  const [markdown, setMarkdown] = useState("");
  const [title, setTitle] = useState("");
  const [selectMainCate, setSelectMainCate] = useState<MainCategory>({
    id: 1,
    name: "선택하세요",
  });

  const [selectMidCate, setSelectMidCate] = useState<MidCategory>({
    id: 1,
    name: "선택하세요",
    mainCategoryId: 1,
  });
  const [mainCategory, setMainCategory] = useState<Array<MainCategory>>(exampleMainCategoryData);
  const [midCategory, setMidCategory] = useState<Array<MidCategory>>(exampleMidCategoryData);
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const [isEditorLoaded, setIsEditorLoaded] = useState(false);
  const toast = useToast();

  /**
   * 마크다운 값 업데이트 (반영)
   * @returns 업데이트된 값
   */
  const updateMarkdown = () => {
    if (editorRef.current != null) {
      const content = editorRef.current.getInstance().getMarkdown();
      setMarkdown(content);
      return content;
    }
    return null;
  }

  /**
   * 작성 버튼을 눌렀을 때 실행되는 함수
   */
  const onSubmit = async () => {
    const toastOptions = {
      status: "error" as const,
      duration: 4000,
      isClosable: true,
    };
    // 제목 검사
    if (title.length <= 0) {
      toast({
        ...toastOptions,
        title: "제목을 입력해주세요",
      });
      return;
    }
    // 입력값을 마크다으로 컴파일
    // content 값을 써야됨
    const content = updateMarkdown();
    // 내용 검사
    if (content == null || content.length <= 0) {
      toast({
        ...toastOptions,
        title: "내용을 입력해주세요",
      });
      return;
    }
    // 내용이 문제가 없으면
    // TODO: 서버에 전송

    // 임시로 토큰 막음
    try {
      await createBoard(props?.token, {
        title,
        content: markdown,
        mainCategoryName: selectMainCate.name,
        midCategoryName: selectMidCate.name,
      });
    } catch (err) {
      console.error(err);
    }
  };

  // 메인 카테고리 목록 가져오기
  useEffect(() => {
    (async () => {
      const getMainCategories = await getAllMainCategory(null,);
      setMainCategory(getMainCategories);
      console.log("first", getMainCategories);
    })();
  }, []);
  // TODO : 하나로 묶는 방안 생각
  // TODO : 지금 서버에서
  //org.apache.ibatis.exceptions.PersistenceException: 
  //### Error querying database.  Cause: java.lang.NullPointerException: Cannot invoke "org.apache.ibatis.cache.impl.PerpetualCache.removeObject(Object)" because "this.localCache" is null
  //### The error may exist in sql/mapper/category-mapper.xml
  //### The error may involve category.getAllMainCategoryLists
  //### The error occurred while handling results
  //### SQL: select TB_BOARD_MAINCATEGORY.MAIN_CATE_NAME AS MAIN_CATE_NAME,            TB_BOARD_MAINCATEGORY.B_MAIN_CATE_ID AS B_MAIN_CATE_ID             from TB_BOARD_MAINCATEGORY;
  //### Cause: java.lang.NullPointerException: Cannot invoke "org.apache.ibatis.cache.impl.PerpetualCache.removeObject(Object)" because "this.localCache" is null
  // 오류 해결하기 
  //Basic count is = 0
  //mainCategoryId = 1
  //midCategoryId = null 가 나왔을 때의 값 처리가 안됨
  //show all MainCategory lists
  //{midCategoryId=null, mainCategoryId=1}  
  useEffect(() => {
    console.log("asdf");
    (async () => {
      console.log(selectMainCate);
      const getMidCategories = await getSpecificAllMidCategory(null, selectMainCate.id);
      setMidCategory(getMidCategories);
      console.log("ddd", getMidCategories);
    })();
  }, [selectMainCate]);
  return (
    <>
      <Header />
      <ContentFrame>
        <FormControl>
          <FormLabel>제목</FormLabel>
          <Input type="text" placeholder="제에목" value={title} onChange={handleTitleChange} />
          <Spacer h={4} />
          <Grid templateColumns="repeat(2, 1fr)" gap={8}>
            <GridItem>
              <FormLabel>대분류</FormLabel>
              <Select placeholder="골라골라" onChange={(ev) => {
                const selectedOption = ev.target.options[ev.target.selectedIndex];

                const selectedText = selectedOption.textContent;
                const selectedValue = Number(selectedOption.value);
                console.log(selectedValue, typeof selectedValue);
                console.log(selectedText);
                /**
                 * null 값 처리
                 */
                setSelectMainCate({ id: selectedValue, name: selectedText ?? "nothing" });
                //분명 마음이 아픈건 난데 웰케 형들이 더 아파 보이냐

              }}>
                {
                  mainCategory.map((value, idx) => {
                    console.log(idx, value);
                    return (<option key={idx} value={`${idx}`}>{value.name}</option>)
                  }
                  )}
              </Select>
              {/*
              * TODO : 1차 분류 되었으니 안에 options들을 나누어서 넣고 잘 되는지 확인할것
              */}
              <FormHelperText>1차 분류 입니다.</FormHelperText>
            </GridItem>
            <GridItem>
              <FormLabel>소분류</FormLabel>
              <Select placeholder="돌림판" >
                <option value="option1">달달소</option>
                <option value="option2">쏘리글</option>
              </Select>
              <FormHelperText>2차 분류 입니다.</FormHelperText>
            </GridItem>
          </Grid>
          <Spacer h={4} />
          <FormLabel>내용</FormLabel>
          <Skeleton height="30rem" isLoaded={isEditorLoaded}>
            <Editor
              initialValue="안뇽"
              previewStyle="vertical"
              height="100%"
              initialEditType="wysiwyg"
              editorRef={editorRef}
              language="en"
              onLoad={() => setIsEditorLoaded(true)}
            />
          </Skeleton>
          <Spacer h={4} />
          <Flex flexDirection="row-reverse" columnGap={4}>
            <Button onClick={onSubmit}>작성</Button>
            <Button>취소</Button>
          </Flex>
          <Spacer h={4} />
          <Textarea value={markdown} readOnly={true} />
        </FormControl>
      </ContentFrame>
      <Footer />
    </>
  );
}