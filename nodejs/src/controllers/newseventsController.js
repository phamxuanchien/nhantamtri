import newseventsService from '../services/newseventsService';

let createNewsevents = async (req, res) => {
    try {
        let infor = await newseventsService.createNewsevents(req.body);
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

let getAllNewsevents = async (req, res) => {
    try {
        let infor = await newseventsService.getAllNewsevents();
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

let getDetailNewseventsById = async (req, res) => {
    try {
        let infor = await newseventsService.getDetailNewseventsById(req.query.id);
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
    createNewsevents: createNewsevents,
    getAllNewsevents: getAllNewsevents,
    getDetailNewseventsById: getDetailNewseventsById,
}