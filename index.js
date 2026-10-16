import express from 'express';
const app = express();
const PORT = process.env.PORT || 5000;

const User = [
  {id: 1, name: "John Doe", email: "john.doe@example.com"},
  {id: 2, name: "Jane Smith", email: "jane.smith@example.com"},
  {id: 3, name: "Alice Johnson", email: "alice.johnson@example.com"},
  {id: 4, name: "Bob Brown", email: "bob.brown@example.com"},
];

app.get('/' , (req,res)=>{
  res.send("This is From Express !")
})






app.get('/Users', (req,res)=>{
  res.send(User)
}) 

app.listen(PORT, ()=>{
  console.log(`Server is running now on port ${PORT}`)
})