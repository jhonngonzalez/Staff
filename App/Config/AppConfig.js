// Simple React Native specific changes

import '../I18n/I18n'

export default {
  // font scaling override - RN default is on
  allowTextFontScaling: true,

  apiConfig: {
    host         : 'http://10.0.0.120:3000/api/v1',
    apiPath      : 'api/v1',
    authStrategy : 'jwt',
    apiVersion   : 'v1'
  }

}