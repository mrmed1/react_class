import {login} from "../../services/tasks2.service";
import {useState} from "react";
import './Login.css'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
         /* const token =  await login({email, password});
          localStorage.setItem('token',token)*/
            window.location='/'
        } catch (e) {
            console.log(e)
        }

    }
    return (

        <div className="login">
            <h1>Login</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                           className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                           className="form-control" id="password" placeholder="Password"/>
                </div>
                <button  onClick={handleSubmit} className="btn btn-primary">Submit</button>
            </form>
        </div>

    )
}

export default Login








