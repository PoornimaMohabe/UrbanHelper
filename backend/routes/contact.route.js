const express = require("express");
const { submitContactQuery, getAllContactQueries } = require("../controller/contact.controller");

const contactRouter = express.Router();

contactRouter.post("/submit-query", submitContactQuery);
contactRouter.get("/get-all-queries", getAllContactQueries); 

module.exports = { contactRouter };
