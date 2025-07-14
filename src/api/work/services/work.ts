/**
 * work service
 */

import { factories } from '@strapi/strapi'
const api = 'api::work.work'

export default factories.createCoreService(api, ({ strapi }) => ({
  async getExperience(): Promise<any[]> {
    return await strapi.documents(api).findMany({
      sort: { start_year: 'desc' }
    })
  }
}))
