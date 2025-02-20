import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



// function App() {
//   let [count, setCount] = useState(0);
//   let [history, setHistory] = useState([]);

//   function Addvalue() {
//     if (count < 20) {
//       let newValue = count + 1;
//       setCount(newValue);
//       setHistory([...history, `${count} + 1 = ${newValue}`]);
//     } else {
//       alert("Count value is 20+");
//     }
//   }

//   function Removevalue() {
//     if (count > 0) {
//       let newValue = count - 1;
//       setCount(newValue);
//       setHistory([...history, `${count} - 1 = ${newValue}`]);
//     } else {
//       alert("Count value is less than 0");
//     }
//   }

//   function Reset() {
//     setCount(0);
//     setHistory([]);
//   }

//   return (
//     <div>
//       <h2>Counter value is {count}</h2>
//       <button onClick={Addvalue}>Add Value</button>
//       <button onClick={Removevalue}>Remove Value</button>
//       <button onClick={Reset}>Reset</button>

//       {history.length > 0 && (
//         <table>
//           <tbody>
//             {history.map((entry, index) => (
//               <tr key={index}>
//                 <td>{entry}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }

// export default App;



function App() {
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

export default App
