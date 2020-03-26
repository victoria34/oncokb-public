import { Alert } from 'react-bootstrap';
import React from 'react';

type OncoKBErrorResponseBody = {
  type: string;
  title: string;
  status: number;
  detail: string;
  path: string;
  message: string;
};
type OncoKBResponse = Response & {
  body: OncoKBErrorResponseBody;
};
export type OncoKBError = Error & {
  response: OncoKBResponse;
};

export const ErrorAlert: React.FunctionComponent<{
  error: OncoKBError;
}> = props => {
  const error = props.error;
  let errorMessage = error.message;
  if (error.response && error.response.body) {
    if (error.response.body.detail) {
      errorMessage = error.response.body.detail;
    } else if (error.response.body.title) {
      errorMessage = error.response.body.title;
    }
  }
  return (
    <Alert variant="danger">
      <strong>{errorMessage}</strong>
    </Alert>
  );
};