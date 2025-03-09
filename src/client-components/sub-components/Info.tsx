"use client";

import Link from "next/link";

type InfoProps = {
  title: string;
  items: { label: string; url: string }[];
};

const Information: React.FC<InfoProps> = ({ title, items }) => {
  return (
    <div className="border border-gray-700 p-4 rounded-lg bg-gray-950/50 transition-transform hover:scale-105">
      <h2 className="text-2xl font-bold text-blue-50 mb-2">{title}</h2>
      <ul className="list-disc list-inside text-gray-300">
        {items.map(({ label, url }) => (
          <li key={url}>
            <Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:underline"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Information;
