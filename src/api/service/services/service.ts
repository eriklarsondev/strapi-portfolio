/**
 * service service
 */

import { factories } from '@strapi/strapi'
const api = 'api::service.service'

export default factories.createCoreService(api, ({ strapi }) => ({
  async getServices(): Promise<any[]> {
    return await strapi.documents(api).findMany({
      sort: { name: 'asc' }
    })
  },

  async getServiceBySlug(id: string): Promise<any> {
    return await strapi.db.query(api).findOne({
      where: { slug: id },
      populate: ['seo']
    })
  }
}))
