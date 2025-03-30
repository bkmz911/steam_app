/* eslint-disable @typescript-eslint/no-require-imports */
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// Маппинг русских названий редкости в английские
const rareSynonyms = {
    все: "all",
    обычный: "common",
    редкий: "rare",
    эпический: "epic",
    легендарный: "legendary",
    мифический: "mythic",
};

const rareArray = ["common", "rare", "epic", "legendary", "mythic"];

// Функция для генерации товаров для конкретной игры
function generateItems(game) {
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

// Кэш для хранения сгенерированных товаров для каждой игры
const itemsByGame = {};

// Функция для получения товаров для заданной игры из кэша или их генерации, если они ещё не созданы
function getItemsForGame(game) {
    const gameKey = game.toLowerCase();
    if (!itemsByGame[gameKey]) {
        itemsByGame[gameKey] = generateItems(gameKey);
    }
    return itemsByGame[gameKey];
}

// Динамический роутинг по игре. Эндпоинт: /:game
app.get("/:game", (req, res) => {
    const game = req.params.game.toLowerCase(); // например, cs2, dota2, rust, tf2
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 18;
    const sortOrder = req.query.sort === "asc" ? 1 : -1;

    // Получаем параметр редкости, нормализуем его
    let rareFilter = req.query.rare ? req.query.rare.toLowerCase() : "all";
    if (rareSynonyms[rareFilter]) {
        rareFilter = rareSynonyms[rareFilter];
    }

    // Получаем товары для данной игры (из кэша или генерируем, если ещё не созданы)
    const items = getItemsForGame(game);

    // Если выбран фильтр, отличающийся от "all", фильтруем товары по редкости
    let filteredItems = items;
    if (rareFilter !== "all") {
        filteredItems = items.filter((item) => item.rare === rareFilter);
    }

    // Вычисляем общую стоимость инвентаря для всех отфильтрованных товаров
    const inventoryCost = filteredItems.reduce(
        (acc, item) => acc + item.price,
        0
    );

    // Сортируем отфильтрованные товары по цене
    const sortedItems = filteredItems.sort(
        (a, b) => sortOrder * (a.price - b.price)
    );

    // Пагинация
    const start = (page - 1) * limit;
    const paginatedItems = sortedItems.slice(start, start + limit);

    res.json({
        items: paginatedItems,
        total: filteredItems.length,
        inventoryCost,
    });
});

app.listen(3001, () => console.log("Server running on port 3001"));
