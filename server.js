// eslint-disable-next-line @typescript-eslint/no-require-imports
const express = require("express");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const cors = require("cors"); // Импортируем cors

const app = express();

// Настраиваем CORS
app.use(cors()); // Разрешаем запросы с любого источника

const rareSynonyms = {
    "все": "all",
    "обычный": "common",
    "редкий": "rare",
    "эпический": "epic",
    "легендарный": "legendary",
    "мифический": "mythic",
  };
  
  const rareArray = ["common", "rare", "epic", "legendary", "mythic"];
  
  // Генерируем товары так, чтобы каждому назначалась своя случайная редкость
  const items = Array.from({ length: 1000 }, (_, i) => {
    const randomRare = rareArray[Math.floor(Math.random() * rareArray.length)];
    return {
      id: `${i + 1}`,
      name: `Item ${i + 1}`,
      avatar: `https://picsum.photos/seed/${i + 1}/200/300`,
      price: Number((Math.random() * 100).toFixed(0)) + i,
      rare: randomRare,
    };
  });
  
  app.get("/items", (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 18;
    const sortOrder = req.query.sort === "asc" ? 1 : -1;
    
    // Получаем параметр редкости и нормализуем его
    let rareFilter = req.query.rare ? req.query.rare.toLowerCase() : "all";
    if (rareSynonyms[rareFilter]) {
      rareFilter = rareSynonyms[rareFilter];
    }
    
    // Если выбрано "all", не фильтруем, иначе фильтруем товары по редкости
    let filteredItems = items;
    if (rareFilter !== "all") {
      filteredItems = items.filter((item) => item.rare === rareFilter);
    }
  
    // Сортировка
    const sortedItems = filteredItems.sort((a, b) => sortOrder * (a.price - b.price));
    
    // Пагинация
    const start = (page - 1) * limit;
    const end = start + limit;
    const paginatedItems = sortedItems.slice(start, end);
  
    res.json({
      items: paginatedItems,
      total: filteredItems.length,
    });
  });
  
  app.listen(3001, () => console.log("Server running on port 3001"));