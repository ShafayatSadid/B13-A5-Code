// get value function
function getValue(id) {

    const input = document.getElementById(id);
    const value = input.value;
    return value;
}


// function for design priority
function getPriority(priority) {

    if (priority === 'HIGH') {

        return {
            text: 'HIGH',
            bgColor: 'bg-[#FEECEC]',
            textColor: 'text-[#EF4444]'
        }
    }
    else if (priority === 'MEDIUM') {

        return {
            text: 'MEDIUM',
            bgColor: 'bg-[#FFF6D1]',
            textColor: 'text-[#F59E0B]'
        }
    }
    else {

        return {
            text: 'LOW',
            bgColor: 'bg-[#EEEFF2]',
            textColor: 'text-[#9CA3AF]'
        }
    }
}


// display labels
function displayLabel(labels) {

    const createBtn = labels.map(label => {

        if (label == 'bug') {
            return `<button
        class="text-[0.75rem] flex items-center gap-1 text-[#EF4444] border border-[#FECACA] px-2 py-[5px] rounded-[100px] bg-[#FEECEC]"><img class="w-3 h-3" src="./assets/bug.png" alt="">${label.toUpperCase()} </button>`
        }
        else if (label == 'help wanted') {

            return `<button
        class="text-[0.625rem] flex items-center gap-1 text-[#D97706] px-1 py-[5px] border border-[#FDE68A] rounded-[100px] bg-[#FFF8DB]"><img class="w-3 h-3" src="./assets/help.png" alt=""> ${label.toUpperCase()} </button>`
        }
        else if (label == 'enhancement') {

            return `<button
        class="text-[0.75rem] flex items-center gap-1 text-[#00A96E] px-1 py-[5px] border border-[#BBF7D0] rounded-[100px] bg-[#DEFCE8]"><img class="w-3 h-3" src="./assets/enc.png" alt=""> ${label.toUpperCase()} </button>`
        }
        else {

            return `<button
        class="text-[0.625rem] flex items-center gap-1 text-[#08605a] px-1 py-[5px] border border-[#bbf7f6] rounded-[100px] bg-[#defbfc]">${label.toUpperCase()} </button>`
        }
    })

    return createBtn.join(" ")
}


// open card and closed card border style
function getBorder(status) {

    if (status === 'open') {
        return 'border-t-4 border-[#00A96E]'
    }
    else {
        return 'border-t-4 border-[#A855F7]'
    }
}


// tab btn controller
function tab(id) {


    // get all tab btn
    const allTab = document.querySelectorAll('.tab-btn')

    // remove active class form all
    allTab.forEach(tab => tab.classList.remove('active'));

    // add active class selected btn
    document.getElementById(id).classList.add('active')


    // section and issue count controller 

    // get all issue section and issue count
    const allIssues = document.querySelectorAll('.issue-section');
    const allCounts = document.querySelectorAll('.issue-count')

    // add hidden class at all
    allIssues.forEach(issue => issue.classList.add('hidden'));
    allCounts.forEach(count => count.classList.add('hidden'));

    if (id === 'tab1') {
        document.getElementById('all-section').classList.remove('hidden');
        document.getElementById('all-issue').classList.remove('hidden');
    }
    else if (id === 'tab2') {
        document.getElementById('open-section').classList.remove('hidden');
        document.getElementById('open-issue').classList.remove('hidden');
    }
    else {
        document.getElementById('closed-section').classList.remove('hidden');
        document.getElementById('closed-issue').classList.remove('hidden');
    }
}



// modal function
const modal = (id) => {

    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;

    fetch(url)
        .then(response => response.json())
        .then(card => displayModal(card.data));
}

const displayModal = (card) => {
    console.log(card)

    const newModal = document.getElementById('new_modal')
    newModal.innerHTML = "";

    // call priority design function.
    const priorityData = getPriority(card.priority.toUpperCase())
    // each card border style based status
    const border = getBorder(card.status)

    newModal.innerHTML = `
    
                <div class="modal-box space-y-5">

                    <!-- modal content -->
                    <div>

                        <!-- status and priority -->
                        <div class="flex justify-between mb-3">
                            <div>${card.status == 'open' ? '<img class="w-8 h-8" src="./assets/Open-Status.png" alt="">'
            : '<img class="w-8 h-8" src="./assets/Closed- Status .png" alt="">'} </div>
                            <button id=""
                                class="priority-btn text-[0.875rem] ${priorityData.textColor} w-[90px] py-[5px] rounded-[100px] ${priorityData.bgColor}">${priorityData.text}
                            </button>
                        </div>

                        <!-- title -->
                        <div class="space-y-2 mb-3">
                            <h4 class="text-[1.5rem] font-semibold text-[#1F2937]">${card.title}</h4>
                            <p class="text-[1rem] text-[#64748B]">${card.description}</p>
                        </div>

                        <!-- labels -->
                        <div class="flex items-center gap-2 mb-3">${displayLabel(card.labels)}</div>

                        <!-- author -->
                        <div class="p-4 border-t border-[#E4E4E7]">

                            <div>
                                <p class="text-[0.875rem] text-[#64748B]">Author: ${card.author.toUpperCase()} </p>
                                <p class="text-[0.875rem] text-[#64748B]">Created At ${card.createdAt} </p>
                            </div>
                        </div>


                    </div>

                    <div class="modal-action">
                        <form method="dialog">
                            <!-- if there is a button in form, it will close the modal -->
                            <button class="btn btn-primary">Close</button>
                        </form>
                    </div>

                </div>
            `
    document.getElementById('new_modal').showModal();
}