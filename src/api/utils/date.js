function partsDate (date) {
  const dateParts = date.split("-");

  if (dateParts.length === 3) {
    const [day, month, year] = dateParts;
    return {day, month, year};
  } else {
    return response.status(422).json({error:"wrong date format"});
  }
}

export default partsDate;