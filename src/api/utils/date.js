function partsDate (date) {
  const dateParts = date.split("-");
  const datePartsCount = 3;

  if (dateParts.length === datePartsCount) {
    const [day, month, year] = dateParts;
    return {day, month, year};
  } else {
    throw new Error("Wrong date format");
  }
}

export default partsDate;