import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPassError] = useState("password is not valid");
    function onSubmit(e) {
        e.preventDefault();
        setEmailError("");
        setPassError("");

        if ("" === email) {
            setEmailError("please enter your email");
            return
        }
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setEmailError("please enter valid email");
            return
        }
        if ("" === password) {
            setPassError("please enter a password");
            return
        }
        if (password.length < 7) {
            setPassError("password must be 8 characters or longer");
            return
        }
    }
    return (
        <div className='user_login text-start'>
            <h1>Login Page</h1>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <p>{emailError}</p>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
                    <p>{passwordError}</p>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login
