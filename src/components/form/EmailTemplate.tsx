import { Html, Heading, Text } from "@react-email/components"
const EmailTemplate = ({
  name,
  email,
  phone,
  service,
  message,
}: {
  name: string
  email: string
  message: string
  phone: string
  service: string
}) => {
  return (
    <Html lang="en">
      <Heading as="h1">New Form Submission</Heading>
      <Text>You just submitted a form. Here are the details:</Text>
      <Text>Name: {name}</Text>
      <Text>Email: {email}</Text>
      <Text>Phone: {phone}</Text>
      <Text>Service: {service}</Text>
      <Text>Message: {message}</Text>
    </Html>
  )
}
export default EmailTemplate