require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// mongoose.connect(process.env.MONGO_UI, {useNewUrlParser: true, useUnifiedTopology: true})
// .then(()=>{
//     app.listen(process.env.PORT, ()=>console.log('listeningn to server', process.env.PORT));
// }).catch(err=>{console.error('Error', err)});

app.use(express.json());

mongoose.connect(process.env.MONGO_UI, {useNewUrlParser: true, useUnifiedTopology: true});
let db = mongoose.connection;

db.on('error', (error)=>{
    console.error('MongoDB connection error:', error);
});
db.once('open', ()=>{
    console.log('Connected to MongoDB');
});
db.on('disconnected', ()=>{
    console.log('Disconnected to MongoDB');
});

const Schema = mongoose.Schema;

const personSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    number: {
        type: Number
    }
});

const Person = mongoose.model('Person', personSchema)

app.post('/add-users', async (req, res) => {
    const { firstName, lastName, number } = req.body;

    Person.findOne({ firstName }, { _id: 0, __v: 0 })
        .then((result, error) => {
            if (result != null && result.firstName === firstName) {
                res.status(400).send('Duplicated user');  // Set status code to 400 for Bad Request
            } else {
                let newUser = new Person({
                    firstName: firstName,
                    lastName: lastName,
                    number: number
                });
                newUser.save()
                    .then((savedUser, error) => {
                        if (savedUser) {
                            res.send(`User ${firstName} has been added`);
                        } else {
                            res.status(500).send('Error');  // Set status code to 500 for Internal Server Error
                        }
                    });
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        });
});

app.get('/retrieve-users', (req, res)=>{
   Person.find({})
   .then((result)=>res.send(result))
})

app.delete('/delete-users', (req, res) => {
    Person.deleteMany({})
        .then((result) => {
            if (result.deletedCount > 0) {
                res.status(200).send(`All users have been deleted. ${result.deletedCount} user(s) deleted.`);
            } else {
                res.status(404).send('No users found to delete.');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        });
});

app.listen(process.env.PORT, ()=>{console.log(`Listening to port`, process.env.PORT)})