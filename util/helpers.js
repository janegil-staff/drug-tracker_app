//in your case it will be like this:
export const getTotalValuesFromEntries = (data) => {
  let resultarr = [];
  data.forEach((d) => {
    data.forEach((d2) => {
      //if both objects have same site and they are not the same object
      if (d2.type == d.type && d != d2) {
        let result = {
          type: d.type,
          totalAmount: d2.amount + d.amount,
          totalCost: d2.price + d.price,
        };

        if (!resultarr.some((item) => item.type === result.type)) {
          resultarr.push(result);
        }
      }
    });
  });
  // Make sure that aarray includes single entries also
  data.forEach((d) => {
    resultarr.forEach((r) => {
      if (d.type !== r.type) {
        let result = {
          type: d.type,
          totalAmount: d.amount,
          totalCost: d.price,
        };
        if (!resultarr.some((item) => item.type === result.type)) {
          resultarr.push(result);
        }
      }
    });
  });
  return resultarr;
};

export const getTotalSum = (data) => {
  let sum = 0;
  data.forEach((d) => {
    sum += d.totalCost;
  });

  return sum;
};
