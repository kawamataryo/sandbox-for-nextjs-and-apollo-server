import * as React from 'react';

const Layout: React.FC = ({ children }) => {
  return (
    <div
      className="has-background-primary-light"
      style={{ minHeight: '100vh' }}
    >
      <div className="container">{children}</div>
    </div>
  );
};

export default Layout;
