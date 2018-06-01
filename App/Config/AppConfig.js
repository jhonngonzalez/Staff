// Simple React Native specific changes

import '../I18n/I18n'

export default {
  // font scaling override - RN default is on
  allowTextFontScaling: true,

  apiConfig: {
    host         : 'http://localhost:3000',
    apiPath      : 'api/v1',
    authStrategy : 'jwt',
    apiVersion   : 'v1'
  }

}