/**
 * content-block router
 */

import { factories } from '@strapi/strapi'
const api = 'api::content-block.content-block'

export default factories.createCoreRouter(api, {
  only: ['findOne']
})
