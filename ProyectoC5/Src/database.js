const { error } = require('console');
const mongoose = require('mongoose');
const { monitorEventLoopDelay } = require('perf_hooks');

const MONGO_URI = "mongodb://localhost:27017/PlanificacionD";

mongoose.connect(MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(()=>{
    console.log('Conectado a MongoDB Server');
})
.catch((error)=>{
    console.log('Error En La Coneccion'. error);

});