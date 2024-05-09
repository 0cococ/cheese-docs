---
outline: deep
---

## Class相关

```typescript
import core from 'cheese-core';

const class_ = core.class_;
```

### ClassUtils类

```typescript
type ClassUtils = {
    clz: string;
    obj: any;
    new: (...args: any[]) => any;
    set: (nodeName: string, name?: string) => string
}
```

### Test类

```kotlin
package coco.cheese
class Test {
    fun p(str:String){
        println(str)
    }
}
```

### 获取包名下的所有类: `getClassList(packageName: string)List<string>` :white_check_mark:

**参数**:

- :star:`string` (packageName): 包名

**用法示例**:

```typescript
console.log(getClassList("coco.cheese"))
```

### 加载Apk或Dex文件: `loadDex(path: string): void` :white_check_mark:

**参数**:

- :star:`string` (path): 要加载的apk或者dex文件路径

**用法示例**:

```typescript
_class.loadDex("/storage/emulated/0/app.apk");
```

### 判断 Class 是否存在: `hasClass(className: string): boolean` :white_check_mark:

**参数**:

- :star:`string` (cls): 全类名

**返回值**:

- :green_circle:`boolean`: true
- :red_circle:`boolean`: false

**用法示例**:

```typescript
if (class_.hasClass("com.example.ClassName")) {
    console.log("Class 存在");
}

```

### 查找Class: `findClass(className: string): ClassUtils` :white_check_mark:

**扩展属性**:

- Class对象:`clz`

**参数**:

- :star:`string` (cls): 全类名

  **返回值**:
- :green_circle:`ClassUtils`: ClassUtils对象
- :red_circle:null

**用法示例**:

```typescript
if (class_.hasClass("coco.cheese.Test")) {
    console.log(class_.findClass("coco.cheese.Test").clz);
}
```

### 实例化构造函数: `new(...args:any[]): ClassUtils` :white_check_mark:

**参数**:

- :star:`any[]` (...args): 构造函数所需参数

**返回值**:

- :green_circle:`ClassUtils`: ClassUtils对象
- :red_circle:null

**用法示例**:

```typescript
var cls = class_.findClass("coco.cheese.Test")
let obj = cls.new().obj
obj.p("ss")
```

### 设置类到Node环境: `set(nodeName: string,name?: string):string` :white_check_mark:

**参数**:

- :star:`string` (nodeName): nodeName
- `string` (name): 设置类的node变量名

**返回值**:

- :green_circle:`string`: Node环境的对应变量名
- :red_circle:null

**用法示例**:

```typescript
 /**方式1*/
var cls = class_.findClass("coco.cheese.Test").new()
cls.set(settings.nodeName, "Test")
Test.p("ss")

/**方式2*/
var cls = class_.findClass("coco.cheese.Test")
cls.set(settings.nodeName, "Test")
new Test().p("ss")
```

