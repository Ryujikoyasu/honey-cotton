document.addEventListener('DOMContentLoaded', function() {
    const honeyInfo = [
        {
            date: "5/1",
            sources: ["さくら", "れんげ"],
            description: "さくらの淡いピンク色と、れんげの優しい甘みが特徴的な蜂蜜です。さくらの香りが春の訪れを感じさせます。",
            images: [
                "/api/placeholder/300/300?text=さくら蜂蜜",
                "/api/placeholder/300/300?text=れんげ蜂蜜",
                "/api/placeholder/300/300?text=商品外観"
            ],
            sourceImages: [
                {url: "/api/placeholder/200/200?text=さくら", description: "さくらの花は、春の象徴として知られ、その蜜は淡い色合いと軽やかな甘さが特徴です。"},
                {url: "/api/placeholder/200/200?text=れんげ", description: "れんげの花は、春の田園風景に欠かせない存在で、その蜜は優しい甘さと芳醇な香りを持ちます。"}
            ],
            beeKeeperMessage: "春の訪れを告げる桜と、のどかな田園風景を彩るれんげ。この二つの花の蜜が織りなす味わいは、まさに春の恵みそのものです。",
            color: "#FFD700"
        },
        {
            date: "5/8",
            sources: ["アカシア", "菜の花"],
            description: "アカシアの爽やかな香りと、菜の花の明るい黄色が印象的な蜂蜜です。クセがなく、さっぱりとした味わいが特徴です。",
            images: [
                "/api/placeholder/300/300?text=アカシア蜂蜜",
                "/api/placeholder/300/300?text=菜の花蜂蜜",
                "/api/placeholder/300/300?text=商品外観"
            ],
            sourceImages: [
                {url: "/api/placeholder/200/200?text=アカシア", description: "アカシアの花は、清涼感のある香りと繊細な味わいを持つ蜜を生み出します。"},
                {url: "/api/placeholder/200/200?text=菜の花", description: "菜の花は、春の田園風景を彩る黄色い花で、その蜜は軽やかな甘さが特徴です。"}
            ],
            beeKeeperMessage: "アカシアの清涼感と菜の花の明るさが調和した、春の陽気を感じられる蜂蜜です。",
            color: "#FFC125"
        },
        {
            date: "5/15",
            sources: ["クローバー", "りんご"],
            description: "クローバーのまろやかな甘さと、りんごの軽やかな酸味が調和した蜂蜜です。淡い琥珀色で、香りも豊かです。",
            images: [
                "/api/placeholder/300/300?text=クローバー蜂蜜",
                "/api/placeholder/300/300?text=りんご蜂蜜",
                "/api/placeholder/300/300?text=商品外観"
            ],
            sourceImages: [
                {url: "/api/placeholder/200/200?text=クローバー", description: "クローバーの花は、優しい甘さと香りを持つ蜜を生み出し、養蜂家に愛されています。"},
                {url: "/api/placeholder/200/200?text=りんご", description: "りんごの花は、淡い香りと軽やかな甘さを持つ蜜を提供し、果樹園の春を象徴します。"}
            ],
            beeKeeperMessage: "クローバーの優しさとりんごの爽やかさが絶妙なハーモニーを奏でる、春の味覚の傑作です。",
            color: "#FFB90F"
        },
        
        // {
        //     date: "5/22",
        //     sources: ["トチノキ", "ライラック"],
        //     description: "トチノキの濃厚な味わいと、ライラックの華やかな香りが特徴的な蜂蜜です。深みのある琥珀色をしています。",
        //     images: [
        //         "/api/placeholder/300/300?text=さくら蜂蜜",
        //         "/api/placeholder/300/300?text=れんげ蜂蜜",
        //         "/api/placeholder/300/300?text=商品外観"
        //     ],
        //     sourceImages: [
        //         {url: "/api/placeholder/200/200?text=さくら", description: "さくらの花は、春の象徴として知られ、その蜜は淡い色合いと軽やかな甘さが特徴です。"},
        //         {url: "/api/placeholder/200/200?text=れんげ", description: "れんげの花は、春の田園風景に欠かせない存在で、その蜜は優しい甘さと芳醇な香りを持ちます。"}
        //     ],
        //     beeKeeperMessage: "春の訪れを告げる桜と、のどかな田園風景を彩るれんげ。この二つの花の蜜が織りなす味わいは、まさに春の恵みそのものです。"
        // },
        // {
        //     date: "5/29",
        //     sources: ["ニセアカシア", "柑橘類"],
        //     description: "ニセアカシアの上品な甘さと、柑橘類の爽やかな香りが調和した蜂蜜です。淡い黄金色で、さっぱりとした後味が特徴です。"
        // },
        // {
        //     date: "6/5",
        //     sources: ["ヤマハギ", "ミカン"],
        //     description: "ヤマハギの独特の風味と、ミカンの明るい香りが印象的な蜂蜜です。深い琥珀色で、コクのある味わいが楽しめます。"
        // },
        // {
        //     date: "6/12",
        //     sources: ["カラスノエンドウ", "シロツメクサ"],
        //     description: "カラスノエンドウの濃厚な味わいと、シロツメクサの優しい甘みが特徴的な蜂蜜です。深みのある黄褐色をしています。"
        // },
        // {
        //     date: "6/19",
        //     sources: ["ソバ", "クリ"],
        //     description: "ソバの香ばしい風味と、クリの甘みが絶妙に調和した蜂蜜です。濃い琥珀色で、コクのある味わいが特徴です。"
        // }
    ];

    function generateHoneyGrid() {
        const honeyGrid = document.querySelector('.honey-grid');
        honeyInfo.forEach((honey, index) => {
            const honeyItem = document.createElement('div');
            honeyItem.className = 'honey-item';
            honeyItem.style.backgroundColor = honey.color;
            honeyItem.innerHTML = `
                <h3>${honey.date}の蜂蜜</h3>
                <p>蜜源植物: ${honey.sources.join('、')}</p>
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
                    <h4>蜜源植物について</h4>
                    ${info.sourceImages.map(source => `
                        <div class="source-plant">
                            <img src="${source.url}" alt="${source.name}">
                            <p>${source.description}</p>
                        </div>
                    `).join('')}
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

    generateHoneyGrid();
    generateCalendar();

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
    
    function createBees(count) {
        const container = document.querySelector('.content');
        for (let i = 0; i < count; i++) {
            const bee = document.createElement('div');
            bee.className = 'bee';
            bee.style.top = `${Math.random() * 100}vh`;
            bee.style.left = `${Math.random() * 100}vw`;
            bee.style.animationDelay = `${Math.random() * 15}s`;
            container.appendChild(bee);
        }
    }



    document.querySelectorAll('.honey-item').forEach((item, index) => {
        item.addEventListener('click', () => showPopup(index));
    });

    document.querySelector('#chat-container button').addEventListener('click', sendMessage);
    
    document.addEventListener('DOMContentLoaded', function() {
        // ... 既存のコード ...
    
        createBees(5); // 5匹の蜂を生成
    });
});