/**
 * content-block controller
 */

import { factories } from '@strapi/strapi'
const api = 'api::content-block.content-block'

export default factories.createCoreController(api, ({ strapi }) => ({
  async findOne(ctx): Promise<any> {
    const { id } = ctx.params
    return await strapi.service(api).getContentBySlug(id)
  }
}))
