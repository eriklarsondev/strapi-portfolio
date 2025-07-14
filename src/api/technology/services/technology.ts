/**
 * technology service
 */

import { factories } from '@strapi/strapi'
const api = 'api::technology.technology'

export default factories.createCoreService(api, ({ strapi }) => ({
  async getTech(): Promise<any[]> {
    return await strapi.documents(api).findMany({
      sort: { name: 'asc' }
    })
  }
}))
