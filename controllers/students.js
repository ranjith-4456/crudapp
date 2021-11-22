const express = require('express');
const mongoose = require('mongoose');

const Student = require('../model/studentdata.js');

const router = express.Router();

const getStudents = async (req, res) => {
    try {
        const student = await Student.find();
        console.log("afetr schema find");
        res.status(200).json(student);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getspecStudent = async (req, res) => {
    const id = req.params.id;
    try {
        const stud = await Student.findOne({ _id: id });
        res.status(200).json(stud);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const createstudent = async (req, res) => {
    console.log(req.body);
    const newstudent = new Student({
        name: req.body.name,
        roll: req.body.roll,
        registration: req.body.registration,
        subjects: req.body.subjects,
        //registered_on:req.body.created_on

    })
    console.log('test>', newstudent)
    try {
        await newstudent.save();

        res.status(201).json(newstudent);

    } catch (error) {
        res.json({ message: error.message });
    }

}

const updatestudent = async (req, res) => {
    const id = req.params.id;
    var updatingPayload = req.body;
    try {
        var result = await Student.findOneAndUpdate({
            _id: id,
        },
            updatingPayload
        );
        result = await Student.findById(id)
        res.status(200).json(result);

    } catch (error) {
        res.status(401).json({ message: error.message });
    }

}

const deletestudent = async (req, res) => {
    const id = req.params.id;

    try {
        await Student.findOneAndRemove({ _id: id});
        res.status(200).json({ id: id });

    } catch (error) {
        res.status(402).json({ message: error.message });
    }
}

module.exports.getStudents = getStudents;
module.exports.createstudent = createstudent;
module.exports.getspecStudent = getspecStudent;
module.exports.updatestudent = updatestudent;
module.exports.deletestudent = deletestudent;