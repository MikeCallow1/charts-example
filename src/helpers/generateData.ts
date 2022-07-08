export const generateData = (numOfRecords: number = 7) => {
  const data = [];
  for (let i = 0; i < numOfRecords; i++) {
    data.push({
      date: Intl.DateTimeFormat().format(new Date().setDate(new Date().getDate() - 6 + i)),
      visits: Math.floor(Math.random() * 500),
      leads: Math.floor(Math.random() * 200),
      conversions: Math.floor(Math.random() * 60),
    });
  }
  return data;
}