import PropTypes from "prop-types";
import Display from "./CardDisplay/Display";

function CardDisplay({ dateResult }) {
  return (
    <section className="my-5">
      <Display value={dateResult.year} timeType="years" />
      <Display value={dateResult.month} timeType="months" />
      <Display value={dateResult.day} timeType="days" />
    </section>
  );
}

CardDisplay.propTypes = {
  dateResult: PropTypes.object,
};

export default CardDisplay;
