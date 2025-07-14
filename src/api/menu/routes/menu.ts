/**
 * menu router
 */

import { factories } from '@strapi/strapi'
const api = 'api::menu.menu'

export default factories.createCoreRouter(api, {
  only: ['findOne']
})
