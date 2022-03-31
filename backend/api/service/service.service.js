const ServiceModel = require('./service.model');

const getAllServices = async () => {
    return await ServiceModel.find();
}

const getServiceById = async (id) => {
    const service = await ServiceModel.findById(id);
    if(!service){
        return null
    }
    return service;
}

const createService = async (service) => {
    return await ServiceModel.create(service);
}

const deleteService = async (id) => {
    const service = await ServiceModel.findById(id);
    if(!service){
        return null
    }
    return await ServiceModel.findByIdAndDelete(id);
}

const patchService = async (id, service) => {
    const serviceToUpdate = await ServiceModel.findById(id);
    if(!serviceToUpdate){
        return null
    } 
    return await ServiceModel.findByIdAndUpdate(id, service);
}

module.exports = {
    getAllServices,
    getServiceById,
    createService,
    deleteService,
    patchService
}