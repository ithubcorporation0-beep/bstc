import React from "react";
import * as LucideIcons from "lucide-react";
import type { LucideProps } from "lucide-react";

export interface IconProps extends Omit<LucideProps, "ref"> {
  name: string;
  className?: string;
}

function toPascalCase(str: string): string {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

export function Icon({ name, className, ...props }: IconProps) {
  const pascalName = toPascalCase(name);
  const iconsMap = LucideIcons as unknown as Record<string, React.ComponentType<LucideProps>>;
  const IconComponent = iconsMap[pascalName] || iconsMap[name] || LucideIcons.CheckCircle2;

  return <IconComponent className={className} {...props} />;
}
