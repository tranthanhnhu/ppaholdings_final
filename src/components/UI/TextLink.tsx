import Image from "next/image";
import { Link } from "@/i18n/navigation";

type TextLinkProps = {
  href: string;
  label: string;
  tone?: "light" | "dark";
  className?: string;
};

export function TextLink({
  href,
  label,
  tone = "dark",
  className = "",
}: TextLinkProps) {
  const color =
    tone === "light" ? "text-paa-inverse" : "text-paa-text";
  const classNames = `inline-flex items-center gap-2 font-medium text-[13px] leading-[18px] tracking-[1.2px] uppercase ${color} ${className}`;
  const content = (
    <>
      <span>{label}</span>
      <span className="relative inline-block h-[6px] w-[14px] shrink-0 overflow-hidden">
        <Image
          src="/icons/arrow.svg"
          alt=""
          width={14}
          height={6}
          className={`h-full w-full ${tone === "light" ? "brightness-0 invert" : ""}`}
        />
      </span>
    </>
  );

  if (href.startsWith("#")) {
    return (
      <a href={href} className={classNames}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classNames}>
      {content}
    </Link>
  );
}
