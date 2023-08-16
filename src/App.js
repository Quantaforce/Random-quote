import './App.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
function Qbox() {
  const [index,setIndex]=useState(0);
  function handleClick(){
    setIndex(index+1);}
  
  const q= [
  {
    author: "Albert Einstein",
    quote: "Imagination is more important than knowledge."
  },
  {
    author: "Maya Angelou",
    quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."
  },
  {
    author: "Mark Twain",
    quote: "The secret of getting ahead is getting started."
  },
  {
    author: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken."
  },
  {
    author: "Helen Keller",
    quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart."
  },
  {
    author: "Steve Jobs",
    quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do."
  },
  {
    author: "Nelson Mandela",
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall."
  },
  {
    author: "Jane Austen",
    quote: "It isn't what we say or think that defines us, but what we do."
  },
  {
    author: "Martin Luther King Jr.",
    quote: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that."
  },
  {
    author: "Coco Chanel",
    quote: "The most courageous act is still to think for yourself. Aloud."
  }
];
  let x=q[index];
  
 return (

 <div id="quote-box"> 
       <div id="text"><span><i class="fa-solid fa-quote-left "></i> {x.quote} </span>
        </div>
        <div id='author'>-{x.author}</div>
        <div id="interact" style={{}}>
          <a id='tweet-quote' href={`https://twitter.com/intent/tweet?text=${x.quote}`}><i class="fa-brands fa-twitter"></i></a>
          <a></a>
          <Button id="new-quote" onClick={handleClick} style={{marginTop:'30px'}}>New quote</Button>
</div>
      </div>);
 
}
function App() {
  return (
    <div className="App" style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100%',background:'grey'}}>
     <Qbox /> 
    </div>
  );
}

export default App;
