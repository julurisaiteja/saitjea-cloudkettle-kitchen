"use client";
import Link from "next/link";
import data from "@/lib/data.json";
import { ProductCard } from "@/components/ProductCard";
import { NicheTool } from "@/components/NicheTool";
import { HeroFilm } from "@/components/HeroFilm";
import type { Product } from "@/lib/types";
import { Marquee } from "@/components/Marquee";
import { StatRow } from "@/components/StatRow";
import { FilmStrip } from "@/components/FilmStrip";
import { Newsletter } from "@/components/Newsletter";
import { MotionReveal } from "@/components/MotionReveal";
import { OfferSpot } from "@/components/OfferSpot";
import { ReviewRail } from "@/components/ReviewRail";
import { FaqBlock } from "@/components/FaqBlock";

const brand = data.brand;
const products = data.products as Product[];

export default function HomePage() {
  return (
    <>
      <Marquee />
      <section className="relative min-h-[100svh] overflow-hidden scanline">
        <HeroFilm video={brand.heroVideo} image={brand.heroImage} />
        <div className="absolute inset-0 bg-[#070b14]/78" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-4 py-24 md:px-6">
          <p className="ck-status">Night delivery OS · kitchens online</p>
          <h1 className="mt-4 font-display text-5xl uppercase md:text-7xl">{brand.name}</h1>
          <p className="mt-4 max-w-xl text-lg" style={{ color: "var(--muted)" }}>{brand.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/shop" className="neon-btn">Order now</Link>
            <Link href="/kitchens" className="neon-ghost">Kitchen grid</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: "var(--accent2)" }}>Line protocol</p>
            <h2 className="mt-2 font-display text-3xl uppercase">Craving match</h2>
            <div className="mt-6"><NicheTool /></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {brand.stats.map((s: { label: string; value: string }) => (
              <div key={s.label} className="hud-chip !p-4">
                <p className="font-display text-2xl" style={{ color: "var(--accent)" }}>{s.value}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.14em]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        <h2 className="mt-14 font-display text-2xl uppercase">Kitchens on the grid</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 8).map((p) => (
            <div key={p.id} className="border p-2" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </section>
      <OfferSpot />
      <FilmStrip />
      <ReviewRail />
      <FaqBlock />
      <MotionReveal className="mx-auto max-w-6xl px-4 pb-16 md:px-6"><Newsletter /></MotionReveal>
    </>
  );
}
