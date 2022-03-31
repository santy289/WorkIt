const {
    getAllServices,
    getServiceById,
    createService,
    deleteService,
    patchService
} = require("./service.service");

const handlerAllServices = async (req, res) => {
    const services = await getAllServices();
    if(!services){
        res.status(404).json({message: "Services not found"});
    }
    else{
        res.json(services)
    }
}

const handlerServiceById = async (req, res) => {
    const { id } = req.params;
    const service = await getServiceById(id);
    if(!service){
        res.status(404).json({message: "Service not found"});
    } else {
        res.json(service)
    }

}

const handlerCreateService = async (req, res) => {
    const { body } = req;
    const service = await createService(body);
    res.status(201).json(service);
}

const handlerDeleteService = async (req, res) => {
    const { id } = req.params;
    const service = await deleteService(id);
    if(!service){
        res.status(404).json({message: "Service not found"});
    } else{
        res.json({message: "Service deleted"});
    }
}

const handlerUpdateService = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const service = await patchService(id, body);
    if(!service){
        res.status(404).json({message: "Service not found"});
    } else{
        res.json({message: "Service updated"});
    }
}

module.exports = {
    handlerAllServices,
    handlerServiceById,
    handlerCreateService,
    handlerDeleteService,
    handlerUpdateService
  }