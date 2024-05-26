import { icons } from "lucide-react";

type Props = {
  name: keyof typeof icons;
  color: string;
  size: number;
};

export const Icon = ({ name, color, size }: Props) => {
  const LucideIcon = icons[name];

  return <LucideIcon color={color} size={size} />;
};

export default Icon;
