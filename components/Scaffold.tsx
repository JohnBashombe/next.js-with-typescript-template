import React, { FC } from 'react';

type Props = { children?: React.ReactNode };
const Scaffold: FC<Props> = ({ children }): JSX.Element => {
  return <>{children}</>;
};

export default Scaffold;
