const centerCircleText = (textLength) => {
  let charlen = textLength;
  let calc = charlen * 8.2;
  let divd = calc / 2.46;
  return -divd;
};

export default centerCircleText;
