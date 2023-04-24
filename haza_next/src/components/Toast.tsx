import { Button, Container, useToast } from '@chakra-ui/react'

export type ToastProps = {

  title?: string;
  description?: string;
  status?: "info" | "warning" | "success" | "error" | "loading" | undefined;
  duration?: number;
  inClosable?: boolean;
}

export function makeToast(props: ToastProps) {
  const toast = useToast();
  return (
    <Container
      onClick={() =>
        toast({
          title: props.title,
          description: props.description,
          status: props.status,
          duration: props.duration,
          isClosable: props.inClosable,
        })
      }
    >
      {props.status}
    </Container>
  )
}