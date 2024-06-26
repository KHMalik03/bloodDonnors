const Donnor = require('../model/donnor.model');

const read = async(req,res)=>{
    const donnor = await Donnor.find();
    res.json(donnor);
};

const readOne = async(req,res)=>{
    const donnorId = req.params.id

    const donnor = await Donnor.findById(donnorId);
    res.json(donnor);
};

const create = async(req,res)=>{
    const data = req.body;

    const donnor = await Donnor.create(data);
    res.json(donnor);
};

const update = async(req,res)=>{
    const data = req.body;
    const donnorId = req.params.id;

    const donnor = await Donnor.findByIdAndUpdate(donnorId,data);
    res.json(donnor);
};

const del = async(req,res)=>{
    const donnorId = req.params.id;

    const donnor = await Donnor.findByIdAndDelete(donnorId);
    res.json(donnor);
};

module.exports={read, readOne, create, update, del}

