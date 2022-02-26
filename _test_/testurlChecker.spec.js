import { checkForURL } from "../src/client/js/urlChecker";

describe("Testing checkForURL function", () => {
    test("Testing URL", () => {
        const input = "https://www.url1.dev";
        const output = true;
        expect(checkForURL(input)).toBeTruthy();
    })
});