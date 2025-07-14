/**
 * typed-heading service
 */

import { factories } from '@strapi/strapi'
const api = 'api::typed-heading.typed-heading'

export default factories.createCoreService(api, ({ strapi }) => ({
  async getHeadingBySlug(id: string): Promise<any> {
    return await strapi.db.query(api).findOne({
      where: { slug: id }
    })
  }
}))
