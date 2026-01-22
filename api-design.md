# 家計簿アプリAPI 設計書

# 1. 概要

家計簿アプリ用のREST API
支出の登録・一覧・編集・削除を行う。

- ベースURL: `/api`
- データ形式: JSON
- 認証: なし

## 2. リソース一覧

<!-- Date,Amountは単体のリソースではない。それらはExpenseに属性する（フィールド） -->

- Expense(支出)
- Category(カテゴリー)
  <!-- Date (日付) -->
  <!-- User(ユーザー) 今回は認証なしだから省略OK-->
  <!-- Amount(金額) -->

## 3. エンドポイント一覧

| リソース | エンドポイント   |
| -------- | ---------------- |
| Expense  | /expenses        |
| Expense  | /expenses/{id}   |
| User     | /users           |
| Category | /categories      |
| Category | /categories/{id} |

<!-- | Date | /date | -->
<!-- | Amount | /amount | -->

## 4. API詳細

<!-- - GET /expenses(一覧取得)
- POST /expenses(新規作成)
- GET /expenses/{id}(詳細取得)
- PUT /expenses/{id}(更新)
- DELETE /expenses/{id}(削除) -->

### Expense API

#### GET /expenses

支出一覧を取得する

**リクエスト**

- なし

**レスポンス（200 OK）**

```json
[
  {
    "id": "string",
    "date": "2025-01-01",
    "amount": 1200,
    "category": "food",
    "note": "lunch"
  }
]
```

#### POST /expenses

支出を新規登録する

**リクエスト**

```json
{
  "date": "2025-01-01",
  "amount": 1200,
  "category": "food",
  "note": "lunch"
}
```

**レスポンス(201 Created)**

```json
{
  "id": "string"
}
```

#### PUT /expenses/{id}

指定した支出を更新する

**リクエスト**

```json
{
  "date": "2025-01-02",
  "amount": 1500,
  "category": "food",
  "note": "dinner"
}
```

**レスポンス（200 OK）**

```json
{
  "id": "string",
  "date": "2025-01-02",
  "amount": 1500,
  "category": "food",
  "note": "dinner"
}
```

#### DELETE /expenses/{id}

指定した支出を削除する

**レスポンス**

- 204 No Content

---

### Category API

#### GET /categories

カテゴリ一覧を取得する

**レスポンス (200 OK)**

```json
[
  {
    "id": "string",
    "name": "food"
  },
  {
    "id": "string",
    "name": "transport"
  }
]
```

---

#### POST /categories

カテゴリを新規作成する

**リクエスト**

```json
{
  "name": "food"
}
```

**レスポンス (201 Created)**

```json
{
  "id": "string",
  "name": "food"
}
```

#### DELETE /categories/{id}

カテゴリを削除する

**レスポンス**

- 204 No Content

## 5. エンティティ一覧

### Expense（支出）

| 項目名   | 型　   | 　必須　 | 　説明　   |
| -------- | ------ | -------- | ---------- |
| id       | string | ⚪︎       | 支出ID     |
| date     | string | ⚪︎       | 日付       |
| amount   | number | ⚪︎       | 金額       |
| category | string | ⚪︎       | カテゴリ   |
| note     | string | ×        | メモ       |
| id       | string | ⚪︎       | カテゴリID |
| name     | string | ⚪︎       | カテゴリ名 |

### Category(カテゴリ)

| 項目名 | 型　   | 　必須　 | 　説明　   |
| ------ | ------ | -------- | ---------- |
| id     | string | ⚪︎       | カテゴリID |
| name   | string | ⚪︎       | カテゴリ名 |

---
