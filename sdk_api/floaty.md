---
outline: deep
---

## 悬浮窗相关

```typescript
import core from 'cheese-core';

const floaty = core.floaty;
```

### 请求悬浮窗权限:`requestPermission(timeout: number): boolean` :white_check_mark:

**参数**:

- :star:`number` (timeout): 超时时间/s

**返回值**:

- :green_circle:`boolean`: true
- :red_circle:`boolean`: false

**用法示例**:

```typescript
if (floaty.requestPermission(3)) {
    console.log("请求成功")
}

```

### 检查悬浮窗权限:`checkPermission(): boolean` :white_check_mark:

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:fasle

**用法示例**:

```typescript
if (floaty.checkPermission()) {
    console.log("悬浮窗权限正常")
}

```

### 悬浮窗根:`floatWith(): EasyWindow<any>` :white_check_mark:

**扩展方法**:
- 宽:`setWidth(width:number)`
- 高:`setHeight(height:number)`
- 显示类型:`setWindowType()`
- 标记:`addWindowFlags()`
- 显示时长:`setDuration()`
- 可拖动:`setDraggable()`

**返回值**:

- :green_circle:`EasyWindow<any>`:悬浮窗根对象
- :red_circle:null

**用法示例**:

```typescript
let view=xml.parseXml("/storage/emulated/0/Pictures/ui.xml")
base.runOnUi(() => {
    floaty.floatWith().setContentView(view)
        .setDraggable()
        .setWidth(500)
        .setHeight(200)
        .addWindowFlags(LayoutParams.FLAG_NOT_TOUCH_MODAL | LayoutParams.FLAG_NOT_FOCUSABLE)
        .setWindowType(LayoutParams.TYPE_APPLICATION_OVERLAY)
        .setDuration(1000)
        .show();
})

```