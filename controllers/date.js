const Date = require("../models/date");

exports.addDate = async (req, res) => {
  try {
    const newDate = new Date(req.body);

    await newDate.save();

    res.status(201).json("Added to a database");
  } catch (e) {
    res.status(500).json(e);
  }
};

exports.getDate = async (req, res) => {
  try {
    const date = await Date.findOne({ date: req.params.date });

    if (date !== null) {
      res.status(200).json(date);
    } else {
      const newDate = new Date({
        date: req.params.date,
        breakfast: [],
        lunch: [],
        dinner: [],
        snacks: [],
      });
      await newDate.save();
      res.status(201).json(newDate);
    }
  } catch (e) {
    res.status(500).json(e);
  }
};

exports.addProductToDate = async (req, res) => {
  try {
    await Date.updateOne(
      { _id: "658549fa96773a3c50a7a7a1" },
      {
        $push: {
          breakfast: {
            name: "test",
            protein: 24,
          },
        },
      }
    );
    const test = await Date.find();

    console.log(test);
    res.status(200).json(test);
  } catch (e) {
    res.status(500).json(e);
  }
};
