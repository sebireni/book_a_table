import React, { useState } from 'react';
import './Form.css';

function Form () {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [count, setCount] = useState(null);
  const [submit, setSubmit] = useState(false);

  function getNameValue (val) {
    setName(val.target.value);
  }

  function getEmailValue (val) {
    setEmail(val.target.value);
  }

  function getDateValue (val) {
    const dateInput = document.querySelector('#date');
    const today = new Date();

    dateInput.min = today.getFullYear()
      .toString() + '-' + (today.getMonth() + 1).toString()
      .padStart(2, 0) + '-' + today.getDate()
      .toString()
      .padStart(2, 0);

    setDate(val.target.value);
  }

  function getTimeValue (val) {
    setTime(val.target.value);
  }

  function getCountValue (val) {
    setCount(val.target.value);
  }

  function validator (event) {
    event.preventDefault();
    setSubmit(false);

    if (!name) {
      alert('Név megadása kötelező!');
      return;
    }
    if (!email || !email.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)) {
      alert('Érvénytelen e-mail cím!');
      return;
    }
    if (!date) {
      alert('Dátum megadása kötelező!');
      return;
    }
    if (!time) {
      alert('Időpont megadása kötelező!');
      return;
    }
    if (!count) {
      alert('Add meg hány főre foglalsz!');
      return;
    }

    setSubmit(true);
  }

  return (
    <>
      {!submit ? (
        <div id='flexcontainer'>
          <form>
            <div id='inputWrapper'>
              <label htmlFor='name'>Milyen névre foglalsz?</label>
              <input type='text' id='name' onChange={getNameValue} />

              <label htmlFor='email'>Mi az email címed?</label>
              <input type='text' id='email' onChange={getEmailValue} />

              <label htmlFor='pickdate'>Melyik nap jöttök?</label>
              <input type='date' id='date' onSelect={getDateValue} onChange={getDateValue} />

              <label htmlFor='time'>Hány órakor?</label>
              <input type='time' id='time' onChange={getTimeValue} />

              <label htmlFor='count'>Hányan lesztek?</label>
              <input type='number' min='1' id='count' onChange={getCountValue} />
            </div>

            <button id='submit' type="submit" onClick={validator}>
              FOGLALÁS
            </button>
          </form>
        </div>
      ) : (
        <div id='outputReservation'>
          <div id='stickyNote'>
            <p>{name}</p>
            <p>{email}</p>
            <p>{date}</p>
            <p>{time}</p>
            <p>{count} fő</p>
          </div>
          <h1>Szeretettel várunk!</h1>
        </div>
      )}
    </>
  );
}

export default Form;
