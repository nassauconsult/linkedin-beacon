import { useState } from "react";
import { Mail, Phone } from "lucide-react";

// Obfuscated parts — assembled only on user interaction to avoid bot scraping
const EMAIL_PARTS = ["woutzwaagman", "nassauconsult", "be"];
const PHONE_PARTS = ["+32", "488", "03", "27", "00"];

const baseClass =
  "inline-flex items-center gap-2 rounded-full border border-[#1a3668] px-6 py-3 text-sm font-medium tracking-wide text-[#1a3668] transition-colors hover:bg-[#1a3668] hover:text-white";

export function EmailButton() {
  const [revealed, setRevealed] = useState<string | null>(null);

  const reveal = () => {
    const email = `${EMAIL_PARTS[0]}\u0040${EMAIL_PARTS[1]}.${EMAIL_PARTS[2]}`;
    setRevealed(email);
    if (typeof window !== "undefined") {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button type="button" onClick={reveal} className={baseClass} aria-label="Email">
      <Mail className="h-4 w-4" />
      {revealed ?? "Email"}
    </button>
  );
}

export function PhoneButton() {
  const [revealed, setRevealed] = useState<string | null>(null);

  const reveal = () => {
    const phone = PHONE_PARTS.join("");
    const formatted = `${PHONE_PARTS[0]} ${PHONE_PARTS[1]} ${PHONE_PARTS[2]} ${PHONE_PARTS[3]} ${PHONE_PARTS[4]}`;
    setRevealed(formatted);
    if (typeof window !== "undefined") {
      window.location.href = `tel:${phone}`;
    }
  };

  return (
    <button type="button" onClick={reveal} className={baseClass} aria-label="Phone">
      <Phone className="h-4 w-4" />
      {revealed ?? "Call"}
    </button>
  );
}
