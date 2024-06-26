const express = require('express');
const {read, readOne, create, update, del} = require('../controller/donnor.controllers');
const checkForm = require('../middlewares/formChecker.middleware')
const router = express.Router();

router.get('/donnors', read);

router.post('/donnors/create', checkForm, create);

router.get('/donnors/:id', readOne);

router.put('/donnors/:id/update', checkForm, update);

router.delete('/donnors/:id/delete',del );

module.exports = router