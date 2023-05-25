#!/usr/bin/bash
# Name: test.sh
# Author：Lynn <lynnchen1020@gmail.com>
# Describe：處理 backstopjs 測試參照比對

# 本機開發用路徑
source "./.env"

for (( i = 0; i < ${#arr[@]} ; i++ )); do
  eval "STORY=${arr[$i]} npm run backstop:test"
done

# curl -s -X POST $URL -d chat_id=$ID -d parse_mode=HTML -d text="$(echo '測試完畢，'$TEXT)"