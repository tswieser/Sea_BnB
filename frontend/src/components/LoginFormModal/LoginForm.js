import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './LoginForm.css';

function LoginForm() {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password })).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            }
        );
    };

    const handleDemo = (e) => {
        e.preventDefault();
        const demoUser = {
            credential: "demo",
            password: "password"
        }
        return dispatch(sessionActions.login(demoUser))
    }

    return (
        <div className="login_form_container">
            <div className="signin_error_container">
                <ul>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>
            </div>
            <form onSubmit={handleSubmit}>

                <div className="form_contents">
                    <h2 className="form_title">Log In</h2>
                    <label className="form_label" >
                        Username or Email
                    </label>
                    <input
                        className='form_input'
                        type="text"
                        value={credential}
                        onChange={(e) => setCredential(e.target.value)}
                        required
                    />

                    <label className="form_label">
                        Password
                    </label>
                    <input
                        className='form_input'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button className="form_btn" stype="submit">Log In</button>
                </div>
            </form>
            <form onSubmit={handleDemo}>
                <button className="form_btn" stype="submit">Demo User</button>
            </form>
        </div>
    );
}

export default LoginForm;
