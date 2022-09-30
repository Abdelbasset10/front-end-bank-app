import star from '../assets/Star.svg'
import sheild from '../assets/Shield.svg'
import send from '../assets/Send.svg'
import pepole1 from '../assets/people01.png'
import pepole2 from '../assets/people02.png'
import pepole3 from '../assets/people03.png'
import airbnb from '../assets/airbnb.png'
import binance from '../assets/binance.png'
import coinbase from '../assets/coinbase.png'
import dropbox from '../assets/dropbox.png'

export const navList = [
    {
        id:1,
        link:"Home",
        goTo:'#hero'
    },
    {
        id:2,
        link:"About Us",
        goTo:"#buis"
    },
    {
        id:3,
        link:"Features",
        goTo:"#bill"
    },
    {
        id:4,
        link:"Solutions",
        goTo:"#cardPaypal"
    }
]

export const hero = [
    {
        id:1,
        number:"3800+",
        act:"User Active"
    },
    {  
        id:2,
        number:"230+",
        act:"TRUSTED BY COMPANY"
    },
    {
        id:3,
        number:"$230M+",
        act:"TRANSACTION"

    }
]

export const buiseness = [
    {
        id:1,
        img:star,
        title:"Rewards",
        text:"The best credit cards offer some tantalizing combinations of promotions and prizes"
    },
    {
        id:2,
        img:sheild,
        title:"100% Secured",
        text:"We take proactive steps make sure your information and transactions are secure.",
    },
    {
        id:3,
        img:send,
        title:"Balance Transfer",
        text:"A balance transfer credit card can save you a lot of money in interest charges."
    }
]

export const testimonials = [
    {
        id:1,
        text:"Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
        img:pepole1,
        name:"Herman Jensen",
        grad:"Founder & Leader"
    },
    {
        id:2,
        text:"Money makes your life easier. If you're lucky to have it, you're lucky.",
        img:pepole2,
        name:"Steve Mark",
        grad:"Founder & Leader"
    },
    {
        id:3,
        text:"It is usually people in the money business, finance, and international trade that are really rich.",
        img:pepole3,
        name:"Kenn Gallagher",
        grad:"Founder & Leader"
    }
    
]

export const sponsors = [
    {
        id:1,
        img:airbnb
    },
    {
        id:2,
        img:binance
    },
    {
        id:1,
        img:coinbase
    },{
        id:1,
        img:dropbox
    }

]