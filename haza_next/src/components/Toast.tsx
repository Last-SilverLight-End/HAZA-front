import { AlertStatus, Container, ToastPosition, useToast, UseToastOptions } from '@chakra-ui/react';

export type ToastProps = Partial<{
  position: ToastPosition | undefined;
  title: string;
  description: string;
  // AlertStatus = "info" | "warning" | "success" | "error" | "loading"
  status: AlertStatus;
} & Pick<UseToastOptions, 'duration' | 'isClosable'>>;

export function statusToast(props: ToastProps) {
  const toast = useToast()
  /**   
   * @TODO : 성공일때 실패일때 나누어서 진행할것 나중에 switch로 바꿀것
   * format : 
    * return (
      toast({
        position: props.position,
        title: props.title,
        description: props.description,
        status: props.status,
        duration: 1000,
        isClosable: true,
      })
    );
   */
  if (props.status === 'success') {
    return (
      toast({
        position: props.position,
        title: '완료',
        description: props.description,
        status: props.status,
        duration: 1000,
        isClosable: true,
      })
    )
  }
  else if (props.status === 'error') {
    return (
      toast({
        position: props.position,
        title: '오류',
        description: props.description,
        status: props.status,
        duration: 2000,
        isClosable: true,
      })
    )
  }
  else if (props.status === 'warning') {
    return (
      toast({
        position: props.position,
        title: '주의',
        description: props.description,
        status: props.status,
        duration: 3000,
        isClosable: true,
      })
    )
  }
  else if (props.status === 'info') {
    return (
      toast({
        position: props.position,
        title: props.title,
        description: props.description,
        status: props.status,
        duration: 1000,
        isClosable: true,
      })
    )
  }
  /**
   * @TODO : 예외 처리 다른 방안 마련
   * loading 을 else로 빼내어 알 수 없는 로그 확인 용도로 사용
  */
  else {
    return (
      toast({
        position: props.position,
        title: '알 수 없음',
        description: props.description,
        status: props.status,
        duration: 100000,
        isClosable: true,
      })
    )
  }
}

