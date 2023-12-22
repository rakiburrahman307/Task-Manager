
const Contact = () => (
  <div className="bg-gray-100 p-8">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-semibold mb-8">Contact Us</h2>

      <p className="text-lg mb-4">
        We&apos;d love to hear from you! Feel free to reach out to us with any questions, feedback, or inquiries. Our team is here to assist you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Send us a Message</h3>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600" htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" className="w-full border border-gray-300 p-2 rounded-md" />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600" htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" className="w-full border border-gray-300 p-2 rounded-md" />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600" htmlFor="message">Your Message</label>
              <textarea id="message" name="message" rows="4" className="w-full border border-gray-300 p-2 rounded-md"></textarea>
            </div>

            <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition duration-300">Send Message</button>
          </form>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
          <p className="mb-2"><span className="font-semibold">Email:</span> info@yourcompany.com</p>
          <p className="mb-2"><span className="font-semibold">Phone:</span> +88 0174918****</p>
          <p className="mb-2"><span className="font-semibold">Address:</span> Mirpur 2, Dhaka, Bangladesh</p>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
