const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { VendorModel } = require("../model/vendor.model");
require("dotenv").config();


const registerVendor = async (req, res) => {
    const { name, email, password, mobileNumber, serviceType, experience, charges, location,profileImage,status, description,  role } = req.body;

    try {
        const vendorEmail = await VendorModel.findOne({ email });
        const vendorMobile = await VendorModel.findOne({ mobileNumber });

        if (vendorEmail) {
            res.status(200).json({status : false , msg: `user already registered with email ${email}` });
        } else if (vendorMobile) {
            res.status(200).json({status : false , msg: `user already registered with mobile number ${mobileNumber}` });
        } else {
            bcrypt.hash(password, 5, async function (err, hash) {
                if (err) {
                    res.status(400).json({status : false , msg: "Error while hashing password" });
                } else {
                    const newVendor = new VendorModel({
                        name,
                        email,
                        password: hash,
                        mobileNumber,
                        role,
                        serviceType,
                        experience,
                        charges,
                        location, 
                        profileImage, 
                        status, 
                        description
                    });
                    await newVendor.save();
                    res.status(200).json({status : true , msg: `user registered successfully` });
                }
            });
        }
    } catch (error) {
        res.status(400).json({status : false , msg: error.message });
    }
};


const loginVendor = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await VendorModel.findOne({ email });

        if (!user) {
            res.status(200).json({status : false , msg: `please register first or please check email` });
        } else {
            bcrypt.compare(password, user.password, function (err, result) {
                if (err) {
                    res.status(400).json({status : false , msg: err });
                } else if (result) {
                    const token = jwt.sign({ tokenUser: user }, process.env.secret_key);
                    res.status(200).json({status : true , msg: "user login successfully", user, token });
                } else {
                    res.status(200).json({status : false , msg: "Please check password" });
                }
            });
        }
    } catch (error) {
        res.status(400).json({status : false , msg: error.message });
    }
};


const getAllVendors = async (req, res) => {
    try {
        const vendors = await VendorModel.find();
        res.status(200).json({status : true , vendors});
    } catch (error) {
        res.status(400).json({status : false , msg: error.message });
    }
};


const getVendorById = async (req, res) => {
    const { id } = req.params;
    try {
        const vendor = await VendorModel.findById(id);
        if (vendor) {
            res.status(200).json({status : true ,vendor});
        } else {
            res.status(404).json({status : false , msg: "Vendor not found" });
        }
    } catch (error) {
        res.status(400).json({status : false , msg: error.message });
    }
};


const updateVendor = async (req, res) => {
    const { id } = req.params;
    try {
        await VendorModel.findByIdAndUpdate(id, req.body);
        res.status(200).json({status : true , msg: "Vendor updated successfully" });
    } catch (error) {
        res.status(400).json({status : false , msg: error.message });
    }
};


const deleteVendor = async (req, res) => {
    const { id } = req.params;
    try {
        await VendorModel.findByIdAndDelete(id);
        res.status(200).json({ status : true ,msg: "Vendor deleted successfully" });
    } catch (error) {
        res.status(400).json({status : false , msg: error.message });
    }
};


module.exports = {
    registerVendor,
    loginVendor,
    getAllVendors,
    getVendorById,
    updateVendor,
    deleteVendor
};
