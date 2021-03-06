import * as parsers from './parsers'

const DEFAULT_CONFIGS = {
    'nginx_access_log': {
        'path': '/var/log/nginx/access.log',
        'fields': {
            'remote_addr': 1,
            'remote_user': 2,
            'date': [4, 5],
            'request': 6,
            'status': 7,
            'body_bytes_sent': 8,
            'http_referrer': 9,
            'http_user_agent': 10,
        },
        'formatters': {
            'date': (x) => x.substring(1, x.length-1),
            'body_bytes_sent': parsers.integer,
            'status': parsers.integer
        }
    }
};

export default Object.freeze(DEFAULT_CONFIGS)