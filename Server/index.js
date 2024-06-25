const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose'); // Import Mongoose
const authRoutes = require('./routes/authRoutes');
// const rootResolvers = require('./resolvers');
require('dotenv').config();


const app = express();

app.use(cors({
  origin: 'https://weather-app-x23b.vercel.app', // Replace with your frontend URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // If you need to send cookies with requests
}));
// app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // or specify a specific origin
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Connect to MongoDB database
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB database');
});
app.use(bodyParser.json());

app.use(express.json());

app.use('/auth',authRoutes)
// app.use('/graphql', graphqlHTTP({
//   schema,
//   rootValue: rootResolvers,
//   graphiql: true, // Enable GraphiQL interface for testing
// }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
