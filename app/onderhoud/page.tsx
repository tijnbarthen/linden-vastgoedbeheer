export default function Page() {
  return (
    <div className="bg-white min-h-screen font-cabinet-grotesk  h-full">
      <div className="text-center py-28 bg-blue-950 text-white">
        <h1 className="h1 text-5xl font-bold ">Onderhoud</h1>
      </div>
      <div className="container max-w-6xl mx-auto md:py-12 md:px-6 py-9 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Maintenance Request Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Onderhoud verzoek</h2>
            <form className="flex flex-col gap-4">
              <label htmlFor="name">Naam:</label>
              <input type="text" id="name" className="input" />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" className="input" />

              <label htmlFor="phone">Telefoon:</label>
              <input type="tel" id="phone" className="input" />

              <label htmlFor="message">Bericht:</label>
              <textarea id="message" className="input" rows="4"></textarea>

              <button
                type="submit"
                className="btn-sm text-white bg-blue-950 hover:bg-blue-600 w-full shadow-sm"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Image */}
          <div>
            <img
              className="w-full h-full object-cover rounded-lg"
              src="https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Maintenance Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
