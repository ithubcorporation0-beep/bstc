import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, MessageSquare } from "lucide-react";
import { getActiveTeam } from "@/data";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";

export function TeamGrid() {
  const team = getActiveTeam();

  return (
    <Section
      id="team"
      eyebrow="Our Leadership &amp; Consultants"
      heading="Meet Our Certified Advisory Team"
      description="Our seasoned Income Tax Practitioners and corporate specialists bring decades of combined experience across Pakistani taxation and corporate law."
      centered
      className="py-20 lg:py-28"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {team.map((member, index) => (
          <Reveal key={member.slug} delay={index * 150} className="h-full">
            <Card className="h-full flex flex-col justify-between p-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group hover:border-royal/40 dark:hover:border-royal-light/40">
              <div className="space-y-5">
                {/* Consultant Portrait */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-inner">
                  <Image
                    src={member.img || `/images/team/${member.slug}.svg`}
                    alt={`${member.name} — ${member.desig}`}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {(member.desig.includes("ITP") || member.name.includes("ITP")) && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-royal text-white text-[10px] font-bold shadow-md flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-lime-400" />
                      <span>ITP Licensed</span>
                    </div>
                  )}
                </div>

                {/* Member Info */}
                <div className="space-y-1.5">
                  <div className="text-xs font-bold text-lime-700 dark:text-lime-400 uppercase tracking-wider">
                    {member.dept}
                  </div>
                  <h3 className="font-display font-bold text-xl text-ink group-hover:text-royal dark:group-hover:text-royal-light transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-royal dark:text-royal-light">
                    {member.desig}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
                    {member.shortDesc}
                  </p>
                </div>
              </div>

              {/* Card Footer: View Profile Link */}
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <Link
                  href={`/team/${member.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-royal dark:text-royal-light group-hover:text-royal-dark dark:group-hover:text-white transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  <span>View Profile</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>

                {member.wa && (
                  <a
                    href={`https://wa.me/${member.wa.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Chat with ${member.name} on WhatsApp`}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                )}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export default TeamGrid;
