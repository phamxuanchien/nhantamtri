import branchService from '../services/branchService';

let createBranch = async (req, res) => {
    try {
        let infor = await branchService.createBranch(req.body);
        console.log('check infor :', infor)
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
let getAllBranchManagers = async (req, res) => {
    try {
        let branches = await branchService.getAllBranchManagers();
        return res.status(200).json(branches)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

let getAllBranch = async (req, res) => {
    try {
        let infor = await branchService.getAllBranch();
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

let getDetailBranchById = async (req, res) => {
    try {
        let infor = await branchService.getDetailBranchById(req.query.id, req.query.location);
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
    createBranch: createBranch,
    getAllBranch: getAllBranch,
    getDetailBranchById: getDetailBranchById,
    getAllBranchManagers: getAllBranchManagers,
}