import { USERS } from "./users";

export const POSTS =[
    {
        imgUrl:require('../assetes/images/img3.jpg'),
        user: USERS[0].user,
        likes:7870,
        caption:'Building the Netflix clone  with React JS. This is going to be a fun build. #reactjs #firebase #dev',
        profile_picture: USERS[0].image,
        comments: [
            {
                user:'imane',
                comment:'Wow! This build looks fire. Supper exicted about '
            },
            {
                user:'meryem',
                comment:'Once I wake up, Ill finally be ready to code this up'
            },
        ],
        
    },
    {
        imgUrl: require('../assetes/images/img2.jpg'),
        user: USERS[1].user,
        likes:4582,
        caption:'Building the Netflix clone  with React JS. This is going to be a fun build. #reactjs #firebase #dev',
        profile_picture: USERS[1].image,
        comments: [
            {
                user:'meryem',
                comment:'This build looks fire. Supper exicted about'
            },
            {
                user:'yassine',
                comment:' Ill finally be ready to code this up'
            },
            {
                user:'sami',
                comment:'Once I wake up'
            },
        ],
        
    },
    {
        imgUrl:  require('../assetes/images/img1.jpg'),
        user: USERS[2].user,
        likes:1259,
        caption:'Building the Netflix clone  with React JS. This is going to be a fun build. #reactjs #firebase #dev',
        profile_picture: USERS[2].image,
        comments: [
            {
                user:'rachid',
                comment:'Wow! This build looks fire. Supper exicted about'
            },
           
        ],
        
    },
    {
        imgUrl: require('../assetes/images/img4.jpg'),
        user: USERS[3].user,
        likes:7870,
        caption:'Building the Netflix clone  with React JS. This is going to be a fun build. #reactjs #firebase #dev',
        profile_picture: USERS[3].image,
        comments: [
           
        ],
        
    },
    
    
]