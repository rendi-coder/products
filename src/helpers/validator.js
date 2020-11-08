const ERROR_TYPE = {
  title: "title",
  price: "price",
  description: "description",
};

const ERROR_MESSAGE = {
  [ERROR_TYPE.title]: "Title length must be from 5 to 25 symbols",
  [ERROR_TYPE.price]: "Price must be number up to 999999999999",
  [ERROR_TYPE.description]: "Description must be from 5 to 200 symbols",
};

const validationMethods = {
  [ERROR_TYPE.title]: (title) =>
    title.split("").filter((e) => e !== " ").length < 5 || title.length > 25,
  [ERROR_TYPE.price]: (price) =>
    !isFinite(price) ||
    price.toString().trim().length === 0 ||
    (isFinite(price) && price.toString().trim().length > 12),
  [ERROR_TYPE.description]: (description) =>
    description.split("").filter((e) => e !== " ").length < 5 ||
    description.length > 200,
};

const addError = (errors, value, type) => {
  if (validationMethods[type](value)) errors[type] = ERROR_MESSAGE[type];
};

export default function validation(title, price, description) {
  const errors = {};
  addError(errors, title, ERROR_TYPE.title);
  addError(errors, price, ERROR_TYPE.price);
  addError(errors, description, ERROR_TYPE.description);
  return errors;
}
