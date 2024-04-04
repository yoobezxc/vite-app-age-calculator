import PropTypes from "prop-types";

function Input({
  dateType,
  placeHolderSign,
  handleChange,
  errorMessage,
  error,
  invalid,
}) {
  const colorRing = error.empty
    ? "ring-[#ff5757]"
    : error.invalid
      ? "ring-[#ff5757]"
      : error.invalidDate
        ? "ring-[#ff5757]"
        : "ring-[#dbdbdb]";

  const colorFocus = error.empty
    ? "focus:ring-[#ff5757]"
    : error.invalid
      ? "focus:ring-[#ff5757]"
      : error.invalidDate
        ? "focus:ring-[#ff5757]"
        : "focus:ring-[#854dff]";

  return (
    <div className="text-xs">
      <p className="uppercase tracking-widest">{dateType}</p>
      <input
        className={`mt-1 w-16 cursor-pointer rounded p-2  text-sm text-black ring-2  focus:outline-none  focus:ring-2 lg:w-20 ${colorRing} ${colorFocus}`}
        type="text"
        placeholder={placeHolderSign}
        onChange={handleChange}
      />
      <p className="mt-2 w-16 text-[0.48rem] italic text-[#ff5757] lg:w-20 lg:text-[0.55rem]">
        {error.empty
          ? errorMessage.empty
          : error.invalid
            ? invalid
            : error.invalidDate
              ? errorMessage.invalidDate
              : ""}
      </p>
    </div>
  );
}

Input.propTypes = {
  dateType: PropTypes.string,
  placeHolderSign: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.object,
  error: PropTypes.object,
  invalid: PropTypes.string,
};

export default Input;
