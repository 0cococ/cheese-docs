---
outline: deep
---

## 坐标相关

```typescript
import core from 'cheese-core';

const point = core.point;
```

### 坐标滑动:`swipeToPoint(sx: number, sy: number, ex: number, ey: number, dur: number): boolean` :white_check_mark:

:lock:**权限**: 无障碍

**参数**:

- :star:`number` (x):开始 x
- :star:`number` (y):开始 y
- :star:`number` (x1):结束 x
- :star:`number` (y1):结束 y
- :star:`number` (dur):滑动时长(ms)

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:false

**用法示例**:

```typescript
if (point.swipeToPoint(100, 200, 100, 800, 1000)) {
    console.log("滑动成功")
}
```

### 坐标点击:`clickPoint(x: number, y: number): boolean` :white_check_mark:

:lock:**权限**: 无障碍

**参数**:

- :star:`number` (x):x 轴坐标
- :star:`number` (y):y 轴坐标

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:false

**用法示例**:

```typescript
if (point.clickPoint(12, 15)) {
    console.log("点击成功")
}
```

### 坐标长按:`longClickPoint(x: number, y: number): boolean` :white_check_mark:

:lock:**权限**: 无障碍

**参数**:

- :star:`number` (x):x 轴坐标
- :star:`number` (y):y 轴坐标

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:false

**用法示例**:

```typescript
if (point.longClickPoint(100, 200)) {
    console.log("点击成功")
}
```

### 触摸按下:`touchDown(x: number, y: number): boolean` :white_check_mark:

:lock:**权限**: 无障碍

**参数**:

- :star:`number` (x):x 轴坐标
- :star:`number` (y):y 轴坐标

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:false

**用法示例**:

```typescript
if (point.touchDown(141, 864)) {
    console.log("按下成功")
}
```

### 触摸滑动:`touchMove(x: number, y: number): boolean` :white_check_mark:

:lock:**权限**: 无障碍

**参数**:

- :star:`number` (x):x 轴坐标
- :star:`number` (y):y 轴坐标

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:false

**用法示例**:

```typescript
if (point.touchMove(200, 890)) {
    console.log("滑动成功")
}
```

### 触摸抬起:`touchUp(): boolean` :white_check_mark:

:lock:**权限**: 无障碍

**参数**:

- :star:`number` (x):x 轴坐标
- :star:`number` (y):y 轴坐标

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:false

**用法示例**:

```typescript
if (point.touchUp(12, 15)) {
    console.log("抬起成功")
}
```
