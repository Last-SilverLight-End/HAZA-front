

export interface ListContents{

  mainCategory: string;
  midCategory: string;
  check?: boolean;
  important?: boolean;
}

export const exampleKanban: Array<ListContents> = [
  {
    mainCategory : "Game", 
    midCategory : "starCraft", 
    check : true, 
    important : true,
  },
  {
    mainCategory : "Game", 
    midCategory : "Heroes Of the Storm", 
    check : true, 
    important : true,
  },
  {
    mainCategory : "Movie", 
    midCategory : "Girls FrontLine", 
    check : true, 
    important : true,
  },
  {
    mainCategory : "Movie", 
    midCategory : "Mars", 
    check : true, 
    important : true,
  },
];
