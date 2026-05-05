import React from 'react'

const Banner = () => {
    return (
        <section className="relative overflow-hidden bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <div className="space-y-4">
                        <span className="inline-flex items-center rounded-full bg-rose-100 px-3 py-1 text-sm font-semibold text-rose-700">
                            achievements
                        </span>
                        <h1 className="max-w-3xl text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
                            We Worked With <span className="text-orange-500">100+</span> Company Over <span className="text-orange-500">10</span> Years
                        </h1>
                        <p className="max-w-2xl text-base text-slate-600 sm:text-lg">
                            We design digital experiences that connect brands with people. Strong design, smart strategy, and beautiful products for global businesses.
                        </p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-3xl bg-white p-5 shadow-lg shadow-slate-200/80">
                            <p className="text-4xl font-extrabold text-slate-900">9k+</p>
                            <p className="mt-2 text-sm uppercase tracking-[0.24em] text-slate-500">Completed Full Projects</p>
                            <p className="mt-1 text-xs text-slate-400">From 789+ Companies</p>
                        </div>
                        <div className="rounded-3xl bg-white p-5 shadow-lg shadow-slate-200/80">
                            <p className="text-4xl font-extrabold text-slate-900">924+</p>
                            <p className="mt-2 text-sm uppercase tracking-[0.24em] text-slate-500">Satisfyingly Happy Clients</p>
                            <p className="mt-1 text-xs text-slate-400">From 100+ Countries</p>
                        </div>
                    </div>
                </div>

                <div className="grid gap-10 xl:grid-cols-[1.2fr_0.8fr] xl:items-start">
                    <div className="relative">
                        <div className="absolute -left-8 top-10 h-[420px] w-[420px] rounded-full bg-emerald-100 opacity-60 blur-3xl" />
                        <div className="absolute right-0 top-24 h-[260px] w-[260px] rounded-full bg-orange-100 opacity-60 blur-3xl" />
                        <div className="relative rounded-[2rem] bg-white p-8 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
                            <div className="mb-6 flex items-center justify-between rounded-3xl bg-slate-900 px-5 py-4 text-white">
                                <div>
                                    <p className="text-sm uppercase tracking-[0.32em] text-slate-300">JobHub</p>
                                    <p className="mt-2 text-xl font-bold">Job Finding Website</p>
                                </div>
                                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-900">UI</div>
                            </div>
                            <div className="space-y-4">
                                <p className="text-sm text-slate-600">
                                    This website has become one of the best UI interfaces for users with a beautiful UI and also lucrative for upcoming startups in the sector.
                                </p>
                                <button className="inline-flex items-center rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600">
                                    View More Work
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="rounded-[2rem] bg-white p-8 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
                            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-slate-400">CENT</p>
                            <h2 className="text-2xl font-bold text-slate-900">Payment App Landing Website</h2>
                            <p className="mt-4 text-sm leading-6 text-slate-600">
                                This website has become one of the best UI interfaces for users with a beautiful UI and also lucrative for upcoming startups in the sector.
                            </p>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-3xl bg-slate-100 p-5">
                                <p className="text-2xl font-bold text-slate-900">416</p>
                                <p className="mt-2 text-sm text-slate-600">Expertised Unit Employees</p>
                            </div>
                            <div className="rounded-3xl bg-slate-100 p-5">
                                <p className="text-2xl font-bold text-slate-900">3024</p>
                                <p className="mt-2 text-sm text-slate-600">Startups Case Studies</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner