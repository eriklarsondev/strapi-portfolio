/**
 * service router
 */

import { factories } from '@strapi/strapi'
const api = 'api::service.service'

export default factories.createCoreRouter(api, {
  only: ['find', 'findOne']
})
