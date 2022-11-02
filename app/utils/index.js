const computedValue = (time, love) => {
  return (Math.pow(2, love) / (1 + time));
};

const rand = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const judgeTime = () => {
  const hour = new Date().getHours();
  const Morning = [23,0,1,2,3,4,5,6,7,8];
  const noon = [9,10,11,12,13,14];
  const evening = [15,16,17,18,19,20,21,22]
  if(Morning.includes(hour)) return ["全部", "早餐"]
  if(noon.includes(hour)) return ["全部", "午餐"]
  if(evening.includes(hour)) return ["全部", "晚餐"]
  return ["全部"]
}

module.exports = {
  computedValue,
  rand,
  judgeTime
}