# Re-implementing the JSON creation due to execution state reset

# Preparing the JSON content for the Home and News pages
website_content = {
    "home": {
        "tagline": "Your ultimate source for everything NBA!",
        "featured_sections": [
            {
                "title": "Today's Games",
                "description": "查看今日所有賽事的即時比分和結果。快來支援你的球隊！",
                "example_games": [
                    {"matchup": "Boston Celtics vs. Los Angeles Lakers", "time": "今晚 8:00 PM"}
                ]
            },
            {
                "title": "數據亮點",
                "description": "近期比賽的數據亮點",
                "highlights": [
                    {"category": "高得分球員", "player": "LeBron James", "stat": "45 分"},
                    {"category": "最佳助攻", "player": "Stephen Curry", "stat": "12 次助攻"},
                    {"category": "最強籃板", "player": "Joel Embiid", "stat": "18 籃板"}
                ]
            },
            {
                "title": "歷史經典",
                "description": "NBA 歷史中的經典瞬間",
                "example": "2006年，Dwyane Wade 帶領邁阿密熱火贏得總冠軍，成為總決賽 MVP！"
            }
        ],
        "recommendations": [
            "Discover the top players of the season!",
            "Explore team statistics and achievements!"
        ]
    },
    "news": {
        "headline_news": [
            {
                "title": "Giannis Antetokounmpo 簽下 5 年頂薪合約",
                "content": "密爾瓦基公鹿隊宣布，Giannis 已經簽下 2.5 億美元的長期合約。球迷表示對未來充滿期待。",
                "date": "2024 年 11 月 20 日"
            },
            {
                "title": "Victor Wembanyama 打破新秀紀錄",
                "content": "馬刺新星 Wembanyama 在比賽中狂砍 50 分，成為歷史上得分最高的新秀之一。",
                "date": "2024 年 11 月 19 日"
            },
            {
                "title": "NBA 聯盟公布聖誕大戰賽程",
                "content": "比賽焦點：勇士 vs 湖人、公鹿 vs 太陽",
                "date": "2024 年 11 月 18 日"
            }
        ],
        "rumors_and_discussions": [
            {
                "title": "詹姆斯退休後會成為教練嗎？",
                "content": "有消息稱 LeBron James 可能在未來幾年內轉型為教練。球迷正在熱烈討論他的潛力。"
            },
            {
                "title": "NBA 擴展計畫",
                "content": "聯盟正在考慮新增兩支新球隊，其中一支可能會落戶於拉斯維加斯。"
            }
        ],
        "featured_columns": [
            {
                "title": "本季 MVP 競爭白熱化！",
                "content": "目前的 MVP 候選人：Nikola Jokic, Luka Dončić, 和 Joel Embiid。"
            },
            {
                "title": "數據解讀：三分球如何改變現代籃球？",
                "content": "深入分析三分球在比賽中越來越重要的角色，並舉例說明 Curry 的影響力。"
            }
        ]
    }
}

# Saving the JSON content to a file
import json

output_path = "nba_website_content.json"
with open(output_path, "w", encoding="utf-8") as file:
    json.dump(website_content, file, ensure_ascii=False, indent=4)