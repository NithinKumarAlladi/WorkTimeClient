import React,{useState} from 'react';
import './Login.css';


const submit = ()=>{

}

function Login() {
  const [creds,setCreds] = useState({'username':'','password':''})

  return (
    <div className="login">
      {/* <form onSubmit={submit} >
        <label>
          UserName : 
          <input type='text' value = {creds.username} onChange={(event)=>{
            setCreds({...creds, 'username' : event.target.value })
            
          }} />
        </label>
      </form> */}
      <div id='form' >
        <label className = 'label'>Username</label> <br/>
        <input type="text" id="fname" name="username" placeholder="Username / Email...." />

      </div>
    </div>
  );
}

export default Login;
