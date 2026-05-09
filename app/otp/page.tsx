import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock3 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type OtpPageProps = {
  searchParams?: Promise<{ phone?: string }>;
};

function maskPhone(phone?: string) {
  if (!phone) return "your mobile number";
  const trimmed = phone.replace(/\s+/g, "");
  if (trimmed.length < 4) return "your mobile number";
  return `+91 ${"*".repeat(Math.max(0, trimmed.length - 4))}${trimmed.slice(-4)}`;
}

export default async function OtpPage({ searchParams }: OtpPageProps) {
  const params = (await searchParams) ?? {};
  const phone = params.phone ?? "";
  const maskedPhone = maskPhone(phone);

  return (
    <section className="relative flex min-h-[calc(100vh-10rem)] items-center justify-center overflow-hidden bg-surface px-5 py-16 sm:px-8 lg:px-16">
      <Image
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuClx4S-szqSjnMIppcT_WarPuMU_4GqHM7FMITCNeFEgT_zM3uqUntoWJk7mCnmEo3SfTbcipEhVqRTmxZ-Gg_TBjWDnnhIu2dMGqOmXjLFp0oeJ0fsgVEr6U-n-TPv5dkDZ84ZjXd2OQIyxWtmmODDbIBKh7FMFhsEepj08AT3FsAHoUfymVjpict3y_cXqeThmDiMY68LZ32ogXRSeSNuhi50j1voNQSkqUfMeAfZ-crCWG69hSZpMEizT8HEu9ZBwNlKKV6MIr8"
        alt="Soft architectural interior background with warm daylight."
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-surface/85" />

      <Card className="relative z-10 w-full max-w-xl rounded-xl border border-outline-variant/35 bg-surface-container-lowest py-0 shadow-none">
        <CardContent className="p-6 sm:p-10">
          <div className="text-center">
            <p className="dwellio-label text-on-surface-variant">OTP verification</p>
            <h1 className="mt-4 font-heading text-4xl font-normal leading-tight text-primary sm:text-5xl">
              Verify your number
            </h1>
            <p className="mt-3 text-base text-on-surface-variant">
              Enter the 4-digit code sent to {maskedPhone}.
            </p>
          </div>

          <form className="mt-10 space-y-8" action="/home" method="get" aria-label="Verify one-time password">
            <input type="hidden" name="phone" value={phone} />
            <div className="grid grid-cols-4 gap-3 sm:gap-4">
              {["otp1", "otp2", "otp3", "otp4"].map((fieldName, index) => (
                <Input
                  key={fieldName}
                  name={fieldName}
                  inputMode="numeric"
                  pattern="[0-9]"
                  autoComplete={index === 0 ? "one-time-code" : "off"}
                  maxLength={1}
                  required
                  aria-label={`OTP digit ${index + 1}`}
                  className="h-14 rounded-md border border-outline-variant/50 bg-surface-container-low px-0 text-center text-2xl text-primary"
                />
              ))}
            </div>

            <div className="flex flex-col items-center gap-3 text-on-surface-variant">
              <span className="inline-flex items-center gap-2 text-sm">
                <Clock3 className="size-4" aria-hidden="true" />
                00:59
              </span>
              <Button type="button" variant="ghost" className="h-auto px-1 text-xs">
                Resend code
              </Button>
            </div>

            <Button type="submit" size="lg" className="h-11 w-full rounded-md">
              Verify and continue
            </Button>
          </form>

          <div className="mt-7 text-center">
            <Button asChild variant="ghost" className="h-auto px-2 text-on-surface-variant">
              <Link href="/sign-in">
                <ArrowLeft className="size-4" aria-hidden="true" />
                Edit phone number
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
