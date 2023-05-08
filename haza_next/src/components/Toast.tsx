import { Container, useToast, UseToastOptions } from '@chakra-ui/react';

export type ToastProps = Partial<{
  title: string;
  description: string;
} & Pick<UseToastOptions, 'duration' | 'status' | 'isClosable'>>;

export function makeToast(props: ToastProps) {
  const toast = useToast();
  return (
    <Container onClick={() => toast(props)}>
      {props.status}
    </Container>
  );
}