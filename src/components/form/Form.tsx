import { useTranslations } from "next-intl";
import getServicesList from "@/functions/getServicesList";
import style from "./form.module.scss";

export default function Form({ locale }: { locale: string }) {
  const t = useTranslations("ContactPage");
  const services = getServicesList();

  return (
    <form
      action="https://formsubmit.co/tedalini.cy@gmail.com"
      method="POST"
      className={style.form}
    >
      <label htmlFor="name">{t("form.name")}:</label>
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

      <label htmlFor="phone">{t("form.phone")}:</label>
      <input
        type="tel"
        name="phone"
        id="phone"
        required
        placeholder="(123) 456 - 789"
      ></input>

      <label htmlFor="action">{t("form.service")}:</label>
      <select id="action" name="action" required>
        {services.map((item) => (
          <option value={item.title} key={item.id}>
            {item.title}
          </option>
        ))}
        <option key={services.length}  value="other">
          {t("form.other")}
        </option>
      </select>

      <label htmlFor="message">{t("form.message")}:</label>
      <textarea
        id="message"
        name="message"
        placeholder={t("form.message-placeholder")}
      ></textarea>

      <label htmlFor="submit"></label>
      <input
        type="submit"
        value={t("connect")}
        className={style.button}
        id="submit"
      ></input>

      <input
        type="hidden"
        name="_next"
        // http://localhost:3000/uk/thanks
        value={`http://tedalini.com/${locale}/thanks`}
      ></input>
      <input type="hidden" name="_captcha" value="false"></input>
      <input type="hidden" name="_template" value="table"></input>
    </form>
  );
}
