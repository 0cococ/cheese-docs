---
outline: deep
---

## 录屏相关

```typescript
import core from 'cheese-core';

const recordscreen = core.recordScreen;
```

### 请求悬浮窗权限:`requestPermission(timeout: number): boolean` :white_check_mark:

**参数**:

- :star:`number` (timeout): 超时时间/s

**返回值**:

- :green_circle:`boolean`: true
- :red_circle:`boolean`: false

**用法示例**:

```typescript
if (recordscreen.requestPermission(3)) {
    console.log("请求成功")
}

```

### 检查悬浮窗权限:`checkPermission(): boolean` :white_check_mark:

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:fasle

**用法示例**:

```typescript
if (recordscreen.checkPermission()) {
    console.log("权限正常")
}

```

### 截屏: `captureScreen(timeout: number, x: number, y: number, ex: number, ey: number): Bitmap` :white_check_mark:

- 范围有负数则全屏截取

:lock:**权限**: 录屏

**参数**:

- :star:`number` (timeout):超时时间
- :star:`number` (x):上
- :star:`number` (y):左
- :star:`number` (ex):下
- :star:`number` (ey):右

**返回值**:

- :green_circle:`Bitmap`:Bitmap对象
- :red_circle:null

**用法示例**:

```typescript
if (recordscreen.requestPermission(3)) {
    var src = recordscreen.captureScreen(3, 0, 0, 0, -1)
    if (src != null) {
        console.log("截图状态", "成功")
    }
}


```