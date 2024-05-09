---
outline: deep
---

## 权限相关

```typescript
import core from 'cheese-core';

const permissions = core.permissions;
```

### 无障碍权限标签:`ACCESSIBILITY:number` :white_check_mark:

### 悬浮窗权限标签:`FLOAT:number` :white_check_mark:

### 录屏权限标签:`RECORDSCREEN:number` :white_check_mark:

### 请求权限:`requestPermission(tag: number,timeout:number): boolean` :white_check_mark:

**参数**:

- :star:`number` (tag): 权限标签
- :star:`number` (timeout): 超时时间/s

**返回值**:

- :green_circle:`boolean`: true
- :red_circle:`boolean`: false

**用法示例**:

```typescript
if (permissions.requestPermission(permissions.ACCESSIBILITY, 3)) {
    console.log("请求成功")
}

```

### 检查权限:`checkPermission(tag: number): boolean` :white_check_mark:

**参数**:

- :star:`number` (tag): 权限标签

**返回值**:

- :green_circle:`boolean`: true
- :red_circle:`boolean`: false

**用法示例**:

```typescript
if (permissions.checkPermission(permissions.ACCESSIBILITY)) {
    console.log("请求成功")
}

```