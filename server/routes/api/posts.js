const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();


router.get('/', async (require,res) => {
    const posts = await loadPostCollection();
    //res.send('hello');
    res.send(await posts.find({}).toArray());
});

router.post('/', async(req,res) => {
const posts = await loadPostCollection();
await posts.insertOne({
    text: req.body.text,
    createdAt: new Date()
});
res.status(201).send();
});

router.delete('/:id', async(req,res) =>{
    const posts = await loadPostCollection();
    await posts.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
    res.status(200).send;
});

async function loadPostCollection() {
const client = await mongodb.MongoClient.connect
('mongodb+srv://testuser124:xfKQcAaK8ggsfjK@cluster0.1gi8c.mongodb.net/Build_systems?retryWrites=true&w=majority', 
{useNewUrlParser: true
});
return client.db('Build_systems').collection('posts');
}




module.exports = router;