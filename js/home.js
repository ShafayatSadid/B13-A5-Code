// spinner handler
const spinner = (status) => {

    if (status === true) {
        document.getElementById('spinner').classList.remove('hidden');
        document.getElementById('fullIssue').classList.add('hidden')
    }
    else {
        document.getElementById('fullIssue').classList.remove('hidden');
        document.getElementById('spinner').classList.add('hidden')
    }
}

// call spinner
spinner(true);

// load all card
const loadAll = () => {

    const url = 'https://phi-lab-server.vercel.app/api/v1/lab/issues';
    fetch(url)
        .then(response => response.json())
        .then(cards => {
            displayAll(cards.data);
            displayOpen(cards.data);
            displayClosed(cards.data);
            // call spinner
            spinner(false);
        })
}


loadAll()

// display all cards

const displayAll = (cards) => {



    console.log(cards.length)
    // declare all issue count
    const allIssueCount = document.getElementById('all-issue');
    const allCount = cards.length;
    allIssueCount.innerText = allCount;


    // get parent and empty
    const allSection = document.getElementById('all-section');
    allSection.innerHTML = "";

    cards.forEach(card => {
        // console.log(card)


        // create element and added innerHTMl
        // append child

        const allCard = document.createElement('div');

        // call priority design function.
        const priorityData = getPriority(card.priority.toUpperCase())
        // each card border style based status
        const border = getBorder(card.status)

        // date formatting
        const date = new Date(card.createdAt);
        const formateDate = date.toLocaleDateString("en-GB");


        allCard.innerHTML = `
        <div onclick="modal(${card.id})" class="card w-[256px] h-[290px] p-4 shadow-sm space-y-3 ${border}">

                    <!-- status and priority -->
                    <div class="flex justify-between">
                        <div>${card.status == 'open' ? '<img class="w-6 h-6" src="./assets/Open-Status.png" alt="">' : '<img class="w-6 h-6" src="./assets/Closed- Status .png" alt="">'} </div>
                        <button id=""
                            class="priority-btn text-[0.75rem] ${priorityData.textColor} w-[80px] py-[5px] rounded-[100px] ${priorityData.bgColor}">${priorityData.text} </button>
                    </div>

                    <!-- title -->
                    <div class="space-y-2">
                        <h4 class="text-[0.875rem] font-semibold text-[#1F2937]">${card.title}</h4>
                        <p class="text-[0.75rem] text-[#64748B]">${card.description}</p>
                    </div>

                    <!-- labels -->
                    <div class="flex items-center gap-2">${displayLabel(card.labels)}</div>

                    <!-- author -->
                    <div class="p-4 border-t border-[#E4E4E7]">

                        <div>
                            <p class="text-[0.75rem] text-[#64748B]">#${card.id} ${card.author} </p>
                            <p class="text-[0.75rem] text-[#64748B]">${formateDate} </p>
                        </div>
                    </div>
                </div>
        `

        allSection.appendChild(allCard)


    });
}


// search function
const search = () => {

    tab('tab1');

    const searchValue = getValue('search-input').trim().toLowerCase();
    console.log(searchValue)

    // all word fetch
    const url = 'https://phi-lab-server.vercel.app/api/v1/lab/issues';
    fetch(url)
        .then(response => response.json())
        .then(words => {

            const cards = words.data;


            const searchCard = cards.filter(card => card.title.toLowerCase().includes(searchValue));
            console.log(searchCard)

            displayAll(searchCard);
        })
}


