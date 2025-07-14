import { formatQueryParam } from '../../../../util'

export default {
  beforeCreate(event) {
    const { data } = event.params
    data.slug = formatQueryParam(data.name)
  },

  beforeUpdate(event) {
    const { data } = event.params
    data.slug = formatQueryParam(data.name)
  }
}
