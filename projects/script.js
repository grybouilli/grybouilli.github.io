var types_map = {
    "scholar": "timeline__event--type1",
    "personal": "timeline__event--type2",
    "professional": "timeline__event--type3"
};

function showItem(classId) {
    var x = document.querySelectorAll("."+types_map["scholar"]+",."+types_map["personal"]+",."+types_map["professional"]);
    for (var i = 0; i < x.length; i++) {
        if(x[i].className.includes(types_map[classId]))
        {
            x[i].style.display = "flex";
        }
        else
            x[i].style.display = "none";
    }
}

function showAll()
{
    var x = document.querySelectorAll("."+types_map["scholar"]+",."+types_map["personal"]+",."+types_map["professional"]);
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "flex";
    }
}