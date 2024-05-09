---
outline: deep
---

## 全局相关

```typescript
import core from 'cheese-core';

const base = core.base;
```

### 休眠: `sleep(millisecond: number): void`  :white_check_mark:

**参数**:

- :star:`number` (millisecond):休眠时间(ms)

**用法示例**:

```typescript
const timestamp = new Date();
console.log("开始休眠时间", timestamp.getTime());
base.sleep(3000)
console.log("结束休眠时间", timestamp.getTime()); 
```

### 吐司: `toast(message: string): void`  :white_check_mark:

**参数**:

- :star:`string` (msg):消息

**用法示例**:

```typescript
base.toast("欢迎使用Cheese")
```

### 日志: `console.log(...args:any[]):void` :green_square:

**参数**:

- :star:`any[]` (...args):消息

**用法示例**:

```typescript
console.log("欢迎使用Cheese")
```

### 停止: `exit(): void` :white_check_mark:

:rotating_light: **危险**

**用法示例**:

```typescript
console.log("开始运行")
base.exit()
base.sleep(1000)
console.log("正常运行完毕")
```

### 运行js: `runJS(nodeName: string, js: string): void` :white_check_mark:

**参数**:

- :star:`string` (nodeName):nodeName
- :star:`string` (js):js字符串

**用法示例**:

```typescript
base.runJS(settings.nodeName, `
console.log("你好")`)
```

### 推到Ui进程运行: `runOnUi(callback: Callback): void` :white_check_mark:

**参数**:
- :star:`Callback` (callback):代码回调

**用法示例**:
```typescript
base.runOnUi(()=>{
    console.log("Ui线程")
})
```
