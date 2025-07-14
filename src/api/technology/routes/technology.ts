/**
 * technology router
 */

import { factories } from '@strapi/strapi'
const api = 'api::technology.technology'

export default factories.createCoreRouter(api, {
  only: ['find']
})
