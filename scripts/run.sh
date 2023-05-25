# Name: run.sh
# Author：Lynn <lynnchen1020@gmail.com>
# Describe：處理 crotab 排程
#!/bin/bash

WORKDIR=$(dirname $(dirname "$0"))
TEXT="<b>[$STORY] 測試報告失敗：</b> <a href='file://Users/jing-an/web/examples/backstop-demo-r/backstop_data/html_report/$STORY/index.html'>link</a>"

# ENCODED_TEXT=$(echo "$TEXT" | sed 's/&/%26/g' | sed "s/'/%27/g")
# Telegram
TOKEN="6142813887:AAFN0wOTHaSNDFpvh2d-Npjl6-zleIlzCxw"
ID="-948197133"
URL="https://api.telegram.org/bot$TOKEN/sendMessage"

cd $WORKDIR

npx backstop test --configPath=backstop-settings.js

result_str="$?"

if [ "$result_str" = "0" ]; then
  echo "執行結果：PASS"
else
  echo "執行結果：FAIL"
  curl -s -X POST $URL -d chat_id=$ID -d parse_mode=HTML -d text="$(echo $TEXT)"
  # curl -s -X POST "$URL" -d "chat_id=$CHAT_ID" -d "parse_mode=HTML" -d "text=$ENCODED_TEXT"

  # curl --request POST \--url http://localhost:3000/msg \--header 'Content-Type: application/json' \--data '{"msg": "迴歸測試失敗，請查看TG訊息"}'
fi

