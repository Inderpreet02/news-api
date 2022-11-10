const express = require('express');
const { getNDTV } = require('../controller/NDTV.controller');
const db = require('../db');
const router = express.Router();

router.get('/', async (req, res) => {

    const category = req.query.category;

    var docRef = db.collection("NDTV").doc(category);

    await docRef.get().then((doc) => {
        if (doc.exists) {
            
            res.status(200).json(doc.data())
        } else {
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    
})

router.get('/hero', async (req, res) => {

    const category = req.query.category;

    var docRef = db.collection("NDTV").doc(category).limit(5);

    await docRef.get().then((doc) => {
        if (doc.exists) {
            
            res.status(200).json(doc.data())
        } else {
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    
})

module.exports = router;