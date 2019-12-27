import React, { useContext, useEffect } from 'react';
import { Ring, RingConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../base';

export interface RingConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<Ring | undefined>;
}

const TechRing: React.FC<RingConfig> = (props: RingConfig) => {
  const { chartRef, ...rest } = props;

  const { chart, container } = useChart<Ring, RingConfig>(Ring, rest);

  useEffect(() => {
    if (chartRef) {
      chartRef.current = chart.current;
    }
  }, [chart.current]);

  return <div ref={container} />;
};

export default (props: RingConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechRing {...config} {...props} />
    </ErrorBoundary>
  );
};
