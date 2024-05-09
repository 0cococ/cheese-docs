---
outline: deep
---

## 颜色相关
```typescript
import core from 'cheese-core';
const color = core.cv.color;
```

### 获取坐标点的Rgb:`getRgb(bitmap: Bitmap, x: number, y: number): IntArray` :white_check_mark:

**参数**:
- :star:`bitmap` (bitmap):图片的bit对象
- :star:`number` (x):目标x
- :star:`number` (y):目标y

**返回值**:
- :green_circle:`number`:Rgb数值
- :red_circle:null

**用法示例**:

```javascript
if (recordscreen.requestPermission(3)) {
    let bit = recordscreen.captureScreen(3, 0, 0, 0, -1)
    console.log("Rgb", color.getRgb(bit, 12, 32))
    release.release(bit)
}

```

