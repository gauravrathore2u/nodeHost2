const studentModel = require('../model/studentModel.js');
const fs = require('fs');



exports.setAllStudents = async (req, resp)=>{
    try {
        fs.readFile('/Users/gaurav/Desktop/Host1/nodeHost1/data.json', 'utf-8', (err, data)=>{
            if(err){
                console.log("error in file", err);
                return;
            }

            const jsonData = JSON.parse(data);
            async function setData(){
                const response = await studentModel.create(jsonData)
                console.log("testing",response);
            }
            setData();
        })
        resp.status(200).json({
            status:200,
            mgs:"data set successfully"
        })
    } catch (error) {
        resp.status(200).json({
            status:200,
            mgs:error
        })
    }
}


exports.getAllStudents = async(req, resp)=>{
    try {
        const response = await studentModel.find();
        if(response){
            resp.status(200).json({
                result: 1,
                data:response
            })
        }
        else{
            resp.status(200).json({
                result: 0,
                msg:"Something went wrong"
            })
        }
    } catch (error) {
        resp.status(400).json({
            result: -1,
            msg:"error"
        })
    }
}