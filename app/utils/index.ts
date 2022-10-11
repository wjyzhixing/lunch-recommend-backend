export const computedValue = (time:number, love:number) => {
  return (Math.pow(2, love) / (1 + time));
};

export const rand = (min:number, max:number) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
