export const doughnutData = (data) => {
  const labels = data.map((d) => d.label);
  const values = data.map((d) => d.value);
  const colors = data.map((d) => d.color);

  return {
    datasets: [
      {
        backgroundColor: colors,
        data: values,
        fill: false,
        pointBackgroundColor: colors,
        showLine: true,
        borderColor: colors[0],
      },
    ],
    labels,
  };
};
