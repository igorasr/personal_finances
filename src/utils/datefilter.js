export const getCurrentMonth = () => {
  let date = new Date();
  return `${date.getFullYear()}-${date.getMonth() + 1}`;
};

export const filterListByMonth = (list, date) => {
  let newList = [];

  let [year, month] = date.split("-");

  list.map((item) => {
    if (
      item.date.getFullYear() === parseInt(year) &&
      item.date.getMonth() + 1 === parseInt(month)
    ) {
      newList.push(item);
    }
  });

  return newList;
};
