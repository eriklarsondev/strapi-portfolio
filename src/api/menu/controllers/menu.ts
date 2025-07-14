/**
 * menu controller
 */

import { factories } from '@strapi/strapi'
const api = 'api::menu.menu'

export default factories.createCoreController(api, ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params
    return await strapi.service(api).getMenuBySlug(id)
  }
}))
