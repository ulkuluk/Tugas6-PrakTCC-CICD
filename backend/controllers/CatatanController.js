import Catatan from "../models/CatatanModel.js";

// GET
async function getCatatan(req, res) {
  try {
    const response = await Catatan.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
}

export const getCatatanById = async(req, res) =>{
  try {
      const response = await Catatan.findOne({
          where:{
              id: req.params.id
          }
      });
      res.status(200).json(response);
  } catch (error) {
      console.log(error.message);
  }
}

// CREATE
async function createCatatan(req, res) {
  try {
    const inputResult = req.body;
    await Catatan.create(inputResult);
    res.status(201).json({ msg: "Catatan Created" });
  } catch (error) {
    console.log(error.message);
  }
}

export { getCatatan, createCatatan };

export const updateCatatan = async(req, res) =>{
  try{
    const inputCatatan = req.body;

    await Catatan.update(inputCatatan,{
      where : {
        id : req.params.id
      }
    });
    res.status(200).json({msg: "Catatan Updated"});

  } catch (error){
    console.log(error.message);
  }
}

export const deleteCatatan = async(req, res) =>{
  try{
    await Catatan.destroy({
      where: {
        id : req.params.id
      }
    });
    res.status(204).json({msg:"Catatan berhasil dihapus"});
  } catch (error){
    console.log(error.message);
  }
}