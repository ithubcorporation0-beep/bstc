import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Menu,
  X,
  ExternalLink,
  Download,
  Upload,
  Sparkles,
  ShieldCheck,
  FileText,
  Calculator,
  Building2,
  Users,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Check,
  Award,
  Scale,
  FileSpreadsheet,
  TrendingUp,
  Briefcase,
  HelpCircle,
  Sun,
  Moon,
  MessageSquare,
  Send,
  Star,
  BadgeCheck,
  Globe,
  Calendar,
  DollarSign,
  AlertCircle,
  Percent,
  Landmark,
  Receipt,
  BookOpen,
  Layers,
  Lock,
  RefreshCw,
  Search,
  Compass,
  LucideProps,
  LucideIcon,
} from "lucide-react";

// Explicit individual icon map to prevent bundling entire lucide icon library
const ICON_MAP: Record<string, LucideIcon> = {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Menu,
  X,
  ExternalLink,
  Download,
  Upload,
  Sparkles,
  ShieldCheck,
  FileText,
  Calculator,
  Building2,
  Users,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Check,
  Award,
  Scale,
  FileSpreadsheet,
  TrendingUp,
  Briefcase,
  HelpCircle,
  Sun,
  Moon,
  MessageSquare,
  Send,
  Star,
  BadgeCheck,
  Globe,
  Calendar,
  DollarSign,
  AlertCircle,
  Percent,
  Landmark,
  Receipt,
  BookOpen,
  Layers,
  Lock,
  RefreshCw,
  Search,
  Compass,
};

export type IconName = keyof typeof ICON_MAP | string;

export interface IconProps extends LucideProps {
  name: IconName;
  className?: string;
}

export function Icon({ name, className = "", ...props }: IconProps) {
  const IconComponent = ICON_MAP[name];

  if (!IconComponent) {
    if (process.env.NODE_ENV === "development") {
      console.warn(`[Icon] Unknown icon name: "${name}". Rendering fallback icon.`);
    }
    return <HelpCircle className={className} {...props} />;
  }

  return <IconComponent className={className} {...props} />;
}

export default Icon;
