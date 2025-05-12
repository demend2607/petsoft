import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link className="hover:opacity-80" href="/">
      <Image src="/petcare.svg" alt="Vercel Logo" width={27} height={27} />
    </Link>
  );
}
