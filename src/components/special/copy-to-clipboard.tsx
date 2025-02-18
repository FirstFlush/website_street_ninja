"use client";

import { useState } from "react";
import { Clipboard, Check } from "lucide-react";

interface CopyToClipboardProps {
  text: string;
}

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch (err) {
      console.error("Failed to copy:", err);
      setCopied(true)
      setTimeout(() => setCopied(false), 1000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="mt-6 gap-3 text-left max-w-fit flex items-center text-sm text-primary cursor-pointer hover:text-background-dark transition"
    >
      {copied ? <Check height={20} width={20} className="text-green-600" /> : <Clipboard height={20} width={20} />}
      {copied ? <span className="text-green-600">Copied!</span> : <span>{text}</span>}
    </button>
  );
};

export default CopyToClipboard;
