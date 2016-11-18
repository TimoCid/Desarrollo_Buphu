// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : '1843274765900588', // your App ID
        'clientSecret'    : 'f74e11d48605289f19039e2a0bb7454b', // your App Secret
        'callbackURL'     : 'http://localhost:8080/auth/facebook/callback',
        'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email,photos'

    },

    'twitterAuth' : {
        'consumerKey'        : '566HmmtT4jy3c4kmPXWTraMtr',
        'consumerSecret'     : 'vHyeKpLBzQVHMFfBYbF4BfNgLHZ90lRdUZIVXbpFXENi5eon9Z',
        'callbackURL'        : 'http://localhost:8080/auth/twitter/callback'
    },

};
