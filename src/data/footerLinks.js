import {nanoid} from "nanoid";
export default [
    {
        id: 1,
        head: "Home",
        links: [
            {id: nanoid(), link: "Feateres"},
            {id: nanoid(), link: "Popular Products"},
            {id: nanoid(), link: "Testimonials"},
            {id: nanoid(), link: "FAQ"}
        ]
    },
    {
        id: 2,
        head: "Menswear",
        links: [
            {id: nanoid(), link: "Casual"},
            {id: nanoid(), link: "Formal"},
            {id: nanoid(), link: "Party"},
            {id: nanoid(), link: "Business"}
        ]
    },
    {
        id: 3,
        head: "Womenswear",
        links: [
            {id: nanoid(), link: "Casual",},
            {id: nanoid(), link: "Formal"},
            {id: nanoid(), link: "Party"},
            {id: nanoid(), link: "Business"}
        ]
    },    
    {
        id: 4,
        head: "Kids",
        links: [
            {id: nanoid(), link: "Casual"},
            {id: nanoid(), link: "Formal"},
            {id: nanoid(), link: "Party"},
        ]
    },
]