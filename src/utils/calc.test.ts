import { describe, it, expect } from "vitest"
import { add } from "./calc"

describe("add", () => {
    it("2 + 3 = 5", () => {
        expect(add(2, 3)).toBe(5)
    })

    it("マイナスも足せる", () => {
        expect(add(-1, 1)).toBe(0)
    })
})