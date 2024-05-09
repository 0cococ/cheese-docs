---
outline: deep
---

## 键盘输入法操作

```typescript
import core from 'cheese-core';

const keyboard = core.keyboard;
```

### 输入:`input(text: String): void` :white_check_mark:

:lock:**权限**: 输入法

**参数**:

- :star:`string` (str):要输入的文本

**用法示例**:

```javascript
keyboard.input("你好")
```

### 回车:`enter(): void` :white_check_mark:

:lock:**权限**: 输入法

**用法示例**:

```javascript
keyboard.enter()
```

### 删除:`delete(): void` :white_check_mark:

:lock:**权限**: 输入法

**用法示例**:

```javascript
keyboard.delete()
```
