import app from './server.js';
import mongodb from 'mongodb';
import ReviesDAO from './dao/ReviesDAO.js';

const MongoClient = mongodb.MongoClient;
const mongo_username = process.env['MONGO_USERNAME'];
const mongo_password = process.env['MONGO_PASSWORD']


const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.dai3wiu.mongodb.net/?retryWrites=true&w=majority`