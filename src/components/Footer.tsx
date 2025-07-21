import { useTranslation } from "react-i18next";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  // function scrollToTop() {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }

  return (
    <footer className="container pt-12 pb-8">
      <p className="text-muted-foreground flex-1 text-justify text-sm">
        © {currentYear} {t("common.name")}. {t("footer.text")}
      </p>
    </footer>
  );
}
