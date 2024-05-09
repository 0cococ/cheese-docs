---
outline: deep
---

## Yolo相关

```typescript
import core from 'cheese-core';

const yolo = core.yolo;
```

### YoloV8加载: `loadYolo(path: string, list: Array<String>, cpugpu: number): boolean` :white_check_mark:

:lock:**权限**: 储存权限

**参数**:

- :star:`string` (path):模型路径
- :star:`string[]`(labellist):标签列表
- :star:`number` (cpugpu):工作模式选择(CPUGPU=0/1)

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:false

**用法示例**:

```typescript
let tabl = [
    "person", "bicycle", "car", "motorcycle", "airplane", "bus", "train", "truck", "boat", "traffic light",
    "fire hydrant", "stop sign", "parking meter", "bench", "bird", "cat", "dog", "horse", "sheep", "cow",
    "elephant", "bear", "zebra", "giraffe", "backpack", "umbrella", "handbag", "tie", "suitcase", "frisbee",
    "skis", "snowboard", "sports ball", "kite", "baseball bat", "baseball glove", "skateboard", "surfboard",
    "tennis racket", "bottle", "wine glass", "cup", "fork", "knife", "spoon", "bowl", "banana", "apple",
    "sandwich", "orange", "broccoli", "carrot", "hot dog", "pizza", "donut", "cake", "chair", "couch",
    "potted plant", "bed", "dining table", "toilet", "tv", "laptop", "mouse", "remote", "keyboard", "cell phone",
    "microwave", "oven", "toaster", "sink", "refrigerator", "book", "clock", "vase", "scissors", "teddy bear",
    "hair drier", "toothbrush"
];
try {
    var bit = converters.streamToBitmap(converters.assetsToStream("image.png"))
    console.log(yolo.loadYolo("/storage/emulated/0/Pictures/yolov8n", tabl, 0))
    var v8obej = yolo.detect(bit)
    console.log(v8obej[0].label)
    console.log(yolo.getSpeed())
    files.save(yolo.draw(v8obej, bit),"/storage/emulated/0/Pictures/4.png")
} catch (e) {
    console.log(e);
}
```

### YoloV8图片检测: `detect(bitmap: Bitmap): Array<Yolov8Ncnn["Obj"]> ` :white_check_mark:

**扩展属性**:

- 检测个数:`length`
- 第一个的物体标签:`[0].label`
- 第一个的物体中心x:`[0].x`
- 第一个的物体中心y:`[0].y`
- 第一个的物体宽:`[0].w`
- 第一个的物体高:`[0].h`
- 第一个的物体置信度:`[0].prob`

**参数**:

- :star:`bit` (bitmap):bit对象

**返回值**:

- :green_circle:`Array<Yolov8Ncnn["Obj"]> `:Array<Yolov8Ncnn["Obj"]>结构体对象
- :red_circle:null

**用法示例**:

```typescript
let tabl = [
    "person", "bicycle", "car", "motorcycle", "airplane", "bus", "train", "truck", "boat", "traffic light",
    "fire hydrant", "stop sign", "parking meter", "bench", "bird", "cat", "dog", "horse", "sheep", "cow",
    "elephant", "bear", "zebra", "giraffe", "backpack", "umbrella", "handbag", "tie", "suitcase", "frisbee",
    "skis", "snowboard", "sports ball", "kite", "baseball bat", "baseball glove", "skateboard", "surfboard",
    "tennis racket", "bottle", "wine glass", "cup", "fork", "knife", "spoon", "bowl", "banana", "apple",
    "sandwich", "orange", "broccoli", "carrot", "hot dog", "pizza", "donut", "cake", "chair", "couch",
    "potted plant", "bed", "dining table", "toilet", "tv", "laptop", "mouse", "remote", "keyboard", "cell phone",
    "microwave", "oven", "toaster", "sink", "refrigerator", "book", "clock", "vase", "scissors", "teddy bear",
    "hair drier", "toothbrush"
];
try {
    var bit = converters.streamToBitmap(converters.assetsToStream("image.png"))
    console.log(yolo.loadYolo("/storage/emulated/0/Pictures/yolov8n", tabl, 0))
    var v8obej = yolo.detect(bit)
    console.log(v8obej[0].label)
    console.log(yolo.getSpeed())
    files.save(yolo.draw(v8obej, bit),"/storage/emulated/0/Pictures/4.png")
} catch (e) {
    console.log(e);
}
```

