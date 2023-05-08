import { IdType } from '../constants';

export interface ListContents {
  mainCategoryId: IdType;
  midCategory: string;
  check?: boolean;
  title: string;
  important?: boolean;
}

export const exampleKanban: Array<ListContents> = [
  {
    mainCategoryId: 2, 
    midCategory: "starCraft", 
    check: true, 
    title: "게임 수준",
    important : true,
  },
  {
    mainCategoryId: 2, 
    midCategory: "Heroes Of the Storm", 
    check: true, 
    title: "게임 수준2",
    important: true,
  },
  {
    mainCategoryId: 1, 
    midCategory: "Girls FrontLine", 
    check: true, 
    title: "영화 수준",
    important: true,
  },
  {
    mainCategoryId: 1, 
    midCategory: "Mars", 
    check: true, 
    title: "영화 수준2",
    important: true,
  },
];
