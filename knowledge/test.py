import json
import re

# JSONファイルを読み込む
with open('honey-plant-list.json', 'r', encoding='utf-8') as f:
    honey_data = json.load(f)

# 別名を追加する関数
def add_alias(honey_data):
  for data in honey_data:
    # 説明文から別名を探す
    match = re.search(r'別名「([^」]+)」', data["description"])
    # 別名があれば追加
    if match:
      data["alias"] = match.group(1)
  return honey_data

# 別名を追加したJSONデータ
honey_data_with_alias = add_alias(honey_data)

# 結果を出力
print(json.dumps(honey_data_with_alias, ensure_ascii=False, indent=2))