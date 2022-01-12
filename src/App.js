import React, {useState} from 'react';
import './App.css';

function App() {
  let [title, changeTitle] = useState(['javascript', 'node', 'mongodb'])
  let [modal, changeModal] = useState(true)
  let [inputTitle, changeInputTitle] = useState(0)
  let [like, changeLike] = useState(0)
  let [inputValue, changeInputValue] = useState('')
  function changetGetTitle(){
    let newArray = [...title]
    newArray[0] = 'react'
    changeTitle(newArray)
  }
  return (
    <div className="App">
      <button onClick={changetGetTitle}>change title</button>
      {
        title.map((rstTitle, i) => {
          return(
            <div key={i}>
              <h1 onClick={() => {changeInputTitle(i)}}>{rstTitle}</h1>
              <div onClick={() => {changeLike(like+1)}}>👍</div>{like}
              <h2>2022-01-12</h2>
            </div>
          )
        })
      }
      <div className='publish'>
        <input onChange={(e) => {changeInputValue(e.target.value)}}/>
        <button onClick={() => {
              let newArray = [...title]
              newArray.push(inputValue)
              changeTitle(newArray)
        }}>저장</button>
      </div>
      {
        modal === true?
        <Modal title={title} inputTitle={inputTitle}></Modal>:null
      }
    </div>
  );
}

function Modal(props){
  return(
    <div>
      <h3>{props.title[props.inputTitle]}</h3>
      <h4>2022-01-11</h4>
    </div>
  )
}

export default App;
