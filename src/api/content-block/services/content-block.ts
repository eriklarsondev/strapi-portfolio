/**
 * content-block service
 */

import { factories } from '@strapi/strapi'
const api = 'api::content-block.content-block'

export default factories.createCoreService(api, ({ strapi }) => ({
  async getContentBySlug(id: string): Promise<any> {
    return await strapi.db.query(api).findOne({
      where: { slug: id }
    })
  }
}))
