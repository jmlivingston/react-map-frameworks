import { useEffect, useRef } from "react";
import MAP from "../constants/MAP";
import { getLocations } from "../data/locations";

function useDataInterval(callback, delay = MAP.DATA_INTERVAL) {
  const currentIndex = useRef(0);
  const savedCallback = useRef();
  const id = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    async function tick() {
      let isComplete = false;
      if (currentIndex.current + 1 === MAP.MAX_LOCATION_INDEX) {
        isComplete = true;
        clearInterval(id.current);
      }
      if (currentIndex.current === 0) {
        console.log("-------------------");
      }
      console.log(`Loading data from ${currentIndex.current}`);
      currentIndex.current += 1;
      const values = await getLocations(currentIndex.current - 1);
      savedCallback.current(values.default, isComplete);
    }
    if (delay !== null) {
      id.current = setInterval(tick, delay);
      return () => clearInterval(id.current);
    }
  }, [delay]);
}

export default useDataInterval;
