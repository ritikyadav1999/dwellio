import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Check, MessageSquare } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { savedPageData } from "@/src/Saved";

export default function SavedPage() {
  const { conciergeActions, conciergeDescription, conciergeTitle, heroDescription, heroImageAlt, heroImageSrc, heroTitle, preferences, savedHomes, upcomingVisit } =
    savedPageData;

  return (
    <div className="bg-background text-foreground">
      <section className="relative flex min-h-[34rem] items-end overflow-hidden">
        <Image
          src={heroImageSrc}
          alt={heroImageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45 grayscale-[18%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/0 via-surface/35 to-surface" />
        <div className="dwellio-container relative z-10 py-16 sm:py-20">
          <p className="dwellio-label mb-4 text-on-surface-variant">Workspace</p>
          <h1 className="max-w-3xl font-heading text-5xl font-normal text-primary sm:text-7xl">
            {heroTitle}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-on-surface-variant">
            {heroDescription}
          </p>
        </div>
      </section>

      <section className="sticky top-20 z-40 border-y border-outline-variant/35 bg-surface/95 backdrop-blur-sm">
        <div className="dwellio-container">
          <nav className="flex h-16 items-center gap-8 overflow-x-auto" aria-label="Saved page navigation">
            {[
              { href: "#saved", label: "Saved Homes", active: true },
              { href: "#visits", label: "Visits" },
              { href: "#concierge", label: "Concierge" },
              { href: "#preferences", label: "Preferences" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`dwellio-label h-full whitespace-nowrap border-b-2 transition-colors ${
                  item.active
                    ? "border-primary text-primary"
                    : "border-transparent text-on-surface-variant hover:text-primary"
                }`}
              >
                <span className="inline-flex h-full items-center">{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <div className="dwellio-container space-y-20 py-14 sm:space-y-24 sm:py-20">
        <section id="saved">
          <div className="mb-8 flex items-end justify-between gap-6 border-b border-outline-variant/30 pb-4">
            <h2 className="font-heading text-3xl font-normal text-primary sm:text-4xl">Saved Homes</h2>
            <Link
              href="/home#verified-homes"
              className="dwellio-label text-on-surface-variant underline underline-offset-8 transition-colors hover:text-primary"
            >
              View All Collections
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {savedHomes.map((home) => (
              <article key={home.id} className="group">
                <Link href={home.href} className="block">
                  <div className="relative mb-5 aspect-[3/2] overflow-hidden rounded-xl bg-surface-container">
                    <Image
                      src={home.imageSrc}
                      alt={home.imageAlt}
                      fill
                      sizes="(min-width: 768px) 42vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    {home.verified ? (
                      <Badge className="absolute right-4 top-4 rounded-full bg-tertiary-fixed px-3 py-1 text-on-tertiary-fixed-variant">
                        Verified
                      </Badge>
                    ) : null}
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-heading text-2xl font-medium text-primary">{home.title}</h3>
                      <p className="text-base text-on-surface-variant">{home.city}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-heading text-2xl text-primary">{home.monthlyRentLabel}</p>
                      <p className="dwellio-label text-on-surface-variant">Per month</p>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-3 lg:items-start">
          <section id="visits" className="lg:col-span-2">
            <Card className="rounded-xl border border-outline-variant/25 bg-surface-container-low py-0 dwellio-soft-shadow">
              <CardContent className="p-6 sm:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <CalendarDays className="size-5 text-primary" aria-hidden="true" />
                  <h2 className="font-heading text-3xl font-normal text-primary">Upcoming Visit</h2>
                </div>
                <div className="grid gap-6 md:grid-cols-[12rem_1fr]">
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <Image
                      src={upcomingVisit.imageSrc}
                      alt={upcomingVisit.imageAlt}
                      fill
                      sizes="192px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="dwellio-label text-on-surface-variant">{upcomingVisit.dateTimeLabel}</p>
                    <h3 className="mt-2 font-heading text-3xl font-normal text-primary">
                      {upcomingVisit.propertyTitle}
                    </h3>
                    <p className="mt-2 text-base text-on-surface-variant">{upcomingVisit.locationLabel}</p>
                    <div className="mt-6 flex items-center gap-3 border-t border-outline-variant/30 pt-5">
                      <Avatar className="size-12">
                        <AvatarImage src={upcomingVisit.advisor.avatarSrc} alt={upcomingVisit.advisor.name} />
                        <AvatarFallback>RV</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-base font-medium text-primary">{upcomingVisit.advisor.name}</p>
                        <p className="dwellio-label text-on-surface-variant">{upcomingVisit.advisor.role}</p>
                      </div>
                      <Button variant="outline" size="icon-sm" className="ml-auto rounded-full">
                        <MessageSquare className="size-4" aria-hidden="true" />
                        <span className="sr-only">Message advisor</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="concierge">
            <Card className="rounded-xl border border-primary/20 bg-primary py-0 text-primary-foreground dwellio-soft-shadow">
              <CardContent className="p-6 sm:p-8">
                <h2 className="font-heading text-3xl font-normal">{conciergeTitle}</h2>
                <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80">
                  {conciergeDescription}
                </p>

                <div className="mt-6 space-y-3">
                  {conciergeActions.map((action) => (
                    <Button
                      key={action.id}
                      variant="outline"
                      className="h-11 w-full justify-between rounded-md border-primary-foreground/25 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                    >
                      {action.label}
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Button>
                  ))}
                </div>

                <Button className="mt-12 h-11 w-full rounded-md bg-surface text-primary hover:bg-surface-container-high">
                  Speak with an Advisor
                </Button>
              </CardContent>
            </Card>
          </section>
        </div>

        <section id="preferences">
          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl font-normal text-primary sm:text-4xl">Search Preferences</h2>
            <p className="mt-3 text-base leading-relaxed text-on-surface-variant">
              Refine your automated recommendations based on your lifestyle requirements.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {preferences.map((pref) => (
                <Button
                  key={pref.id}
                  variant={pref.active ? "default" : "outline"}
                  className={pref.active ? "h-10 rounded-full px-5" : "h-10 rounded-full px-5"}
                >
                  {pref.label}
                  {pref.active ? <Check className="size-4" aria-hidden="true" /> : null}
                </Button>
              ))}
              <Button variant="outline" className="h-10 rounded-full px-5 text-on-surface-variant">
                Add Preference +
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
