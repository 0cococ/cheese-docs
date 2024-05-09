---
outline: deep
---

## 按键相关

```typescript
import core from 'cheese-core';

const keys = core.keys;
```

### 返回桌面:`home(): boolean` :white_check_mark:

:lock:**权限**: 无障碍

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:fasle

**用法示例**:

```typescript
if (keys.home()) {
    console.log("返回桌面成功");
}
```

### 返回:`back(): boolean` :white_check_mark:

:lock:**权限**: 无障碍

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:fasle

**用法示例**:

```typescript
if (keys.back()) {
    console.log("返回成功");
}
```

### 打开快速设置:`quickSettings(): boolean` :white_check_mark:

:lock:**权限**: 无障碍

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:fasle

**用法示例**:

```typescript
if (keys.quickSettings()) {
    console.log("成功")
}
```

### 打开电源菜单:`powerDialog(): boolean` :white_check_mark:

:lock:**权限**: 无障碍

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:fasle

**用法示例**:

```typescript
if (keys.powerDialog()) {
    console.log("成功")
}
```

### 下拉通知栏:`pullNotificationBar(): boolean` :white_check_mark:

:lock:**权限**: 无障碍

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:fasle

**用法示例**:

```typescript
if (keys.pullNotificationBar()) {
    console.log("成功")
}
```

### 打开最近任务:`recents(): boolean` :white_check_mark:

:lock:**权限**: 无障碍

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:fasle

**用法示例**:

```typescript
if (keys.recents()) {
    console.log("成功")
}
```

### 锁屏:`lockScreen(): boolean` :white_check_mark:

:lock:**权限**: 无障碍

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:fasle

**用法示例**:

```typescript
if (keys.lockScreen()) {
    console.log("成功")
}
```

### 截屏到相册:`screenShot(): boolean` :white_check_mark:

:lock:**权限**: 无障碍

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:fasle

**用法示例**:

```typescript
if (keys.screenShot()) {
    console.log("成功")
}
```

### 分屏:`splitScreen(): boolean` :white_check_mark:

:lock:**权限**: 无障碍

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:fasle

**用法示例**:

```typescript
if (keys.splitScreen()) {
    console.log("成功")
}
```