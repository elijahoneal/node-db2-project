// DO YOUR MAGIC
const router = require('express').Router()
const Cars = require('./cars-model')
const {checkCarId, checkCarPayload, checkVinNumberUnique, checkVinNumberValid } = require('./cars-middleware')

router.get('/', (req, res, next) => {
    Cars.getAll()
    .then( allCars => res.status(200).json(allCars) )
    .catch( err => {
        console.log(err)
        res.status(500).json({ message: 'getAll request failed' })
    } )
})

router.get('/:id', checkCarId, async (req, res, next) => {
    try {
        const car = Cars.getById(req.params.id)
        res.json(car)  
    } catch (err) {
        res.status( err.status || 500 ).json({message: 'getById request failed'})
    }
    
})

router.post('/', checkCarPayload, checkVinNumberUnique, checkVinNumberValid, async (req, res, next) => {
    try {

    } catch (err) {
        res.status( err.status || 500 ).json({message: 'create request failed'})
    }
})

module.exports = router