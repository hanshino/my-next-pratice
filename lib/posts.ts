import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { postData, sortedPostData } from "../types";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData(): sortedPostData[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const post = matter(fileContents).data as postData;

    return { id, ...post };
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}
