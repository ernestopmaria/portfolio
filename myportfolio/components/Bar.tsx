import { FunctionComponent } from "react";
import { ISkill } from "../type";

const Bar:FunctionComponent<{data:ISkill}>=({data:{Icon,level,name}})=>{
    return(
            <div>
                {level}
               {name}
            </div>
    )
}

export default Bar