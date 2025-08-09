import React from 'react';
import SRM from "../../assets/Dashboard/SRM.png";
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Espace Administrateur", href: "#", highlighted: true },
    { name: "Se Connecter", href: "#" },
    { name: "Faire Une Demande", href: "#" }
  ];

  const sections = [
    { name: "Étapes de demandes de stage", href: "#" },
   
    { name: "FAQ", href: "#" },
    { name: "Politique de confidentialité", href: "#" }
  ];

  const contactInfo = [
    { icon: <Mail size={18} />, text: "contact@srm-cs.ma" },
    { icon: <Phone size={18} />, text: "(+212) 523-40-31-37" },
    { icon: <MapPin size={18} />, text: "Boulevard Mohammed V" },
    { icon: <Clock size={18} />, text: "Lun-Ven: 8h00 - 16h30" }
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#", name: "Facebook" },
    { icon: <Youtube size={20} />, href: "#", name: "Youtube" },
   
    { icon: <Linkedin size={20} />, href: "#", name: "LinkedIn" }
  ];

  return (
    <footer className='bg-indigo-950 text-white'>
      <div className='container mx-auto px-6 py-12'>
        {/* Top Section */}
        <div className='border-b border-indigo-800 pb-8'>
          <div className='flex flex-col md:flex-row justify-between items-start'>
            <img src={SRM} className='h-16 mb-6 md:mb-0' alt="SRM University Logo" />
            
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full md:w-auto'>
              {/* Quick Links */}
              <div>
                <h3 className='text-lg font-bold mb-4 text-cyan-400'>Accès rapide</h3>
                <ul className='space-y-2'>
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href} 
                        className={`flex items-center hover:text-cyan-400 transition-colors ${
                          link.highlighted ? 'text-cyan-400 font-medium' : 'text-gray-300'
                        }`}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sections */}
              <div>
                <h3 className='text-lg font-bold mb-4 text-cyan-400'>Navigation</h3>
                <ul className='space-y-2'>
                  {sections.map((section, index) => (
                    <li key={index}>
                      <a 
                        href={section.href} 
                        className="text-gray-300 hover:text-cyan-400 transition-colors"
                      >
                        {section.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className='text-lg font-bold mb-4 text-cyan-400'>Contact</h3>
                <ul className='space-y-3'>
                  {contactInfo.map((info, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-300">
                      <span className="text-cyan-400 flex-shrink-0">{info.icon}</span>
                      <span>{info.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='pt-8 flex flex-col md:flex-row justify-between items-center gap-4'>
          {/* Copyright */}
          <div>
            <p className='text-sm text-gray-400'>
              © {currentYear} SRM. Tous droits réservés.
            </p>
          </div>

          {/* Social Links */}
          <div className='flex gap-3'>
            {socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.href} 
                className='bg-indigo-900 hover:bg-cyan-600 p-2 rounded-full transition-colors text-white'
                aria-label={social.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};