
document.addEventListener('DOMContentLoaded', () => {
    const scheduleContainer = document.getElementById('schedule-container');
    const searchBar = document.getElementById('search-bar');
    let talks = [];

    fetch('/api/talks')
        .then(response => response.json())
        .then(data => {
            talks = data;
            renderSchedule(talks);
        });

    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredTalks = talks.filter(talk => 
            talk.category.some(cat => cat.toLowerCase().includes(searchTerm))
        );
        renderSchedule(filteredTalks);
    });

    function renderSchedule(talksToRender) {
        scheduleContainer.innerHTML = '';
        let currentTime = new Date('2025-09-07T10:00:00');

        const formatTime = (date) => {
            return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        };

        talksToRender.forEach((talk, index) => {
            const startTime = new Date(currentTime);
            const endTime = new Date(startTime.getTime() + talk.duration * 60000);

            const scheduleItem = document.createElement('div');
            scheduleItem.classList.add('schedule-item');

            scheduleItem.innerHTML = `
                <div class="time">${formatTime(startTime)} - ${formatTime(endTime)}</div>
                <div class="title">${talk.title}</div>
                <div class="speakers">By: ${talk.speakers.join(', ')}</div>
                <div class="description">${talk.description}</div>
                <div class="category">
                    ${talk.category.map(cat => `<span>${cat}</span>`).join('')}
                </div>
            `;
            scheduleContainer.appendChild(scheduleItem);

            currentTime = new Date(endTime.getTime() + 10 * 60000); // 10 minute break

            if (index === 2) { // After 3rd talk, add lunch break
                const lunchStartTime = new Date(currentTime);
                const lunchEndTime = new Date(lunchStartTime.getTime() + 60 * 60000);
                const lunchBreak = document.createElement('div');
                lunchBreak.classList.add('schedule-item', 'break');
                lunchBreak.innerHTML = `
                    <div class="time">${formatTime(lunchStartTime)} - ${formatTime(lunchEndTime)}</div>
                    <div class="title">Lunch Break</div>
                `;
                scheduleContainer.appendChild(lunchBreak);
                currentTime = lunchEndTime;
            }
        });
    }
});
