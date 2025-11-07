import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { toast, Toaster } from "react-hot-toast";

const Contact = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const formData = new FormData(form);
    try {
      const response = await fetch("https://formspree.io/f/xldarryp", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        await response.json();
        toast.success("Message envoyé avec succès");
        form.reset();
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error("Erreur lors de l'envoi");
    }
  };

  return (
    <section id="contact" className="scroll-mt-20">
      <Toaster position="top-center" />
      <h2 className="text-xl font-semibold mb-2">
        <span className="font-bold text-indigo-400 text-2xl">Contactez</span>
        -Moi
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="bg-white/10 p-6 rounded-lg w-1/2">
          <h3 className="font-semibold text-xl mb-4 text-indigo-300">
            Informations
          </h3>

          <div className="space-y-6">
            <div className="flex items-center">
              <EnvelopeIcon className="w-12 h-12 text-blue-400 mr-3 border border-blue-400 p-1 rounded-lg hover:shadow-[0_0_10px_#3b82f6] transition hover:animate-spin" />
              <p className="font-semibold text-md">canada1555@hotmail.com</p>
            </div>
            <div className="flex items-center">
              <PhoneIcon className="w-11 h-11 text-green-400 mr-4 border border-green-400 p-1 rounded-lg hover:shadow-[0_0_10px_#22c55e] hover:animate-spin" />
              <p className="font-semibold text-md">(438) 778-7927</p>
            </div>
            <div className="flex items-center">
              <MapPinIcon className="w-12 h-12 text-red-500 mr-3 border border-red-500 p-1 rounded-lg hover:shadow-[0_0_10px_#ef4444] hover:animate-spin" />
              <p className="font-semibold text-md">Montréal, Québec, Canada</p>
            </div>
          </div>
          <div className="mt-6 border-t border-white pt-4">
            <h3 className="font-semibold text-xl mb-4 text-indigo-300">
              Liens
            </h3>
            <div className="flex space-x-3">
              <a
                href="https://github.com/CanadaBadiane"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 inline-flex items-center justify-center rounded-full hover:bg-orange-300 transition"
              >
                <img
                  src="/images/github.png"
                  alt="GitHub icon"
                  className="w-8 h-8"
                />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 inline-flex items-center justify-center rounded-full hover:bg-green-600 transition"
              >
                <img
                  src="/images/link.png"
                  alt="Linkedin icon"
                  className="w-10 h-10 mix-blend-screen"
                />
              </a>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white/10 p-6 rounded-lg"
        >
          <label className="block">
            <span className="text-md font-medium text-white">
              Votre <span className="text-purple-400">Nom</span>
            </span>
            <input
              type="text"
              name="name"
              placeholder="Entrez votre nom"
              required
              className="mt-1 block w-full rounded-md p-2 bg-white/20 border-gray-300 shadow-sm focus:border-purple-500 focus:ring-4 ring-purple-500"
            />
          </label>
          <label className="block">
            <span className="text-md font-medium text-white">
              Votre <span className="text-purple-400">Email</span>
            </span>
            <input
              type="email"
              name="email"
              placeholder="Entrez votre email"
              required
              className="mt-1 block w-full rounded-md p-2 bg-white/20 border-gray-300 shadow-sm focus:border-purple-500 focus:ring-4 ring-purple-500"
            />
          </label>
          <label className="block text-md font-medium text-white">
            Votre <span className="text-purple-400">Message</span>
            <textarea
              name="message"
              rows={8}
              placeholder="Écrivez votre message ici..."
              required
              className="mt-1 block w-full p-2 bg-white/20 rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-4 ring-purple-500"
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-md bg-purple-600 px-4 py-2 text-white font-semibold transition duration-200 ease-in-out hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
