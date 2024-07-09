import { useRef, useState } from "react";

const AddMovie = () => {
    const inputRef = useRef('');
    const errorRef = useRef('');

    console.log('Rerendered');

    const handleAdd = () => {
        console.log(inputRef.current.value);
        if (inputRef.current.value.length < 3) {
            inputRef.current.style.border = '2px solid red';
            errorRef.current.innerText = "Min 3 characters are required!"
            errorRef.current.style.color = "red";
        } else {
            inputRef.current.style.border = '2px solid green';
            errorRef.current.innerText = "";
        }
    }
    return (
        <div>
            <input ref={inputRef} placeholder="Enter movie name" />
            <span ref={errorRef} id="error"></span>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}

// const AddMovie = () => {
//     const [movieName, setMovieName] = useState('');

//     console.log('Rerendered')

//     const handleAdd = () => {
//         console.log(movieName);
//     }
//     return (
//         <div>
//             <input placeholder="Enter movie name" onChange={(e) => setMovieName(e.target.value)}/>
//             <button onClick={handleAdd}>Add</button>
//         </div>
//     )
// }

export default AddMovie;