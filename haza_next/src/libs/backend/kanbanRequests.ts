

export interface ListContents{

  mainCategory: string;
  midCategory: string;
  check?: boolean;
  title : string;
  important?: boolean;

}

export const exampleKanban: Array<ListContents> = [
  {
    mainCategory : "Game", 
    midCategory : "starCraft", 
    check : true, 
    title : "게임 수준",
    important : true,
  },
  {
    mainCategory : "Game", 
    midCategory : "Heroes Of the Storm", 
    check : true, 
    title : "게임 수준2",
    important : true,
  },
  {
    mainCategory : "Movie", 
    midCategory : "Girls FrontLine", 
    check : true, 
    title : "영화 수준",
    important : true,
  },
  {
    mainCategory : "Movie", 
    midCategory : "Mars", 
    check : true, 
    title : "영화 수준2",
    important : true,
  },
  {
    mainCategory : "Play", 
    midCategory : "Mars", 
    check : true, 
    title : "놀이 수준",
    important : true,
  },
  {
    mainCategory : "mars", 
    midCategory : "Mars", 
    check : true, 
    title : "화성 수준",
    important : true,
  },
];
