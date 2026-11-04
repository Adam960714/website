const sortSelect = document.getElementById("sort");
const cardContainer = document.querySelector(".card-grid");

function sortCards() {
    const cards = Array.from(cardContainer.children);
    const sortType = sortSelect.value;

    cards.sort((a, b) => {
        return b.dataset[sortType] - a.dataset[sortType];
    });

    cards.forEach(card => {
        cardContainer.appendChild(card);
    });
}

// 網頁開啟時預設依有趣排序
sortSelect.value = "fun";
sortCards();

// 使用者更改選項時重新排序
sortSelect.addEventListener("change", sortCards);