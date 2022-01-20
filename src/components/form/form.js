import React from 'react'
import './form.css'
import { useState } from 'react'

function Form() {
    
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [count, setCount] = useState(null);
    const [submit, setSubmit] = useState(false);
    
    function getNameValue(val) {
        setName(val.target.value)
    }
        
    function getEmailValue(val) {
        setEmail(val.target.value)
    }       
    
    function getDateValue(val) {
        
        let dateInput = document.querySelector("#date");
        let today = new Date();
        
        dateInput.min = today.getFullYear().toString() + '-' + (today.getMonth() + 1).toString().padStart(2, 0) + '-' + today.getDate().toString().padStart(2, 0);
        
        setDate(val.target.value)
    }

    function getTimeValue(val) {
        setTime(val.target.value)
    }
    
    function getCountValue(val) {
        setCount(val.target.value)
    }

    function validator() {

        if (!email.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)) {
             
            setSubmit(false);
            alert("Érvénytelen e-mail cím!");
        } else if (name === null || name === "") {

            setSubmit(false);
            alert("Név megadása kötelező!");

        } else if (count === null){

            setSubmit(false);
            alert("Add meg hány főre foglalsz!")
            
        } else {
            setSubmit(true);
        }
    }

    console.log(time)

    return (
        <>        
            {
                !submit?

                    <div id="flexcontainer">
                        <form>
                            <div id="inputWrapper">
                                <label htmlFor="name">Milyen névre foglalsz?</label>
                                <input type="text" id="name" onChange={getNameValue}></input>
                                <label htmlFor="email">Mi az email címed?</label>
                                <input type="text" id="email" onChange={getEmailValue}></input>
                                <label htmlFor="pickdate">Melyik nap jöttök?</label>
                                <input type="date" id="date" onSelect={getDateValue} onChange={getDateValue}></input>
                                <label htmlFor="time">Hány órakor?</label>
                                <input type="time" id="time" onChange={getTimeValue}></input>
                                <label htmlFor="count">Hányan lesztek?</label>
                                <input type="number" min="1" id="count" onChange={getCountValue}></input>
                            </div>
                        </form>

                        <button id="submit" onClick={validator}>
                            FOGLALÁS   
                        </button>

                    </div>

                    :
                    <div id="outputReservation">
                        <div id="stickyNote">
                            <p>{name}</p>
                            <p>{email}</p>
                            <p>{date}</p>
                            <p>{time}</p>
                            <p>{count} fő</p>
                        </div>
                        <h1>Szeretettel várunk!</h1>
                    </div>
            }            
            
        </>
    )
}

export default Form
