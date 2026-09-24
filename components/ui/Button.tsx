import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icon, type IconName } from "@/components/ui/icons";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "accent";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand-700 text-white hover:bg-brand-800 active:bg-brand-900 shadow-sm",
  accent:
    "bg-accent-500 text-brand-950 hover:bg-accent-400 active:bg-accent-600 shadow-sm",
  secondary:
    "bg-brand-50 text-brand-800 hover:bg-brand-100 border border-brand-200",
  outline:
    "border border-slate-300 bg-transparent text-slate-800 hover:border-brand-400 hover:text-brand-700",
  ghost: "text-slate-700 hover:bg-slate-100",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-9 px-3.5 text-sm gap-1.5",
  md: "h-11 px-5 text-sm gap-2",
  lg: "h-12 px-6 text-base gap-2",
};

type ButtonBaseProps = {
  variant?: Variant;
  size?: Size;
  icon?: IconName;
  iconRight?: IconName;
  className?: string;
  fullWidth?: boolean;
  children: React.ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps & { href: string; target?: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    icon,
    iconRight,
    className,
    fullWidth,
    children,
  } = props;

  const classes = cn(
    "inline-flex items-center justify-center rounded-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60",
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && "w-full",
    className
  );

  const content = (
    <>
      {icon ? <Icon name={icon} className="size-4.5" /> : null}
      <span>{children}</span>
      {iconRight ? <Icon name={iconRight} className="size-4.5" /> : null}
    </>
  );

  if (typeof props.href === "string") {
    const { href, target } = props as ButtonAsLink;
    return (
      <Link href={href} target={target} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" {...(props as ButtonAsButton)} className={classes}>
      {content}
    </button>
  );
}