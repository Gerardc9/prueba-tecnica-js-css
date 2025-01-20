const capitalize = (word) => {
  if (!word) return "";
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};

const capitalizeFullName = (names) => {
  if (!names) return "";
  return names.split(" ").map(capitalize).join(" ");
};

export default (json) => {
  return json
    .map(({ nombre, apellido, apellido2 }) => {
      const firstName = capitalizeFullName(nombre);
      const lastName = capitalizeFullName(apellido);
      const secondLastName = capitalizeFullName(apellido2);

      return [firstName, lastName, secondLastName].filter(Boolean).join(" ");
    })
    .join(", ");
};
