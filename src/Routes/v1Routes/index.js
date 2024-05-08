const express = require('express');

const Router = express.Router();

const studentController = require('../../controllers/student-controller');

Router.post('/students',studentController.createStudent);


module.exports=Router;

