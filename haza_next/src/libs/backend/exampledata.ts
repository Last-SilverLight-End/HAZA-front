import { BoardData, MainCategory } from "./boardRequest"

/**
 * 임시 게시글 데이터
 */

// 이게 
export const exampleBoardData: BoardData[] = [
  {
    boardId: 1,
    hit: 200,
    createdDate: new Date("2022-11-01 12:12:12"),
    modifiedDate: new Date("2022-11-01 13:12:12"),
    userName: "muangmuang",
    userEmail: "muangmuangbabo@gmail.com",
    title: "뫙뫙이 바보 바보",
    content: "미안하다 이거 보여주려고 어글 ㅗ끌었따.",
    mainCategory: "Movie",
    midCategory: "Horror",
  },
  {
    boardId: 2,
    hit: 400,
    createdDate: new Date("2023-11-01 12:12:12"),
    modifiedDate: new Date("2023-11-01 13:12:12"),
    userName: "muangmuang",
    userEmail: "muangmuangbabo@gmail.com",
    title: "뫙뫙이 바보 바보2",
    content: "미안하다 이거 보여주려고 어글 ㅗ끌었따.",
    mainCategory: "Movie",
    midCategory: "Horror",
  },
  {
    boardId: 3,
    hit: 400,
    createdDate: new Date("2023-11-01 12:12:12"),
    modifiedDate: new Date("2023-11-01 13:12:12"),
    userName: "muangmuang",
    userEmail: "muangmuangbabo@gmail.com",
    title: "뫙뫙이 바보 바보3",
    content: "미안하다 이거 보여주려고 어글 ㅗ끌었따.",
    mainCategory: "Movie",
    midCategory: "Horror",
  },
  {
    boardId: 4,
    hit: 200,
    createdDate: new Date("2022-11-01 12:12:12"),
    modifiedDate: new Date("2022-11-01 13:12:12"),
    userName: "jjoriping",
    userEmail: "jjoripingbabo@gmail.com",
    title: "쪼리핑 바보",
    content: "미안하다 이거 보여주려고 어글 ㅗ끌었따.",
    mainCategory: "Movie",
    midCategory: "Horror",
  },
  {
    boardId: 5,
    hit: 400,
    createdDate: new Date("2023-11-01 12:12:12"),
    modifiedDate: new Date("2023-11-01 13:12:12"),
    userName: "jjoriping",
    userEmail: "jjoripingbabo@gmail.com",
    title: "쪼리핑 바보2",
    content: "미안하다 이거 보여주려고 어글 ㅗ끌었따.",
    mainCategory: "Movie",
    midCategory: "Horror",
  },
  {
    boardId: 6,
    hit: 400,
    createdDate: new Date("2023-11-01 12:12:12"),
    modifiedDate: new Date("2023-11-01 13:12:12"),
    userName: "jjoriping",
    userEmail: "jjoripingbabo@gmail.com",
    title: "쪼리핑 바보3",
    content: "미안하다 이거 보여주려고 어글 ㅗ끌었따.",
    mainCategory: "Movie",
    midCategory: "Horror",
  },
]

/**
 * 임시 mainCategory 카테고리 데이터
 */
export const exampleMainCategoryData:MainCategory[] = [
  {
    mainCategoryId : 1,
    mainCategoryName : "Movie",
  },
  {
    mainCategoryId : 2,
    mainCategoryName : "Game",
  },
  {
    mainCategoryId : 3,
    mainCategoryName : "Animation",
  }
]

/**
 * 임시 midCategory 데이터
 */
export const  exampleMidCategoryData:MidCategory[] = [
  {
    mainCategoryId :1,
    midCategoryId : 1,
    midCategoryName : "Action",
  },
  {
    mainCategoryId :1,
    midCategoryId : 2,
    midCategoryName : "Horror",
  },
  {
    mainCategoryId :1,
    midCategoryId : 3,
    midCategoryName : "Animation",
  },
  {
    mainCategoryId :1,
    midCategoryId : 4,
    midCategoryName : "19",
  },
  {
    mainCategoryId :2,
    midCategoryId : 1,
    midCategoryName : "rogue",
  },
  {
    mainCategoryId :2,
    midCategoryId : 2,
    midCategoryName : "stick",
  },
  {
    mainCategoryId :2,
    midCategoryId : 3,
    midCategoryName : "shooting",
  },
  {
    mainCategoryId :3,
    midCategoryId : 1,
    midCategoryName : "idol",
  },{
    mainCategoryId :3,
    midCategoryId : 2,
    midCategoryName : "이세계",
  },
]