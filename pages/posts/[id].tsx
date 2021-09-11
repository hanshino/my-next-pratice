import { NextPage } from "next";
import { ReactNode } from "react";
import Date from "../../components/date";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import { beautyPostData } from "../../types";

type postProps = {
  children?: ReactNode;
  postData: beautyPostData;
};

const Post: NextPage<postProps> = ({ postData }) => {
  return (
    <Layout>
      {postData.id}
      <br />
      {postData.title}
      <br />
      <Date dateString={postData.date} />
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

type Props = {
  params: { id: string };
};

export async function getStaticProps({ params }: Props) {
  const postData = await getPostData(params.id);
  return { props: { postData } };
}

export default Post;
