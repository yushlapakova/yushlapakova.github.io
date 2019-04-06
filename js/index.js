var quest = document.getElementsByClassName('quest');

var answer = document.getElementsByClassName('answer');
var description = document.getElementsByClassName('description');
var check = document.getElementsByName("q1");
var q2 = document.getElementsByName("q2");
var q3 = document.getElementsByName("q3");



var btns = document.getElementsByClassName('action-button');
var btnControl = document.getElementsByClassName('control');
var btnNext = document.getElementsByClassName('next');

for (var i = 0; i < btns.length; i++) {
  btns[i].onclick = function() {
    for (var i = 0; i < check.length; i++) {
      var checkedOne = Array.prototype.slice.call(check).some(x => x.checked);
      if (checkedOne) {
        check[i].setAttribute("disabled", "disabled");
      }
      if(check[i].checked) {
        check[0].checked = true;
        check[0].parentNode.classList.add('show');
        check[2].checked = true;
        check[2].parentNode.classList.add('show');
        check[i].parentNode.classList.add('show');
        btns[0].classList.remove('control');
        btns[1].classList.add('next');
      }
    }
  }
}

btns[1].onclick = function() {
  quest[0].classList.remove('q-1');
  quest[1].classList.add('q-2');
}

btns[2].onclick = function() {
  if(q2[0].value == '5,2,9,7,6,4,8,10,3,1') {
    q2[0].classList.add('true');
    btns[2].classList.remove('control');
    btns[3].classList.add('next');
  } else {
    q2[0].classList.remove('true');
    q2[0].classList.add('false');
  }
}

btns[3].onclick = function() {
  quest[1].classList.remove('q-2');
  quest[2].classList.add('q-3');
}

btns[4].onclick = function() {
  for (var i = 0; i < q3.length; i++) {
    var checkedOne = Array.prototype.slice.call(q3).some(x => x.checked);
    if (checkedOne) {
      q3[i].setAttribute("disabled", "disabled");
    }
    if(q3[i].checked) {
      q3[0].checked = true;
      q3[0].parentNode.classList.add('show');
      q3[1].checked = true;
      q3[1].parentNode.classList.add('show');
      q3[3].checked = true;
      q3[3].parentNode.classList.add('show');
      q3[6].checked = true;
      q3[6].parentNode.classList.add('show');
      q3[8].checked = true;
      q3[8].parentNode.classList.add('show');
      q3[9].checked = true;
      q3[9].parentNode.classList.add('show');
      q3[i].parentNode.classList.add('show');
      description[0].classList.add('show');
      btns[4].classList.remove('control');
      btns[5].classList.add('next');
    }
  }
}

btns[5].onclick = function() {
  quest[2].classList.remove('q-3');
  quest[3].classList.add('q-4');
}
