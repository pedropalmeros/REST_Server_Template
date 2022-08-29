const {response,request} = require('express');

const usuariosGet = (req,res = response)=>{
    const {q,nombre='No name',apikey} = req.query;
    res.json({
        msg: 'GET API - CONTROLADOR',
        q,
        nombre,
        apikey
    });
}

const usuariosPost = (req,res = response)=>{
    const body = req.body;

    res.json({
        msg: 'POST API - CONTROLADOR',
        body
    });
}


const usuariosPut = (req,res = response)=>{
    const id = req.params.id;

    res.json({
        msg: 'PUT API - CONTROLADOR',
        id
    });
}


const usuariosPatch = (req,res = response)=>{
    res.json({
        msg: 'PATCH API - CONTROLADOR'
    });
}


const usuariosDelete = (req,res = response)=>{
    res.json({
        msg: 'DELETE API - CONTROLADOR'
    });
}



module.exports= {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}