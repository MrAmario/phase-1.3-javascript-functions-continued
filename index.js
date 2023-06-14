// code your solution here
function saturdayFun(leisure = "roller-skate"){
    
    return (`This Saturday, I want to ${leisure}!`)
}
saturdayFun();
saturdayFun("bathe my dog");

mondayWork=function (work = "go to the office"){
     return `This Monday, I will ${work}.`;
}
mondayWork();
mondayWork("work from home");

function wrapAdjective(wrapper = "*"){
    return function emphaticOne(adjective){
        //console.log=`You are ${wrapper}${adjective}${wrapper}!`
        return (`You are ${wrapper}${adjective}${wrapper}!`)
        
    }
}
