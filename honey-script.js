document.addEventListener('DOMContentLoaded', function() {
    const honeyInfo = [
        {
            date: "5/1",
            sources: ["さくら", "れんげ"],
            description: "さくらの淡いピンク色と、れんげの優しい甘みが特徴的な蜂蜜です。さくらの香りが春の訪れを感じさせます。"
        },
        {
            date: "5/8",
            sources: ["アカシア", "菜の花"],
            description: "アカシアの爽やかな香りと、菜の花の明るい黄色が印象的な蜂蜜です。クセがなく、さっぱりとした味わいが特徴です。"
        },
        {
            date: "5/15",
            sources: ["クローバー", "りんご"],
            description: "クローバーのまろやかな甘さと、りんごの軽やかな酸味が調和した蜂蜜です。淡い琥珀色で、香りも豊かです。"
        },
        {
            date: "5/22",
            sources: ["トチノキ", "ライラック"],
            description: "トチノキの濃厚な味わいと、ライラックの華やかな香りが特徴的な蜂蜜です。深みのある琥珀色をしています。"
        },
        {
            date: "5/29",
            sources: ["ニセアカシア", "柑橘類"],
            description: "ニセアカシアの上品な甘さと、柑橘類の爽やかな香りが調和した蜂蜜です。淡い黄金色で、さっぱりとした後味が特徴です。"
        },
        {
            date: "6/5",
            sources: ["ヤマハギ", "ミカン"],
            description: "ヤマハギの独特の風味と、ミカンの明るい香りが印象的な蜂蜜です。深い琥珀色で、コクのある味わいが楽しめます。"
        },
        {
            date: "6/12",
            sources: ["カラスノエンドウ", "シロツメクサ"],
            description: "カラスノエンドウの濃厚な味わいと、シロツメクサの優しい甘みが特徴的な蜂蜜です。深みのある黄褐色をしています。"
        },
        {
            date: "6/19",
            sources: ["ソバ", "クリ"],
            description: "ソバの香ばしい風味と、クリの甘みが絶妙に調和した蜂蜜です。濃い琥珀色で、コクのある味わいが特徴です。"
        }
    ];

    window.showPopup = function(index) {
        const info = honeyInfo[index];
        const content = `
            <h2>${info.date}の蜂蜜</h2>
            <h3>蜜源植物: ${info.sources.join(', ')}</h3>
            <p>${info.description}</p>
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

    document.querySelectorAll('.honey-item').forEach((item, index) => {
        item.addEventListener('click', () => showPopup(index));
    });

    document.querySelector('#chat-container button').addEventListener('click', sendMessage);
    
});