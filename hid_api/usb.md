---
outline: deep
---

## 设备相关

### 查找设备:`[find]http://127.1.1.0:1314/device/find?uid=A1&serial=7TD5T21304006110&vid=0x12D1&pid=0x107E` :white_check_mark:

**参数**:
- :star: (uid):自定义设备uid
- :star: (serial):设备序列号
- :star: (vid):设备vid
- :star: (vid):设备pid

**返回值**:
- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": "true"
  }

- :red_circle::null


### 初始化设备:`[init]http://127.1.1.0:1314/device/init?uid=A1` :white_check_mark:

**参数**:
- :star: (uid):对应设备uid

**返回值**:
- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": "true"
  }

- :red_circle::null





### 设置设备分辨率:`[resolution]http://127.1.1.0:1314/device/resolution?uid=A1&width=720&height=1080` :white_check_mark:

**参数**:
- :star: (uid):对应设备uid
- :star: (width):设备屏幕高度
- :star: (height):设备屏幕宽度

**返回值**:
- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": "true"
  }

- :red_circle::null


## 操作相关

### 坐标点击:`[clickPoint]http://127.1.1.0:1314/api/clickPoint?uid=A1&x=528&y=822` :white_check_mark:

**参数**:
- :star: (uid):对应设备uid
- :star: (x):x坐标
- :star: (y):y坐标

**返回值**:
- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": "true"
  }

- :red_circle::null

### 坐标长按:`[longClickPoint]http://127.1.1.0:1314/api/longClickPoint?uid=A1&x=528&y=822&dur=1` :white_check_mark:

**参数**:
- :star: (uid):对应设备uid
- :star: (x):x坐标
- :star: (y):y坐标
- :star: (dur):长按时间/s

**返回值**:
- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": "true"
  }

- :red_circle::null

### 坐标滑动:`[swipeToPoint]http://127.1.1.0:1314/api/swipeToPoint?uid=A1&x=322&y=455&sx=678&sy=970` :white_check_mark:

**参数**:
- :star: (uid):对应设备uid
- :star: (x):开始坐标x
- :star: (y):开始坐标y
- :star: (sx):目标坐标x
- :star: (sy):目标坐标y

**返回值**:
- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": "true"
  }

- :red_circle::null


### 坐标触摸长按:`[touchDown]http://127.1.1.0:1314/api/touchDown?uid=A1&x=322&y=455` :white_check_mark:

**参数**:
- :star: (uid):对应设备uid
- :star: (x):按下坐标x
- :star: (y):按下坐标y

**返回值**:
- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": "true"
  }

- :red_circle::null


### 坐标触摸滑动:`[touchMove]http://127.1.1.0:1314/api/touchMove?uid=A1&x=322&y=455` :white_check_mark:

**参数**:
- :star: (uid):对应设备uid
- :star: (x):目标坐标x
- :star: (y):目标坐标y

**返回值**:
- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": "true"
  }

- :red_circle::null

### 坐标触摸抬起:`[touchUp]http://127.1.1.0:1314/api/touchUp?uid=A1` :white_check_mark:

**参数**:
- :star: (uid):对应设备uid

**返回值**:
- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": "true"
  }

- :red_circle::null


### 按键:`[keyBoard]http://127.1.1.0:1314/api/keyBoard?uid=A1&key=enter` :white_check_mark:

**参数**:
- :star: (uid):对应设备uid
- :star: (key):键名

**返回值**:
- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": "true"
  }

- :red_circle::null
