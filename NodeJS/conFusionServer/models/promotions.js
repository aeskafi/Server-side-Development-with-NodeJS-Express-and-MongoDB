/*
*  {
*   "name": "Weekend Grand Buffet",
*   "image": "images/buffet.png",
*   "label": "New",
*   "price": "19.99",
*   "description": "Featuring . . .",
*   "featured": false
*  }
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const promotionSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    label: {
        type: String,
        default: '',
    },
    price: {
        type: Currency,
        required: true,
        min: 0
    },
    description: {
        type: String,
        require: true
    },
    featured: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true,
    usePushEach: true
});

var Promotions = mongoose.model('Promotions', promotionSchema);

module.exports = Promotions;