import { it, expect} from "vitest"
import { fetchUserName } from "./fetchUser"

it("ユーザー名を返す", async () => {
    const name  = await fetchUserName()
    expect(name).toBe("Mika")
})
