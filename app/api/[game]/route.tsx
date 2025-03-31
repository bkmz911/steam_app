/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";

const rareSynonyms: Record<string, string> = {
    все: "all",
    обычный: "common",
    редкий: "rare",
    эпический: "epic",
    легендарный: "legendary",
    мифический: "mythic",
};

const rareArray = ["common", "rare", "epic", "legendary", "mythic"];

function generateItems(game: string) {
    return Array.from({ length: 1000 }, (_, i) => {
        const randomRare =
            rareArray[Math.floor(Math.random() * rareArray.length)];
        return {
            id: `${game}-${i + 1}`,
            name: `${game.toUpperCase()} Item ${i + 1}`,
            avatar: `https://picsum.photos/seed/${game}-${i + 1}/200/300`,
            price: Number((Math.random() * 100).toFixed(0)) + i,
            rare: randomRare,
        };
    });
}

const itemsByGame: Record<string, any[]> = {};

function getItemsForGame(game: string) {
    const gameKey = game.toLowerCase();
    if (!itemsByGame[gameKey]) {
        itemsByGame[gameKey] = generateItems(gameKey);
    }
    return itemsByGame[gameKey];
}

export async function GET(
    request: Request,
    { params }: { params: { [key: string]: string } }
) {
    // Получаем динамический параметр "game" напрямую
    const { game } = params;
    const { searchParams } = new URL(request.url);

    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "18", 10);
    const sortOrderParam = searchParams.get("sort");
    const sortOrder = sortOrderParam === "asc" ? 1 : -1;

    let rareFilter = searchParams.get("rare")?.toLowerCase() || "all";
    if (rareSynonyms[rareFilter]) {
        rareFilter = rareSynonyms[rareFilter];
    }

    const items = getItemsForGame(game);

    let filteredItems = items;
    if (rareFilter !== "all") {
        filteredItems = items.filter((item) => item.rare === rareFilter);
    }

    const inventoryCost = filteredItems.reduce(
        (acc, item) => acc + item.price,
        0
    );

    const sortedItems = filteredItems.sort(
        (a, b) => sortOrder * (a.price - b.price)
    );

    const start = (page - 1) * limit;
    const paginatedItems = sortedItems.slice(start, start + limit);

    return NextResponse.json({
        items: paginatedItems,
        total: filteredItems.length,
        inventoryCost,
    });
}
