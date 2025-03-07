"use client"

import { useLanguage } from "./language-provider"
import Logo from "./logo"

export default function Footer() {
  const { t, language } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary flex items-center">
              <Logo className="w-6 h-6 mr-2" />
              {language === "tr" ? "Sonya Vakfı" : "Sonya Foundation"}
            </h3>
            <p>{t("about.whoWeAre.description1")}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">
              {language === "tr" ? "Hızlı Bağlantılar" : "Quick Links"}
            </h3>
            <ul className="space-y-2 list-none pl-0">
              <li>
                <a href="/" className="hover:text-primary transition-colors">
                  <i className="fas fa-chevron-right mr-2 text-xs"></i>
                  {t("common.home")}
                </a>
              </li>
              <li>
                <a href="/hakkimizda" className="hover:text-primary transition-colors">
                  <i className="fas fa-chevron-right mr-2 text-xs"></i>
                  {t("common.about")}
                </a>
              </li>
              <li>
                <a href="/projeler" className="hover:text-primary transition-colors">
                  <i className="fas fa-chevron-right mr-2 text-xs"></i>
                  {t("common.projects")}
                </a>
              </li>
              <li>
                <a href="/iletisim" className="hover:text-primary transition-colors">
                  <i className="fas fa-chevron-right mr-2 text-xs"></i>
                  {t("common.contact")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">{t("contact.getInTouch.title")}</h3>
            <p>
              <i className="fas fa-envelope mr-2 text-primary"></i>
              <a href="mailto:hr.sonyafoundation@gmail.com">hr.sonyafoundation@gmail.com</a>
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://github.com/Sonya-Foundation" className="text-2xl hover:text-primary transition-colors">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="text-2xl hover:text-primary transition-colors">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-2xl hover:text-primary transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6">
          <p className="text-center">
            {t("common.copyright")} &copy; {currentYear}
          </p>
        </div>
      </div>
    </footer>
  )
}

