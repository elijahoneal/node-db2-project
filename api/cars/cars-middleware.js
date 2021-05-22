const vinValidator = require('vin-validator')

const checkCarId = (req, res, next) => {
  // DO YOUR MAGIC
  if(!req.params.id){
    res.status(404).json({ message: "car with id <car id> is not found" })
  }
  else {
    next()
  }
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  const car = req.body
  const required = [car.vin , car.make , car.model , car.mileage]
  required.forEach( field => {
    if(!field){
      res.status(400).json({ message: `${field} is missing` })
    } else {
      next()
    }
  } )
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

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
  if(req.body.vin){
    res.status(400).json({ message: `vin ${req.body.vin} already exists` })
  } else {
    next()
  }
}


module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}