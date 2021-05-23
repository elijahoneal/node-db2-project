const db = require('../../data/db-config')

const getAll = () => {
  // DO YOUR MAGIC
  return db('cars')
}

const getById = (id) => {
  // DO YOUR MAGIC
  return db('cars').where({id}).first()
}

const getByVin = (vin) => {
  return db('cars').where('vin', vin).first()
}

const create = async (cars) => {
  // DO YOUR MAGIC
  const [id] = await db('cars').insert(cars)
  return getById(id)
}

module.exports = {
  getAll,
  getById,
  getByVin,
  create
}