"use client";
import getServicesList from "@/functions/getServicesList";
import style from "./form.module.scss";
import getLabel from "./getLabel";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastContainer, toast } from "react-toastify";
import { useTranslations } from "next-intl";

export default function Form() {
  const services = getServicesList();
  const t = useTranslations("ContactPage.form");

  const formSchema = z.object({
    name: z
      .string()
      .min(2, "Name must contain at least 2 characters")
      .max(40, "Name is too long")
      .regex(/^[A-Za-zА-Яа-яІіЇїЄєҐґ\s'-]+$/, "Name can contain only letters"),
    email: z.string().email("Invalid email format"),
    phone: z
      .string()
      .min(5, "Phone number is too short")
      .max(15, "Phone number is too long")
      .regex(/^[0-9+\-\s()]+$/, "Invalid phone format"),
    action: z.string().min(1, "Please select a service"),
    message: z.string().max(300, "Message is too long").optional(),
  });

  type FormValues = z.infer<typeof formSchema>;
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      action: services[0]?.title ?? "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    const sendPromise = fetch("/api/sendMessage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(async (res) => {
      if (!res.ok) throw new Error("Server error");
      reset();
      return res.json();
    });

    toast.promise(sendPromise, {
      pending: t("pending"),
      success: t("success"),
      error: t("error"),
    });
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cleanValue = e.target.value.replace(
      /[^A-Za-zА-Яа-яІіЇїЄєҐґ\s'-]/g,
      ""
    );
    setValue("name", cleanValue);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cleanValue = e.target.value.replace(/[^0-9+\-\s()]/g, "");
    setValue("phone", cleanValue);
  };

  return (
    <>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">{getLabel("name")}:</label>
        <input
          type="text"
          id="name"
          required
          placeholder="John Carter"
          {...register("name")}
          onChange={handleNameChange}
        />
        {errors.name && <p className={style.error}>{errors.name.message}</p>}

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          required
          placeholder="example@email.com"
          {...register("email")}
        />
        {errors.email && <p className={style.error}>{errors.email.message}</p>}

        <label htmlFor="phone">{getLabel("phone")}:</label>
        <input
          type="tel"
          id="phone"
          required
          placeholder="(123) 456 - 789"
          {...register("phone")}
          onChange={handlePhoneChange}
        />
        {errors.phone && <p className={style.error}>{errors.phone.message}</p>}

        <label htmlFor="action">{getLabel("service")}:</label>
        <select id="action" required {...register("action")}>
          {services.map((item) => (
            <option value={item.title} key={item.id}>
              {item.title}
            </option>
          ))}
          <option key={services.length} value="other">
            {getLabel("other")}
          </option>
        </select>

        <label htmlFor="message">{getLabel("message")}:</label>
        <textarea
          id="message"
          placeholder={getLabel("message-placeholder")}
          {...register("message")}
        />

        <label htmlFor="submit"></label>
        <input
          type="submit"
          value={isSubmitting ? getLabel("pending") : getLabel("connect")}
          className={style.button}
          id="submit"
          disabled={isSubmitting}
        />
      </form>
      <ToastContainer />
    </>
  );
}
