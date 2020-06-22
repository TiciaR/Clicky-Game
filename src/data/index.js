let characters = [
    {
        "id": 1,
        "name": "Mr Potatoe Head",
        "image": "https://vignette.wikia.nocookie.net/pixar/images/2/26/Mr._Potato_Head.png/revision/latest?cb=20200103225642"
    },
    {
        "id": 2,
        "name": "Slinky",
        "image": "https://vignette.wikia.nocookie.net/pixar/images/9/9e/Slinky_transparent.png/revision/latest?cb=20200419214057"
    },
    {
        "id": 3,
        "name": "Mater",
        "image": "https://vignette.wikia.nocookie.net/pixar/images/e/ee/Mater.png/revision/latest?cb=20160221135852"
    },
    {
        "id": 4,
        "name": "Lightning McQueen",
        "image": "https://vignette.wikia.nocookie.net/pixar/images/6/63/Disney-cars-mcqueen.jpg/revision/latest?cb=20110727053733"
    },
    {
        "id": 5,
        "name": "Iam Lightfoot",
        "image": "https://vignette.wikia.nocookie.net/pixar/images/9/97/Iantrans.png/revision/latest?cb=20200228150106"
    },
    {
        "id": 6,
        "name": "Eve",
        "image": "https://vignette.wikia.nocookie.net/pixar/images/c/ca/Eve_wall%E2%80%A2e_clipped_rev_1.png/revision/latest?cb=20131115143452"
    },
    {
        "id": 7,
        "name": "Wall-E",
        "image": "https://vignette.wikia.nocookie.net/pixar/images/d/de/Wall%E2%80%A2e_clipped_rev_1.png/revision/latest?cb=20170807223723"
    },
    {
        "id": 8,
        "name": "Woody",
        "image": "https://vignette.wikia.nocookie.net/disney/images/2/23/Woody_Prime_KHIII.png/revision/latest?cb=20200220173523"
    },
    {
        "id": 9,
        "name": "Remy",
        "image": "https://vignette.wikia.nocookie.net/disney/images/7/73/Profile_-_Remy.jpeg/revision/latest?cb=20190314174151"
    },
    {
        "id": 10,
        "name": "Emile",
        "image": "https://vignette.wikia.nocookie.net/disney/images/4/4d/Profile_-_Emile.jpeg/revision/latest?cb=20190314175504"
    },
    {
        "id": 11,
        "name": "Princess Atta",
        "image": "https://vignette.wikia.nocookie.net/pixar/images/e/e3/Attabug%27slife.png/revision/latest?cb=20110427121352"
    },

    {
        "id": 12,
        "name": "Arlo",
        "image": "https://vignette.wikia.nocookie.net/pixar/images/0/0e/Arlo_the_good_dinosaur_disney_pixar_1.png/revision/latest?cb=20170807223828"
    },

    {
        "id": 13,
        "name": "Butch",
        "image": "https://vignette.wikia.nocookie.net/pixar/images/c/c5/Butch.PNG/revision/latest?cb=20150709150809"
    },
    {
        "id": 14,
        "name": "Boo",
        "image": "https://vignette.wikia.nocookie.net/pixar/images/7/7c/Boo.png/revision/latest?cb=20110426152813"
    },

    {
        "id": 15,
        "name": "Celia Mae",
        "image": "https://vignette.wikia.nocookie.net/pixar/images/5/55/Celia_Mae.png/revision/latest?cb=20200207000010"
    },

    {
        "id": 16,
        "name": "Bruce",
        "image": "https://vignette.wikia.nocookie.net/disney/images/d/d3/Profile_-_Bruce.jpg/revision/latest?cb=20190319020831"
    }

]

// Add Array Index as id Property to each element.
characters = characters.map((ch, idx ) => {
    ch["id"] = idx;
    return ch;
  });
  
  const navMessages = [
    {
      id: 0,
      msg: "Click an image to begin!"
    },
    {
      id: 1,
      msg: "Try Again!!"
    },
    {
      id: 2,
      msg: "Hit the Next One!!"
    },
    {
      id: 3,
      msg: "You Win!!  Click an image to restart!"
    },
  ]
  
  module.exports = { characters, navMessages }