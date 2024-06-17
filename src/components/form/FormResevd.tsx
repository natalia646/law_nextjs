"use client";
import getServicesList from "@/functions/getServicesList";
import style from "./form.module.scss";
import { FormEvent, useState } from "react";
import { toast } from "react-hot-toast";
import getLabel from "./getLabel";

export default function Form() {
  const services = getServicesList();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [action, setAction] = useState(services[0]?.title);
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsSending(true);
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          action,
          message,
        }),
      });
      if (response.ok) {
        toast.success("Email Sent Successfully!");
        
      } else {
        toast.error("There was a problem sending email. Pls try again!");
      }
    } catch (error) {
      console.log("Error sending email:", error);
      toast.error("There was a problem sending email. Pls try again!");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <label htmlFor="name">{getLabel('name')}:</label>
      <input
        type="text"
        name="name"
        id="name"
        required
        placeholder="John Carter"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        id="email"
        required
        placeholder="example@email.com"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>

      <label htmlFor="phone">{getLabel('phone')}:</label>
      <input
        type="tel"
        name="phone"
        id="phone"
        required
        placeholder="(123) 456 - 789"
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      ></input>

      <label htmlFor="action">{getLabel('service')}:</label>
      <select
        id="action"
        name="action"
        required
        value={action}
        onChange={(e) => {
          setAction(e.target.value);
        }}
      >
        {services.map((item) => (
          <option value={item.title} key={item.id}>
            {item.title}
          </option>
        ))}
        <option key={services.length} value="other">
        {getLabel('other')}
        </option>
      </select>

      <label htmlFor="message">{getLabel('message')}:</label>
      <textarea
        id="message"
        name="message"
        placeholder={getLabel('message-placeholder')}
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      ></textarea>

      <label htmlFor="submit"></label>
      <input
        type="submit"
        value={getLabel('connect')}
        className={style.button}
        id="submit"
      ></input>
    </form>
  );
}
