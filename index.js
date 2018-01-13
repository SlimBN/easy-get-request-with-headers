const request = require('request');
const Q       = require('q');

module.exports = (url, headers, parameters) => {
    let promise = Q.defer();

    if (!parameters instanceof Object || parameters === null || typeof parameters === 'undefined' || !headers instanceof Object || headers === null || typeof headers === 'undefined') {

        promise.reject('Parameters or headers type error');

    } else {

        request({
            method: 'GET',
            url   : url,
            json  : true, // indicates the returning data is JSON, no need for JSON.parse()
            headers : headers,
            body  : parameters
        }, (err, res, body) => {
            if (err) {
                promise.reject(err);
            } else {
                promise.resolve(body);
            }
        });

    }

    return promise.promise;
};

