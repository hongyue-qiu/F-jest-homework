import axios from "axios";
import { register } from "../user";
import { verifyUsername } from "../verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", async () => {
    // TODO 19: add test here
    const username = "749";
    const password = "111";
    expect(await register(username, password)).toEqual({});
    expect(axios.post).toHaveBeenCalledWith("/user", {
      username,
      password,
    });
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    verifyUsername.mockImplementation(() => false);
    const username = "749";
    const password = "111";
    await expect(register(username, password)).rejects.toThrow();
  });
});
