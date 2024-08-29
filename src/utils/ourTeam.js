import team1 from "../assets/team/1.jpg"
import team2 from "../assets/team/2.jpg"
import team3 from "../assets/team/3.jpg"
import { SiFacebook } from "react-icons/si";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { TfiTwitterAlt } from "react-icons/tfi";


export const ourTeam = [
    {
        id:"ijr7_iureka",
        name:"Robert Clark",
        image:`${team1}`,
        position:"Co-founder",
        description:"The co-founder of the organization that owns the organization that owns the organization that owns the organization.",
        socialMedia:[
            {
                Icon:SiFacebook,
                link:"http://facebook.com/najatul6/",
            },
            {
                Icon:BiLogoInstagramAlt,
                link:"http://instagram.com/najatul6/",
            },
            
            {
                Icon:TfiTwitterAlt,
                link:"http://twitter.com/najatul6/",
            },
            
        ]

    },
    {
        id:"ijr7_iureka",
        name:"John Doe",
        image:`${team2}`,
        position:"CFO",
        description:"The Chief Financial Officer of the organization that owns the organization that owns the organization.",
        socialMedia:[
            {
                Icon:SiFacebook,
                link:"http://facebook.com/johndoe6/",
            },
            {
                Icon:BiLogoInstagramAlt,
                link:"http://instagram.com/johndoe6/",
            },
            
            {
                Icon:TfiTwitterAlt,
                link:"http://twitter.com/johndoe6/",
            },
            
        ]
    },
    {
        id:"ijr7_iureka",
        name:"Jane Smith",
        image:`${team3}`,
        position:"CTO",
        description:"The Chief Technology Officer of the organization that owns the organization that owns the organization.",
        socialMedia:[
            {
                Icon:SiFacebook,
                link:"http://facebook.com/janesmith6/",
            },
            {
                Icon:BiLogoInstagramAlt,
                link:"http://instagram.com/janesmith6/",
            },
            
            {
                Icon:TfiTwitterAlt,
                link:"http://twitter.com/janesmith6/",
            },
            
        ]
    }

]