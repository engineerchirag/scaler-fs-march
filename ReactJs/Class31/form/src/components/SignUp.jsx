import { useState } from "react";

const Signup = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        username: '',
        password: ''
    });

    const handleFormField = (fieldName) => (e) => {
        setForm({
            ...form,
            [fieldName]: e.target.value
        })
    }
    
    // const handleFormField = function (fieldName) {
    //     console.log(fieldName);
    //     return function(e) {
    //         console.log(fieldName, e.target.value);
    //         setForm({
    //             ...form,
    //             [fieldName]: e.target.value
    //         })
    //     }
    // }

    const handleRegistration = () => {
        console.log(form);
    }

    return (
        <>
            <h1>Sign Up</h1>
            <div>
                <div className="field">
                    <label>Name</label>
                    <input placeholder="Enter name" onChange={handleFormField('name')} />
                    {form.name}
                </div>
                <div className="field">
                    <label>Email</label>
                    <input placeholder="Enter email" onChange={handleFormField('email')}/>
                    {form.email}
                </div>
                <div className="field">
                    <label>Username</label>
                    <input placeholder="Enter username" onChange={handleFormField('username')}/>
                </div>
                <div className="field">
                    <label>Password</label>
                    <input placeholder="Enter password" onChange={handleFormField('password')} />
                </div>
                <div className="field btn-field">
                    <button onClick={handleRegistration}>Register</button>
                </div>
            </div>
        </>
    )   
}

// const Signup = () => {
//     const [form, setForm] = useState({
//         name: '',
//         email: '',
//         username: '',
//         password: ''
//     });

//     const handleFormField = (e) => {
//         setForm({
//             ...form,
//             [e.target.id]: e.target.value
//         })
//     }   

//     const handleRegistration = () => {
//         console.log(form);
//     }

//     return (
//         <>
//             <h1>Sign Up</h1>
//             <div>
//                 <div className="field">
//                     <label>Name</label>
//                     <input placeholder="Enter name" id="name" onChange={handleFormField} />
//                 </div>
//                 <div className="field">
//                     <label>Email</label>
//                     <input placeholder="Enter email" id="email" onChange={handleFormField}/>
//                 </div>
//                 <div className="field">
//                     <label>Username</label>
//                     <input placeholder="Enter username" id="username" onChange={handleFormField}/>
//                 </div>
//                 <div className="field">
//                     <label>Password</label>
//                     <input placeholder="Enter password" id="password" onChange={handleFormField} />
//                 </div>
//                 <div className="field btn-field">
//                     <button onClick={handleRegistration}>Register</button>
//                 </div>
//             </div>
//         </>
//     )   
// }

export default Signup;