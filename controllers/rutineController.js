import { user } from "../models/user.js";
import { rutine } from "../models/rutine.js";

export const saveRutine = async (req, res) => {
    try {
        const rutineSave = new rutine(req.body);
        await rutineSave.save()
        res.status(201).json(rutineSave);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


export const getRutine = async (req, res) => {
    try {
        const id = req.params._id;

        const rutineObtain = await rutine.findOne({ _id: id })

        res.status(201).json(rutineObtain);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getRutines = async (req, res) => {
    try {
        const rutines = await rutine.find();
        res.status(200).json(rutines);

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const editRutine = async (req, res) => {
    try {
        const id = req.params._id;
        const updateRutine = await rutine.findOneAndUpdate({ _id: id }, req.body,
            { new: true });

        res.status(200).json(updateRutine);


    } catch (error) {
        return res.status(500).json({ message: error.message })

    }

}

export const generateRutine = async (req, res) => {
    try {
        const name = req.params.name;
        const usuario = await user.findOne({ name: name });

        if (!usuario) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        const calf = usuario.calification;

        rutine.findOne({ calification: calf }).then(
            rutine => {
                usuario.rutineId = rutine;
                return usuario.save();
            }
        ).catch(error => {
            console.error("Error al asignar rutina", error);
        });

        return res.status(200).json({ message: 'Rutina asignada al usuario' });
    } catch (error) {
        return res.status(500).json({ error: 'Error al realizar el test' });
    }
};
