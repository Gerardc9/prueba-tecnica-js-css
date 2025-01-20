const calculateAverageAge = (data) => {
  if (!data || !data.length) return 0;

  const totalAge = data.reduce((sum, { edad }) => sum + edad, 0);
  return totalAge / data.length;
};

export default (json) => {
  return calculateAverageAge(json);
};
