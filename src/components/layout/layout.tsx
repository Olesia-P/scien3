import React from 'react';
import Navbar from './navbar/navbar';
import useLayout from './use-layout';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  useLayout();

  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
