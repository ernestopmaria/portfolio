import { GetServerSidePropsContext } from "next"
import {services} from "../data"



const index =(props)=>{
  console.log(services)
 
  return (    
    <div>  
    </div>

  )
}

export default index

export const getServerSideProps = async(context:GetServerSidePropsContext)=>{
 
 const res = await fetch("http://localhost:3000/api/services")
 const data = await res.json()
 console.log('Server ', services)
  return {
    props:{
      services:data.services
    }
  }

}