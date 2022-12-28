// Dependencies
import { useEffect, useState } from "react";

import { useExerciceContext } from "./useExerciceContext";

// Helpers
import { fetchExcelFile } from "../helpers/file";

export const useFile = () => {
  const { state, dispatch } = useExerciceContext();
  // State
  const [loading, setLoading] = useState(false);
  const [dataFile, setDataFile] = useState(false);

  useEffect(() => {
    if (dataFile) {
      const fetchDataContent = async () => {
        try {
          setLoading(true);
          const fileContent = await fetchExcelFile("random_data.csv");
          dispatch({
            type: "FETCH_DATA",
            contents: fileContent,
          });
        } catch (error) {
          setLoading(false);
        }
      };
      fetchDataContent();
      setDataFile(false);
      setLoading(false);
    }
  }, [dataFile, dispatch]);

  const { contents, groupByYear, groupByCode, groupByMonth } = state;

  return {
    contents,
    loading,
    groupByYear,
    groupByCode,
    groupByMonth,
    setDataFile,
  };
};
