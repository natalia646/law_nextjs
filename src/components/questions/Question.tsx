"use client";
import { useState } from "react";
import style from "./questions.module.scss";
import { QAType } from "@/global";

export default function Question({ id, item }: { id: number; item: QAType }) {
  const [active, setActeve] = useState(-1);

  const clickQuestion = (id: number) => {
    if (id === active) {
      setActeve(-1);
    } else {
      setActeve(id);
    }
  };

  return (
    <div className={style.item}>
      <div
        className={`${style.question} ${id === active ? style.q_open : ""}`}
        onClick={() => clickQuestion(id)}
      >
        <p>{item.q}</p>
        <p className={style.plus}>{id === active ? "-" : "+"}</p>
      </div>
      <p className={`${style.answer} ${id === active ? style.a_open : ""}`}>
        {item.a}
      </p>
    </div>
  );
}
