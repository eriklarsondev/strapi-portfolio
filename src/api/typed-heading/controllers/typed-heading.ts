/**
 * typed-heading controller
 */

import { factories } from '@strapi/strapi'
const api = 'api::typed-heading.typed-heading'

export default factories.createCoreController(api, ({ strapi }) => ({
  async findOne(ctx): Promise<any> {
    const { id } = ctx.params
    return await strapi.service(api).getHeadingBySlug(id)
  }
}))
