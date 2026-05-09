import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  SearchCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SpeakWithConciergeModal } from "@/components/concierge/SpeakWithConciergeModal";
import { conciergePageData } from "@/src/Concierge";

const stepIcons = [SearchCheck, Sparkles, Compass, CheckCircle2];

export default function ConciergePage() {
  const data = conciergePageData;

  return (
    <div className="bg-background text-foreground">
      <section className="relative flex min-h-[700px] items-center overflow-hidden py-20 sm:min-h-[760px]">
        <Image
          src={data.heroImage}
          alt="Immersive architectural living space."
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgb(253_248_248/0.94),rgb(253_248_248/0.48),rgb(24_25_25/0.12))]" />
        <div className="dwellio-container relative z-10 text-center">
          <h1 className="font-heading text-5xl font-normal leading-[1.08] text-primary sm:text-7xl">
            {data.heroTitle}
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-on-surface-variant sm:text-xl">
            {data.heroSubtitle}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <SpeakWithConciergeModal
              source="concierge-page"
              trigger={
                <Button size="lg" className="h-12 rounded-md px-8">
                  Speak with a Concierge
                </Button>
              }
            />
            <Button asChild variant="outline" size="lg" className="h-12 rounded-md px-8">
              <Link href="/home#verified-homes">Start Curated Search</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="dwellio-container py-20 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-surface-container">
            <Image
              src={data.advisorImage}
              alt={data.advisorName}
              fill
              sizes="(min-width: 1024px) 34vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
          </div>
          <div>
            <Badge className="rounded-full bg-surface-container px-4 py-2 text-on-surface-variant">
              <UsersRound className="size-4" aria-hidden="true" />
              Available now
            </Badge>
            <h2 className="mt-7 font-heading text-4xl font-normal leading-tight text-primary sm:text-5xl">
              Meet {data.advisorName}, your personal advisor.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-on-surface-variant">
              &quot;{data.advisorNote}&quot;
            </p>
            <div className="mt-8 flex items-center gap-3">
              <Avatar className="size-12">
                <AvatarImage src={data.advisorImage} alt={data.advisorName} />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-base font-medium text-primary">{data.advisorName}</p>
                <p className="dwellio-label text-on-surface-variant">{data.advisorRole}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-outline-variant/20 bg-surface-container-low/60 py-20 sm:py-28">
        <div className="dwellio-container">
          <div className="text-center">
            <h2 className="font-heading text-4xl font-normal text-primary sm:text-5xl">
              An effortless transition
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-on-surface-variant">
              A predictable and calm process designed around your timeline.
            </p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {data.steps.map((step, index) => {
              const Icon = stepIcons[index];
              return (
                <Card
                  key={step.id}
                  className="rounded-xl border border-outline-variant/25 bg-surface-container-lowest py-0 shadow-none"
                >
                  <CardContent className="p-6 text-center">
                    <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-surface-container text-primary">
                      <Icon className="size-6" aria-hidden="true" />
                    </span>
                    <p className="dwellio-label mt-4 text-on-surface-variant">Step {index + 1}</p>
                    <h3 className="mt-2 font-heading text-2xl font-normal text-primary">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="dwellio-container py-24 sm:py-32">
        <div className="mb-12 flex flex-col justify-between gap-6 border-b border-outline-variant/30 pb-8 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-heading text-4xl font-normal text-primary sm:text-5xl">
              Curated Assistance
            </h2>
            <p className="mt-4 max-w-2xl text-on-surface-variant">
              Tailored services designed to remove friction from every step of your transition.
            </p>
          </div>
          <Button asChild variant="ghost" className="h-auto px-0 text-primary hover:bg-transparent">
            <Link href="/home#collections">View all services</Link>
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-12">
          <Card className="group relative overflow-hidden rounded-xl border-0 bg-primary py-0 text-primary-foreground md:col-span-8">
            <Image
              src={data.services[0].image}
              alt={data.services[0].title}
              fill
              sizes="(min-width: 768px) 60vw, 100vw"
              className="object-cover opacity-35 transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary to-primary/65" />
            <CardContent className="relative z-10 p-8 sm:p-10">
              <h3 className="font-heading text-3xl font-normal">{data.services[0].title}</h3>
              <p className="mt-4 max-w-2xl text-primary-foreground/90">{data.services[0].description}</p>
            </CardContent>
          </Card>

          <div className="space-y-8 md:col-span-4">
            {data.services.slice(1).map((service) => (
              <Card
                key={service.id}
                className="rounded-xl border border-outline-variant/25 bg-surface-container-lowest py-0 shadow-none"
              >
                <CardContent className="p-6">
                  <h3 className="font-heading text-2xl font-normal text-primary">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-outline-variant/20 bg-surface-container-lowest py-20 sm:py-24">
        <div className="dwellio-container text-center">
          <h2 className="font-heading text-3xl font-normal text-primary sm:text-4xl">
            Curated by lifestyle
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-on-surface-variant">
            Explore collections categorized by the atmosphere and amenities you value most.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {data.lifestyles.map((item) => (
              <Button key={item.id} variant="outline" className="rounded-full px-5 text-on-surface-variant">
                {item.label}
              </Button>
            ))}
          </div>
          <Button asChild size="lg" className="mt-10 h-11 rounded-md px-8">
            <Link href="/schedule">
              Begin with concierge
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
