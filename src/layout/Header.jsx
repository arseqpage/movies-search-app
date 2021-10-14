import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';

const NavLinks = ['Repo', 'Telegram'];

const Header = () => {
  return (
    <Layout.Header className="header">
      <div className="header-logo">
        <a href="#">Movies App</a>
      </div>

      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} className="menu-links">
        {NavLinks.map((link, i) => {
          return <Menu.Item key={link + i}>{link}</Menu.Item>;
        })}
      </Menu>
    </Layout.Header>
  );
};

export default Header;
