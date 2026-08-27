import { services } from "./services";
import { team } from "./team";
import { homeContent } from "./home";
import { siteSettings } from "./settings";
import { Service, TeamMember } from "@/types/content";

export { services, team, homeContent, siteSettings };

/**
 * Retrieves a single service by its URL slug.
 */
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug.toLowerCase() === slug.toLowerCase());
}

/**
 * Retrieves a single team member by their URL slug.
 */
export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  return team.find((t) => t.slug.toLowerCase() === slug.toLowerCase());
}

/**
 * Returns all active services sorted by their numeric display order.
 */
export function getActiveServices(): Service[] {
  return services
    .filter((s) => s.status === "active")
    .sort((a, b) => a.order - b.order);
}

/**
 * Returns all active team members sorted by their numeric display order.
 */
export function getActiveTeam(): TeamMember[] {
  return team
    .filter((t) => t.status === "active")
    .sort((a, b) => a.order - b.order);
}
