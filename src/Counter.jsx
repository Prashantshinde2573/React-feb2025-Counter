import { useState } from 'react';


function Counter(){
  let [count, setCount] = useState(0);
  let [row, setRow] = useState([]);

  function Addvalue(){
    if(count<20)
    {
   let newcount=count+1;
    setCount(newcount)
    setRow([...row,`${count}+1 = ${newcount}`]);

    }
    else{
      alert("Count value is 20+");
    }
    

  }

  function Removevalue(){
    if(count>0)
    {
    let newcount=count-1;
    setCount(newcount);
    setRow([...row,`${count}-1 = ${newcount}`]);
    }
    else{
      alert("Count value is less than 0");
    }

  }
  function Reset(){
    setCount(count=0);
    setRow([]);
  }


  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
    <div>
      <h2>Counter value is {count}</h2>
      <button onClick={Addvalue}>Addvalue</button>
      <button onClick={Removevalue}>Remove Value</button>
      <button onClick={Reset}>Reset</button>
    </div>

    {row.length>0 && (
      <table>
      <tbody>
        {row.map((num,index) => (
          <tr key={index}>
            <td>{num}</td>
          </tr>
        ))}
      </tbody>

    </table>
    )}
    </div>



    )}
    export default Counter