import React, { useState } from 'react'

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [all, setAll] = useState("")
    function onSubmit(e) {
        e.preventDefault();
        const allData = [{
            name:name,
            email:email,
            password:password
        }]
        setAll([...all,allData])
        
            console.log(allData);
        }
 
    return (
        <div className='signup text-start'>
            <h2>SignUp Page</h2>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Enter Your Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div className="row">
                    <div className="mb-3 col">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" value={password} onChange={(e) =>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col">
                        <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit"  className="btn btn-primary">Sign up</button>
            </form>
        </div>
    )
}

export default SignUp
