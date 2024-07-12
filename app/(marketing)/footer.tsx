import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/en.svg"
            alt="English"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          England
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/id.svg"
            alt="Indonesia"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Indonesia
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/es.svg"
            alt="Spain"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Spain
        </Button>
      </div>
    </footer>
  );
};
