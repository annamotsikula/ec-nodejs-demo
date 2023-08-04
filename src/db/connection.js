const { Sequelize } = require("sequelize");
const { Product, User } = require("./models");

const config = require("./config");

const connection = new Sequelize(
  config.name,
  config.username,
  config.password,
  {
    host: "localhost",
    dialect: "postgres",
  }
);

(async () => {
  try {
    await connection.authenticate();
  } catch (error) {
    console.error("Unable to connect db", error);
  }
})();

const dbModels = [Product, User];

dbModels.forEach((i) => i.init(connection));

User.hasMany(Product, {
  as: "products",
  foreignKey: {
    name: "userId",
    allowNull: false,
  },
});
Product.belongsTo(User, {
  as: "users",
  foreignKey: {
    name: "userId",
    allowNull: false,
  },
});

(async () => {
  const syncPromises = [
    User.sync({ force: false }).catch((e) => console.error("User", e)),
    Product.sync({ force: false }).catch((e) => console.error("Product", e)),
  ];

  await Promise.all(syncPromises);
})();

module.exports = connection;
