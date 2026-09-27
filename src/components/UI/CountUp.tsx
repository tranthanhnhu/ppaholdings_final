"use client";

import { useEffect, useRef, useState } from "react";

export type ParsedStat = {
  target: number;
  prefix: string;
  suffix: string;
  decimals: number;
  pad: number;
  useGrouping: boolean;
  groupSep: string;
};

/** Parse display strings like "05", "08+", "500+", "12.000+", "12.400 ha". */
export function parseStatValue(raw: string): ParsedStat {
  const trimmed = raw.trim();
  const match = trimmed.match(
    /^([^\d]*)([\d][\d.,]*)(.*)$/,
  );
  if (!match) {
    return {
      target: 0,
      prefix: "",
      suffix: trimmed,
      decimals: 0,
      pad: 0,
      useGrouping: false,
      groupSep: ".",
    };
  }

  const prefix = match[1];
  const numPart = match[2];
  const suffix = match[3];
  const hasComma = numPart.includes(",");
  const hasDot = numPart.includes(".");
  let groupSep = ".";
  let decimalSep = ",";
  let useGrouping = false;
  let decimals = 0;
  let normalized = numPart;

  if (hasDot && hasComma) {
    if (numPart.lastIndexOf(",") > numPart.lastIndexOf(".")) {
      groupSep = ".";
      decimalSep = ",";
    } else {
      groupSep = ",";
      decimalSep = ".";
    }
    useGrouping = true;
    const parts = normalized.split(decimalSep);
    decimals = parts[1]?.length ?? 0;
    normalized = parts[0].replaceAll(groupSep, "") + (parts[1] ? `.${parts[1]}` : "");
  } else if (hasDot) {
    const parts = numPart.split(".");
    if (parts.length > 2 || (parts[1] && parts[1].length === 3 && parts[0].length <= 3)) {
      useGrouping = true;
      groupSep = ".";
      normalized = numPart.replaceAll(".", "");
    } else {
      decimals = parts[1]?.length ?? 0;
      normalized = numPart;
    }
  } else if (hasComma) {
    const parts = numPart.split(",");
    if (parts.length > 2 || (parts[1] && parts[1].length === 3 && parts[0].length <= 3)) {
      useGrouping = true;
      groupSep = ",";
      normalized = numPart.replaceAll(",", "");
    } else {
      decimals = parts[1]?.length ?? 0;
      normalized = `${parts[0]}.${parts[1] ?? ""}`;
    }
  }

  const target = Number.parseFloat(normalized) || 0;
  const integerDigits = String(Math.floor(target)).length;
  const rawDigits = numPart.replace(/[^\d]/g, "");
  const pad =
    !useGrouping && decimals === 0 && rawDigits.length > integerDigits
      ? rawDigits.length
      : 0;

  return { target, prefix, suffix, decimals, pad, useGrouping, groupSep };
}

function formatValue(n: number, parsed: ParsedStat): string {
  const fixed = parsed.decimals > 0 ? n.toFixed(parsed.decimals) : String(Math.round(n));
  const parts = fixed.split(".");
  let intPart = parts[0];
  const decPart = parts[1];
  if (parsed.pad > 0) {
    intPart = intPart.padStart(parsed.pad, "0");
  }
  if (parsed.useGrouping) {
    intPart = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, parsed.groupSep);
  }
  const num = decPart != null ? `${intPart}${parsed.groupSep === "." ? "," : "."}${decPart}` : intPart;
  return `${parsed.prefix}${num}${parsed.suffix}`;
}

type CountUpProps = {
  value: string;
  duration?: number;
  className?: string;
  /** When false, show final value without animating. */
  animate?: boolean;
};

export function CountUp({
  value,
  duration = 1400,
  className = "",
  animate = true,
}: CountUpProps) {
  const parsed = parseStatValue(value);
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(
    animate ? formatValue(0, parsed) : formatValue(parsed.target, parsed),
  );
  const started = useRef(false);

  useEffect(() => {
    const spec = parseStatValue(value);
    if (!animate) {
      setDisplay(formatValue(spec.target, spec));
      return;
    }

    const el = ref.current;
    if (!el) return;
    started.current = false;
    setDisplay(formatValue(0, spec));

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || started.current) return;
        started.current = true;
        const start = performance.now();
        const from = 0;
        const to = spec.target;

        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          setDisplay(formatValue(from + (to - from) * eased, spec));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animate, duration, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
