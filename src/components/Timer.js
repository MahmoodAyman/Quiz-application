import { useEffect } from "react";

export default function Timer({ dispatch, seconds }) {
  const minutes = Math.floor(seconds / 60),
    secons = seconds % 60;
  useEffect(
    function () {
      const id = setInterval(() => {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">{`${minutes > 9 ? minutes : `0${minutes}`} : ${
      secons > 9 ? secons : `0${secons}`
    }`}</div>
  );
}
