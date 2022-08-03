const express = require('express');
const cors = require('cors');
const app = express();
const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.iftkw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


async function run() {
    try {
        await client.connect();
        const database = client.db('tourism');
        const tourCollection = database.collection('tours');
        const bookingCollection = database.collection('booking');

        app.post('/addservice', async (req, res) => {
            const service = req.body;
            const result = await tourCollection.insertOne(service);
            res.json(result);
        });

        app.get('/tours', async (req, res) => {
            const tours = await tourCollection.find().toArray();
            res.json(tours);
        });

        app.get('/tours/:id', async (req, res) => {
            const id = req.params.id;
            const tour = await tourCollection.findOne({ _id: ObjectId(id) });
            res.json(tour);
        });

        app.post('/book', async (req, res) => {
            const booking = req.body;
            const result = await bookingCollection.insertOne(booking);
            res.json(result);
        });

        app.get('/bookings', async (req, res)=>{
            const bookings = await bookingCollection.find({}).toArray();
            res.json(bookings);
        });

        app.get('/bookings/:email', async (req, res) => {
            const query = {user: req.params.email};
            const bookings = await bookingCollection.find(query).toArray();
            res.json(bookings);
        });

        app.delete('/bookings/:id', async (req, res) => {
            const id = req.params.id;
            const result = await bookingCollection.deleteOne({ _id: ObjectId(id) });
            res.json(result);
        });

        app.put('/bookings/:id', async (req, res)=>{
            const id = req.params.id;
            const { _id, ...booking } = req.body;
            const result = await bookingCollection.updateOne({_id: ObjectId(id)}, {$set: booking});
            res.json(result);
        });
    }
    finally {
        
    }
}


run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.listen(port, () => {
    console.log(`Listening to http://localhost:${port}`);
});

