---
outline: deep
---
## http相关
```typescript
const http = require('http');
```
### get请求::green_square:

:lock:**权限**: 网络

**用法示例**:

```typescript
const options = {
    hostname: 'example.com',
    port: 80,
    path: '/path/to/resource',
    method: 'GET'
};

const req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);

    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
    });

    res.on('end', () => {
        console.log('No more data in response.');
    });
});

req.on('error', (e) => {
    console.error(`Problem with request: ${e.message}`);
});

// Send the request
req.end();
```

### post请求::green_square:

:lock:**权限**: 网络

**用法示例**:

```typescript

const postData = JSON.stringify({
    'data': 'Hello, Server!'
});

const options = {
    hostname: 'example.com',
    port: 80,
    path: '/path/to/resource',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
    }
};

const req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);

    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
    });

    res.on('end', () => {
        console.log('No more data in response.');
    });
});

req.on('error', (e) => {
    console.error(`Problem with request: ${e.message}`);
});

// Write data to request body
req.write(postData);
req.end();
```