// display Open card
const displayOpen = (cards) => {

    const openCards = cards.filter(card => card.status === 'open');

    console.log(openCards.length)
    // declare open issue count
    const openIssueCount = document.getElementById('open-issue');
    const openCount = openCards.length;
    openIssueCount.innerText = openCount;


    // get parent and empty
    const openSection = document.getElementById('open-section');
    openSection.innerHTML = "";

    openCards.forEach(card => {
        // console.log(card)


        // create element and added innerHTMl
        // append child

        const openCard = document.createElement('div');

        // call priority design function.
        const priorityData = getPriority(card.priority.toUpperCase())

        // each card border style based status
        const border = getBorder(card.status)

        // date formatting
        const date = new Date(card.createdAt);
        const formateDate = date.toLocaleDateString("en-GB");


        openCard.innerHTML = `
        <div onclick="modal(${card.id})" class="card w-[256px] h-[290px] p-4 shadow-sm space-y-3 ${border}">

                    <!-- status and priority -->
                    <div class="flex justify-between">
                        <div>${card.status == 'open' ? '<img class="w-6 h-6" src="./assets/Open-Status.png" alt="">' : '<img class="w-6 h-6" src="./assets/Closed- Status .png" alt="">'} </div>
                        <button id=""
                            class="priority-btn text-[0.75rem] ${priorityData.textColor} w-[80px] py-[5px] rounded-[100px] ${priorityData.bgColor}">${priorityData.text} </button>
                    </div>

                    <!-- title -->
                    <div class="space-y-2">
                        <h4 class="text-[0.875rem] font-semibold text-[#1F2937]">${card.title}</h4>
                        <p class="text-[0.75rem] text-[#64748B]">${card.description}</p>
                    </div>

                    <!-- labels -->
                    <div class="flex items-center gap-2">${displayLabel(card.labels)}</div>

                    <!-- author -->
                    <div class="p-4 border-t border-[#E4E4E7]">

                        <div>
                            <p class="text-[0.75rem] text-[#64748B]">#${card.id} ${card.author} </p>
                            <p class="text-[0.75rem] text-[#64748B]">${formateDate} </p>
                        </div>
                    </div>
                </div>
        `

        openSection.appendChild(openCard)

    });

}


// display Closed card
const displayClosed = (cards) => {

    const closedCards = cards.filter(card => card.status === 'closed');

    console.log(closedCards.length)
    // declare open issue count
    const closedIssueCount = document.getElementById('closed-issue');
    const closedCount = closedCards.length;
    closedIssueCount.innerText = closedCount;


    // get parent and empty
    const closedSection = document.getElementById('closed-section');
    closedSection.innerHTML = "";

    closedCards.forEach(card => {
        // console.log(card)


        // create element and added innerHTMl
        // append child

        const closedCard = document.createElement('div');

        // call priority design function.
        const priorityData = getPriority(card.priority.toUpperCase())
        // each card border style based status
        const border = getBorder(card.status)

        // date formatting
        const date = new Date(card.createdAt);
        const formateDate = date.toLocaleDateString("en-GB");

        closedCard.innerHTML = `
        <div onclick="modal(${card.id})" class="card w-[256px] h-[290px] p-4 shadow-sm space-y-3 ${border}">

                    <!-- status and priority -->
                    <div class="flex justify-between">
                        <div>${card.status == 'open' ? '<img class="w-6 h-6" src="./assets/Open-Status.png" alt="">' : '<img class="w-6 h-6" src="./assets/Closed- Status .png" alt="">'} </div>
                        <button id=""
                            class="priority-btn text-[0.75rem] ${priorityData.textColor} w-[80px] py-[5px] rounded-[100px] ${priorityData.bgColor}">${priorityData.text} </button>
                    </div>

                    <!-- title -->
                    <div class="space-y-2">
                        <h4 class="text-[0.875rem] font-semibold text-[#1F2937]">${card.title}</h4>
                        <p class="text-[0.75rem] text-[#64748B]">${card.description}</p>
                    </div>

                    <!-- labels -->
                    <div class="flex items-center gap-2">${displayLabel(card.labels)}</div>

                    <!-- author -->
                    <div class="p-4 border-t border-[#E4E4E7]">

                        <div>
                            <p class="text-[0.75rem] text-[#64748B]">#${card.id} ${card.author} </p>
                            <p class="text-[0.75rem] text-[#64748B]">${formateDate} </p>
                        </div>
                    </div>
                </div>
        `


        closedSection.appendChild(closedCard)

    });

}



