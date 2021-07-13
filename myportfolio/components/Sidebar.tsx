import {AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {GiTie} from 'react-icons/gi'

const Sidebar =()=>{
    return (
        <div>
            <img src="https://avatars.githubusercontent.com/u/58423237?v=4" 
            alt="user avatar" />
            <h3><span>Ernesto</span>Maria</h3>
            <p>Web Developer</p>
            <p><GiTie className="w-6 h-6"/>Download Resume</p>
            <div>
                <a href=""><AiFillLinkedin className="w-8 h-8"/></a>
                <a href=""><AiFillGithub className="w-8 h-8"/></a>
            <div>
                <GoLocation />
                <span>Luanda , Angola</span>
            </div>          
                <p>ernestomaria93@gmail.com</p>  
                <p>(+244) 939 620 501</p>                
            </div>
            <div>
                <button>Email me</button>
                <button>Toggle Theme</button>
            </div>

        </div>
    )
}

export default Sidebar