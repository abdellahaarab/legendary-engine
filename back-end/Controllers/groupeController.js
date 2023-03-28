const GroupeModel = require("../Models/groupeModel")

const readGroupe = async (req,res,next)=>{
    const groupe = await GroupeModel.find();
    res.json(groupe)
}



const findGroupe = async (req,res,next)=>{
    const id = req.params.id;
    const groupe = await GroupeModel.find({_id:id},{});
    res.json(groupe)
}

const createGroupe = async (req,res,next)=>{
    const groupe = await GroupeModel.insertMany(req.body);
    res.json(groupe)
}

const deleteGroupe =async (req,res,next)=>{
    const id = req.params.id;
    const groupe = await GroupeModel.deleteOne({_id:id});
    res.json(groupe)
}

const editeGroupe = async (req,res,next)=>{
    const id = req.params.id;
    const groupe = await GroupeModel.updateOne({_id:id},
        {
            code: req.body.code,
            nom:req.body.nom,
            capacite:req.body.capacite,
            listDesStagiaires:req.body.listDesStagiaires
        }
    );
    res.json(groupe)
}

module.exports = {readGroupe,findGroupe,createGroupe,deleteGroupe,editeGroupe};