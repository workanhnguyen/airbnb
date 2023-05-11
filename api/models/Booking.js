const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookingSchema = new Schema({
    owner: { type:mongoose.Schema.Types.ObjectId, required:true },
    place: { type:mongoose.Schema.Types.ObjectId, required:true, ref: 'Place' },
    checkIn: { type:Date, required:true },
    checkOut: { type:Date, required:true },
    name: { type: String, required:true },
    phoneNumber: { type: String, required:true },
    price: Number,
});

const BookingModel = mongoose.model('Booking', BookingSchema);

module.exports = BookingModel;