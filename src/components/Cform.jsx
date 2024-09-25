import React, { useState } from "react";
import Dabba from "../StyledComps/Dabba";

const Cform = ()=>{
    const [name,setname]= useState("")

    return(
        <Dabba>
            <form>
                Name:<input
                type="text"
                placeholder="Enter name"
                onChange={(e)=>setname(e.target.value)}/>
                <p>Name:{name}</p>
            </form>
        </Dabba>
    )
}

export default Cform