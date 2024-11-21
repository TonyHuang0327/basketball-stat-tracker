import requests
from bs4 import BeautifulSoup
import json
import time

# 球隊名稱列表
teams_name = [
    "ATL", "BOS", "BRK", "CHO", "CHI", "CLE", "DAL", "DEN", "DET", 
    "GSW", "HOU", "IND", "LAC", "LAL", "MEM", "MIA", "MIL", "MIN", 
    "NOP", "NYK", "OKC", "ORL", "PHI", "PHO", "POR", "SAC", "SAS", 
    "TOR", "UTA", "WAS"
]

base_url = 'https://www.basketball-reference.com/teams/{}/2025.html'

# 儲存所有球隊資料的字典
teams_data = {}

# 爬取每個球隊的資料
for team_name in teams_name:
    url = base_url.format(team_name)  # 格式化 URL
    try:
        web = requests.get(url)  # 取得網頁内容
        time.sleep(5)  # 等待5秒，避免過度請求
        web.raise_for_status()   # 檢查 HTTP 請求是否成功
        soup = BeautifulSoup(web.text, "html.parser")  # 轉換成標籤數
        print(f"Successfully fetched data for {team_name}")  # 輸出成功訊息

        # 查找指定表格
        table = soup.find('table', class_='sortable stats_table now_sortable')

        players = table.select('td[data-stat="player"]')

        player_names = [player.text.strip() for player in players]

        # 將每個球隊的球員名稱儲存到字典中
        teams_data[team_name] = player_names

    except requests.exceptions.RequestException as e:
        print(f"Failed to fetch data for {team_name}: {e}")

# 將資料保存成 JSON 檔案
with open('basketball-stats-tracker/public/data/players.json', 'w', encoding='utf-8') as f:
    json.dump(teams_data, f, ensure_ascii=False, indent=4)

print("Data has been saved to 'players.json'")
