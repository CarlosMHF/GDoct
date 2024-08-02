'use strick'

const express = require('express');
const router = express.Router();
//const Ldocentes = require('../Controllers/docentes');
//const { Module } = require('module');

const docentescontroller =require('../Controllers/docentescontroller');

router.get('/docentes', async(req, res)=>{
    await docentescontroller.verlistado(req,res);

});
//router.get('/listado', Ldocentes.listado);
router.post('/crear', (req,res)=>{
    docentescontroller.crear(req,res);
});

router.get('/borrar/:id', (req, res)=>{
    docentescontroller.borrar(req,res);
});

router.post('/editar',(req,res)=>{
    docentescontroller.editar(req,res);
});

module.exports = router;