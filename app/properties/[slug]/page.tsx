import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BadgeCheck, CalendarDays, KeyRound, MessageCircle, Sparkles } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { featuredProperties, PropertyCard } from "@/src/Homepage";
import { getPropertyDetail, getSimilarHomes } from "@/src/ProductDetail";

type PropertyDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return featuredProperties.map((property) => ({
    slug: property.id,
  }));
}

export default async function PropertyDetailPage({ params }: PropertyDetailPageProps) {
  const { slug } = await params;
  const propertyExists = featuredProperties.some((property) => property.id === slug);

  if (!propertyExists) {
    notFound();
  }

  const detail = getPropertyDetail(slug);
  const similarHomes = getSimilarHomes(slug);
  const [heroImage, ...thumbnailImages] = detail.gallery;

  return (
    <div className="bg-background text-foreground">
      <section className="dwellio-container py-10 sm:py-14">
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-surface-container sm:aspect-[16/8]">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            priority
            sizes="(min-width: 1024px) 88vw, 100vw"
            className="object-cover"
          />
          <Badge className="absolute right-4 top-4 rounded-full border border-white/60 bg-white/80 px-4 py-2 text-primary shadow-sm backdrop-blur-md">
            <BadgeCheck className="size-3.5" aria-hidden="true" />
            Dwellio Verified
          </Badge>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
          {thumbnailImages.slice(0, 4).map((image, index, images) => (
            <div
              key={`${detail.slug}-${image.src}-${index}`}
              className="relative aspect-[4/3] overflow-hidden rounded-lg bg-surface-container"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 768px) 22vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.035]"
              />
              {index === images.length - 1 ? (
                <div className="absolute inset-0 flex items-center justify-center bg-primary/25 text-primary-foreground backdrop-blur-[2px]">
                  <span className="dwellio-label">View All Photos</span>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className="dwellio-container grid gap-12 pb-24 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-8">
          <header className="border-b border-outline-variant/30 pb-8">
            <p className="dwellio-label mb-4 text-on-surface-variant">{detail.eyebrow}</p>
            <h1 className="font-heading text-5xl font-normal leading-tight text-primary sm:text-7xl">
              {detail.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-base text-on-surface-variant">
              {detail.meta.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-surface-container-low px-4 py-2 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </header>

          <ContentSection title="The Residence">
            <p className="max-w-3xl text-lg leading-relaxed text-on-surface-variant">
              {detail.description}
            </p>
          </ContentSection>

          <ContentSection title="Transparency Overview">
            <div className="grid gap-4 md:grid-cols-2">
              {detail.transparency.map((item) => (
                <Card
                  key={item.label}
                  size="sm"
                  className="rounded-lg border border-outline-variant/20 bg-surface-container-low py-6 shadow-none"
                >
                  <CardContent>
                    <p className="dwellio-label mb-3 flex items-center gap-2 text-on-surface-variant">
                      <Sparkles className="size-3.5" aria-hidden="true" />
                      {item.label}
                    </p>
                    <p className="text-base leading-relaxed text-primary">{item.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ContentSection>

          <ContentSection title="The Neighborhood">
            <p className="mb-8 max-w-3xl text-lg leading-relaxed text-on-surface-variant">
              {detail.neighborhood}
            </p>
            <div className="relative h-[280px] overflow-hidden rounded-xl bg-surface-container">
              <Image
                src={detail.mapImage}
                alt={`Editorial map view of ${detail.property.area} in Bangalore.`}
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover opacity-85"
              />
            </div>
          </ContentSection>
        </div>

        <aside className="lg:col-span-4 lg:self-stretch">
          <Card className="rounded-xl border border-outline-variant/20 bg-surface-container-lowest py-0 shadow-sm lg:sticky lg:top-28">
            <CardContent className="p-6">
              <div className="border-b border-outline-variant/25 pb-6">
                <p className="font-heading text-3xl font-normal text-primary">
                  {detail.price}{" "}
                  <span className="font-sans text-sm text-on-surface-variant">/ month</span>
                </p>
                <p className="mt-2 text-sm text-on-surface-variant">Deposit: {detail.deposit}</p>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <Button asChild className="h-12 rounded-md">
                  <Link href="/schedule">
                  <CalendarDays className="size-4" aria-hidden="true" />
                  Schedule a Visit
                  </Link>
                </Button>
                <Button variant="outline" className="h-12 rounded-md">
                  <MessageCircle className="size-4" aria-hidden="true" />
                  Speak with an Advisor
                </Button>
              </div>

              <div className="mt-7 border-t border-outline-variant/25 pt-6">
                <p className="dwellio-label mb-4 text-on-surface-variant">Your Host</p>
                <div className="flex items-center gap-4">
                  <Avatar size="lg">
                    <AvatarImage src={detail.host.avatar} alt={detail.host.name} />
                    <AvatarFallback>RV</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-primary">{detail.host.name}</p>
                    <p className="mt-1 flex items-center gap-1 text-sm text-on-surface-variant">
                      <KeyRound className="size-3.5" aria-hidden="true" />
                      {detail.host.role} | {detail.host.response}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </aside>
      </section>

      <section className="bg-surface-container-low py-24 sm:py-28">
        <div className="dwellio-container">
          <div className="mb-12 border-b border-outline-variant/30 pb-8">
            <p className="dwellio-label mb-4 text-on-surface-variant">Curated next</p>
            <h2 className="font-heading text-4xl font-normal text-primary sm:text-5xl">
              Similar Curated Homes
            </h2>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {similarHomes.map((home, index) => (
              <PropertyCard key={home.id} property={home} imagePriority={index === 0} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ContentSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-outline-variant/20 py-14 last:border-b-0">
      <h2 className="mb-6 font-heading text-3xl font-normal text-primary">{title}</h2>
      {children}
    </section>
  );
}
