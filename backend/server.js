import express from 'express'
// require('dotenv').config()

const app = express();

app.use(express.static('dist'))

const jokes = [
  {
    id: 1,
    title: "Programmer's Diet",
    content: "Why do programmers prefer dark mode? Because light attracts bugs."
  },
  {
    id: 2,
    title: "Array Trouble",
    content: "Why did the array break up with the object? It needed more space."
  },
  {
    id: 3,
    title: "JavaScript Timing",
    content: "I told my code a joke, but it didn't get it until the callback executed."
  },
  {
    id: 4,
    title: "Missing Semicolon",
    content: "Why was the JavaScript developer sad? Because they didn't know how to 'let' it go."
  },
  {
    id: 5,
    title: "Debugging",
    content: "Debugging: Being the detective in a crime movie where you are also the criminal."
  },
  {
    id: 6,
    title: "Frontend vs Backend",
    content: "Frontend and backend walked into a bar. The backend paid because the frontend couldn't handle the request."
  },
  {
    id: 7,
    title: "Infinite Loop",
    content: "Why did the programmer quit their job? They couldn't break out of the loop."
  },
  {
    id: 8,
    title: "Cache Me If You Can",
    content: "There are only two hard things in Computer Science: cache invalidation, naming things, and off-by-one errors."
  },
  {
    id: 9,
    title: "Git Problems",
    content: "My code works. I have no idea why. My code doesn't work. I have no idea why."
  },
  {
    id: 10,
    title: "AI Humor",
    content: "I asked an AI for a joke. It replied: 'Error 404: Funny not found.'"
  }
];

console.log(jokes);

const port= process.env.port||4000;
app.get('/',(req,res)=>{
    res.send("<h1>Welcome to website </h1>")
})

app.get('/api/jokes',(req,res)=>{
    res.send(jokes)
})


app.listen(port,()=>{
    console.log(`The Application is running on the port ${port}`);
})