// Example model


module.exports = function (sequelize, DataTypes) {

  var Blog = sequelize.define('blog', {
    title: DataTypes.STRING,
    text: DataTypes.STRING,
    abstract: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    classMethods: {
      associate: function (models) {
        // example on how to add relations
        // Article.hasMany(models.Comments);
      }
    },
    freezeTableName: true,
    tableName: 'blog',
    timestamps: false
  });

  return Blog;
};

