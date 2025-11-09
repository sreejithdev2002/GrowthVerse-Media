import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
} from "lucide-react";

function Contact() {
  return (
    <section className="px-10 py-16   text-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Get In Touch</h2>
        <p className="text-lg text-gray-300">
          Have a project in mind? Let's collaborate and bring your vision to
          life.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-10 items-start max-w-6xl mx-auto">
        <div className="flex-1 space-y-5">
          <h3 className="text-2xl font-semibold mb-4">Contact Details</h3>

          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-purple-400" />
              <span className="font-medium">Location:</span> Tirur, Kerala,
              India
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-purple-400" />
              <span className="font-medium">Email:</span>{" "}
              contact@growthverse.com
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-purple-400" />
              <span className="font-medium">Phone:</span> +91-9876543210
            </p>
          </div>

          <div className="flex gap-3 mt-6">
            <a
              href="#"
              className="p-2 bg-purple-900 text-white rounded-full hover:bg-purple-800 transition"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-purple-900 text-white rounded-full hover:bg-purple-800 transition"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-purple-900 text-white rounded-full hover:bg-purple-800 transition"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-purple-900 text-white rounded-full hover:bg-purple-800 transition"
            >
              <Youtube size={18} />
            </a>
          </div>
        </div>

        <form className="flex-1 bg-[#1b002e] p-6 md:p-8 w-full rounded-2xl shadow-lg space-y-4">
          <div className="flex flex-col">
            <label className="font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="eg. John Doe"
              className="p-3 bg-transparent border border-purple-700 dark:border-purple-900 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-white"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="eg. johndoe@gmail.com"
              className="p-3 bg-transparent border border-purple-700 dark:border-purple-900 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-white"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-1">Message</label>
            <textarea
              placeholder="eg. I’d like to discuss a marketing project."
              className="p-3 bg-transparent border border-purple-700 dark:border-purple-900 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-white h-28 resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 dark:bg-purple-900 text-white font-semibold py-3 rounded-md hover:bg-purple-700 dark:hover:bg-purple-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
