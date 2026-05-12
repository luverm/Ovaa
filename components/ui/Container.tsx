import { cn } from "@/lib/cn";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  size?: "narrow" | "default" | "wide";
};

export function Container({ className, size = "default", ...props }: Props) {
  const max =
    size === "narrow" ? "max-w-3xl" : size === "wide" ? "max-w-[1400px]" : "max-w-[1200px]";
  return <div className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", max, className)} {...props} />;
}
