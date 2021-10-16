import React from 'react';
import { Layout } from 'antd';

const Footer = () => {
  return (
    <Layout.Footer style={{ textAlign: 'center' }}>
      © {new Date().getFullYear()} Copyright Movies search app with antd
    </Layout.Footer>
  );
};

export default Footer;
