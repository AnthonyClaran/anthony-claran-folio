
import { useState } from "react";
import { Mail, Phone, MapPin, Send, ArrowRight, Instagram, Facebook, Linkedin, Github, CheckCircle } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      // Reset submitted state after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="text-indigo-600" size={24} />,
      title: "Email",
      content: "anthony.claran@example.com",
      link: "mailto:anthony.claran@example.com",
    },
    {
      icon: <Phone className="text-indigo-600" size={24} />,
      title: "Téléphone",
      content: "+261 34 00 000 00",
      link: "tel:+261340000000",
    },
    {
      icon: <MapPin className="text-indigo-600" size={24} />,
      title: "Adresse",
      content: "IT Andoharanofotsy, Antananarivo, Madagascar",
      link: "https://maps.google.com",
    },
  ];
  
  const socialLinks = [
    { icon: <Facebook size={20} />, name: "Facebook", href: "#", color: "bg-blue-500 hover:bg-blue-600" },
    { icon: <Instagram size={20} />, name: "Instagram", href: "#", color: "bg-gradient-to-br from-amber-500 to-purple-600 hover:from-amber-600 hover:to-purple-700" },
    { icon: <Linkedin size={20} />, name: "LinkedIn", href: "#", color: "bg-blue-600 hover:bg-blue-700" },
    { icon: <Github size={20} />, name: "GitHub", href: "#", color: "bg-gray-800 hover:bg-gray-900" },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Designer-style background elements */}
      <div className="absolute -left-20 top-0 w-[400px] h-[400px] rounded-full bg-indigo-50 opacity-70"></div>
      <div className="absolute -right-20 bottom-0 w-[400px] h-[400px] rounded-full bg-purple-50 opacity-70"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-20">
          <p className="text-indigo-600 font-medium mb-3 tracking-wider">PARLONS DE VOTRE PROJET</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Contactez <span className="bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">Moi</span>
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-1 rounded-full bg-indigo-600"></div>
            <div className="w-20 h-1 rounded-full bg-gradient-to-r from-indigo-600 to-purple-500"></div>
            <div className="w-10 h-1 rounded-full bg-purple-500"></div>
          </div>
          <p className="mt-8 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Vous avez un projet en tête ou vous souhaitez simplement discuter ? 
            N'hésitez pas à me contacter, je serais ravi d'échanger avec vous !
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="bg-white p-8 rounded-2xl shadow-lg h-full border border-gray-100">
              <h3 className="text-2xl font-bold mb-8 text-gray-800 relative">
                Informations de Contact
                <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full absolute -bottom-3 left-0"></div>
              </h3>
              
              <div className="space-y-8 mt-10">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-4">
                      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-800">{info.title}</h4>
                      <a
                        href={info.link}
                        className="text-gray-600 hover:text-indigo-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {info.content}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-14">
                <h4 className="font-bold text-xl mb-6 text-gray-800">Retrouvez-moi</h4>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-10 h-10 ${social.color} rounded-lg flex items-center justify-center transition-all duration-300 text-white shadow-sm hover:shadow-md transform hover:-translate-y-1`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Suivez-moi sur ${social.name}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Designer graphic element */}
              <div className="mt-14 pt-10 border-t border-gray-100">
                <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="h-1.5 w-10 bg-gray-200 rounded-full"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-gray-200 rounded-full"></div>
                    <div className="h-2 w-3/4 bg-gray-200 rounded-full"></div>
                    <div className="h-2 w-5/6 bg-gray-200 rounded-full"></div>
                    <div className="h-2 w-2/3 bg-gray-200 rounded-full"></div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600 text-center font-medium">Développement & Design</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-8 text-gray-800 relative">
                Envoyez-moi un message
                <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full absolute -bottom-3 left-0"></div>
              </h3>
              
              {isSubmitted ? (
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg mt-6">
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={24} />
                    <div>
                      <h4 className="font-bold text-green-700">Message envoyé avec succès !</h4>
                      <p className="text-green-600">Merci pour votre message. Je vous répondrai dans les plus brefs délais.</p>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                        placeholder="Votre nom"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                        placeholder="Votre email"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                      placeholder="Sujet de votre message"
                      required
                    />
                  </div>
                  
                  <div className="mb-8">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Votre message"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 flex items-center justify-center ${
                      isSubmitting ? "opacity-80 cursor-not-allowed" : "transform hover:-translate-y-1"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Envoyer le message <ArrowRight size={18} className="ml-2" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
