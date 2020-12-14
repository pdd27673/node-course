/*jshint esversion:6 */
const express = require('express');
const PORT = 3000 || proccess.env.PORT;
const app = express();

const courses =[
    {id: 1, name:'course1'},
    {id: 2, name:'course2'},
    {id: 3, name:'course3'},
]; 


app.get('/', (req, res)=>{
    res.send('Hello');
});

app.get('/api/courses', (req, res)=>{
	res.send(courses);
});

app.get('/api/courses/:id', (req, res)=>{
    const course =  courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('Course is not found');
    res.send(course);
});


app.listen(PORT, ()=>{
console.log(`listening on port ${PORT}`);
});

