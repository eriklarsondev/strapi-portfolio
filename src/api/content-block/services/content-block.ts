/**
 * content-block service
 */

import { factories } from '@strapi/strapi'
const model = 'api::content-block.content-block'

export default factories.createCoreService(model, ({ strapi }) => ({
  async getContentBySlug(id: string): Promise<any> {
    return await strapi.db.query(model).findOne({
      where: { slug: id }
    })
  }
}))
