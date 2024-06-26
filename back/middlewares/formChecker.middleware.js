const joi = require('joi');

const checkForm = async(req,res,next)=>{
    const schema = joi.object({
        name: joi.string().required(),
        bloodGroup: joi.string().max(2).required(),
        date: joi.date().required(),
        notes: joi.string().required()
    });

    const validation = schema.validate(req.body).error;

    if(!validation){
        next();
    }
    else{
        res.status(400).json(validation.message);
    }
};

module.exports = checkForm;