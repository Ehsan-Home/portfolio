import { Button, Card, Col, Empty, Result, Row, Typography } from "antd";
import Link from "next/link";

const { Title } = Typography;

const ErrorPage = () => {
  return (
    <Row justify="center" align="middle" style={{ height: "75vh" }}>
      <Col>
        <Card>
          <Result
            status="error"
            title="Error"
            subTitle="Sorry, something went wrong. Please try again later"
            extra={<Link href="/">Back to Home</Link>}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default ErrorPage;
