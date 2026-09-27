import { asset } from "@/lib/asset";

type LoaderProps = {
  src: string;
  width: number;
  quality?: number;
};

/** Next.js custom image loader — appends build version for cache busting. */
export default function imageLoader({ src }: LoaderProps): string {
  return asset(src);
}
