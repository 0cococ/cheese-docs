---
outline: deep
---

## 设备相关

```typescript
import core from 'cheese-core';

const device = core.device;
```

### 获取 IMEI 号:`getIMEI(): string` :white_check_mark:

**返回值**:

- :green_circle:`string`:imei字符串
- :red_circle:null

**用法示例**:

```typescript
console.log("IMEI", device.getIMEI())
```

### 是否支持 OAID:`supportedOAID(): boolean` :white_check_mark:

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:false

**用法示例**:

```typescript
if (device.supportedOAID()) {
    console.log("支持OAID");
}
```

### 获取OAID:`getOAID(): string` :white_check_mark:

- 国内手机厂商的开放匿名标识（OAID）、海外手机平台的安卓广告标识（AAID）

**返回值**:

- :green_circle:`string`:OAID/AAID字符串
- :red_circle:null

**用法示例**:

```typescript
if (device.supportedOAID()) {
    console.log("OAID", device.getOAID())
}

```

### 获取本机当前经纬度信息:`getPosition(): string` :white_check_mark:

:lock:**权限**: 位置

**返回值**:

- :green_circle:`string`:当前经纬度
- :red_circle:null

**用法示例**:

```typescript

base.runOnUi(() => {
    console.log("经纬度", device.getPosition())
})
```

### 获取公网 IP:`getPublicIP(url: string = "https://api.ipify.org"): string` :white_check_mark:

:lock:**权限**: 网络

**参数**:

- :star:`string`(url):获取公网的api

**返回值**:

- :green_circle:`string`ip 地址
- :red_circle:null

**用法示例**:

```typescript
console.log("ip", device.getPublicIP())
```

### 获取Wifi IP:`getWifiIP(): string` :white_check_mark:

:lock:**权限**: 网络

**返回值**:

- :green_circle:`string`:IP 地址
- :red_circle:null

**用法示例**:

```typescript
console.log("ip", device.getWifiIP())
```

### 获取 Android 版本:`getAndroidVersion(): string` :white_check_mark:

**返回值**:

- :green_circle:`string`:Android 版本
- :red_circle:null

**用法示例**:

```typescript
console.log("Android 版本", device.getAndroidVersion())
```

### 获取状态栏高度:`getStatusBarHeight(): number` :white_check_mark:

**返回值**:

- :green_circle:`number`:状态栏高度
- :red_circle:null

**用法示例**:

```typescript
console.log("状态栏高度" + device.getStatusBarHeight())
```

### 获取导航栏高度:`getNavigationBarHeight(): number` :white_check_mark:

**返回值**:

- :green_circle:`number`:导航栏高度
- :red_circle:null

**用法示例**:

```typescript
console.log("导航栏高度:", device.getNavigationBarHeight())
```

### 获取屏幕高度:`getScreenHeight(): number` :white_check_mark:

**返回值**:

- :green_circle:`number`:屏幕高度
- :red_circle:null

**用法示例**:

```typescript
console.log("屏幕高度", device.getScreenHeight())
```

### 获取当前屏幕宽度:`getScreenWidth(): number` :white_check_mark:

**返回值**:

- :green_circle:`number`:屏幕宽度
- :red_circle:null

**用法示例**:

```typescript
console.log("屏幕宽度", device.getScreenWidth())
```

### 获取当前屏幕dpi:`getScreenDpi(): number` :white_check_mark:

**返回值**:

- :green_circle:`number`:屏幕dpi信息
- :red_circle:null

**用法示例**:

```typescript
console.log("屏幕Dpi", device.getScreenDpi())
```

### 获取本机当前时间戳:`getTime(): number` :white_check_mark:

**返回值**:

- :green_circle:`number`:设备时间戳
- :red_circle:null

**用法示例**:

```typescript
console.log("本机时间戳:" + device.getTime())
```

### 获取剪切板内容:`getClipboard()` :white_check_mark:

**返回值**:

- :green_circle:`string`:剪切板的内容
- :red_circle:null

**用法示例**:

```typescript
console.log("剪切板内容", device.getClipboard())
```

### 设置剪贴板内容:`setClipboard(str)` :white_check_mark:

**参数**:

- :star:`string` (str):设置内容

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:fasle

**用法示例**:

```typescript
if (device.setClipboard("你好")) {
    console.log("设置成功")
}
```
