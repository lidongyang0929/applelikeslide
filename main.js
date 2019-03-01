var allButtons = $('#buttons > #button')
for(let i=0;i<allButtons.length;i++){
  $(allButtons[i]).on('click',function(x){
    var index = $(x.currentTarget).index()
    var p= index*(-920)
    $('#images').css({
      transform: 'translate('+ p+ 'px)'
    })   
    n = index
    activeButton(allButtons.eq(n))
  })
}

function activeButton($button){
    $button.addClass('grey').siblings('.grey').removeClass('grey')
}



