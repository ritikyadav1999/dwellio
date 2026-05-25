import Image from "next/image";
import Link from "next/link";

const neighbourhoods = [
  {
    name: "HSR Layout",
    description: "Startup energy meets walkable cafe culture.",
    href: "/home",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCW0nt5mlUOhO8MoKIenBCAEJfwQNhO8opgofM0sZbXKYWxAIEdWTpUy8EFa4I2ZHdu2QhNTeCKAqiot2AAzXz7gHBtmASbq2GKA2VuHW9MKkZTDEozm7q0W6wM7tOm9E6gogO27pV7pZFU7q_ZYg7798Zmv7AjCAi2JCTuDtX2oc3qiZwljRUpXuS7a2cqD4yFFW24Q08-pj6OKzw0XilnI3Ae9jMnlKo3mt3i910gr0d0uye4UKK-Inyy-4OwUwDvHzOgB7tEbso",
    imageAlt:
      "Bright cafe street with work-friendly spaces and greenery in HSR Layout.",
    tags: ["Tech Hub", "Walkable"],
    featured: true,
  },
  {
    name: "Koramangala",
    description: "The city's vibrant dining and nightlife epicenter.",
    href: "/home",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDi30S4d3g3Mb2tzsy_RWkpwSVcSNF0cXD7jpFxt8nE9y03CMUZ67HxxQhTb7LCCrOIrUs_WVP6oQexnqhn00w2vHFm1s_Ody6zXH1fWeFqAFmt3Sn7_HuS7VvkYeOKcudXLXn61qDyu2n5RSJASCAvHwdhMVE8kvFSNdnCYVHJLqeG0ndzbACDfFvjfitdmVHU5BViY3JEt0Zl2yeSUv14FC2ZDlDeUtZ5Y0pIkVPO_64I_gGeJOXXjFZd9f2ypYebrKv9y7L2Rm0",
    imageAlt:
      "Evening street scene with refined restaurants and boutiques in Koramangala.",
    tags: ["Nightlife", "Dining", "Bustling"],
  },
  {
    name: "Indiranagar",
    description: "Tree-lined avenues with a chic, established charm.",
    href: "/home",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBMrYBqvgHSdRQAUKtGPeEhDEkV3abuLd54Cgmt6q_ZVOf0ZkF8ch7uPf32K6wzjq5x6sFsNBD8SlY1m7vu_h-eOvWKlL7vMHQf8NeJ1QceNpd5iTFjMlBadT4CCa-LSQrM5R81494ICZgH4GmVhbQA-e6qmSSEmwQsDziDqNcf39NIBVJbMB2GsCplgipsLH1TGTGmuQadOwmJ8p0wdPbtLNo0hxtyjDtWoX_PJdD6sGQLy2jOwrh9SGNWMid6pOvToTINe3sFvpY",
    imageAlt:
      "Calm residential lane with mature trees and premium homes in Indiranagar.",
    tags: ["Premium", "Boutiques"],
  },
];

export function NeighbourhoodSection() {
  return (
    <section id="neighbourhoods" className="bg-surface py-24 sm:py-32" aria-label="Neighbourhood discovery">
      <div className="dwellio-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="dwellio-label mb-4 text-on-surface-variant">Neighbourhood discovery</p>
          <h2 className="font-heading text-4xl font-normal leading-tight text-primary sm:text-6xl">
            More than just a location.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-on-surface-variant">
            Explore Bangalore&apos;s most desirable areas through a hospitality lens, then shortlist homes
            that match the pace and personality of your everyday life.
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {neighbourhoods.map((neighbourhood) => (
            <Link
              key={neighbourhood.name}
              href={neighbourhood.href}
              className="group overflow-hidden rounded-xl border border-outline-variant/25 bg-surface-container-lowest dwellio-soft-shadow transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={neighbourhood.image}
                  alt={neighbourhood.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                  className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                />
                {neighbourhood.featured ? (
                  <span className="absolute right-4 top-4 rounded-full bg-tertiary-fixed px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-on-tertiary-fixed-variant">
                    Popular
                  </span>
                ) : null}
              </div>

              <div className="p-7 sm:p-8">
                <h3 className="font-heading text-3xl font-normal text-primary">{neighbourhood.name}</h3>
                <p className="mt-2 min-h-12 text-base leading-relaxed text-on-surface-variant">
                  {neighbourhood.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {neighbourhood.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-outline-variant/30 px-3 py-1 text-xs text-on-surface-variant"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
