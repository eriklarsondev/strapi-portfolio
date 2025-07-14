/**
 * content-block router
 */

import { factories } from '@strapi/strapi'
const model = 'api::content-block.content-block'

export default factories.createCoreRouter(model, {
  only: ['findOne']
})
