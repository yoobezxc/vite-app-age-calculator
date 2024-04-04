import CardInput from "./CardInput";
import CardButton from "./CardButton";
import CardDisplay from "./CardDisplay";
import { useState } from "react";

function Card() {
  const [birthDate, setBirthDate] = useState({
    day: 0,
    month: 0,
    year: 0,
  });

  const [dateResult, setDateResult] = useState({
    day: "- -",
    month: "- -",
    year: "- -",
  });

  const errorMessage = {
    empty: "This field is required",
    invalid: {
      day: "Must be a valid day",
      month: "Must be a valid month",
      year: "Must be a in the past",
    },
    invalidDate: "Must be a valid date",
  };

  const [error, setError] = useState({
    empty: false,
    invalid: false,
    invalidDate: false,
  });

  const date = new Date();

  const currentDate = {
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
  };

  const dateType = {
    day: "Day",
    month: "Month",
    year: "Year",
  };

  return (
    <div className="w-72 rounded-3xl rounded-br-[80px] bg-white p-5 lg:w-[420px] lg:p-8">
      <CardInput
        dateType={dateType}
        birthDate={birthDate}
        setBirthDate={setBirthDate}
        errorMessage={errorMessage}
        error={error}
      />
      <CardButton
        birthDate={birthDate}
        currentDate={currentDate}
        dateResult={dateResult}
        setDateResult={setDateResult}
        error={error}
        setError={setError}
      />
      <CardDisplay dateResult={dateResult} />
    </div>
  );
}

export default Card;
