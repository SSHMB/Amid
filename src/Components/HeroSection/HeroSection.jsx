import React from 'react'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <section className="hero-section bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-rose-500">Welcome to amid</p>
        <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
          Beautiful digital experiences for modern brands
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
          We build web interfaces that feel elegant, perform fast, and help companies grow.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#" className="hero-btn hero-btn-primary rounded-full px-6 py-3 text-sm font-semibold text-white">
            Get Started
          </a>
          <a href="#" className="hero-btn hero-btn-secondary rounded-full px-6 py-3 text-sm font-semibold text-slate-900">
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
