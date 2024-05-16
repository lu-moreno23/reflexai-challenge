import dayjs from "dayjs";
import "dayjs/locale/en";

dayjs.locale("en");

const calculateMonths = () => {
  const monthsArray = [];
  for (let i = 0; i < 12; i++) {
    // creates an array with the months to use for later validation
    const monthNameAbbr = dayjs().month(i).format("MMM"); // displays first three letters of the month
    monthsArray.push(monthNameAbbr);
  }
  return monthsArray;
};

export const months = calculateMonths();