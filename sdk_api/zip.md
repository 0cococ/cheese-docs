---
outline: deep
---
## 解压缩相关

```typescript
import core from 'cheese-core';
const zip =  core.zip;
```

### 压缩:`compress(srcFilePath: string, destFilePath: string, password: string=""): boolean` :white_check_mark:
:lock:**权限**: 储存

**参数**:
- :star:`string` (srcFilePath):压缩路径
- :star:`string` (destFilePath):压缩后路径
- `string` (password):压缩密码

**返回值**:
- :green_circle:`boolean`:true
- :red_circle:`boolean`:fasle

**用法示例**:

```typescript
if(zip.compress("/storage/emulated/0/帅哥","/storage/emulated/0/帅哥.zip","123456")){
    console.log("成功")
}

```

### 解压:`decompress(zipFilePath: string, destFilePath: string, password: string=""): boolean` :white_check_mark:
:lock:**权限**: 储存
**参数**:
- :star:`string` (zipFilePath):压缩包路径
- :star:`string` (destFilePath):解压路径
- `string` (password):解缩密码

**返回值**:
- :green_circle:`boolean`:true
- :red_circle:`boolean`:fasle

**用法示例**:

```typescript
if(zip.decompress("/storage/emulated/0/帅哥.zip","/storage/emulated/0/","123456")){
    console.log("成功")
}

```