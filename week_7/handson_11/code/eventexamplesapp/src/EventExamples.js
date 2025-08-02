import React, { useState } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

export default function EventExamples() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);         
    sayHello();                  
  };

  const sayHello = () => {
    alert("Hello member");   
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const sayWelcome = (message) => {
    alert(message);
  };

  const handleOnPress = (e) => {
    e.preventDefault(); 
    alert("I was clicked");
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h2>React Event Handler</h2>
      <h3>{count}</h3>

      <button onClick={increment}>Increment</button><br /><br />
      <button onClick={decrement}>Decrement</button><br /><br />
      <button onClick={() => sayWelcome("welcome")}>Say Welcome</button><br /><br />
      <button onClick={handleOnPress}>Click on me</button><br /><br />

      <CurrencyConvertor />
    </div>
  );
}
