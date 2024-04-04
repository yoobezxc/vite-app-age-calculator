import PropTypes from "prop-types";
import arrowIcon from "../assets/images/icon-arrow.svg";

function CardButton({
  birthDate,
  currentDate,
  setDateResult,
  dateResult,
  setError,
  error,
}) {
  function handleCalculateDate() {
    if (birthDate.day === 0 || birthDate.month === 0 || birthDate.year === 0) {
      setError({ ...error, empty: true, invalid: false, invalidDate: false });
      setDateResult({ ...dateResult, day: "- -", month: "- -", year: "- -" });
      return;
    } else {
      setError({ ...error, empty: false, invalid: false, invalidDate: false });
    }

    let day = currentDate.day - birthDate.day;
    let month = currentDate.month - birthDate.month;
    let year = currentDate.year - birthDate.year;

    const daysInCurrentMonth = new Date(
      currentDate.year,
      currentDate.month,
      0,
    ).getDate();

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      setError({ ...error, empty: true, invalid: false, invalidDate: false });
      setDateResult({ ...dateResult, day: "- -", month: "- -", year: "- -" });
      return;
    } else {
      setError({ ...error, empty: false, invalid: false, invalidDate: false });
    }

    if (birthDate.year > currentDate.year) {
      setError({ ...error, empty: false, invalid: true, invalidDate: false });
      setDateResult({ ...dateResult, day: "- -", month: "- -", year: "- -" });
      return;
    } else {
      setError({ ...error, empty: false, invalid: false, invalidDate: false });
    }

    if (birthDate.day > daysInCurrentMonth) {
      setError({ ...error, empty: false, invalid: false, invalidDate: true });
      setDateResult({ ...dateResult, day: "- -", month: "- -", year: "- -" });
      return;
    } else {
      setError({ ...error, empty: false, invalid: false, invalidDate: false });
    }

    if (day < 0) {
      day += daysInCurrentMonth;
    }

    if (month < 0) {
      year--;

      month = 12 + month;
    }

    setDateResult({ ...dateResult, day, month, year });
  }

  return (
    <div className="relative py-5">
      <button onClick={handleCalculateDate}>
        <img
          className="absolute left-24 top-5 w-12 rounded-full bg-[#854dff] p-3  transition-all hover:bg-black lg:left-[300px] lg:w-14 lg:p-4"
          src={arrowIcon}
          alt="arrow icon"
        />
      </button>
      <div className="bg-[#dbdbdb] p-[1px]"></div>
    </div>
  );
}

CardButton.propTypes = {
  birthDate: PropTypes.object,
  currentDate: PropTypes.object,
  setDateResult: PropTypes.func.isRequired,
  dateResult: PropTypes.object,
  setError: PropTypes.func.isRequired,
  error: PropTypes.object,
};

export default CardButton;
