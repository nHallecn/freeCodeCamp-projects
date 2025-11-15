const currentDate= new Date()

const currentDateFormat = `Current Date and Time: ${currentDate}`;

console.log(currentDateFormat)

function formatDateMMDDYYYY(date) {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  return `Formatted Date (MM/DD/YYYY): ${month}/${day}/${year}`;
}

console.log(formatDateMMDDYYYY(currentDate))

function formatDateLong(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString(undefined, options);
  return `Formatted Date (Month Day, Year): ${formattedDate}`;
}

console.log(formatDateLong(currentDate))
