import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  date_of_birth: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true
  },
  password:
  {
    type: String,
    required: true
  },
  state: {
    type: Boolean,
    default: true
  },
  calification: {
    type: String
  },
  test: [{ type: mongoose.Schema.Types.ObjectId, ref: 'test' }],
  rutineId: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'Rutine'
  }]

});

export const user = mongoose.model('User', userSchema); 