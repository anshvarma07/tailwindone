import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function News() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#235951] to-[#3F6D66] text-white">
      <Header />
      <main className="max-w-5xl mx-auto px-4 md:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-yellow-500 to-amber-500 mb-10 drop-shadow-lg">
          News & Updates
        </h1>

        <article className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 p-6 md:p-10">
          <header className="mb-6">
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-emerald-200 mb-2">
              Regulatory Update • 24 February 2026
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#FBC9BB] mb-3">
              Shifting of Well-Known Trade Marks Section to New Delhi
            </h2>
          </header>

          <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray-100">
            <p>
              The Office of the Controller General of Patents, Designs & Trade Marks (CGPDTM) has, vide Public
              Notice No. <span className="font-semibold">CG/F/CGPDTM/DL-02/2685</span> dated <span className="font-semibold">February 24, 2026</span>, notified the
              relocation of the <span className="font-semibold">Well-Known Trade Marks Section</span> from Mumbai to New Delhi.
            </p>

            <p>
              All correspondence relating to well-known trademark matters must now be directed to the following
              address, with immediate effect:
            </p>

            <div className="bg-black/20 border border-emerald-500/40 rounded-xl p-4 md:p-5 text-sm md:text-base">
              <p className="font-semibold text-emerald-100">Well-Known Trade Marks Section</p>
              <p>Bouddhik Sampada Bhawan</p>
              <p>Plot No. 32, Sector 14</p>
              <p>Dwarka, New Delhi – 110078</p>
            </div>

            <p>
              Practitioners and stakeholders are advised to update their records and correspondence protocols
              accordingly to avoid any disruption in ongoing or future proceedings before the Well-Known Trade
              Marks Section.
            </p>

            <p>
              For the detailed public notice and official communication, you may refer to the full document here:
              {' '}
              <a
                href="https://drive.google.com/file/d/1FN3LiRHWDeGwEBvPG6BEvzN3-t9c1qVm/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-200 underline hover:text-emerald-100 break-all"
              >
                View Official Notice (CGPDTM)
              </a>
              .
            </p>

            <p className="text-xs md:text-sm text-gray-300 italic">
              This update is shared for general informational purposes only and does not constitute legal advice.
              For specific queries relating to well-known trademark proceedings or strategy, please contact our
              team for tailored guidance.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

