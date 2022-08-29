const router = require('express').Router();

const { Location, Traveller, Trips } = require('../../models');

// GET all travellers

router.get('/', async (req, res) => {
    try {
      const travellerData = await Traveller.findAll({
        include: [{ model: Trips }, { model: Location }],
      });
      res.status(200).json(travellerData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// CREATE a new traveller record

router.post('/', async (req, res) => {
    try {
      const travellerData = await Traveller.create({
        reader_id: req.body.reader_id,
      });
      res.status(200).json(travellerData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

//   GET the data of a single traveller by ID

router.get('/:id', async (req, res) => {
    try {
      const travellerData = await Traveller.findByPk(req.params.id, {
        include: [{ model: Trips }, { model: Location }],
      });
  
      if (!travellerData) {
        res.status(404).json({ message: 'No traveller found with that id!' });
        return;
      }
  
      res.status(200).json(travellerData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // DELETE a traveller
router.delete('/:id', async (req, res) => {
    try {
      const travellerData = await Traveller.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!travellerData) {
        res.status(404).json({ message: 'No traveller found with that id!' });
        return;
      }
  
      res.status(200).json(travellerData);
    } catch (err) {
      res.status(500).json(err);
    }
  });