import {RiComputerLine} from 'react-icons/ri'
import {FaServer,FaConnectdevelop} from 'react-icons/fa'
import {AiOutlineApi} from 'react-icons/ai'
import { IService, ISkill } from './type'
import {BsCircleFill} from 'react-icons/bs'



export const services:IService[] =[
    {
        Icon: RiComputerLine,
        title:'Frontend Development',
        about: 'I can build a beautiful and scalable SPA using <b>HTML</b>,<b>CSS</b> and <b>React.js</b>',
        
    },
    {
        Icon: FaServer,
        title:"Backend Development",
        about: 'handle database, server , api using <b>Express </b> & other popular frameworks',
      
    },
    {
        Icon: AiOutlineApi,
        title:"API Development",
        about: 'I can develop robust REST API using<b> Node API </b> ',
        
    },
    {
        Icon: FaConnectdevelop,
        title:"DevOps Tools",
        about: 'I am studing about DevOps and Virtualizations tools <b>Azure , Docker </b> ',
        
    },
    {
        Icon: RiComputerLine,
        title:"Whatever",
        about: 'I can develop robust REST API using<b> Node API </b> ',
        
    }
]


export const languages:ISkill[]=[
    {
        name: 'Javascript',
        level:'70%',
        Icon:BsCircleFill
    },
    {
        name: 'React Native',
        level:'50%',
        Icon:BsCircleFill
    },
    {
        name: 'React Js',
        level:'65%',
        Icon:BsCircleFill
    },
    {
        name: 'NodeJs',
        level:'80%',
        Icon:BsCircleFill
    },
    {
        name: 'Express',
        level:'70%',
        Icon:BsCircleFill
    },
    {
        name: 'Postgres',
        level:'60%',
        Icon:BsCircleFill
    },
    {
        name: 'Typescript',
        level:'80%',
        Icon:BsCircleFill
    },
    {
        name: 'TypeOrm',
        level:'60%',
        Icon:BsCircleFill
    },
    {
        name: 'HTML',
        level:'80%',
        Icon:BsCircleFill
    },
    {
        name: 'CSS',
        level:'60%',
        Icon:BsCircleFill
    },
]

export const tools:ISkill[]=[
    {
        name: 'VSCode',
        level:'100%',
        Icon:BsCircleFill
    },
    {
        name: 'Expo',
        level:'70%',
        Icon:BsCircleFill
    },
    {
        name: 'Insomnia',
        level:'100%',
        Icon:BsCircleFill
    },
    {
        name: 'Swagger',
        level:'20%',
        Icon:BsCircleFill
    },
    {
        name: 'AWS',
        level:'20%',
        Icon:BsCircleFill
    },  
]