import { user } from "../models/user.js";

export const saveUser = async (req, res) => {
    try {
        const userSave = new user(req.body);
        await userSave.save()
        res.status(201).json(userSave);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getUsers = async (req, res) => {
    try {
        const getUsers = await user.find();
        res.status(200).json(getUsers);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
export const getUser = async (req, res) => {
    try {
        const name = req.params.name;
        const getUser = await user.findOne({ name: name });
        res.status(200).json(getUser);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const updateUser = async (req, res) => {
    try {
        const name = req.params.name;
        const Updateuser = req.body;
        await user.updateOne({ name: name }, Updateuser);
        res.status(200).json({ message: "User Updated" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const deleteUser = async (req, res) => {
    try {
        const name = req.params.name;
        await user.updateOne({ name: name }, { state: false });
        res.status(200).json({ message: "User deleted" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
