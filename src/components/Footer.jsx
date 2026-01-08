import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative py-6 text-center text-sm text-muted-foreground">
      <a
        href="#home"
        className="absolute right-6 top-1/2 -translate-y-1/2 p-4 themed-button rounded-full flex items-center justify-center"
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6" />
      </a>

      <p>
        &copy; {new Date().getFullYear()} Rafe Umair. All rights reserved.
      </p>
    </footer>
  );
};
