import { useState } from "react";
import AuthUser from "../components/AuthUser";

export default function Login() {

    const {http} = AuthUser();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const submitForm = () => {
        http.post('/login',{email:email, password:password}).then((res)=>{
            console.log(res.data);
        })
    }
    /*
    const onSubmit = (ev) => {
        ev.preventDefault()
123
    }
    */
    return (
        <div>
            <label>Email</label><br></br>
            <input type="email" name="email" onChange={e=>setEmail(e.target.value)}/><br></br>
            <label>Password</label><br></br>
            <input type="password" name="password" onChange={e=>setPassword(e.target.value)}/><br></br>
            <div className="button-div">
                <button type="button" onClick={submitForm} >Login</button>
            </div>
        </div>
    )
}