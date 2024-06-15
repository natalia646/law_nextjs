
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
      <h1>{name}, Thank you for filling out the form! We will contact you soon!</h1>
      <p>Here are the details of your submitted form:</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Service: {action}</p>
      <p>Message: {message}</p>
    </div>
  );
};
export default EmailTemplate;
