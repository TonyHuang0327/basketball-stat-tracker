import requests
from bs4 import BeautifulSoup
import json

url = 'https://www.basketball-reference.com/teams/'
web = requests.get(url)                        # 取得網頁內容
soup = BeautifulSoup(web.text, "html.parser")  # 轉換成標籤樹

# 找到 tbody 裡面的所有 a 標籤
a_tags = soup.select('tbody a')

# 創建一個字典，以球隊名作為 key
teams = {a.text: {} for a in a_tags[:30]}  # 這裡你可以將每個球隊初始化為一個空字典，之後可以加其他資料進去

# 儲存為 JSON 檔案
with open('basketball-stats-tracker/public/data/teams.json', 'w', encoding='utf-8') as f:
    json.dump(teams, f, ensure_ascii=False, indent=4)

print("Data has been saved to 'teams.json'")
