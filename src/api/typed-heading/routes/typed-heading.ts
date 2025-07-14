/**
 * typed-heading router
 */

import { factories } from '@strapi/strapi'
const api = 'api::typed-heading.typed-heading'

export default factories.createCoreRouter(api, {
  only: ['findOne']
})
