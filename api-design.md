# 家計簿アプリAPI 設計書


# 1. 概要
家計簿アプリ用のREST API
支出の登録・一覧・編集・削除を行う。

- ベースURL: `/api`
- データ形式: JSON
- 認証: なし


## 2. リソース一覧

- Expense(支出)
- Date (日付)
- User(ユーザー) 
- Amount(金額)
- Category(カテゴリー)

## 3. エンドポイント一覧
| リソース | エンドポイント |
|---------|-------------|
| Expense | /expenses |
| Expense | /expenses/{id} |
| Date | /date |
| User | /users |
| Amount | /amount |
| Category | /categories |

## 4. API詳細
### Expense API
- GET /expenses
- POST /expenses
- GET /expenses/{id}
- PUT /expenses/{id}
- DELETE / expenses/{id}







## 5. エンティティ一覧

### Expense（支出）
｜項目名｜型｜必須｜説明｜
｜-----|---|---|---|
| id | string | ⚪︎ | 支出ID |
| date | string | ⚪︎ | 日付 |
| amount | number | ⚪︎ | 金額 |
| category| string |  ⚪︎ | カテゴリ |
| note | string | × | メモ|

___
