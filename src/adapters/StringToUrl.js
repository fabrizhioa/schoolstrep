const StringToUrl = (string) => {
  let newUrl = string.toLowerCase().replaceAll(" ", "-");
  return newUrl;
};

export default StringToUrl;
