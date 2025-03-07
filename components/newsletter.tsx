export default function Newsletter() {
  return (
    <section className="bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-white border-0 mt-0 mb-2">E-posta Listemize Katılın</h2>
            <p className="text-gray-300">Güncellemeler ve duyurular için abone olun</p>
          </div>
          <div className="w-full md:w-auto">
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="E-posta Adresinizi Girin..."
                className="px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Abone Ol
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

