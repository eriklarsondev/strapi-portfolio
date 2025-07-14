/**
 * technology controller
 */

import { factories } from '@strapi/strapi'
const api = 'api::technology.technology'

export default factories.createCoreController(api, ({ strapi }) => ({
  async find(): Promise<any[]> {
    return await strapi.service(api).getTech()
  }
}))
