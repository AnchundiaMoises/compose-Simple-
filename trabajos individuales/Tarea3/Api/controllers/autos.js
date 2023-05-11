
const autos = [];
const getAutos = (req, res)=>{
    res.json({
        autos
    })
    
    for(let i = 0; i<autos.length; i++){
        console.log(autos[i])
    }

    return autos;
}

const postAutos = (req, res)=>{
    const {id, descripcion, placa, color} = req.body;
   
    const newAuto = {...req.body};
    

    autos.push({newAuto})
    res.send("correcto")
    console.log(newAuto)
}

module.exports = {getAutos, postAutos}