import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const Change = (props: SvgProps) => {
  return (
    <Svg viewBox="0 0 16 16" {...props}>
      <Path d="M4.293 9.708l1.414-1.414-2.293-2.293H12c1.103 0 2 .897 2 2h2c0-2.206-1.794-4-4-4H3.414l2.293-2.293L4.293.294l-4 4a.999.999 0 000 1.414l4 4z" />
      <Path d="M11.708 6.294l-1.416 1.413 2.289 2.294H4c-1.103 0-2-.897-2-2H0c0 2.206 1.794 4 4 4h8.581l-2.289 2.293 1.416 1.413 3.992-4a1.001 1.001 0 000-1.413l-3.992-4z" />
    </Svg>
  );
};
