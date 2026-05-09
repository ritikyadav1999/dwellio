import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Lock, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function SignInPage() {
  return (
    <section className="bg-surface">
      <div className="grid min-h-[calc(100vh-10rem)] lg:grid-cols-2">
        <aside className="relative hidden min-h-[34rem] lg:block">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBnIAJQm6i3aSfn93WdLEUhV_tj4n65UolDArgocexV9s6zHrDJcSXEOTOdqOERyf7iKqUei41RKobPsc4kWZ2yf1f3wA4epqFPXnHQGBCTwrciaq5Eb4XybZh7xTPuGJF_MeYnYgA-JYmD2975bBtbqieuBTXQ90neFxXyvW2Fh3H-jG9k-xsr1o5ATxrSa0Lp4CzK9MoxP53RPFGilZ6X7oK8LqhXAeag9KRvzfuTHW0te3YBzGTJimGOmLdDMFIURD-DshNNnM"
            alt="Sunlit editorial-style premium living room with minimalist architecture."
            fill
            priority
            sizes="50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/10" />
        </aside>

        <div className="flex items-center px-5 py-16 sm:px-8 lg:px-16">
          <div className="mx-auto w-full max-w-xl">
            <p className="dwellio-label mb-4 text-on-surface-variant">Phone OTP sign in</p>
            <h1 className="font-heading text-5xl font-normal leading-tight text-primary sm:text-6xl">
              Welcome to Dwellio.
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-on-surface-variant">
              A calmer, verified way to discover your next home. Continue with your mobile
              number and we&apos;ll send a one-time code.
            </p>

            <Card className="mt-10 rounded-xl border border-outline-variant/35 bg-surface-container-lowest py-0 shadow-none">
              <CardContent className="p-6 sm:p-8">
                <form className="space-y-7" aria-label="Sign in with mobile number">
                  <div>
                    <label htmlFor="phone" className="dwellio-label text-on-surface-variant">
                      Mobile number
                    </label>
                    <div className="mt-3 flex items-end gap-3 border-b border-outline-variant/50 pb-1">
                      <Button
                        type="button"
                        variant="ghost"
                        className="h-10 rounded-md px-3 text-primary hover:bg-surface-container-low"
                      >
                        +91
                        <ChevronDown className="size-4" aria-hidden="true" />
                        <span className="sr-only">Select country code</span>
                      </Button>
                      <Input
                        id="phone"
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        placeholder="98765 43210"
                        className="h-10 border-b-0 pb-2 text-base text-primary placeholder:text-outline"
                        required
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    formAction="/otp"
                    formMethod="get"
                    size="lg"
                    className="h-11 w-full rounded-md"
                  >
                    Continue with OTP
                  </Button>

                  <div className="flex items-center gap-4">
                    <Separator className="bg-outline-variant/50" />
                    <span className="dwellio-label text-outline">or</span>
                    <Separator className="bg-outline-variant/50" />
                  </div>

                  <Button type="button" variant="outline" size="lg" className="h-11 w-full rounded-md">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.08 5.08 0 0 1-2.21 3.31v2.77h3.57a10.77 10.77 0 0 0 3.28-8.09Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09A6.6 6.6 0 0 1 5.49 12c0-.73.13-1.43.35-2.09V7.07H2.18A11 11 0 0 0 1 12c0 1.78.43 3.45 1.18 4.93l3.66-2.84Z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53Z"
                        fill="#EA4335"
                      />
                    </svg>
                    Continue with Google
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-on-surface-variant">
              <span className="inline-flex items-center gap-2 text-sm">
                <ShieldCheck className="size-4" aria-hidden="true" />
                Verified community
              </span>
              <span className="inline-flex items-center gap-2 text-sm">
                <Lock className="size-4" aria-hidden="true" />
                Privacy first
              </span>
            </div>

            <p className="mt-6 text-sm text-on-surface-variant">
              Looking to host instead?{" "}
              <Link href="/#host" className="font-semibold text-primary underline underline-offset-4">
                Become a host
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
