const express = require('express')
const ProduRouter = require('./src/routes/produtos')
const connectDB = require('./config/db')
const cors = require('cors')

const app = express();

//conexão banco de dados
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: true }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
//app.use('/api/books', books);
app.use('/api/produtos', ProduRouter)

const port  = process.env.PORT || 8082

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))