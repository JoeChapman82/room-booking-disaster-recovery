const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DumpSchema = new Schema({
    bookings: [
        {
            start: Date,
            end: Date,
            name: String,
            description: String,
            room: String,
        }
    ],
    parkings: [
        {
            name: String,
            space: String,
            location: String,
            date: Date,
            isVisitor: Boolean,
        }
    ],
    rooms: [
        {
            name: String,
            equipment: [{
                type: String
            }],
            sitting: Number,
            standing: Number,
        }
    ],
    users: [
        {
            email: String,
            password: String,
            role: String,
        }
    ]
});

const Dump = mongoose.model('dump', DumpSchema);
module.exports = Dump;
