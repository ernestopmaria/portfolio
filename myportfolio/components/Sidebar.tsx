import {AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {GiTie} from 'react-icons/gi'

const Sidebar =()=>{
    return (
        <div>
            <img src="https://avatars.githubusercontent.com/u/58423237?v=4" 
            alt="user avatar" 
            className="w-32 h-32 rounded-full mx-auto"
            />
            <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan" ><span className="text-purple-800">Ernesto</span> Maria</h3>
            <p className= "px-2 py-1 my-3 bg-gray-300 rounded-full">Web Developer</p>
            <a className= "px-2 py-1 my-3 bg-gray-300 rounded-full flex items-center justify-center" 
            href="" download="name" >
            <GiTie className="w-6 h-6"/>Download Resume
            </a>
            <div className="flex justify-around my-5 text-purple-700 w-9/12 md:w-full mx-auto">
                <a href=""><AiFillLinkedin className="w-8 h-8 cursor-pointer"/></a>
                <a href=""><AiFillGithub className="w-8 h-8 cursor-pointer"/></a>
                </div> 
            <div className="py-4 my-5 bg-gray-300" style={{marginLeft:'0rem', marginRight:'0rem'}}>
            <div  className="flex items-center justify-center space-x-2 " >
                <GoLocation/>
                <span>Luanda , Angola</span>
                </div>  
                <p className="my-2">ernestomaria93@gmail.com</p>  
                <p className="my-2">(+244) 939 620 501</p>                
                </div>
            
                <button className="bg-gradient-to-r from-purple to-purple-800 w-8/12 rounded-full py-2 px-5 text-white my-2 focus:outline-none" onClick={()=>window.open('mailto:ernestomaria93@gmail.com')}>Email Me</button>
                <button className="bg-gradient-to-r from-purple to-purple-800 w-8/12 rounded-full py-2 px-5 text-white my-2">Toggle Theme</button>
            

        </div>
    )
}

export default Sidebar