import React,{useState} from 'react';
import './Login.css';


const submit = (creds)=>{
  console.log('this is submitted creds' + creds)
}

function Login() {
  const [creds,setCreds] = useState({'username':'','password':''})

  return (
    <div className="login">
      <div id='form' >
        <div className='inputDiv' >
          <label className = 'label'>Username</label> <br/>
          <input type="email" id="username" name="username" placeholder="Username / Email...." onChange={(event)=>{setCreds({...creds,username : event.target.value})}} />

          <label className = 'label'>Password</label> <br/>
          <input type="password" id="password" name="username"  onChange={(event)=>{setCreds({...creds,password : event.target.value})}} />

          <div id='loginBtn' onClick={()=>{submit(creds)}}>Login</div>
        </div>
      </div>
    </div>
  );
}

export default Login;
