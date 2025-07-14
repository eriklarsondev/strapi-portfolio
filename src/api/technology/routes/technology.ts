/**
 * technology router
 */

import { factories } from '@strapi/strapi'
const model = 'api::technology.technology'

export default factories.createCoreRouter(model, {
  only: ['find']
})
