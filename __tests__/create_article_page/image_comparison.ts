import path from "node:path";
import { compareImages } from "../util/compare_images";

const TARGET_PATH = path.resolve(__dirname, "../../docs/article.html");

describe("article page", () => {
  beforeAll(async () => {
    await page.goto(`file://${TARGET_PATH}`);
  });

  describe("viewport width >= 768px", () => {
    test("screenshot should match expected image", async () => {
      await page.setViewport({ width: 768, height: 1024 });
      await page.screenshot({
        path: path.resolve(__dirname, "large", "actual.png"),
        fullPage: true,
      });

      const { equal } = await compareImages(path.resolve(__dirname, "large"));

      expect(equal).toBeTruthy();
    });
  });
  describe("viewport width < 768px", () => {
    test("screenshot should match expected image", async () => {
      await page.setViewport({ width: 767, height: 1024 });
      await page.screenshot({
        path: path.resolve(__dirname, "small", "actual.png"),
        fullPage: true,
      });

      const { equal } = await compareImages(path.resolve(__dirname, "small"));

      expect(equal).toBeTruthy();
    });
  });
});
