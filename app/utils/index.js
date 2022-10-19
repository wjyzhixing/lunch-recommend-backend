const computedValue = (time, love) => {
  return (Math.pow(2, love) / (1 + time));
};

const rand = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

module.exports = {
  computedValue,
  rand,
}