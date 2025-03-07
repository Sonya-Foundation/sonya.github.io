"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { useLanguage } from "./language-provider"
import Logo from "./logo"

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleLanguage = () => {
    setLanguage(language === "tr" ? "en" : "tr")
  }

  const navLinks = [
    { href: "/", label: t("common.home"), icon: "fas fa-home" },
    { href: "/hakkimizda", label: t("common.about"), icon: "fas fa-info-circle" },
    { href: "/projeler", label: t("common.projects"), icon: "fas fa-tasks" },
    { href: "/iletisim", label: t("common.contact"), icon: "fas fa-envelope" },
  ]

  return (
    <header className="bg-secondary border-b-2 border-primary sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Logo className="w-10 h-10 mr-3" />
            <h1 className="text-xl font-bold m-0">
              <span className="text-primary">Sonya</span> {language === "tr" ? "Topluluğu" : "Community"}
            </h1>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center md:hidden">
          <button
            className="text-white focus:outline-none ml-4 px-2 py-1 border border-gray-600 rounded"
            onClick={toggleLanguage}
            aria-label="Change language"
          >
            <span className="font-bold text-sm">{language === "tr" ? "EN" : "TR"}</span>
          </button>
          <button className="text-white focus:outline-none ml-4" onClick={toggleMenu} aria-label="Toggle menu">
            <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-6 mr-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={`nav-link ${pathname === link.href ? "active" : ""}`}>
                  <i className={`${link.icon} mr-1`}></i> {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="https://forms.gle/vskrzWDcGssB5XGj9"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mr-4"
          >
            {t("common.apply")}
          </Link>
          <button
            className="text-white focus:outline-none px-2 py-1 border border-gray-600 rounded hover:bg-gray-700 transition-colors"
            onClick={toggleLanguage}
            aria-label="Change language"
          >
            <span className="font-bold text-sm">{language === "tr" ? "EN" : "TR"}</span>
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-800 py-4">
          <ul className="flex flex-col space-y-3 px-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`nav-link block py-2 ${pathname === link.href ? "active" : ""}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className={`${link.icon} mr-2`}></i> {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="https://forms.gle/vskrzWDcGssB5XGj9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary block text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("common.apply")}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

