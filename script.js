const items = [{
        title: "А что там в школе?",
        author: "Юлия Асланова",
        description: "Занимательная история о первых школьных днях.",
        tags: ["школа", "дети", "приключения"],
        price: 22.54,
        rating: 4,
        img: "./img/2.jpg"
    },
    {
        title: "Маленький принц",
        author: "Антуан де Сент-Экзюпери",
        description: "Философская сказка для детей и взрослых.",
        tags: ["сказка", "классика", "познавательные"],
        price: 28.10,
        rating: 5,
        img: "./img/8.jpg"
    },
    {
        title: "Снежная королева",
        author: "Ганс Христиан Андерсен",
        description: "История о любви и дружбе, которая учит верить в добро и никогда не сдаваться.",
        tags: ["сказка", "классика", "приключения"],
        price: 17.85,
        rating: 4.5,
        img: "./img/1.jpg"
    },
    {
        title: "Хозяйка Медной горы",
        author: "Павел Бажов",
        description: "Удивительные истории, в которых сочетаются предания и быль. Сказки с объемными картинками",
        tags: ["сказка", "классика", "познавательные"],
        price: 139.15,
        rating: 5,
        img: "./img/3.jpg"
    },
    {
        title: "Все мы разные. Сказка об уважении и дружбе",
        author: "Анна Середина",
        description: "Прекрасно иллюстрированная история о лисичке Лапочке, её друзьях и не похожем ни на кого зайчике по имени Боська",
        tags: ["сказка", "малыши", "приключения"],
        price: 23.25,
        rating: 5,
        img: "./img/4.jpg"
    },
    {
        title: "Энциклопедия о любви и дружбе. Сказки для малышей",
        author: "Елена Ульева",
        description: "Сказки о зверятах, стихи и задания помогут малышу понять значение слова- любовь",
        tags: ["сказка", "малыши", "познавательные"],
        price: 15.45,
        rating: 5,
        img: "./img/5.jpg"
    },
    {
        title: "Котёнок Шмяк и морские истории",
        author: "Роб Скоттон",
        description: "Увлекательная серия о добром и дружелюбном котенке по имени Шмяк и его друзьях.",
        tags: ["приключения", "школа"],
        price: 11.90,
        rating: 4.2,
        img: "./img/6.jpg"
    },
    {
        title: "Кротик. Большая книга",
        author: "Гана Доскочилова, Автор:Зденек Милер, Автор:Эдуард Петишка",
        description: "Узнали симпатягу Кротика? Прошло уже полвека с тех пор, как Зденек Милер создал свой первый мультфильм про этого трогательного персонажа.",
        tags: ["сказка", "малыши"],
        price: 37.74,
        rating: 5,
        img: "./img/7.jpg"
    },
    {
        title: "Айболит. Сказки малышам",
        author: "Корней Чуковский",
        description: "Книга-брошюра К.И.Чуковский.Айболит  из серии Сказки малышам.",
        tags: ["сказка", "малыши"],
        price: 2.74,
        rating: 5,
        img: "./img/9.jpg"
    },
    {
        title: "Волшебник Изумрудного города",
        author: "Александр Волков",
        description: "Волшебник Изумрудного города – первая сказочная повесть из цикла книг А. Волкова про Изумрудный город.",
        tags: ["сказка", "школа", "приключения"],
        price: 30.28,
        rating: 5,
        img: "./img/10.jpg"
    },
    {
        title: "Зарубежные сказки",
        author: "Ганс Христиан Андерсен",
        description: "Книга для детей Ганс Христиан Андерсен. Зарубежные сказки – идеальный выбор для первого самостоятельного чтения.",
        tags: ["сказка", "малыши", "приключения"],
        price: 6.78,
        rating: 4.7,
        img: "./img/11.jpg"
    },
    {
        title: "Гадкий утенок",
        author: "Ганс Христиан Андерсен",
        description: "Как важно порой уметь видеть не только внешность, но и то, что спрятано внутри..",
        tags: ["сказка", "малыши", "познавательные"],
        price: 4.12,
        rating: 5,
        img: "./img/12.jpg"
    },

];

