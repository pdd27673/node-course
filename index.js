/*jshint esversion:6 */
const express = require('express');
const Joi = require('joi');

const PORT = 3000 || proccess.env.PORT;
const app = express();

app.use(express.json());

const courses =[
    {id: 1, name:'course1'},
    {id: 2, name:'course2'},
    {id: 3, name:'course3'},
]; 

app.get('/', (req, res)=>{
    res.send('Hello');
});

app.post('/api/courses', (req, res)=>{
    const schema = {
        name: Joi.string().min(3).required() 
    };

    const result =  Joi.validate(req.body, schema);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const course= {
        id: courses.length +1,
        name: req.body.name,
    };
    courses.push(course);
    res.send(course);
});

app.get('/api/courses/:id', (req, res)=>{
    const course =  courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('Course is not found');
    courses.push(course);
    res.send(course);
});

app.listen(PORT, ()=>{
console.log(`listening on port ${PORT}`);
});

