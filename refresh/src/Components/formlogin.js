import React from "react";
import { Link } from 'react-router-dom';

export default function FormLogin(){
    return(
        <div className="section register">
            <div className="col signup">
                <div className="sign">Sign Up</div>
                <span>register and enjoy refresh</span>
                <form id="form" className="flex">
                    <input className="input" type="text" placeholder="username" />
                    <input className="input" type="password" placeholder="password" />
                    <button className="btn">Login</button>
                    <p>Don't have an account? <Link to="../register">Register here</Link></p>
                </form>
            </div>
            <div className="col img">
                
            </div>
        </div>
   )
}