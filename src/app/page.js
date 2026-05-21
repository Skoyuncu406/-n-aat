"use client";

import { useState } from "react";
import {
  Menu,
  X,
  Phone,
  MapPin,
  Mail,
  ArrowRight,
  Building2,
  Target,
  Eye,
} from "lucide-react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Home() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Hakkımızda", id: "hakkimizda" },
    { name: "Misyonumuz", id: "misyon" },
    { name: "Vizyonumuz", id: "vizyon" },
    { name: "Projeler", id: "projeler" },
    { name: "İletişim", id: "iletisim" },
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const projects = [
    {
      title: "Modern Konut Projesi",
      desc: "Şehir yaşamına estetik, güvenli ve fonksiyonel çözümler.",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
    },
    {
      title: "Lüks Villa İnşaatı",
      desc: "Yüksek kalite malzeme ve premium mimari anlayışı.",
      img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200",
    },
    {
      title: "Ticari Yapılar",
      desc: "İş dünyasına değer katan modern ticari alanlar.",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200",
    },
  ];

  return (
    <main className="bg-[#080808] text-white overflow-hidden">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-2"
          >
            <Building2 className="text-amber-400" />
            <span className="text-xl font-bold tracking-wide">
              PRESTİJ <span className="text-amber-400">İNŞAAT</span>
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-sm text-zinc-300 hover:text-amber-400 transition cursor-pointer"
              >
                {item.name}
              </button>
            ))}
          </nav>

          <a
            href="https://wa.me/905555555555"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-green-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-green-600 transition"
          >
            <FaWhatsapp size={20} />
            Teklif Al
          </a>

          <button
            className="md:hidden cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-black border-t border-white/10 px-6 py-5 space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block cursor-pointer hover:text-amber-400 transition text-zinc-300"
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="hero"
        className="min-h-screen flex items-center relative pt-24 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1600')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-3xl"
          >
            <p className="text-amber-400 tracking-[0.35em] text-sm mb-5">
              GÜVEN · KALİTE · PRESTİJ
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Geleceğin Yapılarını Bugünden İnşa Ediyoruz
            </h1>

            <p className="text-zinc-300 text-lg md:text-xl mb-8 max-w-2xl">
              Modern mimari, kaliteli malzeme ve profesyonel mühendislik
              anlayışıyla yaşam alanlarınıza değer katıyoruz.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollTo("projeler")}
                className="bg-amber-400 text-black px-7 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-amber-300 transition"
              >
                Projeleri İncele <ArrowRight size={20} />
              </button>

              <button
                onClick={() => scrollTo("iletisim")}
                className="border border-white/30 px-7 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition"
              >
                İletişime Geç
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hakkımızda */}
      <section id="hakkimizda" className="py-28 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <motion.img
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200"
            alt="İnşaat firması"
            className="rounded-3xl shadow-2xl"
          />

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-amber-400 mb-3">HAKKIMIZDA</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sağlam Temeller Üzerine Kurulu Güven
            </h2>
            <p className="text-zinc-300 leading-8">
              Prestij İnşaat olarak konut, villa, ticari yapı ve özel mimari
              projelerde kalite odaklı çözümler sunuyoruz. Her projede estetik,
              dayanıklılık ve müşteri memnuniyetini merkeze alıyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Misyon & Vizyon */}
      <section className="py-24 bg-zinc-950 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <InfoCard
            id="misyon"
            icon={<Target />}
            title="Misyonumuz"
            text="Kaliteli, güvenli ve estetik yapılar inşa ederek müşterilerimize uzun ömürlü yaşam alanları sunmak."
          />

          <InfoCard
            id="vizyon"
            icon={<Eye />}
            title="Vizyonumuz"
            text="Modern inşaat teknolojilerini kullanarak sektörde güvenilir, yenilikçi ve öncü bir marka olmak."
          />
        </div>
      </section>

      {/* Projeler */}
      <section id="projeler" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 mb-3">PROJELERİMİZ</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Hayata Geçirdiğimiz Seçkin Projeler
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group bg-zinc-950 rounded-3xl overflow-hidden border border-white/10 hover:border-amber-400/60 transition"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-zinc-400">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* İletişim */}
      <section id="iletisim" className="py-28 bg-zinc-950 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-amber-400 mb-3">İLETİŞİM</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Projeniz İçin Bizimle Görüşün
            </h2>

            <div className="space-y-5 text-zinc-300">
              <ContactItem icon={<Phone />} text="+90 555 555 55 55" />
              <ContactItem icon={<Mail />} text="info@prestijinsaat.com" />
              <ContactItem icon={<MapPin />} text="İstanbul, Türkiye" />
            </div>

            <div className="flex gap-4 mt-8">
              <SocialIcon icon={<FaInstagram />} />
              <SocialIcon icon={<FaFacebookF />} />
              <SocialIcon icon={<FaLinkedinIn />} />
            </div>

            <a
              href="https://www.google.com/maps"
              target="_blank"
              className="inline-flex mt-8 bg-amber-400 text-black px-7 py-4 rounded-full font-semibold hover:bg-amber-300 transition"
            >
              Yol Tarifi Al
            </a>
          </div>

          <div className="rounded-3xl overflow-hidden border border-white/10 min-h-[400px]">
            <iframe
              src="https://www.google.com/maps?q=istanbul&t=&z=12&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[400px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 text-center text-zinc-500">
        © 2026 Prestij İnşaat. Tüm Hakları Saklıdır.
      </footer>
      {/* Mobile WhatsApp Button */}

      <a
        href="https://wa.me/905555555555"
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-2xl transition duration-300 animate-bounce"
      >
        <div className="flex items-center gap-x-1.5">
          <FaWhatsapp size={20} />
          Teklif Al
        </div>
      </a>
    </main>
  );
}

function InfoCard({ id, icon, title, text }) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="bg-black p-10 rounded-3xl border border-white/10 hover:border-amber-400/60 transition"
    >
      <div className="w-14 h-14 rounded-2xl bg-amber-400 text-black flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-3xl font-bold mb-4">{title}</h3>
      <p className="text-zinc-400 leading-7">{text}</p>
    </motion.div>
  );
}

function ContactItem({ icon, text }) {
  return (
    <div className="flex items-center gap-4">
      <div className="text-amber-400">{icon}</div>
      <span>{text}</span>
    </div>
  );
}

function SocialIcon({ icon }) {
  return (
    <a
      href="#"
      className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center hover:bg-amber-400 hover:text-black transition"
    >
      {icon}
    </a>
  );
}
