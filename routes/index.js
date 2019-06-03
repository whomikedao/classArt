//#1 SINCE IN ROUTE GET ROUTER
let express = require('express');
let router = express.Router();
let data = require('../data/data.json');
//#2
router.get('/', (req, res)=>{
    let pagePhotos = [];
    let pageSpeakers = data.speakers; //TAKES THE FILE AND TAKES THE OBJECT CLASS AS VARIABLE PAGESPEAKERS

    //REITERATE THROUGH SPEAKERS
    pageSpeakers.forEach((speakerObj)=>{
        pagePhotos = pagePhotos.concat(speakerObj.artwork);

    })

    //RENDERING OTHER THINGS IS IN THE SECOND PARAMETER
    res.render('index', {
        //GET ARTWORK AND PASSING THE ARRAY OF PAGEPHOTOS
        artwork: pagePhotos
    })
});

module.exports = router;