// "use client";
// import getServicesList from "@/functions/getServicesList";
// import style from "./form.module.scss";
// import { FormEvent, useState } from "react";
// import { toast } from "react-hot-toast";
// import getLabel from "./getLabel";
// import sendMessage from "@/app/api/send/route";

// export default function Form() {
//   const services = getServicesList();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [action, setAction] = useState(services[0]?.title);
//   const [message, setMessage] = useState("");
//   const [isSending, setIsSending] = useState<boolean>(false);

//   const handleSubmit = async () => {
//     try {
//       const telegramMessage = `
//               Name: ${name}
//               Email: ${email}
//               Phone: ${phone}
//               Service: ${action}
//               Message: ${message}
//               `;
//      await sendMessage(telegramMessage);
//       toast.success("Email Sent Successfully!");
//     } catch (e) {
//       console.log(e);
//       toast.error("There was a problem sending email. Pls try again!");
//     }
//   };

//   return (
//     <form className={style.form} onSubmit={handleSubmit}>
//       <label htmlFor="name">{getLabel("name")}:</label>
//       <input
//         type="text"
//         name="name"
//         id="name"
//         required
//         placeholder="John Carter"
//         value={name}
//         onChange={(e) => {
//           setName(e.target.value);
//         }}
//       ></input>

//       <label htmlFor="email">Email:</label>
//       <input
//         type="email"
//         name="email"
//         id="email"
//         required
//         placeholder="example@email.com"
//         value={email}
//         onChange={(e) => {
//           setEmail(e.target.value);
//         }}
//       ></input>

//       <label htmlFor="phone">{getLabel("phone")}:</label>
//       <input
//         type="tel"
//         name="phone"
//         id="phone"
//         required
//         placeholder="(123) 456 - 789"
//         value={phone}
//         onChange={(e) => {
//           setPhone(e.target.value);
//         }}
//       ></input>

//       <label htmlFor="action">{getLabel("service")}:</label>
//       <select
//         id="action"
//         name="action"
//         required
//         value={action}
//         onChange={(e) => {
//           setAction(e.target.value);
//         }}
//       >
//         {services.map((item) => (
//           <option value={item.title} key={item.id}>
//             {item.title}
//           </option>
//         ))}
//         <option key={services.length} value="other">
//           {getLabel("other")}
//         </option>
//       </select>

//       <label htmlFor="message">{getLabel("message")}:</label>
//       <textarea
//         id="message"
//         name="message"
//         placeholder={getLabel("message-placeholder")}
//         value={message}
//         onChange={(e) => {
//           setMessage(e.target.value);
//         }}
//       ></textarea>

//       <label htmlFor="submit"></label>
//       <input
//         type="submit"
//         value={getLabel("connect")}
//         className={style.button}
//         id="submit"
//       ></input>
//     </form>
//   );
// }
