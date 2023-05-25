#!/usr/bin/bash
# Name: ref.sh
# Author：Lynn <lynnchen1020@gmail.com>
# Describe：處理 backstopjs 快照參照

# 本機開發用路徑
source "./.env"


for (( i = 0; i < ${#arr[@]} ; i++ )); do
  eval "STORY=${arr[$i]} npm run backstop:ref"
done