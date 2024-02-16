import React from "react";
import { Link } from 'react-router-dom';

export default function FormSignup(){
    return(
        <div className="section register">
            <div className="col signup">
                <h2>Register</h2>
                <span>register and enjoy refresh</span>
                <form id="form" className="flex">
                    <input className="input" type="email" placeholder="email" />
                    <input className="input" type="text" placeholder="username" />
                    <input className="input" type="password" placeholder="password" />
                    <input className="input" type="password" placeholder="confirm password" />

                    <button className="btn">Sign Up</button>
                    <p>Already have an account? <Link to="../login">Login here</Link></p>
                </form>
            </div>
            <div className="col img">
                
            </div>
        </div>
   )
}