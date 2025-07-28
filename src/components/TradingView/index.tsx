import * as React from 'react';
import './index.css';
import { flatten } from '../../utils/utils';
import { REPORTER_DATA_FEED } from '../../utils/lionfiReporterConnector';


export interface ChartContainerState {}

export const TVChartContainer = () => {
  // let datafeed = useTvDataFeed();
  const defaultProps = {
    symbol: 'SOL/USDC',
    // @ts-ignore
    interval: '60',
    auto_save_delay: 5,
    theme: 'Dark',
    containerId: 'tv_chart_container',
    // datafeed: datafeed,
    libraryPath: '/',
    chartsStorageApiVersion: '1.1',
    clientId: 'tradingview.com',
    userId: 'public_user_id',
    fullscreen: false,
    autosize: true,
    datafeedUrl: REPORTER_DATA_FEED,
    studiesOverrides: {},
  };

  const chartProperties = JSON.parse(
    localStorage.getItem('chartproperties') || '{}',
  );

  React.useEffect(() => {
    const savedProperties = flatten(chartProperties, {
      restrictTo: ['scalesProperties', 'paneProperties', 'tradingProperties'],
    });

  }, []);


  return <div id={defaultProps.containerId} className={'TVChartContainer'} />;
};
