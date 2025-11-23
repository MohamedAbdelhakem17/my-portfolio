import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HireMeButton() {
  return (
    <Button className="lg:w-auto w-full ">
      <Link href="/contact">Hire me</Link>
    </Button>
  );
}
