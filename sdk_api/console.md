---
outline: deep
---

## 日志悬浮窗相关

```typescript
import core from 'cheese-core';
const console_ = core.console;
```

### 显示日志悬浮窗: `show():void` :white_check_mark:

**用法示例**:

```typescript
console_.show();
```

### 隐藏日志悬浮窗: `hide():void` :white_check_mark:

**用法示例**:

```typescript
console_.hide();
```

### 输出日志到日志悬浮窗: `log(log):void` :white_check_mark:

**参数**:

- :star:`string` (log): 要输出的日志内容

**用法示例**:

```typescript
console_.log("日志内容");
```

### 清空日志悬浮窗的日志: `clear():void` :white_check_mark:

**用法示例**:

```typescript
console_.clear();
```

### 设置日志悬浮窗触摸状态: `setTouch(enabled: boolean):void` :white_check_mark:

**用法示例**:

```typescript
console_.setTouch(true);
```
