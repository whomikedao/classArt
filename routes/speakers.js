//#1 SINCE IN ROUTE GET ROUTER
let express = require('express');
let router = express.Router();
let data = require('../data/data.json');



//#2
router.get('/speakers', (req, res)=>{
    let pagePhotos = [];
    let pageSpeakers = [];

    data.speakers.forEach((speakerObj) => {
        pagePhotos = pagePhotos.concat(speakerObj.artwork)
    });

    res.render('speakers', {
        artwork: pagePhotos,
        speakers: data.speakers
    })

    res.send('hello speakers');
});


router.get('/speakers/:speakerid', (req, res)=>{
    let pagePhotos = [];
    let pageSpeakers = [];

    data.speakers.forEach((speakerObj)=>{
        if(speakerObj.shortname == req.params.speakerid){ //SPEAKER ID POPS UP ON THE ROUTE PAGE WHEN CLICKED WHICH IS THE REQ IN THE PARAMS OF ROUTER.GET
            pageSpeakers.push(speakerObj);
            pagePhotos = pagePhotos.concat(speakerObj.artwork);
        }
    })

    pageTitle = pageSpeakers[0].title
    pageArtistName = pageSpeakers[0].name;

    // res.render('speakers')
    res.render('speakers', {
        pageTitle: pageTitle,
        artistName: pageArtistName,
        artwork: pagePhotos,
        speakers: pageSpeakers
    })
})

module.exports = router;