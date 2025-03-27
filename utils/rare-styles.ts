export const rareStyles: Record<string, string> = {
    all: "text-[#ffffff]",
    common: "text-[#c5c5c5]",
    rare: "text-[#4daefc]",
    epic: "text-[#a04efd]",
    legendary: "text-[#fcf94d]",
    mythic: "text-[#fc4d4d]",
};

export const rareStylesCiryllic: Record<string, string> = {
    все: "all",
    обычный: "common",
    редкий: "rare",
    эпический: "epic",
    легендарный: "legendary",
    мифический: "mythic",
};

export function getRareStyle(key: string): string {
    const normalizedKey = key.toLowerCase();
    const englishKey = rareStylesCiryllic[normalizedKey] || normalizedKey;
    return rareStyles[englishKey] || "text-[#ffffff]";
  }