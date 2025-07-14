/**
 * work router
 */

import { factories } from '@strapi/strapi'
const api = 'api::work.work'

export default factories.createCoreRouter(api, {
  only: ['find']
})
