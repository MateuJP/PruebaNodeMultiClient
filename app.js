import express from 'express'
import cors from 'cors'
import routerClient1 from './cliente1/router/router.js'
import routerClient2 from './cliente2/router/router.js'

const app = express();
app.use(cors())

app.use(express.json());

app.use('/api/v1/cliente1', routerClient1)
app.use('/api/v1/cliente2', routerClient2)

app.get('/', (req, res) => {
    res.send('HOLA MUNDO')
})

app.listen(8000, () => {
    console.log('Server UP running in http://localhost:8000/')
})