---
outline: deep
---

## 时间相关

```typescript
import core from 'cheese-core';

const time = core.time;
```

### 时间戳转换时间戳为标准时间:`timeFormat(timestamp: number, pn: string): string` :white_check_mark:

**参数**:

- :star:`string` (t):时间戳
- :star:`string` (p):转换格式 yyyy-MM-dd HH:mm:ss

**返回值**:

- :green_circle:`string`:标准时间
- :red_circle:null

**用法示例**:

```typescript
console.log("当前标准时间", time.timeFormat(time.getTime(), "yyyy-MM-dd HH:mm:ss"))
```

### 获取当前时间戳:`getTime(): number` :white_check_mark:

**参数**:

- :star:`string` (t):时间戳
- :star:`string` (p):转换格式 yyyy-MM-dd HH:mm:ss

**返回值**:

- :green_circle:`string`:标准时间
- :red_circle:null

**用法示例**:

```typescript
console.log("当前时间戳", time.getTime())
```