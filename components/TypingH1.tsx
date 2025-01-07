"use client";
import { useEffect, useState } from "react";

type Props = {
  textToType: string;
  typingDelay: number;
};

export default function TypingH1({ textToType, typingDelay }: Props) {
  const [text, setText] = useState("");

  useEffect(() => {
    const charactersArray = [...textToType];
    const timerIds: NodeJS.Timeout[] = [];
    setText("");
    for (let i = 0; i < charactersArray.length; i++) {
      timerIds[i] = setTimeout(() => {
        setText((currentText) => `${currentText}${textToType.charAt(i)}`);
      }, typingDelay * i);
    }
    return () => timerIds.forEach((id) => clearTimeout(id));
  }, [textToType, typingDelay]);

  return (
    <h1 className="font-press-start text-primary-200 text-3xl font-bold sm:text-4xl md:text-6xl lg:text-7xl">
      {text}
    </h1>
  );
}
