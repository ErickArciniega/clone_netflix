import express from 'express';
import  mongoose from 'mongoose';
import bodyParser from 'body-parser';
import User from './src/models/users';
import {createToken} from './src/resolvers/create';

import {verifyToken} from './src/resolvers/verify';

import graphQLHTTP from 'express-graphql';
import schema from './src/graphql';

const app = express();
const PORT = process.env.PORT || 3000

//Base de datos
mongoose.connect('mongodb://admin:yolo1234@ds125881.mlab.com:25881/netflix-dev21');
const db = mongoose.connection;
db.on('error',() => console.log("Error al conectar la BD"))
	.once('open',() => console.log("Conectado a la BD!!"));

app.use(bodyParser.json());

//creando nuevo usuario en la DB
app.post('/signup',(req,res) =>{
	let user = req.body
	User.create(user).then((user) =>{
		return res.status(201).json({"message":"Usuario Creado",
			"id":user._id})
	}).catch((err) =>{
		console.log(err);
		return res.json(err);
	})
});

app.post('/login', (req,res) =>{

	const token = createToken(req.body.email,req.body.password).then((token) => {

		res.status(201).json({token});
		
	}).catch(() => {
		res.status(403).json({
			message:"Login Failed!!!! :( Invalid credentials"
		})
	})
});

//midleware para protegergraphQL
app.use('/graphql',(req,res,next) => {
	const token = req.headers['authorization'];
	try{
		req.user = verifyToken(token)
		next();
	}catch(error){
		res.status(401).json({message:error.message})
	}
})

app.get('/',(req,res) => {

	res.send("Estoy funcionando :) gggh");
})

app.use('/graphql', graphQLHTTP((req,res) => ({
	schema,
	graphiql:true,
	pretty:true,
	context:{ 				//por si necesito saber que usario es
		user:req.user
	}
})))


app.listen(PORT,() => {
	console.log("Magic Happens in port: "+PORT);
})