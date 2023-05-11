
const concepto_autos = [];

const getConceptoAutos = (req, res)=>{
    
    res.json({
        concepto_autos
})
    
    for(let i = 0; i<concepto_autos.length; i++){
        console.log(concepto_autos[i])
    }

    return inversionistas;
}

const postConceptoAutos = (req, res)=>{
    const {id, nombre, identificacion} = req.body;
  
    const newCon = {...req.body};
    
    // let data = JSON.stringify(req.body)
    inversionistas.push({newCon})
    res.send("Test Correcto")
    console.log(newCon)
}

module.exports = {getConceptoAutos, postConceptoAutos}