/*
    Event Routes
    /api/events
*/
const { Router } = require("express");
const { check } = require("express-validator");
const { isDate } = require("../helpers/isDate");

const { validarCampos } = require('../middlewares/validar-campos')
const { validarJWT } = require('../middlewares/validar-jwt')
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require("../controllers/events");

const router = Router();

// Todas tienen que pasasr por la validación del JWT
router.use( validarJWT );

// Obtener eventos
router.get('/', getEventos)

// crear un nuevo evento
router.post(
    '/', 
    [
        check('title','El título es obligatorio').not().isEmpty(),
        check('start','Fecha de inicio es obligatorio').custom( isDate ),
        check('end','Fecha de finalización es obligatorio').custom( isDate ),
        validarCampos
    ],
    crearEvento
        
)

// actualizar un nuevo evento
router.put('/:id', actualizarEvento )

// eliminar un nuevo evento
router.delete('/:id', eliminarEvento )

module.exports = router;



