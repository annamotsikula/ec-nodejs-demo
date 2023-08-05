const { Op } = require("sequelize");
const { User, Product } = require("../db/models")

const getProducts = async ({ alias, id, userId }) => {
  const filter = {
    ...(alias && {
      alias: {
        [Op.like]: `%${alias}%`
      }
    }),
    ...(id && {
      id,
    }),
    ...(userId && {
      userId,
    })
  };


  const data = await Product.findAll({
    where: {
      ...filter
    },
    include: {
      model: User,
      as: 'user',
      required: false,
    }
  })

  return data;
};

const getProductById = async (id) => Product.findByPk(id);

const deleteProduct = async (id) => {
  const card = await Product.findByPk(id);

  if (!card) {
    return {
      message: 'NOT_FOUND'
    }
  };

  await Product.destroy(id);
};

// NOTE: create -> Card.create({ ...})


// v1: NOTE: update -> Card.update({ })
// v2: NOTE: 
// {
//   const card = await Card.findByPk(10);
//   card.alias = '12312312';
//   await card.save();
// }


module.exports = {
  getProducts,
  getProductById, deleteProduct
}
