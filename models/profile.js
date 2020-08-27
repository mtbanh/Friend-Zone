//Creating profile model
module.exports = function(sequelize, DataTypes) {
    var Profile = sequelize.define("Profile", {
        firstName: {
            type: DataTypes.STRING(2000),
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING(1000),
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER(4),
            allowNull: false,
        },
        bio: {
            type: DataTypes.STRING(1000)
        },
       
       
        hobby: {
            type: DataTypes.STRING(2000)
        },
       
       
        files:{
            type: DataTypes.JSON(5000)        
        },
        
        friends_list:{
            type: DataTypes.JSON(2000)
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