module.exports = {

    /**
     * The application base url
     */

    url: 'http://localhost:'+process.env.PORT,

    /**
     * The `port` setting determines which TCP port your app will be deployed on.
     */

    port: process.env.PORT || 3000,

    /**
     * View engine to use for your app's server-side views
     */

    view_engine: "ejs",

    /**
     * The api url prefix
     */

    api_prefix: "api"
}