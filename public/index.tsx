import React from 'react';
import ReactDOM from 'react-dom';
import { AppMountParameters } from 'kibana/public';
import { HelloWorldPage } from './components/helloWorldPage';

export const renderApp = (props: AppMountParameters) => {
  ReactDOM.render(<HelloWorldPage />, props.element);
};

export const unmountApp = (props: AppMountParameters) => {
  ReactDOM.unmountComponentAtNode(props.element);
};
