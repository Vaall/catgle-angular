// Endpoints for external data
const { Router } = require('express');
const router = new Router();
const kitties = require('../../kitties');

router.post('/all', (req, res) => {
  setTimeout(() => {
    res.status(200).send(kitties);
  }, 1000)
});

router.post('/by-age', (req, res) => {
  const kittiesArr = [];
  kitties.map((kitty) => {
    if (kitty.age === parseInt(req.body.data)) {
      kittiesArr.push(kitty);
    }
  })
  setTimeout(() => {
    if (kittiesArr.length) {
      res.send(kittiesArr);
    } else {
      res.send(false);
    }
  }, 1500)
})

router.post('/by-name-or-breed', (req, res) => {
  const kittiesArr = [];
  kitties.map((kitty) => {
    if (kitty.name.toUpperCase().includes(req.body.data.toUpperCase())) {
      kittiesArr.push(kitty);
    }
  })
  if (!kittiesArr.length) {
    kitties.map((kitty) => {
      if (kitty.breed.toUpperCase().includes(req.body.data.toUpperCase())) {
        kittiesArr.push(kitty);
      }
    })
  }
  setTimeout(() => {
    if (kittiesArr.length) {
      res.send(kittiesArr);
    } else {
      res.send(false);
    }
  }, 1500)
});

module.exports = router;