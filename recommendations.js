const recommendationsData = {
    "🍜 拉麵": [
      { name: "花蓮拉麵魂", type: "🍜 拉麵", price: "190元", rating: "4.5", note: "濃郁豚骨，必點叉燒", city: "花蓮", lat: 23.9876, lon: 121.6015 },
      { name: "一風堂台北站前店", type: "🍜 拉麵", price: "260元", rating: "4.6", note: "日式風味，湯頭濃厚", city: "台北", lat: 25.0478, lon: 121.5168 },
      { name: "桃園豚將拉麵", type: "🍜 拉麵", price: "220元", rating: "4.3", note: "CP值高，服務親切", city: "桃園", lat: 24.9937, lon: 121.3000 },
      { name: "雞白郎拉麵", type: "日式拉麵", price: "200元", rating: "4.6", note: "泡系雞白湯拉麵，湯頭濃郁黏稠，令人難忘。", city: "台北", lat: 25.0420, lon: 121.5650 },
      { name: "蘭花町日本拉麵", type: "日式拉麵", price: "220元", rating: "4.5", note: "紅味噌豚骨最受歡迎，香濃回甘。", city: "花蓮", lat: 23.9737, lon: 121.3735 },
      { name: "定置漁場三代目", type: "日式拉麵", price: "250元", rating: "4.3", note: "招牌柚子胡椒麵，人氣排隊名店。", city: "花蓮", lat: 23.9911, lon: 121.6027 },
      { name: "拉麵霸", type: "豚骨拉麵", price: "180元", rating: "4.5", note: "濃郁豚骨，份量十足。", city: "台北", lat: 25.0330, lon: 121.5645 },
      { name: "台北拉麵館", type: "創意拉麵", price: "160元", rating: "4.3", note: "台式創意口味，物超所值。", city: "台北", lat: 25.0375, lon: 121.5637 }
    ],
    "🍰 甜點": [
      { name: "花蓮手作甜點坊", type: "🍰 甜點", price: "150元", rating: "4.8", note: "生乳捲入口即化", city: "花蓮", lat: 23.9989, lon: 121.6042 },
      { name: "台北糖村", type: "🍰 甜點", price: "180元", rating: "4.6", note: "法式甜點精緻高雅", city: "台北", lat: 25.0405, lon: 121.5646 },
      { name: "台南胖老爹甜屋", type: "🍰 甜點", price: "120元", rating: "4.4", note: "老屋改建咖啡廳", city: "台南", lat: 22.9911, lon: 120.2042 },
      { name: "邊境法式甜點坊", type: "法式甜點", price: "150元", rating: "4.8", note: "甜而不膩，口感層次豐富。", city: "台中", lat: 24.1477, lon: 120.6736 },
      { name: "找到了可頌", type: "可頌專賣", price: "120元", rating: "4.7", note: "酥脆分明，奶香十足。", city: "新竹", lat: 24.8066, lon: 120.9686 },
      { name: "芙依瑪手作甜點", type: "手工甜點", price: "100元", rating: "4.6", note: "嚴選原料，細緻綿密。", city: "花蓮", lat: 23.9939, lon: 121.5992 },
      { name: "一丁鯛魚燒", type: "日式甜點", price: "80元", rating: "4.5", note: "經典餡料，現烤香氣撲鼻。", city: "宜蘭", lat: 24.7561, lon: 121.7531 },
      { name: "歪歪歪甜點", type: "創意甜點", price: "90元", rating: "4.4", note: "視覺系甜點，拍照打卡必備。", city: "台北", lat: 25.0452, lon: 121.5330 }
    ],
    "🍛 咖哩": [
      { name: "台南家咖哩", type: "🍛 咖哩", price: "220元", rating: "4.6", note: "香料濃郁，飯量十足", city: "台南", lat: 22.9953, lon: 120.2102 },
      { name: "台北日日咖哩", type: "🍛 咖哩", price: "240元", rating: "4.5", note: "熟成咖哩風味濃郁", city: "台北", lat: 25.0471, lon: 121.5319 },
      { name: "花蓮簡單咖哩", type: "🍛 咖哩", price: "180元", rating: "4.4", note: "平價簡餐好選擇", city: "花蓮", lat: 23.9962, lon: 121.6017 },
      { name: "家咖哩", type: "日式咖哩", price: "250元", rating: "4.5", note: "濃郁咖哩風味，裝潢溫馨。", city: "花蓮", lat: 23.9925, lon: 121.6020 },
      { name: "歐歐咖哩屋", type: "歐風咖哩", price: "230元", rating: "4.4", note: "辛香滑順，辣度可選。", city: "台北", lat: 25.0392, lon: 121.5662 },
      { name: "古月咖哩", type: "創意咖哩", price: "180元", rating: "4.2", note: "融合在地食材，風味獨特。", city: "台中", lat: 24.1421, lon: 120.6832 },
      { name: "阿胖咖哩", type: "家庭咖哩", price: "150元", rating: "4.1", note: "平價親切，學生最愛。", city: "新竹", lat: 24.8049, lon: 120.9671 },
      { name: "咖哩町町", type: "豬排咖哩", price: "200元", rating: "4.3", note: "炸豬排酥脆不油膩。", city: "台南", lat: 23.0031, lon: 120.2027 }
    ],
    "🥗 輕食": [
      { name: "桃園沙拉小屋", type: "🥗 輕食", price: "160元", rating: "4.2", note: "份量剛好不油膩", city: "桃園", lat: 24.9910, lon: 121.3130 },
      { name: "台北Fresh Box", type: "🥗 輕食", price: "200元", rating: "4.7", note: "健身族最愛！", city: "台北", lat: 25.0418, lon: 121.5446 },
      { name: "宜蘭健康選食", type: "🥗 輕食", price: "150元", rating: "4.3", note: "均衡蔬果滿分", city: "宜蘭", lat: 24.7551, lon: 121.7569 },
      { name: "小巷茉莉", type: "輕食餐廳", price: "200元", rating: "4.3", note: "文青風格，適合下午茶。", city: "花蓮", lat: 23.9865, lon: 121.6078 },
      { name: "春秋咖啡", type: "沙拉吐司", price: "180元", rating: "4.4", note: "手工吐司、蔬果搭配新鮮。", city: "台中", lat: 24.1469, lon: 120.6815 },
      { name: "溫室手作", type: "沙拉便當", price: "150元", rating: "4.2", note: "輕食不失飽足，推薦香烤雞腿。", city: "新竹", lat: 24.8054, lon: 120.9635 },
      { name: "風禾蔬食館", type: "蔬食輕食", price: "220元", rating: "4.5", note: "健康有機、無負擔。", city: "高雄", lat: 22.6306, lon: 120.3058 },
      { name: "森果早午餐", type: "水果拼盤", price: "160元", rating: "4.3", note: "多樣水果搭配酸奶，美味清爽。", city: "花蓮", lat: 23.9982, lon: 121.6099 }
    ],
    "🍚 中式小吃": [
        { name: "花蓮小籠包大王", type: "🍚 中式小吃", price: "90元", rating: "4.7", note: "手工現包，湯汁滿滿", city: "花蓮", lat: 23.9931, lon: 121.6012 },
        { name: "台北永康牛肉麵", type: "🍚 中式小吃", price: "160元", rating: "4.5", note: "牛肉軟嫩湯頭香", city: "台北", lat: 25.0330, lon: 121.5295 },
        { name: "宜蘭古早味魯肉飯", type: "🍚 中式小吃", price: "70元", rating: "4.2", note: "香滷醬汁滲透米飯", city: "宜蘭", lat: 24.7545, lon: 121.7561 },
        { name: "液香扁食", type: "扁食", price: "80元", rating: "4.6", note: "70年老店，清爽湯頭。", city: "花蓮", lat: 23.9759, lon: 121.6048 },
        { name: "竹舍小吃", type: "滷肉飯", price: "100元", rating: "4.5", note: "半熟滷肉飯超級推薦。", city: "台中", lat: 24.1446, lon: 120.6739 },
        { name: "壽豐小吃", type: "中式料理", price: "120元", rating: "4.4", note: "菜色多樣，價格實惠。", city: "花蓮", lat: 23.8863, lon: 121.5064 },
        { name: "愛朱家", type: "台式小吃", price: "90元", rating: "4.3", note: "手工口感，在地人愛店。", city: "新竹", lat: 24.8034, lon: 120.9699 },
        { name: "黃車炸彈蔥油餅", type: "蔥油餅", price: "50元", rating: "4.7", note: "酥香有勁，人氣爆棚。", city: "花蓮", lat: 23.9860, lon: 121.6041 }
      ],
      "🍱 日式小吃": [
        { name: "花蓮日式便當亭", type: "🍱 日式小吃", price: "160元", rating: "4.3", note: "炸豬排超酥脆", city: "花蓮", lat: 23.9855, lon: 121.5991 },
        { name: "桃園日式丼飯屋", type: "🍱 日式小吃", price: "180元", rating: "4.4", note: "鰻魚飯必點！", city: "桃園", lat: 24.9922, lon: 121.3081 },
        { name: "宜蘭和風燒烤店", type: "🍱 日式小吃", price: "200元", rating: "4.6", note: "串燒種類多元", city: "宜蘭", lat: 24.7602, lon: 121.7523 },
        { name: "田村壽司", type: "壽司", price: "180元", rating: "4.4", note: "壽司現做，海鮮新鮮實在。", city: "台北", lat: 25.0426, lon: 121.5433 },
        { name: "魚豐日式小吃", type: "定食小吃", price: "150元", rating: "4.5", note: "道地口味，環境舒適。", city: "台南", lat: 22.9977, lon: 120.2124 },
        { name: "山川食堂", type: "定食", price: "200元", rating: "4.3", note: "家常風味，溫馨小店。", city: "台中", lat: 24.1435, lon: 120.6810 },
        { name: "小日子丼飯屋", type: "丼飯", price: "130元", rating: "4.2", note: "份量十足，平價美味。", city: "新竹", lat: 24.8050, lon: 120.9650 },
        { name: "炙屋日式關東煮", type: "關東煮", price: "100元", rating: "4.6", note: "湯頭清香，配料豐富。", city: "台北", lat: 25.0366, lon: 121.5213 }
      ],
        "🍕 異國料理": [
          { name: "台北墨西哥Taco Bar", type: "🍕 異國料理", price: "260元", rating: "4.8", note: "超道地辣味肉餅", city: "台北", lat: 25.0483, lon: 121.5171 },
          { name: "台南義大利麵坊", type: "🍕 異國料理", price: "230元", rating: "4.5", note: "蒜香奶油白醬讚", city: "台南", lat: 22.9992, lon: 120.2048 },
          { name: "花蓮披薩森林", type: "🍕 異國料理", price: "280元", rating: "4.7", note: "手工窯烤吃得到誠意", city: "花蓮", lat: 23.9998, lon: 121.6011 },
          { name: "伊江滇緬料理", type: "東南亞料理", price: "250元", rating: "4.4", note: "滇緬風味十足，香氣撲鼻。", city: "花蓮", lat: 23.9922, lon: 121.6009 },
          { name: "瑪莉的義式廚房", type: "義大利麵", price: "230元", rating: "4.5", note: "手工醬汁，濃郁可口。", city: "台北", lat: 25.0415, lon: 121.558 },
          { name: "拉丁美洲餐館", type: "墨西哥料理", price: "210元", rating: "4.3", note: "酥炸餅皮，酸奶點綴好開胃。", city: "台中", lat: 24.1403, lon: 120.6738 },
          { name: "韓食家", type: "韓式料理", price: "200元", rating: "4.2", note: "泡菜鍋、部隊鍋都超讚。", city: "高雄", lat: 22.6243, lon: 120.3 },
          { name: "異國味餐館", type: "綜合異國料理", price: "190元", rating: "4.1", note: "一次滿足多國風味。", city: "桃園", lat: 24.9901, lon: 121.3133 }
        ],
        "🥦 健康餐": [
          { name: "花蓮低醣便當店", type: "🥦 健康餐", price: "170元", rating: "4.5", note: "高蛋白低醣超適合健身族", city: "花蓮", lat: 23.9941, lon: 121.6022 },
          { name: "桃園CleanMeal", type: "🥦 健康餐", price: "190元", rating: "4.6", note: "精緻輕盈不油膩", city: "桃園", lat: 24.9908, lon: 121.3142 },
          { name: "台北小農選食", type: "🥦 健康餐", price: "210元", rating: "4.7", note: "有機蔬食熱銷中", city: "台北", lat: 25.0421, lon: 121.5499 },
          { name: "森山舎", type: "健康餐", price: "300元", rating: "4.6", note: "有機食材，清新無負擔。", city: "花蓮", lat: 23.9901, lon: 121.6016 },
          { name: "食養軒", type: "養生便當", price: "250元", rating: "4.4", note: "藥膳風味，溫潤調理。", city: "台中", lat: 24.1389, lon: 120.6832 },
          { name: "清新餐盒", type: "水煮便當", price: "200元", rating: "4.3", note: "低油低鹽，輕鬆吃飽。", city: "高雄", lat: 22.6369, lon: 120.3145 },
          { name: "素本初", type: "蔬食套餐", price: "180元", rating: "4.2", note: "簡單清爽，健康滿分。", city: "台北", lat: 25.0468, lon: 121.5308 },
          { name: "果嶼", type: "沙拉餐盒", price: "160元", rating: "4.1", note: "新鮮水果＋穀物，元氣滿滿。", city: "新竹", lat: 24.8059, lon: 120.9691 }
        ]
      };
      