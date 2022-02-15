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

export const formatDate = (date) => {
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();

  return `${addZeroToDate(day)}/${addZeroToDate(month + 1)}/${year}`;
};

const addZeroToDate = (month) => (month < 10 ? `0${month}` : `${month}`);

export const formatCurrentMonth = (currentMonth) => {
  let [year, month] = currentMonth.split("-");

  let months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  return `${months[parseInt(month) - 1]} ${year}`;
};
