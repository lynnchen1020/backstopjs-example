# BackstopJS Demo

使用 backstopjs 進行工具進行介面畫面能交互比對工作

## 準備工作

- 定義測試情境
- 準備測試環境
- 進行快照參考
- 進行快照測試

### 指令

單一測試檔案進行快照

```shell
STORY=main npm run backstop:ref
```

單一測試檔案進行比對

```shell
STORY=main npm run backstop:test
```

全部頁面進行快照,測試清單請看.env檔
```shell
bash ./scripts/ref.sh
```

全部頁面進行比對
```shell
bash ./scripts/test.sh
```

## Windows 準備工作
環境需求： node 14 版以上

### 指令
單一測試檔案進行快照
```shell
set STORY=main && npm run backstop:ref
```