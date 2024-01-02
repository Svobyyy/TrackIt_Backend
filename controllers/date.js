const Date = require("../models/date");

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
  const {
    name,
    protein,
    carbohydrates,
    fat,
    fiber,
    when,
    quantity,
    update,
    oldWhen,
    id,
  } = req.body;

  try {
    if (update) {
      await Date.updateMany(
        {},
        { $pull: { [oldWhen.toLowerCase()]: { _id: id } } }
      );
    }
    await Date.updateOne(
      { date: req.params.date },
      {
        $push: {
          [when.toLowerCase()]: {
            name,
            protein,
            carbohydrates,
            fat,
            fiber,
            quantity,
          },
        },
      }
    );
    res.status(201).send();
  } catch (e) {
    res.status(500).json(e);
  }
};

exports.DeleteProductFromDate = async (req, res) => {
  try {
    const { when, id } = req.params;
    await Date.updateMany({}, { $pull: { [when]: { _id: id } } });
    res.status(201).send();
  } catch (e) {
    res.status(500).json(e);
  }
};
