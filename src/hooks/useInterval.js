import { useEffect, useRef } from "react";

function useInterval(callback, delay) {
  const savedCallback = useRef();
  const id = useRef(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current(id.current);
    }
    if (delay !== null) {
      id.current = setInterval(tick, delay);
      return () => clearInterval(id.current);
    }
  }, [delay]);
}

export default useInterval;
