const vinValidator = require('vin-validator')
const Cars = require('./cars-model')

const checkCarId = async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const car = await Cars.getById(req.params.id)
     if(!car){
    res.status(404).json({ message: `car with id ${req.params.id} is not found` })
  }
  else {
    next()
  }
  } catch (err) {
    console.log(err)
  }
 
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  const car = req.body
  car.vin , car.make , car.model , car.mileage

    if(!car.vin){
      res.status(400).json({ message: `${car.vin} is missing` })
    } else if(!car.make) {
      res.status(400).json({ message: `${car.make} is missing` })
    } else if(!car.model) {
      res.status(400).json({ message: `${car.model} is missing` })
    } else if(!car.mileage) {
      res.status(400).json({ message: `${car.mileage} is missing` })
    } else {
      next()
    }

}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  const isValidVin = vinValidator.validate(req.body.vin)
  if(!isValidVin){
    res.status(400).json({ message: `vin ${req.body.vin} is invalid` })
  } else {
    next()
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const carVin = await Cars.getByVin(req.body.vin)
    if(carVin){
      res.status(400).json({ message: `vin ${req.body.vin} already exists` })
    } else {
      next()
    }
  } catch (err) {
    console.log(err)
  }
    

  
}


module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}