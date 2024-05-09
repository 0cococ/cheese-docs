---
outline: deep
---
## 时间相关
```typescript
import core from 'cheese-core';
const _time =  core._time;
```

### 创建Worker线程: `create(path: string,paths:string): WorkerUtils` :white_check_mark:

**参数**:

- :star:`string` (path): 当前路径
- :star:`string` (paths): 相对路径

**返回值**:

- :green_circle:`ClassUtils`: ClassUtils对象
- :red_circle:null

**用法示例**:

```typescript
//test.ts

console.log(env.jsObjects.get("1").name)
while (true) {
    base.sleep(1000)
    console.log("worker多线程")
}
```
```typescript
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
//创建worker进程并传递对象
let person1 = new Person("Alice", 30);
env.jsObjects.put("1",person1)
worker.create(__filename,"test.ts")
```

