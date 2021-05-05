import React, { useState } from 'react';
import App from '../App';

const Form = (props) =>{
        const [firstName, setFirstName] = useState("")
        const [lastName, setLastName] = useState("")
        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")
        const [confirmPassword, setConfirmPassword] = useState("")
    
        
    return(
        <form>
            <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" onChange={(e)=>setFirstName(e.target.value)}></input>
            {firstName.length < 2 && firstName.length > 0? <p>First name must be at least 2 characters </p>: null}
            </div>
            <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" onChange={(e)=>setLastName(e.target.value)}></input>
            {lastName.length < 2 && lastName.lenggth > 0? <p>Last name must be at least 2 characters </p>: null}
            </div>
            <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" onChange={(e)=>setEmail(e.target.value)}></input>
            {email.length < 5 && email.length > 0?<p>Email must be at least 5 characters </p>: null}
            </div>
            <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)}></input>
            {password.length < 8 && password.length > 0 ?<p>Password must be at least 8 characters </p>: null}
            </div>
            <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" name="confirmPassword" onChange={(e)=>setConfirmPassword(e.target.value)}></input>
            {confirmPassword != password ?<p>Password must match </p>: null }
            </div>
            <br></br>
            <h2>Results</h2>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </form>
    );
};
export default Form;