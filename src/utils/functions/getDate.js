export const getDate = () => {
  const date = new  Date()
  const stringDate = date.toString()
  const splitDate = stringDate.split(" ")

  const lastCheck = splitDate[4].split(":")
  
  let dateObj = {
    weekDay: splitDate[0],
    month: splitDate[1],
    dayNumber: splitDate[2],
    curentTime: `${lastCheck[0]}:${lastCheck[1]}`,
    timezone: splitDate[5],
  }

  return dateObj
}