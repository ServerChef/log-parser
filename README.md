# Log parser

Convert any log file into JSON and serve it as an API.

Forked from [es6-babel-express-mocha-starter](https://github.com/underscoredam/es6-babel-express-mocha-starter).

### Quick start

```bash
# pre-setup
npm install -g nodemon babel-cli mocha # may need "sudo"

# setup
git clone https://github.com/500tech/nodejs-express-es6.git   
cd nodejs-express-es6  
npm install  

# start the server (starts babel-node with nodemon)
npm start 

# open in browser
http://localhost:3000

# build for production (output to dist folder)
npm run build

```


> Brought to you with love, from us at [500Tech](http://500Tech.com) - Israel's leading AngularJS consultancy

> Forked by [@underscoredam](https://github.com/underscoredam)


## Routes
### List available configurations
* **URL**  `/`
* **Methods** `GET`
* **Responses**
    * **Code**: 200
    * **Response**:
    ```javascript
    {
        "code": 0,
        "availableConfigs": [<list of config>]
    }
    ```

### Show log file for configuration
* **URL** `/<config>`
* **Methods** `GET`
* **Responses**
    * **Code**: 200
    * **Response**:
    ```javascript
    {
        "code": 0,
        "logs": [<array of json objects>]
    }
    ```

## Available logging configs
### `nginx_access_log`
Default nginx access log located at `/var/www/nginx/access.log`.
* **Example row**:
```javascript
{
    "remote_addr": "127.0.0.1",
    "remote_user": "-",
    "date": "26/Feb/2017:08:03:43 -0600",
    "request": "HEAD / HTTP/1.1",
    "status": 200,
    "body_bytes_sent": 0,
    "http_referrer": "-",
}
```


## License

The MIT License

