/**
 * technology service
 */

import { factories } from '@strapi/strapi'
const model = 'api::technology.technology'

export default factories.createCoreService(model, ({ strapi }) => ({
  async getTech(): Promise<any[]> {
    return await strapi.documents(model).findMany({
      sort: { name: 'asc' }
    })
  }
}))
