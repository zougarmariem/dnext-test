export const getOptions = (legend) => {
  return {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: legend,
      },
    },
  };
};
