const catchError = require('../utils/catchError');
const Users = require('../models/Users');

const getAll = catchError(async(req, res) => {
    const users= await Users.findAll();
    return res.json(users);
});

const create = catchError(async(req,res)=>{
    const {firstName,lastName,email,password,birthday}=req.body;
    const user=await Users.create({firstName,lastName,email,password,birthday});
    return res.status(201).json(user);
});
const getOneUser = catchError(async(req, res) => {
    const {id}= req.params;
    const user = await Users.findByPk({id})
return res.json(user)
});

const remove= catchError(async(req,res)=>{
    const {id}= req.params;
    const userDeleted =await Users.destroy({where:{id}});
    if(userDeleted===0)return res.status(404).json({message:'not found'})
    return res.sendStatus(204)
});

const update=catchError(async(req,res)=>{
    const {firstName,lastName,email,password,birthday}=req.body;
    const {id}= req.params;
    const user=await Users.update({
    firstName,lastName,email,password,birthday
    },{where:{id},returning:true})
if(user[0]===0)return res.status(404).json({message:'not found'})
    return res.json(user)
});
module.exports = {
    getAll,
    getOneUser,
    create,
    remove,
    update
}