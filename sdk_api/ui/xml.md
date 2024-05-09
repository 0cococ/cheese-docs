---
outline: deep
---
## Ui相关

```typescript
import core from 'cheese-core';

const xml = core.ui.xml;
```

### 解析Apk的View: `parseXml(xml:string): View` :white_check_mark:

**参数**:

- :star:`string` (xml):xml路径 ore xml字符串

  **返回值**:
- :green_circle:`View`:View对象
- :red_circle:null

**用法示例**:

```typescript
/**方式1*/
console.log(xml.parseXml("/storage/emulated/0/Pictures/ui.xml"))

/**方式2*/
console.log(xml.parseXml(`
<LinearLayout height="match_parent" width="match_parent" orientation="vertical" gravity="center">
    <Button height="wrap_content" text="第一个按钮" width="wrap_content" />
    <Button height="wrap_content" id="t2" text="第二个按钮" width="wrap_content" />
    <EditText height="wrap_content" width="200dp" hint="我是提示输入内容" />
    <TextView height="wrap_content" text="我是文本" width="wrap_content" background="red" />
</LinearLayout>
`))
```

### 启动Activity: `startActivity(activityId:string,callback:Callback): void` :white_check_mark:

**参数**:
- :star:`string` (activityId):内置Activity的对应Id [0...9]
- :star:`Callback` (callback):回调

**用法示例**:

```typescript
xml.parseXml("/storage/emulated/0/Pictures/ui.xml")
xml.startActivity("P0", (e) => {
    console.log("onCreate", e)
    e.context.setContentView(e.view)
})
```

### 监听按钮点击: `setOnClickListener(callback:Callback): void` :white_check_mark:

**参数**:

- :star:`Callback` (callback):回调

**用法示例**:

```typescript
xml.parseXml("/storage/emulated/0/Pictures/ui.xml")
xml.startActivity("P0", (e) => {
    console.log("onCreate", e)
    e.activity.setContentView(e.view)
    let button = e.activity.findViewById(xml.getID("t2"));
    button.setOnClickListener(() => {
        console.log("帅比")
    });

})
```
