const Date = require('../models/date')


exports.addDate = async (req, res) => {
    try {

      const newDate= new Date(req.body)
  
      await newDate.save();
  
      res.status(201).json("Added to a database");
    } catch (e) {
      res.status(500).json(e);
    }
  };