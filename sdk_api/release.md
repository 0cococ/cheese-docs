---
outline: deep
---
## 释放相关
```typescript
import core from 'cheese-core';
const release =  core.release;
```

### 释放对象:`release(obj:any): boolean` :white_check_mark:

**参数**:
- :star:`any` (obj):对象


**用法示例**:

```typescript
release.release(converters.sdToStream("/storage/emulated/0/1.txt"))
```
