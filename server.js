// eslint-disable-next-line @typescript-eslint/no-require-imports
const express = require("express");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const cors = require("cors"); // Импортируем cors

const app = express();

// Настраиваем CORS
app.use(cors()); // Разрешаем запросы с любого источника

const items = Array.from({ length: 1000 }, (_, i) => ({
    id: `${i + 1}`,
    name: `Item ${i + 1}`,
    avatar: `https://picsum.photos/seed/${i + 1}/200/300`,
    price: 100 + i,
    discountPrice: 80 + i,
}));

app.get("/items", (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 36;
    const start = (page - 1) * limit;
    const end = start + limit;
    const paginatedItems = items.slice(start, end);

    res.json({
        items: paginatedItems, // Элементы текущей страницы
        total: items.length, // Общее количество всех элементов
    });
});

app.listen(3001, () => console.log("Server running on port 3001"));
