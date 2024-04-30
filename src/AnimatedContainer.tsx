import React, { ReactNode } from 'react';

interface AnimatedContainerProps {
  children?: ReactNode;
}

const AnimatedContainer: React.FC = ({ children }: AnimatedContainerProps) => {
  return <div>{children}</div>;
};

export default AnimatedContainer;
