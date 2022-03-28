import React, { useState } from "react";
import "./generatePassword.css";

const GeneratePassword = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(20);
  const [number, setNumber] = useState(false);
  const [letter, setLetter] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [message, setMessage] = useState("");

  const numbers = "0123456789";
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const symbols = "@#$!%&/?¿*_-";
  const allCharacters = numbers + letters + symbols;
  const numbersAndLetters = numbers + letters;
  const numbersAndSymbols = numbers + symbols;
  const lettersAndSymbols = letters + symbols;
  const onlyNumbers = numbers;
  const onlyLetters = letters;
  const onlySymbols = symbols;
  let pass;

  const handleForLoop = (caracters) => {
    for (let i = 0; i < passwordLength; i++) {
      let randomS = Math.floor(Math.random() * caracters.length);
      pass += caracters.charAt(randomS);
    }
  };

  const generatepass = () => {
    pass = "";
    if (number && letter && symbol) {
      handleForLoop(allCharacters);
    } else if (number && letter && symbol === false) {
      handleForLoop(numbersAndLetters);
    } else if (number && letter === false && symbol) {
      handleForLoop(numbersAndSymbols);
    } else if (number === false && letter && symbol) {
      handleForLoop(lettersAndSymbols);
    } else if (number && letter === false && symbol === false) {
      handleForLoop(onlyNumbers);
    } else if (number === false && letter && symbol === false) {
      handleForLoop(onlyLetters);
    } else if (number === false && letter === false && symbol) {
      handleForLoop(onlySymbols);
    } else {
      setMessage("You must select at least one box");
    }
    setPassword(pass);
    return message;
  };
  const handlechange = (e) => {
    setPasswordLength((e.target.name = e.target.value));
  };
  const hadleNumberCheckbox = (e) => {
    setNumber(!number);
  };
  const hadleLetterCheckbox = (e) => {
    setLetter(!letter);
  };
  const hadleSymbolCheckbox = (e) => {
    setSymbol(!symbol);
  };

  return (
    <div className="container">
      <form className="form">
        <div>
          <label>
            <h3>length of your password</h3>
            <input
              className="input-length"
              name="passwordLength"
              type="number"
              placeholder="Password length"
              onChange={handlechange}
            />
          </label>
        </div>
        <div className="container-checkbox">
          <h3> Choice characters in password </h3>
          <div>
            <label>
              <input
                type="checkbox"
                name="number"
                onChange={hadleNumberCheckbox}
                checked={number}
              />
              Numbers
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="letter"
                onChange={hadleLetterCheckbox}
                checked={letter}
              />
              Letters (uppercase and lowercase)
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="symbol"
                onChange={hadleSymbolCheckbox}
                checked={symbol}
              />
              Symbol
            </label>
          </div>
        </div>
      </form>
      <button className="button-generate" onClick={() => generatepass()}>
        Generate
      </button>
      <div>
        {password ? (
          <div>
            <strong>The generated password is:</strong> <br />{" "}
            <div className="show-pass">{password}</div>
          </div>
        ) : (
          <h4 className="message">{message}</h4>
        )}
      </div>
    </div>
  );
};

export default GeneratePassword;
