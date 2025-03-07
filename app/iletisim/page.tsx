"use client"

import Footer from "@/components/footer"
import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import { useLanguage } from "@/components/language-provider"

export default function ContactPage() {
  const { t } = useLanguage()

  return (
    <main>
      <Navbar />

      <Hero
        title={t("contact.hero.title")}
        subtitle={t("contact.hero.subtitle")}
        backgroundImage="https://github.com/Sonya-Foundation/lemeye/blob/master/screenshots/istanbul-turkiye.jpg"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 border-0">{t("contact.getInTouch.title")}</h2>
              <p className="text-lg mb-8">{t("contact.getInTouch.description")}</p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mr-4 shrink-0">
                    <i className="fas fa-envelope text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t("contact.getInTouch.email")}</h3>
                    <p className="text-gray-300">
                      <a href="mailto:hr.sonyafoundation@gmail.com" className="hover:text-primary">
                        hr.sonyafoundation@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mr-4 shrink-0">
                    <i className="fab fa-github text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t("contact.getInTouch.github")}</h3>
                    <p className="text-gray-300">
                      <a
                        href="https://github.com/Sonya-Foundation"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary"
                      >
                        github.com/Sonya-Foundation
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mr-4 shrink-0">
                    <i className="fab fa-linkedin text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t("contact.getInTouch.linkedin")}</h3>
                    <p className="text-gray-300">
                      <a href="#" className="hover:text-primary">
                        Sonya Foundation
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gray-800 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">{t("contact.form.title")}</h3>

                <form className="space-y-6" action="https://formspree.io/f/xleqnvgj" method="POST">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 font-medium">
                        {t("contact.form.name")}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium">
                        {t("contact.form.email")}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block mb-2 font-medium">
                      {t("contact.form.subject")}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium">
                      {t("contact.form.message")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    {t("contact.form.send")}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 border-0">{t("contact.volunteer.title")}</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">{t("contact.volunteer.description")}</p>
          <a
            href="https://forms.gle/vskrzWDcGssB5XGj9"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            {t("contact.volunteer.button")}
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}

