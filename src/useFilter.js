import { useMemo } from "react";

const useFilter = (data, userInput) => {
  console.log(data);
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
