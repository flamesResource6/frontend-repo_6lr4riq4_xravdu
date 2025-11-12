import React from 'react'
import { ShoppingBag, Star, Mail, Phone, BadgeCheck, Sparkles, ShieldCheck } from 'lucide-react'

const PRODUCTS = [
  {
    id: 'songket-premium',
    name: 'Sarung Songket Premium',
    style: 'Tradisional',
    price: 'Rp 459.000',
    image:
      'https://images.unsplash.com/photo-1542060748-10c28b62716b?q=80&w=1600&auto=format&fit=crop',
    features: ['Tenun halus', 'Motif klasik mewah', 'Nyaman dipakai'],
  },
  {
    id: 'tenun-modern',
    name: 'Sarung Tenun Modern',
    style: 'Modern',
    price: 'Rp 389.000',
    image:
      'https://images.unsplash.com/photo-1617952886123-9b57f04f7af3?q=80&w=1600&auto=format&fit=crop',
    features: ['Warna kekinian', 'Ringan & adem', 'Finishing rapi'],
  },
  {
    id: 'batik-elegan',
    name: 'Sarung Batik Elegan',
    style: 'Tradisional',
    price: 'Rp 429.000',
    image:
      'https://images.unsplash.com/photo-1574267432553-4b4628081fa5?q=80&w=1600&auto=format&fit=crop',
    features: ['Batik tulis motif premium', 'Warna tahan lama', 'Tekstur lembut'],
  },
  {
    id: 'sutra-eksklusif',
    name: 'Sarung Sutra Eksklusif',
    style: 'Premium',
    price: 'Rp 799.000',
    image:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop',
    features: ['Sutra pilihan', 'Kilau elegan', 'Sangat nyaman'],
  },
]

const whatsappNumber = '6282334304079'
const whatsappBase = `https://wa.me/${whatsappNumber}`

function Logo() {
  return (
    <div className="flex items-center gap-2 select-none">
      <div className="relative h-10 w-10">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500 blur-[2px] opacity-90"></div>
        <div className="absolute inset-[2px] rounded-xl bg-slate-900 flex items-center justify-center">
          <Sparkles className="h-5 w-5 text-fuchsia-300" />
        </div>
      </div>
      <div>
        <p className="text-xl font-semibold tracking-wide text-white">Yann-Sarubg</p>
        <p className="text-[11px] tracking-[.2em] uppercase text-slate-300">Premium Sarung</p>
      </div>
    </div>
  )
}

