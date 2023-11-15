const monthChange = document.querySelector(".change-month");
let leftArrow = monthChange.firstChild;
const rightArrow = monthChange.lastChild;
const months = 
[`January, February, March, 
April, May, June, 
July, August, September,
 October, November, December`]; 

monthChange.addEventListener("click", function() {
    
    if(leftArrow){
       
        months.forEach(function(month) {
            month = month - 1; 
            console.log(month.toString);
        });
    }
});

