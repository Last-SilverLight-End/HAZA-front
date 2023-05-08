import { projectName } from '@/libs/constants';
import { Center, Flex, Spacer, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { ContentFrame } from './ContentFrame';

export interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  withTitle?: boolean;
}
export function Logo(props: LogoProps) {
  const withTitle = props.withTitle ?? false;
  return (
    <ContentFrame>
      <Flex flexDirection="row">
        <Image
          src="/images/logo.png"
          alt={`${projectName} Logo`}
          width={props.width ?? 40}
          height={props.height ?? 40}
          className={props.className ?? ""}
        />
        {withTitle && <>
          <Spacer width={4} />
          <Center height={props.height ?? 40}>
            <Text fontSize="xl">{projectName}</Text>
          </Center>
        </>}
      </Flex>
    </ContentFrame>
  );
}