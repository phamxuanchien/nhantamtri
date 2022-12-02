import projectneedhelpService from '../services/projectneedhelpService';

let createProjectneedhelp = async (req, res) => {
    try {
        let infor = await projectneedhelpService.createProjectneedhelp(req.body);
        return res.status(200).json(
            infor
        )
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

let getAllProjectneedhelp = async (req, res) => {
    try {
        let infor = await projectneedhelpService.getAllProjectneedhelp();
        return res.status(200).json(
            infor
        )

    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

let getDetailProjectneedhelpById = async (req, res) => {
    try {
        let infor = await projectneedhelpService.getDetailProjectneedhelpById(req.query.id);
        return res.status(200).json(
            infor
        )

    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

module.exports = {
    createProjectneedhelp: createProjectneedhelp,
    getAllProjectneedhelp: getAllProjectneedhelp,
    getDetailProjectneedhelpById: getDetailProjectneedhelpById,
}