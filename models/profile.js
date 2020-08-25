//Creating profile model
module.exports = function(sequelize, DataTypes) {
    var Profile = sequelize.define("Profile", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // The gender can't be null
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER(4),
            allowNull: false,
        },
        friends_list:{
            type: DataTypes.JSON(2000)
        },
        hobby: {
            type: DataTypes.STRING(2000)
        },
        bio: {
            type: DataTypes.STRING(1000)
        },
        img_url:{
            type: DataTypes.STRING(1000)
        } 
    });
    // Profile.associate = function (models){
    //     // Profile can't be created w/o an user due to foreign key constraint
    //     Profile.belongsTo(models.User,{
    //         foreignKey: { allowNull: false}
    //     });
    // }
    return Profile;
}