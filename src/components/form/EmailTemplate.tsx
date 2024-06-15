
const EmailTemplate = ({
  name,
  email,
  phone,
  action,
  message,
}: {
  name: string;
  email: string;
  message: string;
  phone: string;
  action: string;
}) => {
  return (
    <div>
      <p>You just submitted a form. Here are the details:</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Service: {action}</p>
      <p>Message: {message}</p>
    </div>
  );
};
export default EmailTemplate;
