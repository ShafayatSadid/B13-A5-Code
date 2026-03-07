// get value function
function getValue (id){

    const input = document.getElementById(id);
    const value = input.value;
    return value;
}

// function for design priority
function getPriority(priority){

    if(priority === 'HIGH'){

        return{
            text: 'HIGH',
            bgColor: 'bg-[#FEECEC]',
            textColor: 'text-[#EF4444]'
        }
    }
    else if(priority === 'MEDIUM'){

        return{
            text: 'MEDIUM',
            bgColor: 'bg-[#FFF6D1]',
            textColor: 'text-[#F59E0B]'
        }
    }
    else{

        return{
            text: 'LOW',
            bgColor: 'bg-[#EEEFF2]',
            textColor: 'text-[#9CA3AF]'
        }
    }
}