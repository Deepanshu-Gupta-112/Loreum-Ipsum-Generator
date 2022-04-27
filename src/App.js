import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState();
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    
    // console.log(ap);
    e.preventDefault();
    // console.log(setCount);
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    // console.log(data);
    setText(data.slice(0, amount));
  
  }; 
  const InputSee=(e)=>{
    console.log(e.target.value );
  }
  return (
    <section className='section-center'>
      <h3>Lorem Ipsum generater</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
        
          onChange={(e) => setCount(e.target.value)}
          // onChange={InputSee}
        />
        <button className='btn'>generate</button>
       
      </form>
      <article className='lorem-text'>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
