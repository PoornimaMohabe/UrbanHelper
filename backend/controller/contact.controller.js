const { ContactModel } = require("../model/contact.model");


const submitContactQuery = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ status: false, msg: "All fields are required" });
  }

  try {
    const newQuery = new ContactModel({ name, email, message });
    await newQuery.save();
    res.status(200).json({ status: true, msg: "Query submitted successfully" });
  } catch (error) {
    res.status(400).json({ status: false, msg: error.message });
  }
};

const getAllContactQueries = async (req, res) => {
  try {
    const queries = await ContactModel.find();
    res.status(200).json({ status: true, queries });
  } catch (error) {
    res.status(400).json({ status: false, msg: error.message });
  }
};

module.exports = {
  submitContactQuery,
  getAllContactQueries,
};
