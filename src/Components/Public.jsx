import React from 'react'

const Public = () => {
    return (
        <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl text-center">
                <span className="text-sm uppercase tracking-[0.35em] text-rose-500">blog</span>
                <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
                    We Publish Blogs Every Week
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                    We understand how desperately you want to grow in the business world & our motto is to help you with practical idea and plan.
                </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-6xl gap-8 xl:grid-cols-2">
                <article className="overflow-hidden rounded-[2rem] bg-white shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
                    <div className="relative overflow-hidden">
                        <img
                            className="h-72 w-full object-cover"
                            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
                            alt="Upgrowing Economy"
                        />
                        <div className="absolute right-5 top-5 rounded-3xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
                            22 Dec
                        </div>
                    </div>
                    <div className="p-8">
                        <h3 className="text-xl font-semibold text-slate-900">
                            Upgrowing Economy Needs More Startups
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-slate-600">
                            We understand how desperately you want to grow in the business world & our motto is to help you with practical idea and plan.
                        </p>
                        <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600">
                            Learn More
                            <span aria-hidden="true">→</span>
                        </button>
                    </div>
                </article>

                <article className="overflow-hidden rounded-[2rem] bg-white shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
                    <div className="relative overflow-hidden">
                        <img
                            className="h-72 w-full object-cover"
                            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
                            alt="Team Feature"
                        />
                        <div className="absolute right-5 top-5 rounded-3xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
                            16 Dec
                        </div>
                    </div>
                    <div className="p-8">
                        <h3 className="text-xl font-semibold text-slate-900">
                            Team Has Some Unique Feature - What Yours?
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-slate-600">
                            We understand how desperately you want to grow in the business world & our motto is to help you with practical idea and plan.
                        </p>
                        <button className="mt-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                            Learn More
                            <span aria-hidden="true">→</span>
                        </button>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Public