import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Skills } from "@/components/skills";
import { getPortfolio } from "@/lib/data";
import { initialsOf } from "@/lib/site-config";
import {
  buildFacts,
  buildMarquee,
  buildNavLinks,
  buildSite,
  buildSkillGroups,
  buildSocials,
} from "@/lib/view";

export const dynamic = "force-dynamic";

export default async function Home() {
  const data = await getPortfolio();

  const site = buildSite(data);
  const socials = buildSocials(data);
  const navLinks = buildNavLinks(data);
  const initials = initialsOf(site.name);

  // The about copy reads as two paragraphs: the pitch, then the detail.
  const paragraphs = [data.profile.bio, data.profile.objective].filter(Boolean);

  return (
    <>
      <SiteHeader
        name={site.name}
        initials={initials}
        navLinks={navLinks}
        resumeHref={site.resume}
      />

      <main className="flex-1">
        <Hero
          site={site}
          socials={socials}
          facts={buildFacts(data)}
          marquee={buildMarquee(data.skills)}
        />

        <About site={site} paragraphs={paragraphs} education={data.education} />

        {data.skills.length > 0 && <Skills groups={buildSkillGroups(data.skills)} />}

        {data.experience.length > 0 && <Experience roles={data.experience} />}

        {data.projects.length > 0 && <Projects projects={data.projects} />}

        <Contact site={site} socials={socials} />
      </main>

      <SiteFooter
        site={site}
        initials={initials}
        navLinks={navLinks}
        socials={socials}
      />
    </>
  );
}
