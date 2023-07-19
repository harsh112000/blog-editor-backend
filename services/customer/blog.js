const { v1: uuidv1 } = require('uuid');

const {
  blog: BloglistModel,
} = require('../../database');
const Helper = require('../../utils/helper');

const save = async (payload) => {
  const {
    name, content, image, status,
  } = payload;

  const data = {
    name,
    content,
    image,
    status: status || 'draft',
    public_id: uuidv1(),

  };

  const response = await BloglistModel.create(data);

  if (response) {
    return { doc: { message: 'details saved successfully' } };
  }

  return { doc: { message: "details didn't saved" } };
};

const patch = async (payload) => {
  const {
    title, content, status, image, publiId,
  } = payload;

  const data = {
    title,
    content,
    image,
    status: status || 'draft',
    public_id: uuidv1(),

  };
  const response = await BloglistModel.update(data, { where: { public_id: publiId } });

  if (response) {
    return { doc: { message: 'details saved succesfully' } };
  }

  return { doc: { message: "details didn't updated" } };
};

const getList = async (payload) => {
  const { status } = payload;
  const response = await BloglistModel.findAll({
    attributes: [ 'title', 'content', 'image', 'status' ],
    where: { status },
  });

  if (response.length) {
    return { doc: response };
  }

  return { doc: [] };
};

const get = async (payload) => {
  const { image } = payload;

  const response = await BloglistModel.findOne({
    attributes: [ 'title', 'content', 'image' ],
    where: { image },
  });

  if (response) {
    const { dataValues } = response;
    const doc = Helper.convertSnakeToCamel(dataValues);

    return { doc };
  }

  return { doc: {} };
};

module.exports = {
  save,
  getList,
  get,
  patch,
};
