import { BoardData, MainCategory } from './boardRequest';

/**
 * 임시 게시글 데이터
 */
export const exampleBoardData: Array<BoardData> = [
  {
    id: 1,
    hit: 200,
    createdDate: new Date("2022-11-01 12:12:12"),
    modifiedDate: new Date("2022-11-01 13:12:12"),
    userName: "muangmuang",
    userEmail: "muangmuangbabo@gmail.com",
    title: "뫙뫙이 바보 바보",
    content: "미안하다 이거 보여주려고 어글 ㅗ끌었따.",
    mainCategoryId: 1,
    midCategoryId: 1,
  },
  {
    id: 2,
    hit: 400,
    createdDate: new Date("2023-11-01 12:12:12"),
    modifiedDate: new Date("2023-11-01 13:12:12"),
    userName: "muangmuang",
    userEmail: "muangmuangbabo@gmail.com",
    title: "뫙뫙이 바보 바보2",
    content: "미안하다 이거 보여주려고 어글 ㅗ끌었따.",
    mainCategoryId: 1,
    midCategoryId: 1,
  },
  {
    id: 3,
    hit: 400,
    createdDate: new Date("2023-11-01 12:12:12"),
    modifiedDate: new Date("2023-11-01 13:12:12"),
    userName: "muangmuang",
    userEmail: "muangmuangbabo@gmail.com",
    title: "뫙뫙이 바보 바보3",
    content: "미안하다 이거 보여주려고 어글 ㅗ끌었따.",
    mainCategoryId: 1,
    midCategoryId: 1,
  },
  {
    id: 4,
    hit: 200,
    createdDate: new Date("2022-11-01 12:12:12"),
    modifiedDate: new Date("2022-11-01 13:12:12"),
    userName: "jjoriping",
    userEmail: "jjoripingbabo@gmail.com",
    title: "쪼리핑 바보",
    content: "미안하다 이거 보여주려고 어글 ㅗ끌었따.",
    mainCategoryId: 1,
    midCategoryId: 1,
  },
  {
    id: 5,
    hit: 400,
    createdDate: new Date("2023-11-01 12:12:12"),
    modifiedDate: new Date("2023-11-01 13:12:12"),
    userName: "jjoriping",
    userEmail: "jjoripingbabo@gmail.com",
    title: "쪼리핑 바보2",
    content: "미안하다 이거 보여주려고 어글 ㅗ끌었따.",
    mainCategoryId: 1,
    midCategoryId: 1,
  },
  {
    id: 6,
    hit: 400,
    createdDate: new Date("2023-11-01 12:12:12"),
    modifiedDate: new Date("2023-11-01 13:12:12"),
    userName: "jjoriping",
    userEmail: "jjoripingbabo@gmail.com",
    title: "쪼리핑 바보3",
    content: "미안하다 이거 보여주려고 어글 ㅗ끌었따.",
    mainCategoryId: 1,
    midCategoryId: 1,
  },
];

/**
 * 임시 카테고리 데이터
 */
export const exampleCategoryData: Array<MainCategory> = [
  {
    id: 1,
    name: "Movie",
  },
  {
    id: 2,
    name: "Game",
  },
  {
    id: 3,
    name: "Animation",
  },
];
