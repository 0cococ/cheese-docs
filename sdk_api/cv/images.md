---
outline: deep
---
## 图片操作相关
```typescript
import core from 'cheese-core';
const images = core.cv.images;
```

### 同分辨率-Surf找图:`findImgBySift(inputImage: Bitmap, targetImage: number, threshold: number): IntArray` :white_check_mark:

**参数**:
- :star:`any` (bitmap):大图
- :star:`double` (imgResize):大图缩放倍数
- :star:`any` (template):小图
- :star:`double` (tempResize):小图缩放倍数
- :star:`double` (threshold):匹配度
- :star:`number` (sx):起点x
- :star:`number` (sy):起点y
- :star:`number` (ex):终点x
- :star:`number` (sx):终点y
- :star:`boolean` (upright):true只计算直立方向,fasle计算全部方向

**返回值**:
- :green_circle:`Point[]`:坐标数组
- :red_circle:null

**用法示例**:

```typescript

if (recordscreen.requestPermission(3)) {
    let bit = recordscreen.captureScreen(3, 0, 0, 0, -1)
    let target = converters.streamToBitmap(converters.assetsToStream("1.png"))
    console.log(images.findImgBySift(bit, target, 0.5))
    release.release(bit)
}

```