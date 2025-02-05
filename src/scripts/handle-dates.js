import { $ } from "./utils";

const getActualDates = () => {
  const date = new Date();

  const dateOptions = {
    locale: "en-US",
    dayOptions: { weekday: "long" },
    fullDateOptions: { month: "long", day: "numeric", year: "numeric" },
  };

  const actualDay = date.toLocaleDateString(
    dateOptions.locale,
    dateOptions.dayOptions,
  );

  const actualFullDate = date.toLocaleDateString(
    dateOptions.locale,
    dateOptions.fullDateOptions,
  );

  return { actualDay, actualFullDate };
};

const handleDates = () => {
  const actualDates = getActualDates();

  const actualDay = $(".sidebar__header-actual-day");
  const actualFullDate = $(".sidebar__header-actual-date");

  actualDay.textContent = actualDates.actualDay;
  actualFullDate.textContent = actualDates.actualFullDate;
};

export default handleDates;
