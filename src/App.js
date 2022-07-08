import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { validateIndexedDBOpenable } from '@firebase/util';

function App() {
  const[user , setUser] = useState('');
  const[arr, setArr] = useState('');
  const[arr1, setArr1] = useState('');
  const[vis, setVis] = useState('vis');
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState('');


const saveFile = (e) => {
  setFile(e.target.files[0]);
  setFileName(e.target.files[0].name);
};

function back(){
  setUser('');
  setArr('');
  setArr1('');
  setVis('vis');
}

function sleep(ms) {
  setArr('');
  setArr1('');
return new Promise(resolve => setTimeout(resolve, ms));}

async function uploadFile(e){
  if(fileName){
    setVis("loader-wrapper");
    await sleep(2500);
    const data = new FormData() ;
    data.append('file', file);
    // console.log(...data);
    axios.post('http://localhost:9000/file_upload', data)
      .then(res => { // then print response status
        setVis('vis');
        setArr1("Resume submitted");
        setArr('');
      })
      .catch(() => {
        setVis('vis');
        setArr("File type not supported, submit valid file type");
        setArr1('');
      })
    }
  }

const getAssociations = () => {
  const ret = fetch('http://localhost:9000/express_backend')
    .then(result => result.json())
    .then((user) => {
      setArr(user.express)
    })
};

function validate(){
  const uname = document.getElementById('uname').value;
  const pass = document.getElementById('pass').value;

  if(uname === 'admin' && pass === 'admin'){
    setUser('search');
  }
}

  if(user === 'emp'){
    return (
      <>     
        <div>
            <button className='homeRedirect' onClick={() => back()}>Back</button>
        </div>
        <div className='emp'>
          <div className='empTitle'>
              Upload your resume
          </div>
          <div className='space'></div>
          <div className='formSubmitter'>        
              <input className = "custom-file-input" type="file" onInput={saveFile}></input>
              <button className = "uploadButton2" onClick={uploadFile}>Upload</button>
          </div>
          <div className={vis}>
            <div className="loader"></div>
          </div>
          <div className='results'>
            <div className='space_emp'></div>
            <div className='empTitle'>{arr}</div>
         </div>
         <div className='results1'>
           <div className='empTitle'>{arr1}</div>
         </div>
        </div>
      </>
    );
  }
  else if(user === 'employer'){
    return (
    <div>
    <div>
      <button className='homeRedirect' onClick={() => back()}>Back</button>
    </div>
    <div className="login">
          <div className='inputs'>
            <div className='loginText'>
              Login
            </div>
            <div>
              <input className="input-container" placeholder="  Enter username" type="text" id="uname" required />
            </div>
            <div className='space'></div>
            <div>
              <input className="input-container" placeholder="  Enter password" type="password" id="pass" required />
            </div>
            <div className='space'></div>
            <div className="button-container">
              <button className='loginButton' onClick={() => validate()}>Submit</button>
            </div>
          </div>
    </div>
    </div>
    );
  }
  else if(user === 'search'){
    return(
    <div>
      <div class="wrap">
        <div class="search">
            <input type="text" class="searchTerm" placeholder="What are you looking for?"/>
            <button type="submit" class="searchButton">
              <i class="fa fa-search"></i>
          </button>
        </div>
      </div>
    </div>
    );
  }
  else{
    return (
      <>
      <div className="title">
        <h1> Welcome! </h1>
      </div>
      <div className='homeOptions'>
        <div className ='buttonContainer'>
          <button className = 'homeButton1' onClick={() => setUser('emp')}>
            <div className='buttonText'>
              Seeking Employment
            </div>
          </button>
          <div className = 'space'></div>
          <button className = 'homeButton2' onClick={() => setUser('employer')}>
            <div className='buttonText'>
              Employer
            </div>
          </button>
        </div>
      </div>
      </>
    )
  }

}

export default App;
