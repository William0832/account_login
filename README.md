# Account login

基礎的登入功能練習，透過 Node.js、Express、Express-handlebars、body-parser 建置

![示意圖](https://github.com/William0832/account_login/blob/master/img/Account_Login.gif)

## 功能表

- 在登入頁面，使用者輸入正確 email 和對應 password 將登入歡迎頁面
- 在登入頁面，若使用者輸入錯誤，將顯示錯誤訊息
- 在登入頁面，使用者勾選**記住我**，即使下次登入失敗也將保留 email 欄位
- 使用者在歡迎頁面，可點擊**logout**，回到登入頁面

## 測試帳號

|     |               Email |         Password |
| --: | ------------------: | ---------------: |
|   1 |      tony@stark.com |       iamironman |
|   2 | captain@hotmail.com | icandothisallday |
|   3 |    peter@parker.com |         enajyram |
|   4 |   natasha@gamil.com |     \*parol#@\$! |
|   5 |     nick@shield.com |         password |

## 安裝操作

1. **下載專案**

```
git clone https://github.com/William0832/account_login.git
```

2. **由 (Terminal)，進入 restaurant_list 資料夾**

```
cd account_login
```

3. **安裝專案需求套件**

```
npm install
```

4. **執行專案**

```
npm run dev
```

5. **檢視 Terminal 訊息：Express server is listen [localhost:3000](http://localhost:3000)**
