import google from 'googleapis'
import {config} from 'dotenv'
config()

class Auth {
  static async getAccessToken () {
    // Define the required scopes.
    var scopes = [
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/firebase.database'
    ]

    // Authenticate a JWT client with the service account.
    var jwtClient = new google.auth.JWT(
      'core-app@core-app-project1.iam.gserviceaccount.com',
      null,
      '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDFR9vjfVtahnAx\neQrW1WMJWQC6gr20QJp+N2j/lw8CTYEWzOTy+r2AEPsI6tPUH7wJDAWGhvX9yRyS\n9tFz+P9zC0UnY8J34wBWUT7+YsR1CKJ7jrm75Y/lqWNIQBMEWGtjDzK0LrRaDrts\nWuf63VJH63iY+jRVNWUl4rdkhUq6fPidchUreZ+3tbygzTIPcTyW+1inT9IY+YCj\n2eG7IiNGeGpWzGugKseVbhOLE985fGf1ZbD6lPaksEhkSC0qepjmbCj82N2ABIi7\niBnP48UJkbY9poAFXYtUgbHSfG//JwtduCdjH00KMe6mSK3U2t/ocmJlve98rrV0\nq9EmHr1lAgMBAAECggEAJ3CcRziSgOCLoXhfcF+ssvu2J5NntZeMy1rshNyARaeU\n/SftRZ5XMDk01q2Lt8a4Yt6iZCirGReRvNfXO+Y1u5wvMRbClBEvyhHoFBdOy070\nnNsFysi0IefhT1pv8thyb5VkP51utOppEdqCsiZ5AqPSslKjD73jANX4cAIt1GY5\ng+8z35qjMLa8yZC4Qu2rrbaeOnrH/zDXwULk43TYXXWWeyA/7CES/adLlw0dxKY3\nWNDQTpmhGjzE2SAZ6XPvnlz7QQofKCbaxjDF/mVoVpiKkoCdc90OMctE1KHm4GEc\nHifLLd0Tl7SBu2IKyza+gM1UDcH3xx21/y29cTXIwQKBgQDwwYYB5uWk5cC75rdM\nlCm8P3bZXA0vAP6oZuDn2kVAtBkPP8VzdcDMU3FZlWWGDQvZ2TcVHPboFzDgUE+P\nIJYgdiJ5We/CRaMdC8nv6Xpac3QJshc3lsT2TENFgSAvENRyPRfwLr4m4qaNdVQ6\nurFjvWiOXalX8ztE6DVGoY/PjQKBgQDRxaI4ulli5cVgYklxlUR7AA4hkECYgQtR\nLrxI9yR6vE3ZnE7aOXqHVpNjCx7+hGeRN1aQT1/tutSnTuvbjl6vfmIeCAR/ByYp\nCb+RHwwpcXuOPUNk8xl/1df8yoblt6cdObc03dsVQeuPxjy9j3G06xIsmaVEjZpq\n8XIc9q5jOQKBgCyvfrPzq0QD8NXvaK4qAeUS0nhdgYTr5lhTYAMonBn6U3xlFbzs\najCCfFNoS0OqQDza+EJO8fT5+PRpc5rZLYQw6Q0lCD9CtZe6jGyfJTqMm0kBaRXE\nQiKE3SeVY+fYc9YQSNUnl9uXzdoLoOqVpD8i9LkX4UqVtrZ/cwP9ELgxAoGBAMKy\nNyWFuA71ieMydk4op52t6G+4bmvdYb6grPrf/4i3G159GCatMI9KiJNlsAe0pld+\n0CYytat1O4hp1Lk8A5/IopKTCHFKFl4CgT3VXjlc7buQGuwoQaOHu+cRpnCxqzaR\n6fv0ajHptBQGfzvFVlj/0Sd6F41wDEF0BWDih+rpAoGBAO1O/XstPdKouX6Ef0zD\n+tWIYs+xtKZBqUsf6t4wArqtcPCFD0qg/0pN55Mx0eVzRp0f99jtB0tUTMRZb0Jn\nMbwxUerIJ5ZSfLuL0SEb6ZTcqW6xPzstmy1EZcn97HGiLzNr87b5vM/Pgs4duENF\nXA9dxQl+Xp5J28bE9A2GZ6V1\n-----END PRIVATE KEY-----\n',
      scopes
    );
    
    // Use the JWT client to generate an access token.
    return await jwtClient.authorize(function (error, tokens) {
      console.log(tokens.access_token+"haloooooo")
      // return tokens      
      if (error) {
        console.log('Error making request to generate access token:', error)
      } else if (tokens.access_token === null) {
        console.log('Provided service account does not have permission to generate access tokens')
      } else {
        tokens.access_token
      }
    })
  }
}

export default Auth
