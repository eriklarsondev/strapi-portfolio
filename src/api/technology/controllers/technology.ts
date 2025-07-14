/**
 * technology controller
 */

import { factories } from '@strapi/strapi'
const model = 'api::technology.technology'

export default factories.createCoreController(model, ({ strapi }) => ({
  async find(): Promise<any[]> {
    return await strapi.service(model).getTech()
  }
}))
