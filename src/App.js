import { useState } from 'react';
import './App.css';


function App() {

  const [detail, setDetail] = useState(['react를 배워봅시다.','Test'])

  const [write, setWrite] = useState('')
  

  const writeHandler = (e) => {
    setWrite(e.target.value)
  }
  console.log(write)

  return (
    <>
    <div className="app">

      {/* input */}
      <div className='addBox'>
        <input
        type="text"
        onChange={writeHandler}/>
      {/* button  */}
        <button type='submit' onClick={()=>{
          let copy = [...detail]
          copy.unshift(write)
          setDetail(copy)
        }}>추가하기</button>
      </div>

      {/* title */}
      <h1>Todo List</h1>
      </div>
      <div className='rowbox'>
      {/* List */}
      {
      detail.map(function(a,i){
        return(
          
        <div className='listBox' key={i}>
        <p>{detail[i]}</p>
        </div>
       
      )
      })
      
      }
       </div>
    </>
  );
}

export default App;
