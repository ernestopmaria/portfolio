import {RiComputerLine} from 'react-icons/ri'
import {FaServer} from 'react-icons/fa'
import {AiOutlineApi} from 'react-icons/ai'
import { IService } from './type'



export const services:IService[] =[
    {
        Icon: RiComputerLine,
        title:'Frontend Development',
        about: 'I can build a beautiful and scalable SPA using <b>HTML</b>,<b>CSS</b> and <b>React.js</b>',
        
    },
    {
        Icon: FaServer,
        title:"Backend Development",
        about: 'handle database, server , api using<b>Express </b> & other popular frameworks',
      
    },
    {
        Icon: AiOutlineApi,
        title:"API Development",
        about: 'I can develop robust REST API using<b>Node API </b> ',
        
    },
    {
        Icon: AiOutlineApi,
        title:"Whatever",
        about: 'I can develop robust REST API using<b>Node API </b> ',
        
    }
]
