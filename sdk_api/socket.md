---
outline: deep
---
## socket相关
```typescript
import * as net from 'net';
```


### websocket客户端: :green_square:

:lock:**权限**: 网络

**用法示例**:

```typescript

const PORT = 3000;
const HOST = 'localhost';

const client = new net.Socket();

client.connect(PORT, HOST, () => {
  console.log('Connected to server');

  // 向服务器发送数据
  client.write('Hello server!');

  // 监听来自服务器的响应数据
  client.on('data', (data) => {
    console.log(`Received from server: ${data}`);
  });

  // 监听连接断开事件
  client.on('close', () => {
    console.log('Connection closed');
  });

  // 监听错误事件
  client.on('error', (err) => {
    console.error('Socket error:', err.message);
  });
});

// 当客户端收到终止信号时，关闭连接
process.on('SIGINT', () => {
  console.log('Closing client connection');
  client.end();
});


```

### websocket服务端: :green_square:

:lock:**权限**: 网络


**用法示例**:

```typescript
// 创建一个TCP服务器
const server = net.createServer((socket) => {
  console.log('Client connected');

  // 监听来自客户端的数据
  socket.on('data', (data) => {
    console.log(`Received from client: ${data}`);

    // 向客户端发送数据
    socket.write('Hello from server!');
  });

  // 监听客户端断开连接
  socket.on('end', () => {
    console.log('Client disconnected');
  });

  // 监听连接错误
  socket.on('error', (err) => {
    console.error('Socket error:', err.message);
  });
});

// 监听服务器错误
server.on('error', (err) => {
  console.error('Server error:', err.message);
});

// 监听指定端口
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
```