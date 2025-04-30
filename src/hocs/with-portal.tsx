import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function withPortal<T extends object>(
  Component: React.ComponentType<T>,
  portalName: string,
) {
  return function PortalWrapped(props: T) {
    const [isMounted, setIsMounted] = useState(false);

    const { isOpen } = props as any;

    useEffect(() => {
      setIsMounted(true);
      return () => {
        setIsMounted(false);
      };
    }, []);

    if (typeof window === 'undefined' || !isOpen || !isMounted) {
      return null;
    }

    const modalRoot = document.getElementById(portalName);
    if (!modalRoot) {
      return null;
    }

    return ReactDOM.createPortal(<Component {...props} />, modalRoot);
  };
}

export default withPortal;
