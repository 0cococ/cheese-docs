---
outline: deep
---

## 节点相关

```typescript
import core from 'cheese-core';

const uinode = new core.uinode();
```

### 筛选节点:`forEachNode(callback:Callback): this` :white_check_mark:

:lock:**权限**: 无障碍

**参数**:

- :star:`any` (callback):筛选回调

**返回值**:

- :green_circle:`this`:当前类对象
- :red_circle:null

**用法示例**:

```typescript
uinode.forEachNode((e: core.uinode['uiobj']) => {
    return e.text("连接").and
})
```

### 清除节点缓存:`clearNodeCache(): boolean` :white_check_mark:

:lock:**权限**: 无障碍

**参数**:

- :star:`any` (callback):筛选回调

**返回值**:

- :green_circle:`this`:当前类对象
- :red_circle:null

**用法示例**:

```typescript
uinode.clearNodeCache()
```

### 判断有无节点:`find(value: number=0)` :white_check_mark:

:lock:**权限**: 无障碍

**参数**:

- `number` (value):节点在 nodeObj 数组中的索引值 不填默认为0

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:fasle

**用法示例**:

```typescript
uinode.forEachNode((e: core.uinode['uiobj']) => {
    return e.text("连接").and
}).find()
```

### 获取节点text信息:`getText(value: number=0)` :white_check_mark:

:lock:**权限**: 无障碍

**参数**:

- `number` (value):节点在 nodeObj 数组中的索引值 不填默认为0

**返回值**:

- :green_circle:`string`:text内容
- :red_circle:null

**用法示例**:

```typescript
uinode.forEachNode((e: core.uinode['uiobj']) => {
    return e.text("连接").and
}).getText()
console.log(text)
```

### 获取节点范围:`getBounds(value: number=0)` :white_check_mark:

:lock:**权限**: 无障碍

**参数**:

- `number` (value):节点在 nodeObj 数组中的索引值 不填默认为0

**返回值**:

- :green_circle:`string`:范围信息
- :red_circle:null

**用法示例**:

```typescript
let bounds = uinode.forEachNode((e: core.uinode['uiobj']) => {
    return e.text("连接").and
}).getBounds()
console.log(bounds)
```

### 获取节点Id:`getId(value: number=0)` :white_check_mark:

:lock:**权限**: 无障碍

**参数**:

- `number` (value):节点在 nodeObj 数组中的索引值 不填默认为0

**返回值**:

- :green_circle:`string`:id信息
- :red_circle:null

**用法示例**:

```typescript
let id = uinode.forEachNode((e: core.uinode['uiobj']) => {
    return e.text("连接").and
}).getId()
console.log(id)
```

### 获取节点Desc:`getDesc(value: number=0)` :white_check_mark:

:lock:**权限**: 无障碍

**参数**:

- `number` (value):节点在 nodeObj 数组中的索引值 不填默认为0

**返回值**:

- :green_circle:`string`:Desc信息
- :red_circle:null

**用法示例**:

```typescript
let desc = uinode.forEachNode((e: core.uinode['uiobj']) => {
    return e.text("连接").and
}).getDesc()
console.log(desc)
```

### 获取节点Pkg:`getPkg(value: number=0)` :white_check_mark:

:lock:**权限**: 无障碍

**参数**:

- `number` (value):节点在 nodeObj 数组中的索引值 不填默认为0

**返回值**:

- :green_circle:`string`:Pkg信息
- :red_circle:null

**用法示例**:

```typescript
let pkg = uinode.forEachNode((e: core.uinode['uiobj']) => {
    return e.text("连接").and
}).getPkg()
console.log(pkg)
```

### 获取节点Clz:`getClz(value: number=0)` :white_check_mark:

:lock:**权限**: 无障碍

**参数**:

- `number` (value):节点在 nodeObj 数组中的索引值 不填默认为0

**返回值**:

- :green_circle:`string`:Clz信息
- :red_circle:null

**用法示例**:

```typescript
let clz = uinode.forEachNode((e: core.uinode['uiobj']) => {
    return e.text("连接").and
}).getClz()
console.log(clz)
```

