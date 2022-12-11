

const express = require('express')

const cont = require('../controllers/controller') 


const router = express.Router()

router.post("/api/login",cont.login );

module.exports = router;
// app.get("/api/course",);

// app.post("/api/courses",);


