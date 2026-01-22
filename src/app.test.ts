// API(統合)テスト

import { describe, it, expect } from "vitest"
import request from "supertest"
import app from "./app"

// APIのルートエンドポイントのテスト
describe("GET /", () => {
    it("APIが起動している", async () => {
        const res = await request(app).get("/")

        expect(res.status).toBe(200)
        expect(res.body).toEqual({ status: "ok"})
    })
})

// supertestのテストコード
describe("GET /api/users", () => {
    it("ユーザー一覧を取得できる", async () => {
        const res = await request(app).get("/api/users")

        expect( res.status).toBe(200)
        expect( res.body).toEqual({
            id: 1,
            name: "Mika",
        })
    })
} )
