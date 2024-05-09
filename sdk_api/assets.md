---
outline: deep
---
## Assets相关
```typescript
import core from 'cheese-core';
const assets = core.assets;
```

### 读取文件或文件夹: `read(path: string): string` :white_check_mark:

**参数**:
- :star:`string` (path): 路径

**返回值**:
- :green_circle:`string`: 文件内容 or 文件列表
- :red_circle:null

**用法示例**:
```typescript
const fileContent = assets.read("ww/test.txt");
console.log("文件内容",fileContent);
```

### 拷贝文件或文件夹: `copy(path: string, destPath: string): boolean` :white_check_mark:

**参数**:
- :star:`string` (path): 文件或文件夹路径
- :star:`string` (destPath): 目标路径

**返回值**:
- :green_circle:`boolean`: true
- :red_circle:`boolean`: false

**用法示例**:
```typescript
if(assets.copy("ww/test.txt","/storage/emulated/0/t.txt")){
    console.log("复制成功");
}
```

### 判断路径是不是文件夹: `isFolder(path: string): boolean` :white_check_mark:

**参数**:
- :star:`string` (path): 路径

**返回值**:
- :green_circle:`boolean`: true
- :red_circle:`boolean`: false

**用法示例**:
```typescript
if(assets.isFolder("ww")){
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
if(assets.isFile("ww/test.txt")){
    console.log("是文件");
}
```