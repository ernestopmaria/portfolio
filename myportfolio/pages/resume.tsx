import Bar from "../components/Bar"
import { languages, tools } from "../data"

const resume =()=>{

    return <div className='px-6 py-2'>

        <div className="grid gap-6 md:grid-cols-2">
            <div>
            <h5  className="my-3 text-2xl font-bold">Education</h5>  
            <div>
                <h5  className="my-2 text-xl font-bold">
                   Computer Science Engeneering
                </h5>
                <p  className="font-semibold">Academy of Technology (2011- 2014)</p>
                <p  className="my-3">I am Graduate in Computer Science Engeneering from Gregorio 
                    Semedo University in Angola. I have 2+ years of experience
                     in web Development</p>
            </div>
            </div>
            <div>
            <h5  className="my-3 text-2xl font-bold">Experience</h5>  
            <div>
                <h5  className="my-2 text-xl font-bold">
                   Web Developer Jr. and Software tester
                </h5>
                <p  className="font-semibold">TCS(2019 -on)</p>
                <p  className="my-3">I am open to works proposes</p>
            </div>
            </div>
                  
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
    <div>
        <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
        <div className="my-2">
            {languages.map(
                language=><Bar data={language} key={language.name}/>
            )}
        </div>
    </div>
    <div>
        <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
        <div className="my-2">
            {tools.map(
                tool=><Bar data={tool} key={tool.name}/>
            )}
        </div>
    </div>

        </div>
    </div>
   }
   
   export default resume
   