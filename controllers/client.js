const db = require('../models')
const Client = db.Client;

exports.create = async (req, res) => {
    console.log("Create client console", Client, req.body);
    const clientData = new Client({
        name: req.body.name,
        emailId: req.body.emailId,
        mobile: req.body.mobile,
    });
    try {
        const data = await clientData.save()
        console.log("saveData::", data);
        res.status(200).send({ msg: "Save Data", data: data })
    }
    catch (error) {
        console.log("error")
        res.status(400).send("Some Error Occur:" + error.toString());
    }

}

exports.getAll = async (req, res) => {
    try {
        const data = await Client.find();
        console.log("get All client", data);
        res.send(data);
    }
    catch (error) {
        console.log("Get client List error::", error.toString());
        res.status(400).send(error);
    }
}