const { Sequelize, DataTypes, Model } = require('sequelize');

sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
)

// const sequelize = new Sequelize('my_blog', 'postgres', 'malikN', {
//     host: 'localhost',
//     dialect: 'postgres'
// });

class Post extends Model {}

Post.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    titleImg: {
        type: DataTypes.STRING
    },
    userLogin: {
        type: DataTypes.STRING,
        allowNull: false
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Post'
});



class User extends Model {}
User.init( {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    login: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'User'
})

sequelize.sync()

module.exports = {
    sequelize,
    User,
    Post
}