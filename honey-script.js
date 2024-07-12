document.addEventListener('DOMContentLoaded', function() {
    let honeyInfo = [];
    // Fetch the honey data from the JSON file
    fetch('../knowledge/honey-history.json')
    .then(response => response.json())
    .then(data => {
        honeyInfo = processHoneyData(data);
        initializePage();
    })
    .catch(error => console.error('Error loading honey data:', error));

    function processHoneyData(data) {
        // Group the data by year and month
        const groupedData = data.reduce((acc, item) => {
            const [year, month] = item.時期.split('年');
            const key = `${year}年${month}`;
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(item);
            return acc;
        }, {});

        // Convert grouped data to the format expected by the existing code
        return Object.entries(groupedData).map(([date, items]) => {
            const sources = [...new Set(items.flatMap(item => item.蜜源植物.split('，')))];
            return {
                date: date,
                sources: sources,
                description: `${date}の蜂蜜です。主な蜜源植物は${sources.join('、')}です。`,
                images: [
                    "/api/placeholder/300/300?text=蜂蜜画像1",
                    "/api/placeholder/300/300?text=蜂蜜画像2",
                    "/api/placeholder/300/300?text=商品外観"
                ],
                sourceImages: sources.map(source => ({
                    url: `static/images/honey_plant/${source}.png`,
                    description: `${source}は、この時期に咲く重要な蜜源植物です。`
                })),
                beeKeeperMessage: items[0].ひとこと || `${date}の蜂蜜は、${sources.join('と')}の花の香りが特徴的です。`,
                color: `#${Math.floor(Math.random()*16777215).toString(16)}` // Random color
            };
        });
    }

    function initializePage() {
        generateHoneyGrid();
        generateCalendar();
        initBees();
    }


    const beeImages = [
        'static/images/bee1.png',
        'static/images/bee2.png',
        'static/images/bee3.png'
    ];

    class Bee {
        constructor(container) {
            this.element = document.createElement('div');
            this.element.className = 'bee';
            this.element.style.backgroundImage = `url(${beeImages[Math.floor(Math.random() * beeImages.length)]})`;
            this.x = Math.random() * window.innerWidth;
            this.y = Math.random() * window.innerHeight;
            this.speedX = (Math.random() - 0.5) * 2;
            this.speedY = (Math.random() - 0.5);
            this.update();
            container.appendChild(this.element);
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x < 0 || this.x > window.innerWidth - 50) this.speedX *= -1;
            if (this.y < 0 || this.y > window.innerHeight - 50) this.speedY *= -1;

            this.element.style.left = `${this.x}px`;
            this.element.style.top = `${this.y}px`;
            this.element.style.transform = `rotate(${Math.atan2(this.speedY, this.speedX)}rad)`;
        }
    }


    function init() {
        const container = document.getElementById('bee-container');
        const bees = [];
        const beeCount = 4;

        for (let i = 0; i < beeCount; i++) {
            bees.push(new Bee(container));
        }

        function animate() {
            bees.forEach(bee => bee.update());
            requestAnimationFrame(animate);
        }

        animate();
    }

    init();

    document.addEventListener('DOMContentLoaded', init);


    function generateHoneyGrid() {
        const honeyGrid = document.querySelector('.honey-grid');
        honeyGrid.innerHTML = ''; // Clear existing content
        honeyInfo.forEach((honey, index) => {
            const honeyItem = document.createElement('div');
            honeyItem.className = 'honey-item';
            honeyItem.style.backgroundColor = honey.color;
            honeyItem.innerHTML = `
                <h3>${honey.date}</h3>
                <p>${honey.sources.join('、')}</p>
            `;
            honeyItem.addEventListener('click', () => showPopup(index));
            honeyGrid.appendChild(honeyItem);
        });
    }

    window.showPopup = function(index) {
        const info = honeyInfo[index];
        const content = `
        <div class="popup-header" style="background-image: url('${info.images[0]}');">
          <h2>${info.date}の蜂蜜</h2>
        </div>
        <div class="popup-body">
          <div class="honey-images">
            ${info.images.map(img => `<img src="${img}" alt="蜂蜜画像">`).join('')}
          </div>
          <h3>${info.sources.join('、')}</h3>
          <p>${info.description}</p>
          <div class="source-plants">
            <h3 class="source-plants-title">蜜源植物について</h3>
            <div class="source-plant-images">
              ${info.sourceImages.map(source => `
                <div class="source-plant">
                  <img src="${source.url}" alt="${source.name}">
                  <p>${source.description}</p>
                </div>
              `).join('')}
            </div>
          </div>
          <div class="beekeeper-message">
            <h4>養蜂家からの一言</h4>
            <p><i>"${info.beeKeeperMessage}"</i></p>
          </div>
        </div>
        <button onclick="closePopup()">閉じる</button>
        `;
        document.getElementById('popup-content').innerHTML = content;
        document.getElementById('popup').style.display = 'block';
       }
       


    window.closePopup = function() {
        document.getElementById('popup').style.display = 'none';
    }

    function generateCalendar() {
        const calendar = document.getElementById('calendar');
        let calendarHTML = '<h3>蜜源植物カレンダー</h3><table><tr><th>日付</th><th>蜜源植物</th></tr>';
        
        honeyInfo.forEach(info => {
            calendarHTML += `<tr><td>${info.date}</td><td>${info.sources.join(', ')}</td></tr>`;
        });
        
        calendarHTML += '</table>';
        calendar.innerHTML = calendarHTML;
    }
    

    window.sendMessage = function() {
        const userInput = document.getElementById('user-input').value;
        const chatMessages = document.getElementById('chat-messages');
        
        chatMessages.innerHTML += `<p><strong>あなた:</strong> ${userInput}</p>`;
        
        // ここで外部のLLMと連携する処理を実装します
        // 仮の応答を表示
        setTimeout(() => {
            chatMessages.innerHTML += `<p><strong>AI:</strong> 申し訳ありませんが、現在AIは準備中です。蜂蜜に関する質問は、お問い合わせフォームからお願いします。</p>`;
        }, 1000);
        
        document.getElementById('user-input').value = '';
    }

    document.querySelectorAll('.honey-item').forEach((item, index) => {
        item.addEventListener('click', () => showPopup(index));
    });

    document.querySelector('#chat-container button').addEventListener('click', sendMessage);
    
    
});