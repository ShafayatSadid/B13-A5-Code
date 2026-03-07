console.log('home added')

// load all card
const loadAll = () => {

    const url = 'https://phi-lab-server.vercel.app/api/v1/lab/issues';
    fetch(url)
        .then(response => response.json())
        .then(cards => displayAll(cards.data))
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

        allCard.innerHTML = `
        <div class="card w-[256px] h-[290px] p-4 shadow-sm space-y-3">

                    <!-- status and priority -->
                    <div class="flex justify-between">
                        <div>${card.status == 'open' ?'<img class="w-6 h-6" src="./assets/Open-Status.png" alt="">': '<img class="w-6 h-6" src="./assets/Closed- Status .png" alt="">'} </div>
                        <button id=""
                            class="priority-btn text-[0.75rem] ${priorityData.textColor} w-[80px] py-[5px] rounded-[100px] ${priorityData.bgColor}">${priorityData.text} </button>
                    </div>

                    <!-- title -->
                    <div class="space-y-2">
                        <h4 class="text-[0.875rem] font-semibold text-[#1F2937]">${card.title}</h4>
                        <p class="text-[0.75rem] text-[#64748B]">${card.description}</p>
                    </div>

                    <!-- labels -->
                    <div class="flex items-center gap-2">${displayLabel(card.labels)} </div>

                    <!-- author -->
                    <div class="p-4 border-t border-[#E4E4E7]">

                        <div>
                            <p class="text-[0.75rem] text-[#64748B]">#${card.id} ${card.author} </p>
                            <p class="text-[0.75rem] text-[#64748B]">${card.createdAt} </p>
                        </div>
                    </div>
                </div>
        `

        allSection.appendChild(allCard)
        
    });
}