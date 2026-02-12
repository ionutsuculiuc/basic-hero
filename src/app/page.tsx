"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [guests, setGuests] = useState(1);

  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
    <section className="silk-bg flex min-h-screen items-center justify-center overflow-hidden snap-start">
      <div className="silk-vignette" />

      <div className="relative z-10 flex flex-col items-center gap-6 px-6 py-20 text-center w-full">
        <svg
          className="w-full max-w-4xl"
          viewBox="0 0 1000 200"
          overflow="visible"
        >
          <motion.text
            x="500"
            y="140"
            textAnchor="middle"
            style={{
              fontFamily: "var(--font-great-vibes), cursive",
              fontSize: "120px",
              fill: "#3d2a1a",
              stroke: "#3d2a1a",
              strokeWidth: 1.5,
              strokeDasharray: 3000,
            }}
            initial={{ strokeDashoffset: 3000, fillOpacity: 0 }}
            animate={{ strokeDashoffset: 0, fillOpacity: 1 }}
            transition={{
              strokeDashoffset: {
                duration: 2,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.3,
              },
              fillOpacity: {
                duration: 0.8,
                ease: "easeIn",
                delay: 1.8,
              },
            }}
          >
            Maria &amp; Andrei
          </motion.text>
        </svg>

        <motion.p
          className="text-serif-light text-xl sm:text-2xl md:text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn", delay: 2.5 }}
        >
          15 August 2026
        </motion.p>
      </div>
    </section>

    {/* Invitation Section */}
    <section className="flex min-h-screen items-center justify-center overflow-hidden bg-[#f5efe6] snap-start">

      <div className="relative z-10 flex flex-col items-center gap-12 px-6 py-24 text-center w-full max-w-3xl mx-auto">
        <motion.div
          className="flex flex-col items-center gap-10 w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Invitation text with names */}
          <p className="text-serif-light text-lg sm:text-xl md:text-2xl tracking-[0.15em] leading-loose max-w-2xl font-normal">
            Împreună cu părinții noștri,{" "}
            <span className="font-bold">
              Ion &amp; Elena Popescu
            </span>{" "}
            și{" "}
            <span className="font-bold">
              Vasile &amp; Ana Ionescu
            </span>
            , și nașii noștri,{" "}
            <span className="font-bold">
              Mihai &amp; Cristina Dumitrescu
            </span>
            , vă invităm cu drag să ne fiți alături în cea mai importantă zi
            din viața noastră
          </p>

          {/* Decorative divider */}
          <div className="flex items-center gap-4 w-full max-w-xs">
            <div className="flex-1 h-px bg-[#3d2a1a]/20" />
            <span className="text-script text-2xl text-[#3d2a1a]/40">&#8258;</span>
            <div className="flex-1 h-px bg-[#3d2a1a]/20" />
          </div>
        </motion.div>
      </div>
    </section>

    {/* Locations Section */}
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden snap-start">
      {/* Background image – black & white */}
      <div
        className="absolute inset-0 bg-cover bg-center grayscale"
        style={{ backgroundImage: "url('/bride-veil.jpg')" }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex flex-col items-center gap-16 px-6 py-24 text-center w-full max-w-5xl mx-auto">
        <motion.h2
          className="text-script text-4xl sm:text-5xl !text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Locații
        </motion.h2>

        <motion.div
          className="flex flex-col md:flex-row items-stretch justify-center gap-8 w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          {/* Cununie Civilă */}
          <div className="flex-1 flex flex-col items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-8 border border-white/20">
            <span className="text-serif-light text-xs tracking-[0.3em] !text-white/70">
              Cununie Civilă
            </span>
            <p className="text-script text-xl sm:text-2xl !text-white">
              Primăria Sectorului 1
            </p>
            <p className="text-serif-light text-sm tracking-[0.15em] font-normal !text-white/50">
              Bd. Banu Manta nr. 9, București
            </p>
            <p className="text-serif-light text-sm tracking-[0.15em] font-normal !text-white">
              Ora 11:00
            </p>
          </div>

          {/* Cununie Religioasă */}
          <div className="flex-1 flex flex-col items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-8 border border-white/20">
            <span className="text-serif-light text-xs tracking-[0.3em] !text-white/70">
              Cununie Religioasă
            </span>
            <p className="text-script text-xl sm:text-2xl !text-white">
              Biserica Sfântul Gheorghe
            </p>
            <p className="text-serif-light text-sm tracking-[0.15em] font-normal !text-white/50">
              Calea Victoriei nr. 45, București
            </p>
            <p className="text-serif-light text-sm tracking-[0.15em] font-normal !text-white">
              Ora 13:00
            </p>
          </div>

          {/* Petrecere */}
          <div className="flex-1 flex flex-col items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-8 border border-white/20">
            <span className="text-serif-light text-xs tracking-[0.3em] !text-white/70">
              Petrecere
            </span>
            <p className="text-script text-xl sm:text-2xl !text-white">
              Conacul Florescu
            </p>
            <p className="text-serif-light text-sm tracking-[0.15em] font-normal !text-white/50">
              Șos. Pipera nr. 120, Voluntari
            </p>
            <p className="text-serif-light text-sm tracking-[0.15em] font-normal !text-white">
              Ora 18:00
            </p>
          </div>
        </motion.div>

        {/* Google Maps */}
        <motion.div
          className="w-full rounded-2xl overflow-hidden border border-white/20 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          <iframe
            title="Locații nuntă"
            src="https://maps.google.com/maps?q=Bucuresti+centru&hl=ro&z=12&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>

    {/* Program Section */}
    <section className="flex min-h-screen items-center justify-center overflow-hidden bg-[#f5efe6] snap-start">
      <div className="flex flex-col items-center gap-16 px-6 py-24 text-center w-full max-w-3xl mx-auto">
        <motion.h2
          className="text-script text-4xl sm:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Programul zilei
        </motion.h2>

        <motion.div
          className="flex flex-col gap-0 w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          {/* Timeline items */}
          {[
            { time: "11:00", title: "Cununie Civilă", desc: "Primăria Sectorului 1" },
            { time: "13:00", title: "Cununie Religioasă", desc: "Biserica Sfântul Gheorghe" },
            { time: "16:00", title: "Ședința foto", desc: "Parcul Herăstrău" },
            { time: "18:00", title: "Cocktail de bun venit", desc: "Conacul Florescu" },
            { time: "19:00", title: "Petrecere & Cină", desc: "Conacul Florescu" },
            { time: "00:00", title: "Tortul miresei", desc: "" },
          ].map((item, i, arr) => (
            <div key={i} className="flex items-stretch gap-6 sm:gap-10">
              {/* Time */}
              <div className="w-16 sm:w-20 flex-shrink-0 flex items-start justify-end pt-1">
                <span className="text-serif-light text-sm sm:text-base tracking-[0.15em] font-bold">
                  {item.time}
                </span>
              </div>

              {/* Timeline line & dot */}
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-[#3d2a1a]/70 flex-shrink-0 mt-1.5" />
                {i < arr.length - 1 && (
                  <div className="w-px flex-1 bg-[#3d2a1a]/20" />
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col items-start pb-10 pt-0">
                <p className="text-script text-xl sm:text-2xl text-left">
                  {item.title}
                </p>
                {item.desc && (
                  <p className="text-serif-light text-sm tracking-[0.15em] font-normal opacity-60 text-left">
                    {item.desc}
                  </p>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* RSVP Section */}
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden snap-start">
      {/* Background image – black & white */}
      <div
        className="absolute inset-0 bg-cover bg-center grayscale"
        style={{ backgroundImage: "url('/couple-love.jpg')" }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex flex-col items-center gap-12 px-6 py-24 text-center w-full max-w-2xl mx-auto">
        <motion.h2
          className="text-script text-4xl sm:text-5xl !text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Confirmă prezența
        </motion.h2>

        <motion.p
          className="text-serif-light text-sm sm:text-base tracking-[0.15em] font-normal leading-relaxed max-w-lg !text-white/70"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          Vă rugăm să confirmați participarea până la data de 1 August 2026
        </motion.p>

        <motion.form
          className="flex flex-col gap-6 w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Nume */}
          <div className="flex flex-col gap-2 text-left">
            <label className="text-serif-light text-xs tracking-[0.3em] !text-white/70">
              Nume și prenume
            </label>
            <input
              type="text"
              required
              placeholder="ex: Maria Popescu"
              className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-serif-light text-sm tracking-[0.1em] font-normal text-white placeholder:text-white/30 outline-none focus:border-white/50 transition-colors"
            />
          </div>

          {/* Numar persoane */}
          <div className="flex flex-col gap-2 text-left">
            <label className="text-serif-light text-xs tracking-[0.3em] !text-white/70">
              Număr persoane
            </label>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setGuests((g) => Math.max(1, g - 1))}
                className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white text-xl hover:bg-white/20 transition-colors cursor-pointer"
              >
                &minus;
              </button>
              <span className="text-serif-light text-2xl !text-white font-bold min-w-[3ch] text-center">
                {guests}
              </span>
              <button
                type="button"
                onClick={() => setGuests((g) => Math.min(10, g + 1))}
                className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white text-xl hover:bg-white/20 transition-colors cursor-pointer"
              >
                +
              </button>
            </div>
          </div>

          {/* Confirmare */}
          <div className="flex flex-col gap-2 text-left">
            <label className="text-serif-light text-xs tracking-[0.3em] !text-white/70">
              Participare
            </label>
            <div className="flex gap-4">
              <label className="flex-1 flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 cursor-pointer has-[:checked]:border-white/60 has-[:checked]:bg-white/20 transition-colors">
                <input type="radio" name="attendance" value="yes" required className="accent-white" />
                <span className="text-serif-light text-sm tracking-[0.1em] font-normal !text-white">
                  Confirm
                </span>
              </label>
              <label className="flex-1 flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 cursor-pointer has-[:checked]:border-white/60 has-[:checked]:bg-white/20 transition-colors">
                <input type="radio" name="attendance" value="no" className="accent-white" />
                <span className="text-serif-light text-sm tracking-[0.1em] font-normal !text-white">
                  Nu pot participa
                </span>
              </label>
            </div>
          </div>

          {/* Mentiuni / Alergii */}
          <div className="flex flex-col gap-2 text-left">
            <label className="text-serif-light text-xs tracking-[0.3em] !text-white/70">
              Mențiuni / Alergii alimentare
            </label>
            <textarea
              rows={3}
              placeholder="Opțional"
              className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-serif-light text-sm tracking-[0.1em] font-normal text-white placeholder:text-white/30 outline-none focus:border-white/50 transition-colors resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-white text-[#3d2a1a] rounded-xl px-6 py-4 text-serif-light text-sm tracking-[0.3em] uppercase hover:bg-white/90 transition-colors cursor-pointer font-bold"
          >
            Trimite confirmarea
          </button>
        </motion.form>
      </div>
    </section>
    </main>
  );
}
