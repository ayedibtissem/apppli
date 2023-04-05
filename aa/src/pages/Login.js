import toast, { Toaster } from 'react-hot-toast';

import { useState } from "react"
import UserService from "../services/UserSevices";
import { Link, useNavigate } from "react-router-dom";

const Login=()=>{
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const [errors,setErrors]=useState({
   
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        position:''
    })
    
    const formValidation=()=>{
        let status=true;
        let localErrors={...errors}
        
        if (email ==""){
          localErrors.email='email required' ;
            status=false;
        }
        
        if (password ==""|| password.length<8){
                    localErrors.password='password required and min 8 caracters' ;
                    status=false;
                 } 
    
                  setErrors(localErrors)
    console.log(localErrors)
    return status;
    }
    
    const navigate = useNavigate();
    
    const signin=async(e)=>{
        e.preventDefault();
        console.log("form sumbited")
        if(formValidation()){
            const data={
                email:email,
                password:password,
            }
            try {
                const response= await UserService.signin(data)  
                console.log("response===>",response)
               localStorage.setItem('user_data',JSON.stringify(response.data.user ))
              localStorage.setItem('token',response.data.token)
                
                
                
                
                
                
                toast.success('  user login ...')



                setEmail('')
                setPassword('')
              
               navigate('/quizzes'); 
            } catch (err) {
                console.log  (err)
                toast.error(err.response.data.message);
           
            }
        } else {
            console.log("form invalid")
        }
    } 

    return (
        <div className="login">
            <Toaster/>
            <div className="login-cover"></div>
            <div className="login-content">
                <div>
                    <h1>Dark Space</h1>
                    <p>Cyber Security Awarness quiz Application</p>
                </div>

                <div>
                    <form onSubmit={signin}>
                        <div className="form-group">
                            <label>Email</label>
                            <input className="input" type='mail' value={email} onChange={ 
                                (e)=>setEmail(e.target.value)}
                            />
                            {errors.email !=="" ? <div style={{textAlign:'center',color:'blue'}}>
                                {errors.email}
                            </div> : ''}
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input  className="input" type='password' value={password} onChange={ 
                                (e)=>setPassword(e.target.value)}
                            />
                            {errors.password !=="" ? <div style={{textAlign:'center',color:'blue'}}>
                                {errors.password}
                               
                            </div> : ''}
                        </div>

                        <button className="btn signin" type="submit">Sign in</button>
                      
                        <button className="btn ">< Link to="/register" >Don't have an account</Link></button>
                    </form>
                </div>
            </div>
        </div>



    )
}

export default Login
