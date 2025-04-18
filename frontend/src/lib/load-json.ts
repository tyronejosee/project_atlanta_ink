import path from "path";
import { promises as fs } from "fs";

export async function loadJson<T>(file: string): Promise<T> {
  try {
    const filePath = path.join(process.cwd(), file);
    const content = await fs.readFile(filePath, "utf-8");
    return JSON.parse(content);
  } catch (error) {
    throw new Error(`Failed to load ${file}`);
  }
}

export async function loadMultipleJson<T = any>(paths: string[]): Promise<T[]> {
  try {
    const files = await Promise.all(
      paths.map((relativePath) =>
        fs.readFile(path.join(process.cwd(), relativePath), "utf-8"),
      ),
    );
    return files.map((f) => JSON.parse(f));
  } catch {
    throw new Error("Failed to read one or more local data files");
  }
}
