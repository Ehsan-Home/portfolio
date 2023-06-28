import { ReadmeModel } from "@/models/ReadmeModel";
import { client } from "@/utils/axios/axios";
import { projectIds } from "@/utils/projectsContent/projects";
import { Card } from "antd";
import { GetStaticPaths, GetStaticProps } from "next";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projectIds.map((projectId) => {
    return {
      params: {
        id: projectId,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const projectId = params?.id?.toString();
  const res = await client.get(`repos/Ehsan-Home/${projectId}/readme`);
  const readmeInBase64: ReadmeModel = res.data;
  const readme = atob(readmeInBase64.content);

  return {
    props: { content: readme },
  };
};

const Projects = ({ content }: ReadmeModel) => {
  return (
    <Card>
      <ReactMarkdown>{content}</ReactMarkdown>
    </Card>
  );
};

export default Projects;
