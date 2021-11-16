import './App.css';
import React from 'react';
import {useState} from 'react'

const Header = () => {
  return <>
  <header className={'header'}>
    <div className="logo">
      <h1>M|E|n||h|ï|S</h1>
    </div>
    <div className="menu">
      <nav>
        <a href="">Home</a>
        <a href="">Form</a>
        <a href="">Cotact</a>
      </nav>
    </div>
  </header>
  </>
}

const App = () => {
  const [name, setNameOut] = useState('');
  const [sureName, setlastname] = useState('');
  const [age, setAge] = useState('');

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameOut(e.target.value);
  };

  const handleSureName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setlastname(event.target.value)

  }

  const handleAge = (index: React.ChangeEvent<HTMLInputElement>) => {
    setAge(index.target.value);
  }

  return <>
    <Header/>

    <section className={"home"}>

    <h1 className="heading">Form <span>Exercise</span>In React</h1>

      <div className="form">
        <div className={'fieldInput'}>
          <h6>Nome:</h6>
          <input type="text" onChange={handleName} />
        </div>

        <div className={'fieldInput'}>
          <h6>Sobrenome:</h6>
          <input type="text" onChange={handleSureName} />
        </div>

        <div className={'fieldInput'}>
          <h6>Idade</h6>
          <input type="text" onChange={handleAge} />
        </div>
      </div>

    <div className="answer-area">
      <p>Olá { `${name} ${sureName}` }, tudo bem?</p>
      <p>Você tem { `${age}` } anos.</p>
    </div>
    </section>
  </>;
}

export default App;