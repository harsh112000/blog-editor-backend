const { Blog: BlogService } = require('../../services/customer');

const save = async (req, res) => {
  try {
    const { body: data } = req;
    const { doc } = await BlogService.save(data);

    if (doc) {
      return res.postRequest();
    }

    return res.postSuccessfully();
  } catch (err) {
    return res.serverError();
  }
};

const patch = async (req, res) => {
  try {
    const { body: data, params: { publicId } } = req;

    const { doc } = await BlogService.patch(...data, publicId);

    if (doc) {
      return res.postSuccessfully();
    }

    return res.badRequest();
  } catch (err) {
    return res.serverError();
  }
};

const getSubmittedList = async (req, res) => {
  try {
    const data = { status: 'submitted' };

    const { doc } = await BlogService.getList(data);

    if (doc) {
      return res.getRequest(doc);
    }

    return res.getRequest(doc);
  } catch (err) {
    return res.serverError();
  }
};

const getDraftedList = async (req, res) => {
  try {
    const data = { status: 'draft' };

    const { doc } = await BlogService.getList(data);

    if (doc) {
      return res.getRequest(doc);
    }

    return res.getRequest(doc);
  } catch (err) {
    return res.serverError();
  }
};

const get = async (req, res) => {
  const { name } = req.query;
  const data = { name };
  const { doc } = await BlogService.get(data);

  if (doc) {
    return res.getRequest();
  }

  return res.getRequest();
};

module.exports = {
  save,
  getSubmittedList,
  getDraftedList,
  get,
  patch,
};