### YoloV8检测速度: `getSpeed(): number` :white_check_mark:

**返回值**:

- :green_circle:`number`:本次的检测速度 (ms)
- :red_circle:`number`:0.0

**用法示例**:

```typescript
let tabl = [
    "person", "bicycle", "car", "motorcycle", "airplane", "bus", "train", "truck", "boat", "traffic light",
    "fire hydrant", "stop sign", "parking meter", "bench", "bird", "cat", "dog", "horse", "sheep", "cow",
    "elephant", "bear", "zebra", "giraffe", "backpack", "umbrella", "handbag", "tie", "suitcase", "frisbee",
    "skis", "snowboard", "sports ball", "kite", "baseball bat", "baseball glove", "skateboard", "surfboard",
    "tennis racket", "bottle", "wine glass", "cup", "fork", "knife", "spoon", "bowl", "banana", "apple",
    "sandwich", "orange", "broccoli", "carrot", "hot dog", "pizza", "donut", "cake", "chair", "couch",
    "potted plant", "bed", "dining table", "toilet", "tv", "laptop", "mouse", "remote", "keyboard", "cell phone",
    "microwave", "oven", "toaster", "sink", "refrigerator", "book", "clock", "vase", "scissors", "teddy bear",
    "hair drier", "toothbrush"
];
try {
    var bit = converters.streamToBitmap(converters.assetsToStream("image.png"))
    console.log(yolo.loadYolo("/storage/emulated/0/Pictures/yolov8n", tabl, 0))
    var v8obej = yolo.detect(bit)
    console.log(v8obej[0].label)
    console.log(yolo.getSpeed())
    files.save(yolo.draw(v8obej, bit),"/storage/emulated/0/Pictures/4.png")
} catch (e) {
    console.log(e);
}
```

### YoloV8 绘制检测框信息: `draw(obj:Array<any>,bit:Bitmap): Bitmap` :white_check_mark:

**参数**:

- :star:`V8Obj[]` (objects):V8Obj[]对象
- :star:`bit` (bit):bit对象

**返回值**:

- :green_circle:`bit`:bit对象
- :red_circle:null

**用法示例**:

```typescript
let tabl = [
    "person", "bicycle", "car", "motorcycle", "airplane", "bus", "train", "truck", "boat", "traffic light",
    "fire hydrant", "stop sign", "parking meter", "bench", "bird", "cat", "dog", "horse", "sheep", "cow",
    "elephant", "bear", "zebra", "giraffe", "backpack", "umbrella", "handbag", "tie", "suitcase", "frisbee",
    "skis", "snowboard", "sports ball", "kite", "baseball bat", "baseball glove", "skateboard", "surfboard",
    "tennis racket", "bottle", "wine glass", "cup", "fork", "knife", "spoon", "bowl", "banana", "apple",
    "sandwich", "orange", "broccoli", "carrot", "hot dog", "pizza", "donut", "cake", "chair", "couch",
    "potted plant", "bed", "dining table", "toilet", "tv", "laptop", "mouse", "remote", "keyboard", "cell phone",
    "microwave", "oven", "toaster", "sink", "refrigerator", "book", "clock", "vase", "scissors", "teddy bear",
    "hair drier", "toothbrush"
];
try {
    var bit = converters.streamToBitmap(converters.assetsToStream("image.png"))
    console.log(yolo.loadYolo("/storage/emulated/0/Pictures/yolov8n", tabl, 0))
    var v8obej = yolo.detect(bit)
    console.log(v8obej[0].label)
    console.log(yolo.getSpeed())
    files.save(yolo.draw(v8obej, bit),"/storage/emulated/0/Pictures/4.png")
} catch (e) {
    console.log(e);
}
```



