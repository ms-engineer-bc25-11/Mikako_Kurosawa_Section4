//関数getUserの単体テスト

import { it, expect } from "vitest"
import { getUser } from "./userController"

it("ユーザー情報を返す", () => {
    const user = getUser()

    expect(user).toEqual({
        id: 1,
        name: "Mika"
    })
})