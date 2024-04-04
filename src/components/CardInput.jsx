import PropTypes from "prop-types";
import Input from "./CardInput/Input";

function CardInput({ birthDate, setBirthDate, dateType, errorMessage, error }) {
  const handleDaysChange = (event) => {
    const value = parseInt(event.target.value);
    setBirthDate({ ...birthDate, day: value });
  };

  const handleMonthsChange = (event) => {
    const value = parseInt(event.target.value);
    setBirthDate({ ...birthDate, month: value });
  };

  const handleYearsChange = (event) => {
    const value = parseInt(event.target.value);
    setBirthDate({ ...birthDate, year: value });
  };

  const textColor = error.empty
    ? "text-[#ff5757]"
    : error.invalid
      ? "text-[#ff5757]"
      : error.invalidDate
        ? "text-[#ff5757]"
        : "text-[#716f6f]";

  return (
    <div
      className={`flex justify-around font-semibold ${textColor} lg:justify-start lg:gap-5`}
    >
      <Input
        handleChange={handleDaysChange}
        dateType={dateType.day}
        placeHolderSign="DD"
        errorMessage={errorMessage}
        error={error}
        invalid={errorMessage.invalid.day}
      />
      <Input
        handleChange={handleMonthsChange}
        dateType={dateType.month}
        placeHolderSign="MM"
        errorMessage={errorMessage}
        error={error}
        invalid={errorMessage.invalid.month}
      />
      <Input
        handleChange={handleYearsChange}
        dateType={dateType.year}
        placeHolderSign="YYYY"
        errorMessage={errorMessage}
        error={error}
        invalid={errorMessage.invalid.year}
      />
    </div>
  );
}

CardInput.propTypes = {
  birthDate: PropTypes.object,
  setBirthDate: PropTypes.func.isRequired,
  dateType: PropTypes.object,
  errorMessage: PropTypes.object,
  error: PropTypes.object,
};

export default CardInput;
