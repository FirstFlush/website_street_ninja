
const Notification = ({ title, message }: { title: string; message?: string }) => (
  <div>
    <div>{title}</div>
    {message && <div>{message}</div>}
  </div>
);

export default Notification;
