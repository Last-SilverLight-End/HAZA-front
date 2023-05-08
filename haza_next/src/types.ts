import { Theme } from '@chakra-ui/react';

export type Color = Exclude<keyof Theme['colors'], 'transparent' | 'current' | 'black' | 'white'>;