const container = document.getElementById("shop-items");
const template = document.getElementById("item-template");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const sortSelect = document.getElementById("sort-select");
const nothingFound = document.getElementById("nothing-found");
const categorySelect = document.getElementById("category-select");
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Переключение темы
themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");

    const icon = themeToggle.querySelector("i");
    icon.classList.toggle("fa-moon");
    icon.classList.toggle("fa-sun");
});

// Функция: Очистка результата
function clearResults() {
    container.innerHTML = "";
    nothingFound.textContent = "";
}

// Функция: Создание карточки книги
function createCard(item) {
    const clone = template.content.cloneNode(true);

    clone.querySelector("img").src = item.img;
    clone.querySelector("img").alt = item.title;

    clone.querySelector(".book-title").textContent = item.title;
    clone.querySelector(".book-author").textContent = item.author;
    clone.querySelector(".book-description").textContent = item.description;
    clone.querySelector(".book-price").textContent = item.price.toFixed(2) + " ₽";

    const ratingEl = clone.querySelector(".book-rating");
    ratingEl.innerHTML = "";

    for (let i = 0; i < 5; i++) {
        const star = document.createElement("i");

        if (i < item.rating) {
            star.classList.add("fas", "fa-star");
        } else {
            star.classList.add("far", "fa-star");
        }

        ratingEl.appendChild(star);
    }

    const tagsContainer = clone.querySelector(".book-tags");
    tagsContainer.innerHTML = "";
    item.tags.forEach(tag => {
        const span = document.createElement("span");
        span.classList.add("tag");
        span.textContent = tag;
        tagsContainer.appendChild(span);
    });

    return clone;
}

// Функция: Отрисовка массива карточек
function renderItems(array) {
    clearResults();
    array.forEach(item => {
        const card = createCard(item);
        container.appendChild(card);
    });
}

// Функция: Поиск + фильтр по категории
function searchItems(query, category) {
    const value = query.trim().toLowerCase();
    return items.filter(item => {
        const matchesText =
            item.title.toLowerCase().includes(value) ||
            item.author.toLowerCase().includes(value) ||
            item.description.toLowerCase().includes(value) ||
            item.tags.some(tag => tag.toLowerCase().includes(value));

        const matchesCategory = !category || item.tags.some(tag => tag.toLowerCase() === category);

        return matchesText && matchesCategory;
    });
}

// Функция: Сортировка массива
function sortItems(array, criteria) {
    const sorted = [...array];

    switch (criteria) {
        case "name-asc":
            sorted.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case "name-desc":
            sorted.sort((a, b) => b.title.localeCompare(a.title));
            break;
        case "price-asc":
            sorted.sort((a, b) => a.price - b.price);
            break;
        case "price-desc":
            sorted.sort((a, b) => b.price - a.price);
            break;
        case "rating-desc":
            sorted.sort((a, b) => b.rating - a.rating);
            break;
    }

    return sorted;
}

// Обработка поиска
function handleSearch() {
    const query = searchInput.value;
    const selectedCategory = categorySelect.value.toLowerCase();

    const results = searchItems(query, selectedCategory);
    sortSelect.value = ""; // сброс сортировки

    if (results.length > 0) {
        renderItems(results);
    } else {
        clearResults();
        nothingFound.textContent = "Ничего не найдено";
    }
}

// Обработка сортировки
function handleSort() {
    const query = searchInput.value.trim();
    const category = categorySelect.value.toLowerCase();
    let results = searchItems(query, category);

    const sortBy = sortSelect.value;
    results = sortItems(results, sortBy);

    if (results.length > 0) {
        renderItems(results);
    } else {
        clearResults();
        nothingFound.textContent = "Ничего не найдено";
    }
}

// События
searchBtn.addEventListener("click", handleSearch);

searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        handleSearch();
    }
});

sortSelect.addEventListener("change", handleSort);
categorySelect.addEventListener("change", handleSearch);

// Начальная отрисовка
renderItems(items);