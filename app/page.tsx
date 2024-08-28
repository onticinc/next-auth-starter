import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
   <>
   <p className="font-semibold text-xl text-green">Hello Auth!</p>
   <Button size="lg" variant='ghost'>Click me</Button>
   </>
  );
}
