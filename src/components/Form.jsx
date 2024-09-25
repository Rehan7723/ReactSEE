import React, { useRef } from "react";
import Dabba from "../StyledComps/Dabba";

function Form(){
    const text=useRef(null)
    const check= useRef(null)
    function output()
    {
        alert(`name: ${text.current.value}`)
        alert(`Check: ${check.current.value} `)
    }
    return(
        <div>
            <Dabba>
                <form onSubmit={output}>
                    <input type="text" placeholder="Enter name" ref={text} /><br/>
                    Select:<br/>
                    Checkbox <input type="checkbox" value="Checked" ref={check}/>
                    <input type="submit" value="submit"/>

                </form>
            </Dabba>
        </div>
    )
}

export default Form