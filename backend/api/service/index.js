const { Router } = require('express');
const {
    handlerAllServices,
    handlerServiceById,
    handlerCreateService,
    handlerDeleteService,
    handlerUpdateService
} = require('./service.controller');

const router = Router();

router.post('/', handlerCreateService);
router.get('/', handlerAllServices);
router.get('/:id', handlerServiceById);
router.patch('/:id', handlerUpdateService);
router.delete('/:id', handlerDeleteService);