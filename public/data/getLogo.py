import os
import requests
from bs4 import BeautifulSoup

# 目標網址
url = "https://www.sportslogos.net/teams/list_by_league/6/National_Basketball_Association/NBA/logos/"

# 建立存放圖片的資料夾
output_folder = "nba_team_logos"
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# 發送 GET 請求獲取網頁內容
response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")

# 找到所有包含 Logo 的 <a> 標籤
teams = soup.select("ul.logoWall a")

# 限制下載前 30 個結果
for index, team in enumerate(teams[:30]):
    team_name = team.get("title")  # 獲取隊伍名稱
    if team_name:
        team_name = team_name.replace(" Logos", "").strip()  # 移除多餘字眼
    
    img_tag = team.find("img")  # 找到圖片標籤
    if img_tag:
        img_url = img_tag["src"]  # 獲取圖片 URL
        img_data = requests.get(img_url).content  # 下載圖片內容
        
        # 設定檔案名稱
        file_name = f"{team_name}.png"
        file_path = os.path.join(output_folder, file_name)
        
        # 保存圖片
        with open(file_path, "wb") as f:
            f.write(img_data)
        print(f"Downloaded: {file_name}")

print("Top 30 team logos downloaded successfully!")
