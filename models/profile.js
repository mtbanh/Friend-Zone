//Creating profile model
module.exports = function(sequelize, DataTypes) {
    var Profile = sequelize.define("Profile", {
       
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
       
        files:{
            type: DataTypes.STRING(1000)        
        },
        firstName: {
            type: DataTypes.STRING(2000),
            allowNull: false,
        },
        hobby: {
            type: DataTypes.JSON(1000)
        },
        lastName: {
            type: DataTypes.STRING(1000),
            allowNull: false,
        },
        
        // gender: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
       
       
       
        friends_list:{
            type: DataTypes.JSON(1000)
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