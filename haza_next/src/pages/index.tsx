import Image from 'next/image';
import { Header } from '@/components/generic/Header';
import Footer from '@/components/generic/Footer';
import { ContentFrame } from '@/components/generic/ContentFrame';
import { Text, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return (
    <>
    
      <Header/>
        <ContentFrame rowGap={4} >
          <h2>Lets HAZA!</h2>
          <Image 
            src="/images/girl_frontline.png"
            alt="show how to create"
            width={500}
            height={500}
          />
          <Text fontSize="2xl">
            자신이 원하는 모든 대로 할 수 있습니다!
          </Text>

          <Image 
            src="/images/moremi.png"
            alt="show how to create"
            width={500}
            height={500}
            />
          <Text fontSize="2xl">
            자 당신의 꿈을 펼쳐보세요!
          </Text>
          <Button onClick={() => router.push('/kanbanBoard')}>

          </Button>
        </ContentFrame>
      <Footer/>
    </>
  );
}

export default home;