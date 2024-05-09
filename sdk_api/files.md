---
outline: deep
---

## 文件相关

```typescript
import core from 'cheese-core';

const files = core.files;
```

### 读取文件或文件夹:`read(path: string): Array<string>` :white_check_mark:

:lock:**权限**: 储存

**参数**:

- :star:`string` (path):路径

**返回值**:

- :green_circle:`any`:文件内容 or 文件列表
- :red_circle:null

**用法示例**:

```typescript
console.log(files.read("/storage/emulated/0/test.txt"))
```

### 删除文件或文件夹:`rm(path: string): boolean` :white_check_mark:

:lock:**权限**: 储存

**参数**:

- :star:`string` (path):路径

**返回值**:

- :green_circle:`boolean`: true
- :red_circle:`boolean`: false
-

**用法示例**:

```typescript
console.log(files.rm("/storage/emulated/0/test.txt"))
```

### 创建文件或文件夹:`create(path: string): boolean` :white_check_mark:

:lock:**权限**: 储存

**参数**:

- :star:`string` (path):路径

**返回值**:

- :green_circle:`boolean`: true
- :red_circle:`boolean`: false
-

**用法示例**:

```typescript
console.log(files.create("/storage/emulated/0/test.txt"))
```

### 拷贝文件或文件夹: `copy(path: string, destPath: string)` :white_check_mark:

**参数**:

- :star:`string` (path): 文件或文件夹路径
- :star:`string` (destPath): 目标路径

**返回值**:

- :green_circle:`boolean`: true
- :red_circle:`boolean`: false

**用法示例**:

```typescript
if (files.copy("/storage/emulated/0/test.txt", "/storage/emulated/0/c.txt")) {
    console.log("复制成功");
}
```

### 从JSON文件中读取指定键的值:`readJson(filesPath: string, keys: string): boolean` :white_check_mark:

:lock:**权限**: 储存

**参数**:

- :star:`string` (filesPath):文件路径
- :star:`string` (keys):键名

**返回值**:

- :green_circle:`string`:指定键的值
- :red_circle:null

**用法示例**:

```typescript
console.log("内容:" + files.readJson("/storage/emulated/0/test.txt", "name"))
```

### 判断路径是不是文件夹: `isFolder(path: string): boolean` :white_check_mark:

**参数**:

- :star:`string` (path): 路径

**返回值**:

- :green_circle:`boolean`: true
- :red_circle:`boolean`: false

**用法示例**:

```typescript
if (files.isFolder("/storage/emulated/0")) {
    console.log("是文件夹");
}


```

### 判断路径是不是文件: `isFile(path: string): boolean` :white_check_mark:

**参数**:

- :star:`string` (path): 路径

**返回值**:

- :green_circle:`boolean`: true
- :red_circle:`boolean`: false

**用法示例**:

```typescript
if (files.isFile("/storage/emulated/0/test.txt")) {
    console.log("是文件");
}
```

### 追加写入文件:`append(filesPath,content): boolean` :white_check_mark:

:lock:**权限**: 储存

**参数**:

- :star:`string` (filesPath):文件路径
- :star:`string` (content):追加写入内容

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:fasle

**用法示例**:

```typescript
if (files.append("/storage/emulated/0/test.txt", "你好")) {
    console.log("追加写入成功")
}
```

### 覆盖写入文件:`write(filesPath,content): boolean` :white_check_mark:

:lock:**权限**: 储存

**参数**:

- :star:`string` (filesPath):文件路径
- :star:`string` (content):覆盖写入内容

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:fasle

**用法示例**:

```typescript
if (files.write("/storage/emulated/0/text.txt", "你好")) {
    console.log("覆盖写入成功")
}
```

### 将对象保存到SD卡: `save(obj: any, path: string): boolean` :white_check_mark:

:lock:**权限**: 储存
**参数**:

- :star:`any` (inputStream): InputStream对象
- :star:`string` (path): 要保存到的SD卡路径

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:fasle

**用法示例**:

```typescript
const inputStream = converters.sdToStream("/storage/emulated/0/test.txt");
if (files.save(inputStream, "/storage/emulated/0/1.txt")) {
    console.log("保存成功");
}
```
