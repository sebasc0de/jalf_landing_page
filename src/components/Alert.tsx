export const Alert = ({ msg }: { msg: string }) => {
  if (!msg) return null;
  return <div className="alert error">{msg}</div>;
};
