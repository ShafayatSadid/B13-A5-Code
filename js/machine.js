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
        else{

            return `<button
        class="text-[0.625rem] flex items-center gap-1 text-[#08605a] px-1 py-[5px] border border-[#bbf7f6] rounded-[100px] bg-[#defbfc]">${label.toUpperCase()} </button>`
        }
    })

    return createBtn.join(" ")
}


// open card and closed card border style
function getBorder(status){

    if(status === 'open'){
        return 'border-t-4 border-[#00A96E]'
    }
    else{
        return 'border-t-4 border-[#A855F7]'
    }
}


// tab btn controller
function tab (id){

    
    // get all tab btn
    const allTab = document.querySelectorAll('.tab-btn')

    // remove active class form all
    allTab.forEach(tab => tab.classList.remove('active'));

    // add active class selected btn
    document.getElementById(id).classList.add('active')
}