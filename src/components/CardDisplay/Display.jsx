import PropTypes from "prop-types";

function Display({ value, timeType }) {
  return (
    <>
      <p className="mb-1 text-4xl font-black italic text-[#854dff] lg:text-5xl">
        {value} <span className="text-black">{timeType}</span>
      </p>
    </>
  );
}

Display.propTypes = {
  value: PropTypes.string,
  timeType: PropTypes.string,
};

export default Display;
