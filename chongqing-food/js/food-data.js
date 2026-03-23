// 重庆美食数据
const chongqingFoods = [
    {
        id: 1,
        name: "重庆老火锅",
        nameEn: "Chongqing Hotpot",
        description: "渝中区九宫格老火锅，牛油浓郁，辣而不燥，是重庆美食的灵魂代表",
        district: "渝中区",
        category: "经典",
        tags: ["火锅", "麻辣", "肉类", "招牌"],
        image: "https://images.unsplash.com/photo-1588252915241-824d1fa6df6a?w=800",
        link: "yuzhong-hotpot.html",
        spiciness: 5
    },
    {
        id: 2,
        name: "万州烤鱼",
        nameEn: "Wanzhou Grilled Fish",
        description: "融合腌、烤、炖三种工艺，外皮香脆，肉质鲜嫩，口味繁多",
        district: "万州区",
        category: "鱼类",
        tags: ["烤鱼", "河鲜", "麻辣"],
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800",
        link: "wanzhou-fish.html",
        spiciness: 4
    },
    {
        id: 3,
        name: "歌乐山辣子鸡",
        nameEn: "Geleshan Spicy Chicken",
        description: "在一堆红辣椒里找鸡块的乐趣，外酥里嫩，麻辣鲜香",
        district: "沙坪坝区",
        category: "麻辣",
        tags: ["辣子鸡", "鸡肉", "麻辣", "招牌"],
        image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800",
        link: "geleshan-chicken.html",
        spiciness: 5
    },
    {
        id: 4,
        name: "南山泉水鸡",
        nameEn: "Nanshan Spring Water Chicken",
        description: "源于南山，用泉水烹制，佐以数十种香料，味道浓郁",
        district: "南岸区",
        category: "鸡肉",
        tags: ["泉水鸡", "鸡肉", "汤锅"],
        image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800",
        link: "nanshan-chicken.html",
        spiciness: 3
    },
    {
        id: 5,
        name: "黔江鸡杂",
        nameEn: "Qianjiang Chicken Gizzard",
        description: "运用土家烹饪方式，泡椒味浓郁，酸辣开胃",
        district: "黔江区",
        category: "内脏",
        tags: ["鸡杂", "泡椒", "酸辣", "土家"],
        image: "https://images.unsplash.com/photo-1569058242567-93de6f36f8e6?w=800",
        link: "qianjiang-jiza.html",
        spiciness: 4
    },
    {
        id: 6,
        name: "合川肉片",
        nameEn: "Hechuan Pork Slices",
        description: "外酥里嫩，酸甜适口，是合川的传统名菜",
        district: "合川区",
        category: "肉类",
        tags: ["肉片", "炸", "酸甜"],
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800",
        link: "hechuan-roupian.html",
        spiciness: 2
    },
    {
        id: 7,
        name: "璧山来凤鱼",
        nameEn: "Bishan Laifeng Fish",
        description: "璧山区特色鱼肴，鲜嫩爽滑，麻辣鲜香",
        district: "璧山区",
        category: "鱼类",
        tags: ["鱼", "麻辣", "河鲜"],
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800",
        link: "bishan-laifengyu.html",
        spiciness: 4
    },
    {
        id: 8,
        name: "潼南太安鱼",
        nameEn: "Tongnan Taian Fish",
        description: "潼南区太安镇特色，俗称坨坨鱼，麻辣味重",
        district: "潼南区",
        category: "鱼类",
        tags: ["鱼", "麻辣", "江湖菜"],
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
        link: "tongnan-taianyu.html",
        spiciness: 5
    },
    {
        id: 9,
        name: "江津酸菜鱼",
        nameEn: "Jiangjin Pickled Cabbage Fish",
        description: "江津区传统名菜，酸辣可口，鱼肉鲜嫩",
        district: "江津区",
        category: "河鲜",
        tags: ["酸菜鱼", "酸辣", "鱼"],
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800",
        link: "jiangjin-fish.html",
        spiciness: 4
    },
    {
        id: 10,
        name: "武隆碗碗羊肉",
        nameEn: "Wulong Lamb Soup",
        description: "武隆区仙女山特色，羊肉鲜美无膻味，汤色乳白",
        district: "武隆区",
        category: "羊肉",
        tags: ["羊肉", "汤锅", "滋补"],
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800",
        link: "wulong-lamb.html",
        spiciness: 2
    },
    {
        id: 11,
        name: "涪陵榨菜",
        nameEn: "Fuling Pickled Mustard",
        description: "涪陵区特产，中国三大名菜之一，脆嫩爽口",
        district: "涪陵区",
        category: "酱菜",
        tags: ["榨菜", "酱菜", "特产"],
        image: "https://images.unsplash.com/photo-1551250928-243dc93d65ce?w=800",
        link: "fuling-zhacai.html",
        spiciness: 1
    },
    {
        id: 12,
        name: "梁平张鸭子",
        nameEn: "Liangping Zhang Duck",
        description: "梁平区传统卤味，色泽金黄，卤香浓郁",
        district: "梁平区",
        category: "卤味",
        tags: ["卤味", "鸭子", "特产"],
        image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800",
        link: "liangping-zhangyazi.html",
        spiciness: 1
    },
    {
        id: 13,
        name: "奉节脐橙",
        nameEn: "Fengjie Navel Orange",
        description: "奉节县特产，中国地理标志产品，汁多味甜",
        district: "奉节县",
        category: "水果",
        tags: ["水果", "特产", "甜"],
        image: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=800",
        link: "fengjie-qicheng.html",
        spiciness: 0
    },
    {
        id: 14,
        name: "忠州豆腐乳",
        nameEn: "Zhongzhou Fermented Tofu",
        description: "忠县传统名菜，口感细腻，回味悠长，佐餐佳品",
        district: "忠县",
        category: "豆腐",
        tags: ["豆腐乳", "调味品", "特产"],
        image: "https://images.unsplash.com/photo-1582452919408-53c12f8e0621?w=800",
        link: "zhongzhou-doufurong.html",
        spiciness: 2
    },
    {
        id: 15,
        name: "云阳包面",
        nameEn: "Yunyang Wonton",
        description: "云阳县特色小吃，皮薄馅大，汤鲜味美",
        district: "云阳县",
        category: "面食",
        tags: ["包面", "馄饨", "小吃"],
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800",
        link: "yunyang-baomian.html",
        spiciness: 1
    },
    {
        id: 16,
        name: "石柱莼菜",
        nameEn: "Shizhu Water Shield",
        description: "石柱县特产，国家地理标志，滑嫩爽口，营养丰富",
        district: "石柱县",
        category: "蔬菜",
        tags: ["莼菜", "蔬菜", "特产"],
        image: "https://images.unsplash.com/photo-1518164147695-36c13dd568f5?w=800",
        link: "shizhu-chuncai.html",
        spiciness: 0
    },
    {
        id: 17,
        name: "秀山土鸡",
        nameEn: "Xiushan Native Chicken",
        description: "秀山县特色，肉质鲜美，营养丰富，炖汤最佳",
        district: "秀山县",
        category: "鸡肉",
        tags: ["土鸡", "鸡肉", "特产"],
        image: "https://images.unsplash.com/photo-1598090383121-0f4b7a3c9c21?w=800",
        link: "xiushan-tuji.html",
        spiciness: 1
    },
    {
        id: 18,
        name: "酉阳龚滩豆腐",
        nameEn: "Youyang Gongtan Tofu",
        description: "酉阳县龚滩镇特色，传统手工制作，豆香浓郁",
        district: "酉阳县",
        category: "豆腐",
        tags: ["豆腐", "传统", "手工"],
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800",
        link: "youyang-gongtan-doufu.html",
        spiciness: 1
    },
    {
        id: 19,
        name: "彭水都卷子",
        nameEn: "Pengshui Du Juan Zi",
        description: "彭水县传统小吃，软糯可口，蘸料更佳",
        district: "彭水县",
        category: "小吃",
        tags: ["小吃", "米制", "传统"],
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800",
        link: "pengshui-dujuanzi.html",
        spiciness: 1
    },
    {
        id: 20,
        name: "武隆羊角豆干",
        nameEn: "Wulong Yangjiao Tofu",
        description: "武隆区传统特产，质地紧实，味道鲜美",
        district: "武隆区",
        category: "豆制品",
        tags: ["豆干", "特产", "零食"],
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
        link: "wuxi-yuxiang.html",
        spiciness: 1
    },
    {
        id: 21,
        name: "南川金佛山笋",
        nameEn: "Nanchuan Jinfo Mountain Bamboo",
        description: "南川区特产，肉质肥厚，脆嫩鲜美",
        district: "南川区",
        category: "山珍",
        tags: ["竹笋", "山珍", "特产"],
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
        link: "nanchuan-jinshi-yu.html",
        spiciness: 1
    },
    {
        id: 22,
        name: "长寿沙田柚",
        nameEn: "Changshou Pomelo",
        description: "长寿区特产水果，汁多味甜，香气浓郁",
        district: "长寿区",
        category: "水果",
        tags: ["柚子", "水果", "特产"],
        image: "https://images.unsplash.com/photo-1590592228291-f9a13f9d66b1?w=800",
        link: "changshou-shatianshaliu.html",
        spiciness: 0
    },
    {
        id: 23,
        name: "垫江高安面",
        nameEn: "Dianjiang Gaoan Noodles",
        description: "垫江县传统面食，手工制作，劲道十足",
        district: "垫江县",
        category: "面食",
        tags: ["面", "小吃", "传统"],
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800",
        link: "dianjiang-gaofan.html",
        spiciness: 2
    },
    {
        id: 24,
        name: "巴南接龙蜜柚",
        nameEn: "Banan Jielong Pomelo",
        description: "巴南区特产水果，汁多味甜，清香浓郁",
        district: "巴南区",
        category: "水果",
        tags: ["柚子", "水果", "特产"],
        image: "https://images.unsplash.com/photo-1590592228291-f9a13f9d66b1?w=800",
        link: "baonign-jisi.html",
        spiciness: 0
    },
    {
        id: 25,
        name: "铁坪坪花椒鸡",
        nameEn: "Tiepingpo Sichuan Pepper Chicken",
        description: "沙坪坝区特色菜品，花椒麻香，鸡肉鲜嫩",
        district: "沙坪坝区",
        category: "鸡肉",
        tags: ["花椒鸡", "鸡肉", "麻辣"],
        image: "https://images.unsplash.com/photo-1564632371152-6cde9a20f49e?w=800",
        link: "tiepingpo-chicken.html",
        spiciness: 4
    }
];

