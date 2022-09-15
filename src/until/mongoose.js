module.exports = {
    mutipleMongooseToObject: function (mongooseArray) {
        return mongooseArray.map(mongoose => mongoose.toObject())
    },
    mongooseToObject: function (mongooseObject) {
        return mongooseObject ? mongooseObject.toObject() : mongooseObject
    }
}