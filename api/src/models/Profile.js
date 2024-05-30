const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Profile", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        profile_Image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        biography:{
            type: DataTypes.STRING,
            allowNull: true
        },
    },{
        timestamps: false
    })
}