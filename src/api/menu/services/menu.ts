/**
 * menu service
 */

import { factories } from '@strapi/strapi'
const api = 'api::menu.menu'

export default factories.createCoreService(api, ({ strapi }) => ({
  async getMenuBySlug(id: string): Promise<any> {
    return await strapi.db.query(api).findOne({
      where: { slug: id },
      populate: ['items']
    })
  }
}))
