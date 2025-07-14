export default {
  beforeCreate(event) {
    const { data } = event.params
    data.duration = setJobDuration(data.start_year, data.end_year)
  },

  beforeUpdate(event) {
    const { data } = event.params
    data.duration = setJobDuration(data.start_year, data.end_year)
  }
}

function setJobDuration(startYear: number, endYear: number): string {
  const finalYear: number = endYear ? endYear : new Date().getFullYear()

  let duration: string | number = finalYear - startYear
  if (duration < 1) {
    duration = 1
  }
  return duration !== 1 ? duration + ' years' : duration + ' year'
}
