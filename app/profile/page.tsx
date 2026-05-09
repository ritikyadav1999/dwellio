import Image from "next/image";
import Link from "next/link";
import {
  Bell,
  CalendarDays,
  Check,
  ChevronRight,
  CreditCard,
  Edit3,
  Heart,
  Lock,
  LogOut,
  MapPin,
  MessageSquare,
  ShieldCheck,
  Video,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  accountDetails,
  availabilityOptions,
  discoveryPreferences,
  lifestylePreferences,
  profileData,
  tourTypes,
} from "@/src/Profile";

export default function ProfilePage() {
  return (
    <div className="bg-background text-foreground">
      <section className="dwellio-container py-10 sm:py-14">
        <ProfileHero />
      </section>

      <section className="dwellio-container grid gap-12 pb-24 lg:grid-cols-12 lg:items-start">
        <div className="flex flex-col gap-16 lg:col-span-8">
          <AccountDetails />
          <LifestyleTraits />
          <DiscoveryFilters />
          <TouringPreferences />
        </div>

        <aside className="flex flex-col gap-6 lg:col-span-4">
          <VerificationCard />
          <ConciergeCard />
          <SettingsCard />
        </aside>
      </section>
    </div>
  );
}

function ProfileHero() {
  return (
    <Card className="relative min-h-[280px] overflow-hidden rounded-xl border border-outline-variant/20 bg-surface-container py-0 shadow-sm">
      <Image
        src={profileData.heroImage}
        alt="Soft architectural interior background."
        fill
        priority
        sizes="(min-width: 1024px) 88vw, 100vw"
        className="object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/45 to-transparent" />
      <CardContent className="relative z-10 flex min-h-[280px] flex-col justify-end gap-8 p-6 sm:p-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end">
          <Avatar className="size-24 border-4 border-surface shadow-md sm:size-32">
            <AvatarImage src={profileData.avatar} alt={profileData.name} />
            <AvatarFallback>RY</AvatarFallback>
          </Avatar>
          <div className="pb-1">
            <h1 className="font-heading text-5xl font-normal leading-tight text-primary sm:text-7xl">
              {profileData.name}
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-on-surface-variant">
              {profileData.summary.map((item) => (
                <span key={item}>{item}</span>
              ))}
              <Badge className="rounded-full bg-tertiary-fixed px-3 py-1 text-on-tertiary-fixed-variant">
                <ShieldCheck className="size-3.5" aria-hidden="true" />
                Verified Member
              </Badge>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon-sm" className="rounded-full bg-surface/80">
            <Bell />
            <span className="sr-only">Notifications</span>
          </Button>
          <Button asChild variant="outline" size="icon-sm" className="rounded-full bg-surface/80">
            <Link href="/saved">
              <Heart />
              <span className="sr-only">Saved homes</span>
            </Link>
          </Button>
          <Button variant="outline" className="rounded-full bg-surface/85">
            <Edit3 className="size-4" aria-hidden="true" />
            Edit Profile
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function AccountDetails() {
  return (
    <ProfileSection title="Account Details">
      <div className="grid gap-x-10 gap-y-7 md:grid-cols-2">
        {accountDetails.map((detail) => (
          <div key={detail.label}>
            <p className="dwellio-label mb-2 text-on-surface-variant">{detail.label}</p>
            <p className="flex items-center gap-2 text-lg text-primary">
              {detail.label === "Primary City" ? <MapPin className="size-4 text-outline" /> : null}
              {detail.label === "Move-In Timeline" ? (
                <CalendarDays className="size-4 text-outline" />
              ) : null}
              {detail.value}
            </p>
          </div>
        ))}
      </div>
    </ProfileSection>
  );
}

function LifestyleTraits() {
  return (
    <ProfileSection title="Lifestyle Traits" action="Curating your experience">
      <div className="flex flex-wrap gap-3">
        {lifestylePreferences.map((item) => (
          <PreferenceChip key={item.label} label={item.label} active={item.active} />
        ))}
      </div>
    </ProfileSection>
  );
}

function DiscoveryFilters() {
  return (
    <ProfileSection title="Discovery Filters">
      <div className="space-y-10">
        <div>
          <div className="mb-5 flex items-center justify-between gap-4">
            <p className="dwellio-label text-on-surface-variant">Monthly Rent Range</p>
            <p className="text-base text-primary">{discoveryPreferences.rentRange}</p>
          </div>
          <div className="relative py-5">
            <div className="h-px bg-outline-variant" />
            <div className="absolute left-[18%] top-1/2 size-4 -translate-y-1/2 rounded-full bg-primary shadow-sm" />
            <div className="absolute left-[58%] top-1/2 size-4 -translate-y-1/2 rounded-full bg-primary shadow-sm" />
            <div className="mt-5 flex justify-between text-xs uppercase tracking-[0.08em] text-outline">
              <span>INR 20k</span>
              <span>INR 200k+</span>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <SegmentedPreference
            label="Furnishing Requirement"
            options={discoveryPreferences.furnishing}
            value={discoveryPreferences.furnishingValue}
          />
          <SegmentedPreference
            label="Property Type"
            options={discoveryPreferences.propertyTypes}
            value={discoveryPreferences.propertyTypeValue}
          />
        </div>
      </div>
    </ProfileSection>
  );
}

function TouringPreferences() {
  return (
    <ProfileSection title="Touring Preferences" action="Concierge setup">
      <Card className="rounded-xl border border-outline-variant/25 bg-surface-container-low py-0 shadow-none">
        <CardContent className="grid gap-8 p-6 sm:p-8 md:grid-cols-2">
          <div>
            <h3 className="mb-5 flex items-center gap-2 text-lg text-primary">
              <CalendarDays className="size-4 text-outline" />
              Default Availability
            </h3>
            <div className="space-y-4">
              {availabilityOptions.map((item) => (
                <CheckRow key={item.label} label={item.label} active={item.active} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-5 flex items-center gap-2 text-lg text-primary">
              <Video className="size-4 text-outline" />
              Preferred Tour Type
            </h3>
            <div className="space-y-3">
              {tourTypes.map((type) => (
                <div
                  key={type.label}
                  className={cn(
                    "rounded-lg border p-4 transition-colors",
                    type.active
                      ? "border-primary bg-surface"
                      : "border-outline-variant/35 bg-surface-container-low hover:bg-surface"
                  )}
                >
                  <p className="font-medium text-primary">{type.label}</p>
                  <p className="mt-1 text-sm leading-relaxed text-on-surface-variant">
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </ProfileSection>
  );
}

function VerificationCard() {
  return (
    <Card className="rounded-xl border border-outline-variant/20 bg-surface-container-high py-0 shadow-sm">
      <CardContent className="p-8">
        <span className="mb-6 flex size-12 items-center justify-center rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant">
          <ShieldCheck className="size-5" aria-hidden="true" />
        </span>
        <h2 className="font-heading text-2xl font-normal text-primary">Identity Verified</h2>
        <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
          Your profile has been vetted, granting priority access to exclusive viewings and premium
          support.
        </p>
        <Button variant="ghost" className="mt-6 h-auto px-0 hover:bg-transparent">
          View Verification Details
          <ChevronRight className="size-4" aria-hidden="true" />
        </Button>
      </CardContent>
    </Card>
  );
}

function ConciergeCard() {
  return (
    <Card className="rounded-xl border border-primary/20 bg-primary py-0 text-primary-foreground shadow-sm">
      <CardContent className="p-8">
        <h2 className="font-heading text-2xl font-normal">Dedicated Concierge</h2>
        <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75">
          Your personal advisor is available to curate your property list and schedule tours.
        </p>
        <Button
          variant="secondary"
          className="mt-6 w-full rounded-md bg-primary-foreground text-primary"
        >
          <MessageSquare className="size-4" aria-hidden="true" />
          Message Sarah
        </Button>
      </CardContent>
    </Card>
  );
}

function SettingsCard() {
  const items = [
    { label: "Privacy Settings", icon: Lock },
    { label: "Payment Methods", icon: CreditCard },
  ];

  return (
    <Card className="rounded-xl border border-outline-variant/20 bg-surface-container-low py-0 shadow-sm">
      <CardContent className="p-6">
        <div className="space-y-2">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.label}
                variant="ghost"
                className="h-11 w-full justify-between rounded-md px-0 hover:bg-transparent"
              >
                <span className="flex items-center gap-3">
                  <Icon className="size-4 text-outline" />
                  {item.label}
                </span>
                <ChevronRight className="size-4 text-outline" />
              </Button>
            );
          })}
        </div>
        <div className="mt-4 border-t border-outline-variant/25 pt-4">
          <Button variant="ghost" className="h-11 px-0 text-error hover:bg-transparent">
            <LogOut className="size-4" aria-hidden="true" />
            Sign Out
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function ProfileSection({
  title,
  action,
  children,
}: {
  title: string;
  action?: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="mb-7 flex items-baseline justify-between gap-4 border-b border-outline-variant/30 pb-3">
        <h2 className="font-heading text-3xl font-normal text-primary sm:text-4xl">{title}</h2>
        {action ? (
          <p className="dwellio-label hidden text-on-surface-variant sm:block">{action}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}

function PreferenceChip({ label, active }: { label: string; active?: boolean }) {
  return (
    <button
      type="button"
      className={cn(
        "rounded-full border px-5 py-2.5 text-sm transition-colors duration-300",
        active
          ? "border-primary bg-primary text-primary-foreground shadow-sm"
          : "border-outline-variant/50 bg-surface text-primary hover:bg-surface-container-low"
      )}
    >
      {label}
    </button>
  );
}

function SegmentedPreference({
  label,
  options,
  value,
}: {
  label: string;
  options: string[];
  value: string;
}) {
  return (
    <div>
      <p className="dwellio-label mb-3 text-on-surface-variant">{label}</p>
      <div className="flex rounded-lg border border-outline-variant/30 bg-surface-container-low p-1">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            className={cn(
              "flex-1 rounded-md px-3 py-2 text-sm transition-colors",
              option === value
                ? "bg-surface text-primary shadow-sm"
                : "text-on-surface-variant hover:bg-surface-container"
            )}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

function CheckRow({ label, active }: { label: string; active?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={cn(
          "flex size-5 items-center justify-center rounded border",
          active ? "border-primary bg-primary text-primary-foreground" : "border-outline-variant"
        )}
      >
        {active ? <Check className="size-3.5" aria-hidden="true" /> : null}
      </span>
      <span className="text-sm text-primary">{label}</span>
    </div>
  );
}
