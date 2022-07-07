import React, { useState, useEffect } from 'react';

function App() {
  const[user , setUser] = useState('');
  
  if(user == 'emp'){
    return (
      <>
        <div className='emp'>
          <div className='empTitle'>
              Upload Your Resume
          </div>
          <div className='space'></div>
          <div className='formSubmitter'>        
            <form action="uploadfiles.php" method="post">
              <input type="file" id="myFile" name="filename"></input>
              <input type="submit"></input>
          </form>
          </div>
        </div>
      </>
    );
  }
  else if(user == 'employer'){
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
