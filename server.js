// eslint-disable-next-line @typescript-eslint/no-require-imports
const express = require("express");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const cors = require("cors"); // Импортируем cors

const app = express();

// Настраиваем CORS
app.use(cors()); // Разрешаем запросы с любого источника

const rareArray = ["common", "rare", "epic", "legendary", "mythic"];

const items = Array.from({ length: 1000 }, (_, i) => {
    const randomRare = rareArray[Math.floor(Math.random() * rareArray.length)];
    return {
        id: `${i + 1}`,
        name: `Item ${i + 1}`,
        avatar: `https://picsum.photos/seed/${i + 1}/200/300`,
        price: Number((Math.random() * 100).toFixed(2)) + i,
        rare: randomRare,
    };
});

app.get("/items", (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 18;
    const sort = req.query.sort === "asc" ? 1 : -1; // 1 для возрастания, -1 для убывания

    // Допустим, items — массив объектов
    const sortedItems = items.sort((a, b) => sort * (a.price - b.price));
    const start = (page - 1) * limit;
    const end = start + limit;
    const paginatedItems = sortedItems.slice(start, end);

    res.json({
        items: paginatedItems,
        total: items.length,
    });
});

app.listen(3001, () => console.log("Server running on port 3001"));
