import { useMemo } from "react";

// React hook that filters data by an user input
const useFilter = (data, userInput) => {
  const filteredData = useMemo(
    () =>
      data &&
      data.filter(
        obj =>
          obj.name && obj.name.toLowerCase().startsWith(userInput.toLowerCase())
      ),
    [data, userInput]
  );
  return { data: filteredData };
};

export default useFilter;
