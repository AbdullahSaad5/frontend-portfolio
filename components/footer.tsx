"use client";

export function Footer() {
  return (
    <footer className="px-10 py-8 border-t border-dark-card flex justify-between items-center text-[13px] text-muted-darkest flex-wrap gap-4">
      <div className="font-mono">
        © 2026 Eisha Kamran<span className="text-primary">.</span> All rights
        reserved.
      </div>
      <div className="flex gap-6 font-mono">
        {["LinkedIn", "GitHub", "Email"].map((label) => (
          <span
            key={label}
            className="cursor-pointer transition-colors duration-300 hover:text-primary"
          >
            {label}
          </span>
        ))}
      </div>
    </footer>
  );
}
