import React from "react";

export default function Nested(){
    const obj=[
        {
          name:"Rehan",
          class: 'abc',
          usn: '123a',
          id:1
        },
        {
          name:"Rehan",
          class: 'abc',
          usn: '123a',
          id:2
        },
        {
          name:"Rehan",
          class: 'abc',
          usn: '123a',
          id:3
        }
      ]
    return(
        <div>
            <h1>Nested list</h1>
            <ol>
                {
                    obj.map((val)=>(
                        <li>{val.id}
                        
                        
                            <ul>
                                <li>{val.name}</li>
                                <li>{val.usn}</li>
                                <li>{val.class}</li>
                            </ul>
                        
                        </li>
                    ))
                }
            </ol>
        </div>
    )
}