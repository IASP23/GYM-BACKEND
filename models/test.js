import mongoose, { Schema } from "mongoose"


const testSchema = new mongoose.Schema(
    {
        title: {
            type: String,
        },
        level: {
            type: String
        },
        date:
        {
            type: Date,
            default: Date.now()
        },
        questions: [{
            question: String,
            options: [String],
            correctAnswer: String,
        }]
    }
)

export const test = mongoose.model('test', testSchema); 
