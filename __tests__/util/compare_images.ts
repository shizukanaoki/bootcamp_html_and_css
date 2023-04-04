import looksSame from "looks-same";
import path from "node:path";

export const compareImages = async (dirPath: string) => {
  const result = await looksSame(
    path.resolve(dirPath, "expected.png"),
    path.resolve(dirPath, "actual.png")
  );

  await looksSame.createDiff({
    reference: path.resolve(dirPath, "expected.png"),
    current: path.resolve(dirPath, "actual.png"),
    diff: path.resolve(dirPath, "diff.png"),
    highlightColor: "#ff00ff",
  });

  console.log(`diff image created at ${path.resolve(__dirname, "diff.png")}`);

  return result;
};
