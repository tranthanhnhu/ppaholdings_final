import Image from "next/image";

type LogoProps = {
  variant?: "white" | "ink";
  size?: number;
  className?: string;
};

export function Logo({ variant = "white", size = 40, className = "" }: LogoProps) {
  const src =
    variant === "white"
      ? "/images/logos/mark-white.png"
      : "/images/logos/mark.png";

  return (
    <Image
      src={src}
      alt="PAA Empire Holdings"
      width={size}
      height={size}
      className={className}
      priority
    />
  );
}
