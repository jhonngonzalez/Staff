// Simple React Native specific changes

import '../I18n/I18n'

export default {
  // font scaling override - RN default is on
  allowTextFontScaling: true,

  apiConfig: {
    host         : 'https://staff-on-demand-dot-rokk3r-labs.appspot.com/api/v1',
    apiPath      : 'api/v1',
    authStrategy : 'jwt',
    apiVersion   : 'v1'
  }

}