function Navbar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/50 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-200">
          <a href="#home" className="hover:text-white transition">Beranda</a>
          <a href="#catalog" className="hover:text-white transition">Katalog</a>
          <a href="#about" className="hover:text-white transition">Tentang</a>
          <a href="#contact" className="hover:text-white transition">Kontak</a>
        </nav>
        <a
          href={`${whatsappBase}?text=Halo%20Yann-Sarubg,%20saya%20ingin%20bertanya%20tentang%20produk%20sarung.`}
          target="_blank"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white px-4 py-2 text-sm font-medium shadow-lg shadow-fuchsia-500/20 hover:opacity-95 transition"
          rel="noreferrer"
        >
          <ShoppingBag className="h-4 w-4" /> Beli Sekarang
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl"></div>
        <div className="absolute top-1/2 right-0 h-96 w-96 -translate-y-1/2 rounded-full bg-indigo-500/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-rose-400/20 blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(#ffffff08_1px,transparent_1px),linear-gradient(90deg,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-16 pb-10 md:pt-24 md:pb-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
            <BadgeCheck className="h-3.5 w-3.5 text-fuchsia-300" /> Sarung premium – modern & tradisional
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight text-white">
            Elegansi Sarung Premium untuk Setiap Momen
          </h1>
          <p className="mt-4 text-slate-300 text-lg">
            Tampil berkelas dengan koleksi terbaik dari Yann-Sarubg. Memadukan seni tradisi dengan sentuhan modern untuk gaya Anda yang autentik.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#catalog"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/15 text-white px-5 py-2.5 text-sm font-medium border border-white/10 transition"
            >
              <Star className="h-4 w-4 text-amber-300" /> Lihat Koleksi
            </a>
            <a
              href={`${whatsappBase}?text=Halo%20Yann-Sarubg,%20saya%20tertarik%20dengan%20koleksi%20sarung%20Anda.`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white px-5 py-2.5 text-sm font-medium shadow-lg shadow-fuchsia-500/20 hover:opacity-95 transition"
            >
              <ShoppingBag className="h-4 w-4" /> Pesan via WhatsApp
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-slate-300 text-sm">
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-300" /> Kualitas terjamin</div>
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-300" /> Bahan nyaman</div>
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-300" /> Garansi ukuran</div>
          </div>
        </div>
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-fuchsia-500/10">
            <img
              src="https://images.unsplash.com/photo-1593328041360-0d79df9ff7ea?q=80&w=1600&auto=format&fit=crop"
              alt="Koleksi sarung premium"
              className="h-[420px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/0"></div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <div className="backdrop-blur bg-white/10 text-white px-3 py-2 rounded-xl text-sm border border-white/10">Pilihan Koleksi</div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-fuchsia-400"></div>
                <div className="h-2 w-2 rounded-full bg-indigo-400"></div>
                <div className="h-2 w-2 rounded-full bg-rose-400"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProductCard({ p }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition overflow-hidden shadow-lg shadow-black/20">
      <div className="relative">
        <img src={p.image} alt={p.name} className="h-64 w-full object-cover" />
        <div className="absolute left-3 top-3 rounded-full bg-slate-900/70 px-3 py-1 text-xs text-white border border-white/10">
          {p.style}
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-white text-lg font-semibold leading-snug">{p.name}</h3>
            <p className="text-fuchsia-300 mt-1 font-medium">{p.price}</p>
          </div>
          <div className="hidden md:inline-flex items-center gap-1 text-amber-300">
            <Star className="h-4 w-4 fill-amber-300" />
            <Star className="h-4 w-4 fill-amber-300" />
            <Star className="h-4 w-4 fill-amber-300" />
            <Star className="h-4 w-4 fill-amber-300" />
            <Star className="h-4 w-4" />
          </div>
        </div>
        <ul className="mt-3 text-sm text-slate-300 space-y-1">
          {p.features.map((f, i) => (
            <li key={i} className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-300" /> {f}</li>
          ))}
        </ul>
        <div className="mt-4 flex items-center justify-between">
          <a
            href={`${whatsappBase}?text=Halo%20Yann-Sarubg,%20saya%20ingin%20pesan%20${encodeURIComponent(p.name)}.`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white px-4 py-2 text-sm font-medium shadow-lg shadow-fuchsia-500/20 hover:opacity-95 transition"
          >
            <ShoppingBag className="h-4 w-4" /> Beli via WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}

function Catalog() {
  return (
    <section id="catalog" className="mx-auto max-w-7xl px-6 py-16">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Koleksi Pilihan</h2>
          <p className="text-slate-300 mt-2">Kualitas terpilih untuk tampilan yang berkelas dan menawan.</p>
        </div>
        <div className="hidden md:flex items-center gap-2 text-slate-300">
          <ShieldCheck className="h-5 w-5 text-emerald-300" /> Bergaransi kualitas
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {PRODUCTS.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-16">
      <div className="rounded-3xl bg-white/5 border border-white/10 p-8 md:p-10 backdrop-blur">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-white">Tentang Yann-Sarubg</h3>
            <p className="mt-3 text-slate-300">
              Kami adalah brand sarung premium yang menghadirkan perpaduan sempurna antara nuansa tradisional dan sentuhan modern. Setiap detail dikerjakan dengan teliti menggunakan bahan pilihan agar memberikan kenyamanan dan keanggunan maksimal.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm">
              <span className="px-3 py-1 rounded-full border border-white/15 bg-white/5 text-slate-200">Premium Fabric</span>
              <span className="px-3 py-1 rounded-full border border-white/15 bg-white/5 text-slate-200">Handcrafted</span>
              <span className="px-3 py-1 rounded-full border border-white/15 bg-white/5 text-slate-200">Modern-Classic</span>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1571607388263-1044a6637a2a?q=80&w=1600&auto=format&fit=crop"
              alt="Detail bahan sarung premium"
              className="h-72 w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="contact" className="mt-10 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10 grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-3 text-slate-300 max-w-xl">
            Hubungi kami untuk pemesanan grosir, personalisasi motif, atau pertanyaan seputar produk. Kami siap membantu Anda menemukan sarung terbaik.
          </p>
        </div>
        <div className="space-y-3 text-slate-200">
          <a href="mailto:contact@yann-sarubg.com" className="flex items-center gap-3 hover:text-white transition">
            <Mail className="h-5 w-5 text-fuchsia-300" /> contact@yann-sarubg.com
          </a>
          <a href={`tel:+6282334304079`} className="flex items-center gap-3 hover:text-white transition">
            <Phone className="h-5 w-5 text-fuchsia-300" /> +62 823-3430-4079
          </a>
          <a
            href={`${whatsappBase}?text=Halo%20Yann-Sarubg`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white px-4 py-2 text-sm font-medium shadow-lg shadow-fuchsia-500/20 hover:opacity-95 transition"
          >
            <ShoppingBag className="h-4 w-4" /> Chat WhatsApp
          </a>
        </div>
      </div>
      <div className="text-center text-xs text-slate-400 py-6">
        © {new Date().getFullYear()} Yann-Sarubg • Semua hak cipta dilindungi
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <Catalog />
      <About />
      <Footer />
    </div>
  )
}
