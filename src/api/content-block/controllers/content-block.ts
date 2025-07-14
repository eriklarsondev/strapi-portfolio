/**
 * content-block controller
 */

import { factories } from '@strapi/strapi'
const model = 'api::content-block.content-block'

export default factories.createCoreController(model, ({ strapi }) => ({
  async findOne(ctx): Promise<any> {
    const { id } = ctx.params
    return await strapi.service(model).getContentBySlug(id)
  }
}))
