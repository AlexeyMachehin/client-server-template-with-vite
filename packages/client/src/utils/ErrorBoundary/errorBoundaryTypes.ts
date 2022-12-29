import { ErrorInfo } from 'react';

export type TriggerErrorType = ({
  err,
  errorInfo,
}: {
  err: Error;
  errorInfo: ErrorInfo;
}) => void;
