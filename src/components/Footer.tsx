import { useTranslation } from "react-i18next";
import Reveal from "./Reveal";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="container pt-12 pb-5 sm:pb-8">
      <Reveal>
        <p className="text-muted-foreground flex-1 text-justify text-sm">
          © {currentYear} {t("common.name")}. {t("footer.text")}
        </p>
      </Reveal>
    </footer>
  );
}