// 搜索功能
function searchFoods(query) {
    if (!query || query.trim() === '') {
        return chongqingFoods;
    }

    const searchTerm = query.toLowerCase().trim();

    return chongqingFoods.filter(food => {
        return food.name.toLowerCase().includes(searchTerm) ||
               food.description.toLowerCase().includes(searchTerm) ||
               food.district.toLowerCase().includes(searchTerm) ||
               food.category.toLowerCase().includes(searchTerm) ||
               food.tags.some(tag => tag.toLowerCase().includes(searchTerm));
    });
}

// 生成辣度HTML
function getSpicinessHTML(level) {
    let html = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= level) {
            html += '<span class="spicy-dot active">🌶️</span>';
        } else {
            html += '<span class="spicy-dot">○</span>';
        }
    }
    return html;
}

// 渲染美食卡片
function renderFoodCards(foods, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (foods.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <p>未找到相关美食，请尝试其他关键词</p>
            </div>
        `;
        return;
    }

    container.innerHTML = foods.map(food => `
        <div class="card food-card" onclick="window.location.href='${food.link}'">
            <div class="card-image">
                <img src="${food.image}" alt="${food.name}" loading="lazy">
                <span class="card-badge">${food.category}</span>
            </div>
            <div class="card-content">
                <h3>${food.name}</h3>
                <p class="description">${food.description}</p>
                <div class="tags">
                    <span class="tag">${food.district}</span>
                    <span class="tag spiciness-level" title="辣度">${getSpicinessHTML(food.spiciness)}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// 初始化搜索功能
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const heroSearchInput = document.getElementById('heroSearchInput');
    const searchBtn = document.getElementById('searchBtn');
    const heroSearchBtn = document.getElementById('heroSearchBtn');

    function performSearch(query) {
        const results = searchFoods(query);
        renderFoodCards(results, 'foodGrid');

        // 更新结果计数
        const resultCount = document.getElementById('resultCount');
        if (resultCount) {
            resultCount.textContent = `找到 ${results.length} 个美食`;
        }

        // 显示结果区域
        const resultsSection = document.getElementById('searchResults');
        if (resultsSection) {
            resultsSection.style.display = 'block';
        }

        // 滚动到结果区域
        resultsSection?.scrollIntoView({ behavior: 'smooth' });
    }

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value;
            if (query.length > 0) {
                performSearch(query);
            } else {
                renderFoodCards(chongqingFoods.slice(0, 6), 'foodGrid');
                const resultsSection = document.getElementById('searchResults');
                if (resultsSection) {
                    resultsSection.style.display = 'none';
                }
            }
        });

        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch(e.target.value);
            }
        });
    }

    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            const query = searchInput ? searchInput.value : '';
            performSearch(query);
        });
    }

    if (heroSearchInput) {
        heroSearchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch(e.target.value);
            }
        });
    }

    if (heroSearchBtn) {
        heroSearchBtn.addEventListener('click', () => {
            const query = heroSearchInput ? heroSearchInput.value : '';
            performSearch(query);
        });
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    initSearch();

    // 渲染初始美食数据
    renderFoodCards(chongqingFoods.slice(0, 6), 'foodGrid');
});
