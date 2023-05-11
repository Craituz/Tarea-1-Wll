
const express = require('express')
const cors = require('cors')

const PUERTO = 8080;

const app = express();
app.use(cors()).use(express.json());
app.use('/public', express.static(__dirname+'/public'))

let estudiante =[]
// GET
app.get('/', (req,res)=>{
    res.status(200).send(estudiante);
})
// GET INDIVIDUAL
app.get('/:identificacion', (req,res)=>{
    const {identificacion} = req.params
    const estudianteFilter = estudiante.filter(p => p.identificacion === identificacion)
    if (estudianteFilter.length>0)
    {
        res.status(200).send(estudianteFilter[0])
    }
    res.status(403).send({
        message:'No se pudo encontrar el recurso'
    })
})
// POST
app.post('/',(req,res)=>{
    const {body} = req
    estudiante.push(body);
    res.status(201).send({
        message:'Dato insertado correctamente',
        response: body
    })
})
// PATCH OR PUT
app.put('/', (req,res)=>{
    const {id, identificacion, nombre } = req.body;
    let estudiantes = estudiante.filter(p => p.identificacion === identificacion)[0] || {} 
    estudiantes.nombre = nombre;

    res.status(202).send({
        message:'Dato modificado correctamente',
        response:estudiantes
    })
})
// DELETE
app.delete('/:identificacion',(req,res)=>{
    const {identificacion} = req.params
    estudiante = estudiante.filter(p => p.identificacion !== identificacion)
    res.status(200).send({
        message:'Se elimino el elemento correctamente'
    })
})

app.listen(PUERTO, ()=>{
    console.log(`Server running http://localhost:${PUERTO}`);
})