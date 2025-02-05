import { $ } from "./utils";

const getCurrentDates = () => {
  const date = new Date();

  const dateOptions = {
    locale: "en-US",
    dayOptions: { weekday: "long" },
    fullDateOptions: { month: "long", day: "numeric", year: "numeric" },
  };

  const currentDay = date.toLocaleDateString(
    dateOptions.locale,
    dateOptions.dayOptions,
  );

  const currentFullDate = date.toLocaleDateString(
    dateOptions.locale,
    dateOptions.fullDateOptions,
  );

  return { currentDay, currentFullDate };
};

const handleDates = () => {
  const actualDates = getCurrentDates();

  const currentDay = $(".sidebar__header-actual-day");
  const currentFullDate = $(".sidebar__header-actual-date");

  currentDay.textContent = actualDates.currentDay;
  currentFullDate.textContent = actualDates.currentFullDate;
};

export default handleDates;
