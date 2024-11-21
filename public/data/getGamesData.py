import requests
from bs4 import BeautifulSoup
import json

url = 'https://www.basketball-reference.com/leagues/NBA_2025_games.html'
web = requests.get(url)                        # 取得網頁內容
soup = BeautifulSoup(web.text, "html.parser")  # 轉換成標籤樹

# date
# 選擇包含日期的 <th> 標籤，並篩選 `data-stat` 為 "date_game"
date_elements = soup.select('th[data-stat="date_game"]')
dates = [date.text.strip() for date in date_elements[1:]]

# visitor teams
visitors_teams_elements = soup.select('td[data-stat="visitor_team_name"]')
visitors_teams = [team.text.strip() for team in visitors_teams_elements]  # 提取客場球隊名稱

# home teams
home_teams_elements = soup.select('td[data-stat="home_team_name"]')
home_teams = [team.text.strip() for team in home_teams_elements]  

# visitors score
visitors_scores_elements = soup.select('td[data-stat="visitor_pts"]')
visitors_scores = [score.text.strip() for score in visitors_scores_elements]

# home score
home_scores_elements = soup.select('td[data-stat="home_pts"]')
home_scores = [score.text.strip() for score in home_scores_elements] 

# 將日期與客場球隊組合成結構化數據
game_data = []
for date, visitor_team,home_team,visitors_score,home_score in zip(dates, visitors_teams,home_teams,visitors_scores,home_scores):
    game_data.append({
        "date": date,
        "visitor_team": visitor_team,
        "home_team": home_team,
        "visitor_score":visitors_score,
        "home_score":home_score
    })

# 保存為 JSON 檔案
with open('basketball-stats-tracker/public/data/gamedata.json', 'w', encoding='utf-8') as f:
    json.dump(game_data, f, ensure_ascii=False, indent=4)

print("Data has been saved to 'gamedata.json'")
