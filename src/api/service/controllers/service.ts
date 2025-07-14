/**
 * service controller
 */

import { factories } from '@strapi/strapi'
const api = 'api::service.service'

export default factories.createCoreController(api, ({ strapi }) => ({
  async find(): Promise<any[]> {
    return await strapi.service(api).getServices()
  },

  async findOne(ctx): Promise<any> {
    const { id } = ctx.params
    return await strapi.service(api).getServiceBySlug(id)
  }
}))
