import React from "react";
import Form from "./Form";
import GoogleMap from "./GoogleMap";

export default function Contacts({ locale }: { locale: string }) {
  return (
    <div>
      <Form locale={locale} />
      <GoogleMap/>
    </div>
  );
}
