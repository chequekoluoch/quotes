import React, { useState,useEffect} from 'react';
import { Card, Row, Container, Button} from 'react-bootstrap'
import './App.css';
import Axios from 'axios';


function App() {
  const [ quote, setQuotes]=useState('')
  const [ author, setAuthor]=useState('')

  useEffect(()=>{
    getQuote()
  },[])
  const URL=`https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`
  const getQuote=async()=>{
    const response=await Axios.get(URL)
    const dataQuotes=response.data.quotes
    const randomNum=Math.floor(Math.random()*dataQuotes.length)
    const randomQuote=dataQuotes[randomNum]
    setQuotes(randomQuote.quote)
    setAuthor(randomQuote.author)
    console.log(randomQuote)
  }
 const handleClick=()=>{
   getQuote()
 }

  return (
   <>
    <h2 style={{textAlign:'center'}} className="mt-4">Random Quotes Generater</h2>
     <Card className="text-center"style={{ width: '34rem',margin:'2% auto' }} >
           <Card.Header>Author: {author}</Card.Header>
              <Card.Body className="cbody">
              <Card.Text>
               "{quote}..."
              </Card.Text>
          </Card.Body>
          <Button variant="primary" style={{border:'none'}} className="btn" onClick={handleClick}>Click to Generate Quote</Button>
      </Card>
      </>
      )
   
}

export default App;
