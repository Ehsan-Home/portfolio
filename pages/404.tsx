import { Card, Col, Empty, Row, Typography } from "antd";
import Link from "next/link";

const { Title } = Typography;

const PageNotFound = () => {
  return (
    <Row justify="center" align="middle" style={{ height: "75vh" }}>
      <Col>
        <Card>
          <Empty
            description={<Title level={5}>The page does not exist!</Title>}
          >
            <Link href="/">Back to home</Link>
          </Empty>
        </Card>
      </Col>
    </Row>
  );
};

export default PageNotFound;
