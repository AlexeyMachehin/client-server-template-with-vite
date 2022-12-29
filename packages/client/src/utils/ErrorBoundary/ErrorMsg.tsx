function ErrorMsg({ error }: any) {
  return (
    <div>
      <p>Something went wrong!</p>
      <p>{error.message}</p>
    </div>
  );
}

export default ErrorMsg;
