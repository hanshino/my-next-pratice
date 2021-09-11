export interface postData {
  date: string;
  title: string;
}

export interface sortedPostData extends postData {
  id: string;
}

export interface beautyPostData extends postData {
  id: string;
  contentHtml: string;
}

export type postId = {
  id: string;
};
export interface postIdParam {
  params: postId;
}
