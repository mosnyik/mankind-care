import {
  Sunrise,
  HeartHandshake,
  UserCheck,
  Building2,
  Users,
  Briefcase,
  Target,
  Brain,
  Route,
  Network,
  Car,
  ShieldCheck,
  Activity,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/lib/site";

export const serviceIconMap: Record<Service["icon"], LucideIcon> = {
  sunrise: Sunrise,
  "heart-handshake": HeartHandshake,
  "user-check": UserCheck,
  building: Building2,
  users: Users,
  briefcase: Briefcase,
  target: Target,
  brain: Brain,
  route: Route,
  network: Network,
};

export const questionIconMap: Record<string, LucideIcon> = {
  car: Car,
  shield: ShieldCheck,
  activity: Activity,
};
