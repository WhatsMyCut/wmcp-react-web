import React from 'react';
import Raven from 'raven-js';
import {
  SENTRY_URL,
  SENTRY_RELEASE,
  SENTRY_ENVIRONMENT,
  GIT_SHA,
} from '../app.constants';

Raven.config(SENTRY_URL, {
  environment: SENTRY_ENVIRONMENT,
  release: `${SENTRY_RELEASE}-${GIT_SHA}`,
  shouldSendCallback: () => process.env.NODE_ENV === 'production',
}).install();

export const logException = (ex, context) => {
  Raven.captureException(ex, {
    extra: context,
  });
};

export const withSentry = (WrappedComponent) =>
  (class SentryComponent extends React.Component {
    render() {
      try {
        return <WrappedComponent {...this.props} />;
      } catch (ex) {
        logException(ex);
      }
      return null;
    }
  });
