import mongoose, { Schema } from "mongoose"


const rutineSchema = new mongoose.Schema(
    {
        title: {
            type: String,
        },
        calification: {
            type: String
        },
        date:
        {
            type: Date,
            default: Date.now()
        },
        exercises: [{
            name: String,
            repetition: Number,
        }],
        duration: {
            type: Number
        },
        break: {
            type: Number
        }
        , serie:
            { type: Number }
    }
)

export const rutine = mongoose.model('Rutine', rutineSchema); 
