// Ghost runs in `development` mode by default. Full documentation can be found at http://support.ghost.org/config/

var path = require('path'),
    protocol = 'https',
    platform = 'eu.platform.sh',
    platform_domain = protocol + '://' + process.env.PLATFORM_ENVIRONMENT + '-' + process.env.PLATFORM_PROJECT + '.' + platform,
    config;

config = {
    // ### Production
    // When running Ghost in the wild, use the production environment.
    production: {
        url: process.env.BASE_URL ? process.env.BASE_URL : platform_domain,
        mail: {
            transport: 'SMTP',
            options: {
                service: process.env.MAIL_SERVICE,
                auth: {
                    user: process.env.MAIL_USER,
                    pass: process.env.MAIL_PASS
                }
            }
        },
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(process.env.GHOST_CONTENT, 'data/ghost.db')
            },
            debug: false
        },

        server: {
            host: '127.0.0.1',
            port: process.env.PORT
        },
        // #### Paths
        // Specify where your content directory lives
        paths: {
            contentPath: process.env.GHOST_CONTENT
        }
    }
};

module.exports = config;
