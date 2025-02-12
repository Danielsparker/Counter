import React, { useState } from 'react';

function MyComponent() {
    const [name1, setName1] = useState(""); // First state variable
    const [name2, setName2] = useState(""); // Second state variable
    const[age,setAge] = useState(0)
    const[isEmployed,setIsEmployed] = useState(false)

    const updateName = () => {
        setName1("Daniel");
        setName2("Abraham"); // ✅ Correctly updating the second state variable
        console.log(name1); // This will log the old value due to React's async state updates
    };

    const incrementAge =() => {
        setAge(age +16)

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed)
    }    
    }

    return (
        <div>
            <p>Name 1: {name1}</p>
            <button onDoubleClick={updateName}>Set Name</button>
            <p>Name 2: {name2}</p>
            <button onClick={updateName}>Set Name</button>

            <p> Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p> Is employed: {isEmployed ? "yes" : "no"}</p>
            <button onClick={toggleEmployedStatus}> Toggle status</button>
        </div>
    );
}

export default MyComponent;
