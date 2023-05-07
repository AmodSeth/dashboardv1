import User from "../models/User.js";


export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({ "user is found": user })
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const getAllUsers = async (req, res) => {
   
    try {
        const users = await User.find();
        res.status(200).json({
            results: users.length,
            data: {
                users
            }
        })
    } catch (error) {
        res.status(404).json({messasge:error.message})
    }
}