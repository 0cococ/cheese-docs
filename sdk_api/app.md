---
outline: deep
---

## App相关

```typescript
import core from 'cheese-core';

const app = core.app;
```

### 用浏览器打开网站: `openUrl(url: string): void` :white_check_mark:

**参数**:

- :star:`string` (url): 网站的Url。如果不以 "http://" 或 "https://" 开头，则默认是 "http://"

**用法示例**:

```typescript
app.openUrl("https://www.example.com")
```

### 卸载应用: `uninstall(pkg: string): void` :white_check_mark:

**参数**:

- :star:`string` (pkg): 目标包名

**用法示例**:

```typescript
app.uninstall("com.example.package")
```

### 获取应用名称对应的已安装的应用的包名: `getPackageName(appName:string): string` :white_check_mark:

**参数**:

- :star:`string` (appName): 应用名称

**返回值**:

- :green_circle:`string`: 应用包名
- :red_circle: null

**用法示例**:

```typescript
const packageName = app.getPackageName("Cheese");
console.log("包名" , packageName);
```

### 获取应用包名对应的已安装的应用的名称: `getAppName(packageName:string): string` :white_check_mark:

**参数**:

- :star:`string` (pkg): 目标包名

**返回值**:

- :green_circle:`string`: 应用名称
- :red_circle: null

**用法示例**:

```typescript
const appName = app.getAppName("com.example.app");
console.log("应用名称", appName);
```

### 打开App设置页面: `openAppSettings(packageName: string): boolean` :white_check_mark:

**参数**:

- :star:`string` (packageName): 目标包名

**返回值**:

- :green_circle:`boolean`: true
- :red_circle:`boolean`: false

**用法示例**:

```typescript
if (app.openAppSettings("com.example.app")) {
    console.log("成功");
}
```

### 包名打开app: `openApp(pkg: string): void` :white_check_mark:

**参数**:

- :star:`string` (pkg):包名

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:fasle

**用法示例**:

```typescript
if (app.openApp("com.sm")) {
    console.log("成功");
}
```

### 打开Scheme: `openScheme(schemeUri: string): boolean` :white_check_mark:

**参数**:

- :star:`string` (schemeUri): Scheme字符串

**返回值**:

- :green_circle:`boolean`: true
- :red_circle:`boolean`: false

**用法示例**:

```typescript
if (app.openScheme("your_scheme_here")) {
    console.log("成功");
}
```




