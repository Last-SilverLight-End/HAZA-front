import { Container, ToastPosition, useToast, UseToastOptions } from '@chakra-ui/react';

export type ToastProps = Partial<{
  position: ToastPosition | undefined;
  title: string;
  description: string;
  status: 'success' | 'error' | 'warning' | 'info';
} & Pick<UseToastOptions, 'duration' | 'isClosable'>>;

export function statusToast(props: ToastProps) {
  const toast = useToast()
  //TODO : 성공일때 실패일때 나누어서 진행할것

  return (
    toast({
      position: props.position,
      title: props.title,
      description: props.description,
      status: props.status,
      duration: 1000,
      isClosable: true,
    })
  );
}

