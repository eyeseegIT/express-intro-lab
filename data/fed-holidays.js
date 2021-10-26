const fedHolidays = [
  {day: "New Year's Day", observed: true},
  {day: "Memorial Day", observed: true},
  {day: "Independence Day", observed: true},
  {day: "Labor Day", observed: true},
  {day: "Veteran's Day", observed: false},
  {day: "Thanksgiving Day", observed: false},
  {day: "Christmas Day", observed: false},
]

const find = (conditions, callback) => {
  try {
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    if (Object.keys(conditions).length === 0) return callback(null, fedHolidays)
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}
export { 
	find
}