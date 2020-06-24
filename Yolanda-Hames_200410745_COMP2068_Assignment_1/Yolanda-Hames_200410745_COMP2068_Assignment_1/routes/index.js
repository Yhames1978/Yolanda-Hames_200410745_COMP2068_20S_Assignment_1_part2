'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    var name = "Yolanda Hames Webite"

    res.render('home', { name: name });
});

router.get('/aboutMe/', function (req, res) {
    var name = "About Yolanda Hames"

    res.render('aboutMe', { name: name });
});
router.get('/projects/', function (req, res) {
    var name = "All Projects From Georgian College"

    res.render('projects', { name: name });
});
router.get('/services/', function (req, res) {
    var name = "Services"

    res.render('services', { name: name });
});
router.get('/contactMe/', function (req, res) {
    var name = "Contact Information"

    res.render('contactMe', { name: name });
});


module.exports = router;
