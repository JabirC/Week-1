import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const[user , setUser] = useState('');
  const[arr, setArr] = useState('');
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  function uploadFile(e){
    const data = new FormData() ;
    data.append('file', file);
    console.log(file);
    // axios.post("${apiUrl}/uploadFileAPI", data)
    //     .then(res => { // then print response status
    //       console.log(res.statusText)
    //     })
  }

  const getAssociations = () => {
    const ret = fetch('http://localhost:9000/express_backend')
      .then(result => result.json())
      .then((user) => {
        setArr(user.express)
      })
  };

  if(user === 'emp'){
    return (
      <>
        <div>
            <button className='homeRedirect' onClick={() => setUser('')}>Back</button>
        </div>
        <div className='emp'>
          <div className='empTitle'>
              Upload your resume
          </div>
          <div className='space'></div>
          <div className='formSubmitter'>        
              <input className = "uploadButton1" type="file" onInput={saveFile}></input>
              <button className = "uploadButton2" onClick={uploadFile}>Upload</button>
          </div>
        </div>
        <div>{arr}</div>
      </>
    );
  }
  else if(user === 'employer'){
    return (
      <div className="employer">
          Hello Employer!
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
