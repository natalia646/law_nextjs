"use client";
import ScrollToTop from "react-scroll-to-top";

export default function ButtonTop() {
  return (
    <>
      <ScrollToTop
        smooth
        top={20}
        color="#fff"
        style={{
          borderRadius: "50%",
          backgroundColor: "#083554",
          boxShadow: '1px 1px 8px white',
          width: '3.5rem',
          height: '3.5rem'
        }}
      />
    </>
  );
}
