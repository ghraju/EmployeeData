import'../styles/login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    let [text, setText] = useState('')
    let [password, setPassword] = useState('')
    let navigate = useNavigate()

    let handleSubmit = () =>{
         if(text === "ghr@gmail.com" && password === "ghr@1234"){
             navigate('/admin')
         }else{
             alert('invalid Credentials')
         }
 
    }
    return (
        <div className="login" style={{ textAlign:"center",margin:"auto" }} >
            <div className="form1 pt-3 form-control bg-dark p-2 text-light bg-opacity-50   ">
                <h1>Login Page</h1>
                <div className="login_form  ">
                    <form action="">
                        <div className="username">
                       
                         <label htmlFor="" className="m-2">UserName</label>
                         <input type="text" value={text} onChange={(e) =>setText (e.target.value)} placeholder="username" name="text" />  
                        </div>
                        <div className="password">
                        
                            <label htmlFor="" className="m-2">Password</label>
                            <input style={{marginLeft:"5px"}} type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" name="password" />
                        </div>
                        <div className="login_button pt-2">
                            <button onClick={handleSubmit} className="btn btn-danger ">Login</button>
                        </div>
                        
                    </form>

                </div>
            </div>
        </div>
    );
}

export default Login;