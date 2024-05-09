---
outline: deep
---

## 转换器相关

```typescript
import core from 'cheese-core';

const converters = core.converters;
```

### 手势组合列表: `pairArray(...data: any[]): Array<Pair<number,number>>`  :white_check_mark:

**参数**:

- :star:`number[]`(...args):手势路径

**返回值**:

- :green_circle:`Array<Pair<number,number>>`:pairArray组合
- :red_circle:null

**用法示例**:

```typescript
console.log(converters.pairArray(764, 1160, 924, 307, 211, 823))
```

### 多手势组合列表: `pairArrays(...data: any[]): Array<Pair<number,number>>`  :white_check_mark:

**参数**:

- :star:`number[]`(...args):手势路径

**返回值**:

- :green_circle:`Array<Pair<number,number>>`:pairArray组合
- :red_circle:null

**用法示例**:

```typescript
console.log(converters.pairArrays(converters.pairArray(764, 1160, 924, 307, 211, 823)))
```

### SD卡文件转成InputStream: `sdToStream(filePath: string): InputStream`  :white_check_mark:

**参数**:

- :star:`string`(filePath):文件路径

**返回值**:

- :green_circle:`InputStream`:InputStream对象
- :red_circle:null

**用法示例**:

```typescript
console.log(converters.sdToStream("/storage/emulated/0/1.txt"))
```

### Assets卡文件转成InputStream: `assetsToStream(filePath: string): InputStream`  :white_check_mark:

**参数**:

- :star:`string`(filePath):文件路径

**返回值**:

- :green_circle:`InputStream`:InputStream对象
- :red_circle:null

**用法示例**:

```typescript
console.log(converters.assetsToStream("1.txt"))
```

### InputStream转成Bitmap: `streamToBitmap(inputStream: InputStream): Bitmap`  :white_check_mark:

**参数**:

- :star:`InputStream`(inputStream):InputStream对象

**返回值**:

- :green_circle:`Bitmap`:Bitmap对象
- :red_circle:null

**用法示例**:

```typescript
console.log(converters.streamToBitmap(converters.assetsToStream("1.png")))
```

### Bitmap转成InputStream: `bitmapToStream(bitmap: Bitmap): InputStream`  :white_check_mark:

**参数**:

- :star:`Bitmap`(bitmap):Bitmap对象

**返回值**:

- :green_circle:`InputStream`:InputStream对象
- :red_circle:null

**用法示例**:

```typescript
if (recordscreen.requestPermission(3)) {
    let bit = recordscreen.captureScreen(3, 0, 0, 0, -1)
    console.log(converters.bitmapToStream(bit))
}
```