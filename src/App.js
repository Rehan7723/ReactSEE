import React from 'react';
import './App.css';
import Cform from './components/Cform';
import Styles from './extra.modules.css';


function App() {
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
  return (
    <div className="App">
      <header className="App-header">
        <div className={Styles.box}>
          {/* <table className={Styles.table}>
            <tr>
              <th>Name</th>
              <th>class</th>
              <th>usn</th>
              <th>id</th>
            </tr>
            {
              obj.map((val)=>(
                <tr key={val.id}>
                  <td>{val.name}</td>
                  <td>{val.class}</td>
                  <td>{val.usn}</td>
                  <td>{val.id}</td>
                </tr>
              ))
            }
          </table>
          <Dabba>
          <Clss/>
          </Dabba>
          
          <Nested/> */}
          <Cform/>
        </div>
      </header>
    </div>
  );
}

export default App;
