import React, {FC} from 'react';

type BaseProps = {
  item?: any;
};

const withChildFunction = (Wrapped: FC, fn: () => JSX.Element | string) => {
  return (props: BaseProps) => {
    return <Wrapped {...(props as BaseProps)}>{fn}</Wrapped>;
  };
};

export default withChildFunction;
