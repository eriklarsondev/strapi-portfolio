/**
 * work controller
 */

import { factories } from '@strapi/strapi'
const api = 'api::work.work'

export default factories.createCoreController(api, ({ strapi }) => ({
  async find(): Promise<any[]> {
    return await strapi.service(api).getExperience()
  }
}))
