const { request, response } = require('express');
const { google } = require('googleapis');

/**
 * To use OAuth2 authentication, we need access to a CLIENT_ID, CLIENT_SECRET, AND REDIRECT_URI
 * from the client_secret.json file. To get these credentials for your application, visit
 * https://console.cloud.google.com/apis/credentials.
 */
const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_AUTHORIZATION_REDIRECT_URL
);

// Declare here the OAuth 2.0 scopes that you might need to request to access Google APIs
const scopes = process.env.GOOGLE_OAUTH2_API_SCOPES.split(',');

// @desc Generates Google's OAuth 2.0 Authorization URL 
// @route GET /api/v1/authz/google/authz-url
// @access Public
const getAuthzUrl = async (req = request, res = response) => {
    const authorizationUrl = oauth2Client.generateAuthUrl({
        // 'online' (default) or 'offline' (gets refresh_token)
        access_type: 'online',
        /** Pass in the scopes array defined above.
          * Alternatively, if only one scope is needed, you can pass a scope URL as a string */
        scope: scopes,
        // Enable incremental authorization. Recommended as a best practice.
        include_granted_scopes: true
    })
    return res.json({
        authorizationUrl
    });
}

// @desc Receives the callback from Google's OAuth 2.0 server.
// @route POST /api/v1/authz/google/exchange-authz-code
// @access Public
const exchangeAuthzCode = async (req = request, res = response) => {
    const { code } = req.body;
    if (code) {
        try {
            const { tokens } = await oauth2Client.getToken(code);
            // console.log('tokens:', tokens)
            const { access_token } = tokens
            // console.log('access_token:', access_token)
            return res.status(201).json({
                access_token
            })
        } catch (error) {
            console.error('Error exchanging authz code for tokens:', error)
        }
    }
    return res.status(400).json({
        message: 'Bad request'
    })
}

module.exports = {
    getAuthzUrl,
    exchangeAuthzCode,
}
