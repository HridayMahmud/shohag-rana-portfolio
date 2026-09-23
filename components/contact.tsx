import { profile } from "@/lib/content";
import { reveal } from "@/lib/reveal";
import { CopyButton } from "./copy-button";
import { ArrowUpRight, Download, GitHub, Mail, MapPin, Phone } from "./icons";
import { Section } from "./section";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    copyable: true,
    external: false,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phoneHref}`,
    icon: Phone,
    copyable: true,
    external: false,
  },
  {
    label: "GitHub",
    value: profile.githubHandle,
    href: profile.github,
    icon: GitHub,
    copyable: false,
    external: true,
  },
  {
    label: "Location",
    value: profile.location,
    href: null,
    icon: MapPin,
    copyable: false,
    external: false,
  },
];

export function Contact() {
  return (
    <Section
      id="contact"
      index="06"
      eyebrow="Contact"
      title={
        <>
          Let us build
          <br />
          <span className="italic text-accent">something good.</span>
        </>
      }
    >
      <div {...reveal(0, "card relative overflow-hidden p-7 md:p-12")}>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-accent-soft blur-[100px]"
        />

        <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="display text-[2rem] leading-tight md:text-[2.5rem]">
              Open to new opportunities and collaborations.
            </h3>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted md:text-base">
              Whether it is a role, a project or a question about something I have built — my inbox
              is open. The fastest way to reach me is by email.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}`} className="btn btn-primary">
                <Mail className="size-4" />
                Send an email
              </a>
              <a href={profile.cv} download className="btn btn-ghost">
                <Download className="size-4" />
                Download CV
              </a>
            </div>
          </div>

          <ul className="divide-y divide-line border-y border-line">
            {channels.map((channel) => {
              const ChannelIcon = channel.icon;
              return (
                <li key={channel.label} className="flex items-center gap-4 py-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full border border-line text-accent">
                    <ChannelIcon className="size-4" />
                  </span>

                  <div className="min-w-0 flex-1">
                    <p className="eyebrow">{channel.label}</p>
                    {channel.href ? (
                      <a
                        href={channel.href}
                        {...(channel.external
                          ? { target: "_blank", rel: "noreferrer noopener" }
                          : {})}
                        className="link-sweep mt-1 block truncate text-sm font-medium transition-colors duration-300 hover:text-accent"
                      >
                        {channel.value}
                      </a>
                    ) : (
                      <p className="mt-1 truncate text-sm font-medium">{channel.value}</p>
                    )}
                  </div>

                  {channel.copyable ? (
                    <CopyButton value={channel.value} label={channel.label.toLowerCase()} />
                  ) : channel.external ? (
                    <ArrowUpRight className="size-4 shrink-0 text-subtle" />
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Section>
  );
}
