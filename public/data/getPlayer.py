import requests
from bs4 import BeautifulSoup
import time
import json

teams_name = [
    "ATL", "BOS", "BRK", "CHO", "CHI", "CLE", "DAL", "DEN", "DET", 
    "GSW", "HOU", "IND", "LAC", "LAL", "MEM", "MIA", "MIL", "MIN", 
    "NOP", "NYK", "OKC", "ORL", "PHI", "PHO", "POR", "SAC", "SAS", 
    "TOR", "UTA", "WAS"
]

base_url = 'https://www.basketball-reference.com/teams/{}/2025.html'
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36'
}

data = {}

for team_name in teams_name:
    url = base_url.format(team_name)
    try:
        print(f"Fetching data for {team_name}...")
        web = requests.get(url, headers=headers)
        time.sleep(5)  # 避免觸發反爬蟲機制
        web.raise_for_status()
        soup = BeautifulSoup(web.text, "html.parser")

        # 抓取所有 <td> 中 `data-stat="player"` 並提取 <a> 的文字
        player_cells = soup.select('td[data-stat="player"] a')
        players = [player.text.strip() for player in player_cells]

        # 將球員存入字典
        data[team_name] = players
        print(f"Found {len(players)} players for {team_name}")
    except Exception as e:
        print(f"Failed to fetch data for {team_name}: {e}")

# 保存為 JSON
output_path = 'basketball-stats-tracker/public/data/players.json'
with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=4)

print(f"Player data has been saved to {output_path}")
