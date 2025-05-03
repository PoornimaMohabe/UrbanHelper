const express = require("express");
const {
    registerVendor,
    loginVendor,
    getAllVendors,
    getVendorById,
    updateVendor,
    deleteVendor
} = require("../controller/vendor.controller");

const vendorRouter = express.Router();

vendorRouter.post("/vendor-registration", registerVendor);
vendorRouter.post("/vendor-login", loginVendor);

//  CRUD routes
vendorRouter.get("/get-all-vendor", getAllVendors);
vendorRouter.get("/vendor/:id", getVendorById);
vendorRouter.patch("/vendor-update/:id", updateVendor);
vendorRouter.delete("/vendor-delete/:id", deleteVendor);

module.exports = {
    vendorRouter
};
