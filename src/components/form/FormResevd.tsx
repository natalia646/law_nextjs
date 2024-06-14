"use client";

import style from "./form.module.scss";
import Contacts from "./Contacts";

export default function Form() {
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

      {/* <label htmlFor="action">Select service:</label>
      <select id="action" name="action" required>
          {services.map((item) => (
            <option value={item.title} key={item.id}>
              {item.title}
            </option>
          ))}
          <option key={services.length} value="other">
            Other
          </option>
        </select> */}

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
