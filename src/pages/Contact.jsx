const Contact = () => {
  const handleFormSubmit = (formData) => {
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };
  return (
    <>
      <section className="bg-zinc-900 text-white min-h-screen py-12 px-6 pl-12 pr-12">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-300 mb-8">Contact Us</h1>
          <form className="space-y-6" action={handleFormSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Enter Your Username"
              required
              autoComplete="false"
              className="w-full p-4 bg-zinc-800 text-white border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
              autoComplete="false"
              className="w-full p-4 bg-zinc-800 text-white border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
            <textarea
              name="message"
              placeholder="Enter Your Message"
              className="w-full p-4 bg-zinc-800 text-white border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
