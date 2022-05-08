
var tabList = document.querySelectorAll('.tab_menu ul li');

for(var i = 0; i < tabList.length; i++){
  var btn = tabList[i].querySelector('.btn');
  btn.addEventListener('click', function(e){
    e.preventDefault();
    for(var j = 0; j < tabList.length; j++){
      tabList[j].classList.remove('is_on');
    }
    this.parentNode.classList.add('is_on');
  });
}