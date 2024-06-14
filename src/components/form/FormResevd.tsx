"use client";
import getServicesList from "@/functions/getServicesList";
import style from "./form.module.scss";
import { sendEmail } from "@/actions"
import { useEffect } from "react"
import { useFormState } from "react-dom"

export default function Form() {
  const services = getServicesList();

  const [sendEmailState, sendEmailAction] = useFormState(sendEmail, {
    error: null,
    success: false
  })
  useEffect(() => {
    if (sendEmailState.success) {
      alert("Email sent!")
    }
    if (sendEmailState.error) {
      alert("Error sending email!")
    }
  }, [sendEmailState])


  return (
    <form className={style.form}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        required
        placeholder="John Carter"
      ></input>

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        id="email"
        required
        placeholder="example@email.com"
      ></input>

      <label htmlFor="phone">Phone number:</label>
      <input
        type="tel"
        name="phone"
        id="phone"
        required
        placeholder="(123) 456 - 789"
      ></input>

     <label htmlFor="action">Select service:</label>
      <select id="action" name="action" required>
          {services.map((item) => (
            <option value={item.title} key={item.id}>
              {item.title}
            </option>
          ))}
          <option key={services.length} value="other">
            Other
          </option>
        </select>

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        placeholder="Please enter your message here..."
      ></textarea>

      <label htmlFor="submit"></label>
      <input
        type="submit"
        value="Send"
        className={style.button}
        id="submit"
      ></input>
    </form>
  );
}
