import { test } from "../models/test.js";
import { user } from "../models/user.js";

export const saveTest = async (req, res) => {
  try {
    const testSave = new test(req.body);
    await testSave.save();
    res.status(201).json(testSave);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const realizarTest = async (req, res) => {
  try {
    const name = req.params.name;
    const name_test = req.params.test;
    const usuario = await user.findOne({ name: name });
    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    if (usuario.test.length !== 0) {
      return res.status(400).json({ error: "El test ya ha sido realizado" });
    }

    const prueba = await test.findOne({ title: name_test });
    if (!prueba) {
      return res.status(404).json({ error: "Test no encontrado" });
    }

    // Contador de respuestas correctas
    const respuestas = req.body;
    let respuestasCorrectas = 0;

    // Comparar las respuestas proporcionadas por el usuario con las respuestas correctas
    for (let i = 0; i < respuestas.questions.length; i++) {
      if (
        respuestas.questions[i].correctAnswer ===
        prueba.questions[i].correctAnswer
      ) {
        respuestasCorrectas++;
      }
    }

    await usuario.save().then(() => {
      usuario.test = prueba._id;
      usuario.calification = respuestasCorrectas;
      return usuario.save();
    });

    return res.status(200).json({ message: "Test realizado exitosamente" });
  } catch (error) {
    console.error("Error al realizar el test:", error);
    return res.status(500).json({ error: "Error al realizar el test" });
  }
};
