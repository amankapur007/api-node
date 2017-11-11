import express from 'express';
import routes from './src/routes/api-nodeRoutes.js';
import mongoose from 'mongoose'
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/api-nodedb',{
    useMongoClienrt: true
});

//bodyparse set up

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

routes(app);

app.get('/',(req,res)=>{
    res.send(`Node and express server is running on port ${PORT}`)
});

app.listen(PORT,()=>{
    console.log(`Your server is running on port ${PORT}`);
})