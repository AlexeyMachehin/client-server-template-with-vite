import { Component, ErrorInfo, createContext, useContext } from 'react';

const ErrorBoundaryContext = createContext(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  ({ err, errorInfo }: { err: Error; errorInfo: ErrorInfo }) => {}
);

export const useErrorHandling = () => {
  return useContext(ErrorBoundaryContext);
};

export class ErrorBoundary extends Component<any, any> {
  state = { error: null };

  static getDerivedStateFromError(err: Error) {
    // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
    return { error: err };
  }

  componentDidCatch(err: Error, errorInfo: ErrorInfo) {
    // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
    console.log({ err, errorInfo });
  }

  triggerError = ({ err, errorInfo }: { err: Error; errorInfo: ErrorInfo }) => {
    console.log({ err, errorInfo });
    this.setState({ error: err });
  };

  render() {
    const { error } = this.state;

    return (
      <ErrorBoundaryContext.Provider value={this.triggerError}>
        {error ? (
          <this.props.ErrorComponent error={error} />
        ) : (
          this.props.children
        )}
      </ErrorBoundaryContext.Provider>
    );
  }
}
