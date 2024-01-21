import { create } from "zustand";

interface ChangeLang {
  lang: string;
  changeLang: () => void;
}

const saveLanguageToLocalStorage = (lang: string) => {
  localStorage.setItem("language", lang);
};

// Функция для получения языка из localStorage
export const getInitialLanguageFromLocalStorage = () => {
  if (
    typeof window !== "undefined" &&
    typeof window.localStorage !== "undefined"
  ) {
    return window.localStorage.getItem("language") || "en";
  } else {
    console.error("localStorage is not supported");
    return "en"; // Возвращайте значение по умолчанию или обработайте исключение по вашему усмотрению
  }
};

export const useChangeLang = create<ChangeLang>((set) => ({
  lang: getInitialLanguageFromLocalStorage() || "en",
  changeLang: () => {
    set((state) => {
      const newLang = state.lang === "en" ? "ru" : "en";
      saveLanguageToLocalStorage(newLang);
      return { lang: newLang };
    });
  },
}));