[//]: # (### 追加文本到输入框:`appendText&#40;value: number=0,text&#41;` :white_check_mark:)

[//]: # ()
[//]: # (:lock:**权限**: 无障碍)

[//]: # ()
[//]: # (**参数**:)

[//]: # ()
[//]: # (- `number` &#40;value&#41;:节点在 nodeObj 数组中的索引值 不填默认为0)

[//]: # (- :star:`string` &#40;text&#41;:要输入的内容)

[//]: # (-)

[//]: # ()
[//]: # (**返回值**:)

[//]: # ()
[//]: # (- :green_circle:`string`:Clz信息)

[//]: # (- :red_circle:null)

[//]: # ()
[//]: # (**用法示例**:)

[//]: # ()
[//]: # (```typescript)

[//]: # (let clz = uinode.forEachNode&#40;&#40;e: core.uinode['uiobj']&#41; => {)

[//]: # (    return e.text&#40;"连接"&#41;.and)

[//]: # (}&#41;.appendText&#40;"Hello"&#41;)

[//]: # (console.log&#40;clz&#41;)

[//]: # (```)

[//]: # ()
[//]: # (### 设置文本到输入框:`setText&#40;value: number=0,text&#41;` :white_check_mark:)

[//]: # ()
[//]: # (:lock:**权限**: 无障碍)

[//]: # ()
[//]: # (**参数**:)

[//]: # ()
[//]: # (- `number` &#40;value&#41;:节点在 nodeObj 数组中的索引值 不填默认为0)

[//]: # (- :star:`string` &#40;text&#41;:要输入的内容)

[//]: # (-)

[//]: # ()
[//]: # (**返回值**:)

[//]: # ()
[//]: # (- :green_circle:`string`:Clz信息)

[//]: # (- :red_circle:null)

[//]: # ()
[//]: # (**用法示例**:)

[//]: # ()
[//]: # (```typescript)

[//]: # (let clz = uinode.forEachNode&#40;&#40;e: core.uinode['uiobj']&#41; => {)

[//]: # (    return e.text&#40;"连接"&#41;.and)

[//]: # (}&#41;.setText&#40;"Hello"&#41;)

[//]: # (console.log&#40;clz&#41;)

[//]: # (```)

### 节点尝试点击:`tryClick(value: number=0)` :white_check_mark:

:lock:**权限**: 无障碍

> 当此节点点击失败，会尝试向上级容器尝试

**参数**:

- `number` (value):节点在 nodeObj 数组中的索引值 不填默认为0

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:fasle

**用法示例**:

```typescript
let d = uinode.forEachNode((e: core.uinode['uiobj']) => {
    return e.text("连接").and
})
if (d.tryClick()) {
    console.log("点击成功")
}

```

### 节点点击:`click(value: number=0)` :white_check_mark:

:lock:**权限**: 无障碍

> 失败率较高

**参数**:

- `number` (value):节点在 nodeObj 数组中的索引值 不填默认为0

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:fasle

**用法示例**:

```typescript
let d = uinode.forEachNode((e: core.uinode['uiobj']) => {
    return e.text("连接").and
})
if (d.click()) {
    console.log("点击成功")
}
```

### 节点长按点击:`longClick(value: number=0)` :white_check_mark:

:lock:**权限**: 无障碍

> 失败率较高

**参数**:

- `number` (value):节点在 nodeObj 数组中的索引值 不填默认为0

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:fasle

**用法示例**:

```typescript
let d = uinode.forEachNode((e: core.uinode['uiobj']) => {
    return e.text("连接").and
})
if (d.longClick()) {
    console.log("点击成功")
}
```

### 尝试节点长按点击:`tryLongClick(value: number=0)` :white_check_mark:

:lock:**权限**: 无障碍

> 当此节点点击失败，会尝试向上级容器尝试

**参数**:

- `number` (value):节点在 nodeObj 数组中的索引值 不填默认为0

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:fasle

**用法示例**:

```typescript
let d = uinode.forEachNode((e: core.uinode['uiobj']) => {
    return e.text("连接").and
})
if (d.tryLongClick()) {
    console.log("点击成功")
}

```

### 双击点击节点:`doubleClick(value: number=0)` :white_check_mark:

:lock:**权限**: 无障碍

**参数**:

- `number` (value):节点在 nodeObj 数组中的索引值 不填默认为0

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:fasle

**用法示例**:

```typescript
let d = uinode.forEachNode((e: core.uinode['uiobj']) => {
    return e.text("连接").and
})
if (d.doubleClick()) {
    console.log("点击成功")
}
```

### 全局节点点击:`globalClick(value: number=0)` :white_check_mark:

:lock:**权限**: 无障碍

> 常用来点击网页节点

**参数**:

- `number` (value):节点在 nodeObj 数组中的索引值 不填默认为0

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:fasle

**用法示例**:

```typescript
let d = uinode.forEachNode((e: core.uinode['uiobj']) => {
    return e.text("连接").and
})
if (d.globalClick()) {
    console.log("点击成功")
}

```

### 全局长按节点:`globalLongClick(value: number=0)` :white_check_mark:

:lock:**权限**: 无障碍

> 常用来点击网页节点

**参数**:

- `number` (value):节点在 nodeObj 数组中的索引值 不填默认为0

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:fasle

**用法示例**:

```typescript
let d = uinode.forEachNode((e: core.uinode['uiobj']) => {
    return e.text("连接").and
})
if (d.globalLongClick()) {
    console.log("点击成功")
}
```

