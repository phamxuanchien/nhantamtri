import departmentService from '../services/departmentService';

let createDepartment = async (req, res) => {
    try {
        let infor = await departmentService.createDepartment(req.body);
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

let getAllDepartmentManagers = async (req, res) => {
    try {
        let departments = await departmentService.getAllDepartmentManagers();
        return res.status(200).json(departments)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

let getAllDepartment = async (req, res) => {
    try {
        let infor = await departmentService.getAllDepartment();
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

let getDetailDepartmentById = async (req, res) => {
    try {
        let infor = await departmentService.getDetailDepartmentById(req.query.id);
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
    createDepartment: createDepartment,
    getAllDepartment: getAllDepartment,
    getDetailDepartmentById: getDetailDepartmentById,
    getAllDepartmentManagers: getAllDepartmentManagers,
}