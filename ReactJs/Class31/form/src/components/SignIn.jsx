import { useState } from "react";

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameInput = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordInput = (e) => {
        setPassword(e.target.value);
    }

    const handleSignIn = () => {
        console.log({
            username,
            password
        });
    }

    return (
        <>
            <h1>Sign In</h1>
            <div>
                <div className="field">
                    <label>Username</label>
                    <input placeholder="Enter username" onChange={handleUsernameInput}/>
                </div>
                <div className="field">
                    <label>Password</label>
                    <input placeholder="Enter password" onChange={handlePasswordInput} />
                </div>
                <div className="field btn-field">
                    <button onClick={handleSignIn}>Login</button>
                </div>
            </div>
        </>
    )   
}

export default SignIn;