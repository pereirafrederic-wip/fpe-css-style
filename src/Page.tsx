import * as React from "react";
import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

export default ({ slider, header, content, footer }) => {
  return (
    <Layout>
      <Sider>{slider}</Sider>
      <Layout>
        <Header>{header}</Header>
        <Content>{content}</Content>
        <Footer>{footer}</Footer>
      </Layout>
    </Layout>
  );
};
