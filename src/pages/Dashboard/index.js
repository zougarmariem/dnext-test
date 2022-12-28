import React, { useEffect, useState } from "react";

import LineChart from "../../components/LineChart";

import { useFile } from "../../hooks/useFile";

import { MONTHS } from "../../constants/months";
import { useExerciceContext } from "../../hooks/useExerciceContext";

const Dashboard = () => {
  // File
  const { contents, groupByYear, groupByCode, groupByMonth } = useFile();
  // State
  const [datasets, setDatasets] = useState(null);
  // Hook
  const { dispatch } = useExerciceContext();

  const groupBy = (array, key) => {
    // Return the end result
    return array.reduce((result, currentValue) => {
      // If an array already present for key, push it to the array. Else create an array and push the object
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
      return result;
    }, {}); // empty object is the initial value for result object
  };

  useEffect(() => {
    if (contents) {
      const labels = contents.map((item) => item.code);
      const datasets = contents.map((item) =>
        item.value ? parseInt(item.value) : 0
      );

      setDatasets({
        labels,
        datasets: [
          {
            label: "value",
            data: datasets,
            borderColor: "#1C7ED6",
            backgroundColor: "#63E6BE",
          },
        ],
      });
    }
  }, [contents]);

  useEffect(() => {
    if (groupByYear) {
      let newContents = contents.reduce((accumulator, curValue) => {
        accumulator.push({
          ...curValue,
          ...{ year: new Date(curValue.date).getFullYear() },
        });
        return accumulator;
      }, []);
      const contentGroupByYear = groupBy(newContents, "year");

      setDatasets({
        labels: Object.keys(contentGroupByYear),
        datasets: [
          {
            label: "value",
            data: Object.values(contentGroupByYear).map((item) => item.length),
            borderColor: "#1C7ED6",
            backgroundColor: "#63E6BE",
          },
        ],
      });
      dispatch({
        type: "DISABLE_GROUP_BY_YEAR",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupByYear]);

  useEffect(() => {
    if (groupByMonth) {
      let newContents = contents.reduce((accumulator, curValue) => {
        accumulator.push({
          ...curValue,
          ...{ month: MONTHS[new Date(curValue.date).getMonth()] },
        });
        return accumulator;
      }, []);
      const contentGroupByMonth = groupBy(newContents, "month");

      setDatasets({
        labels: MONTHS,
        datasets: [
          {
            label: "value",
            data: Object.values(contentGroupByMonth).map((item) => item.length),
            borderColor: "#1C7ED6",
            backgroundColor: "#63E6BE",
          },
        ],
      });
      dispatch({
        type: "DISABLE_GROUP_BY_MONTH",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupByMonth]);

  useEffect(() => {
    if (groupByCode) {
      const contentGroupByCode = groupBy(contents, "code");
      setDatasets({
        labels: Object.keys(contentGroupByCode),
        datasets: [
          {
            label: "value",
            data: Object.values(contentGroupByCode).map((item) => item.length),
            borderColor: "#1C7ED6",
            backgroundColor: "#63E6BE",
          },
        ],
      });
      dispatch({
        type: "DISABLE_GROUP_BY_CODE",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupByCode]);

  return (
    <div className="content">
      {Boolean(contents) && datasets && (
        <LineChart datasets={datasets} legend="Legend 1" />
      )}
    </div>
  );
};

export default Dashboard;
