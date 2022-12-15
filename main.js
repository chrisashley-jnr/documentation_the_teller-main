window.onload = function() {
    let elements = document.getElementsByClassName("tab-label");
    for(let i = 0; i < elements.length; i++) {
        elements[i].onclick = function () {
            let wrapper_height = this.nextSibling['nextSibling']['offsetHeight'];
            let total_height = wrapper_height  + 200;
            let ht=total_height+"px";
            document.getElementById('the_div').style.height=ht;
            document.getElementById('second_div').style.height=ht;
            document.getElementById('third_div').style.height=ht;
            document.getElementById('fourth_div').style.height=ht;
        }
    }
};
