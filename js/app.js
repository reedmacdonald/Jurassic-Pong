$(document).ready(() => {
  $('.ben.heat').hide();
  $('.ben.fire').hide();
  $('.game_over').hide();

    const me = {cups_left:10,
                streak:[],
              heat:false,
            won:false,
          five_rerack: false,
        three_rerack: false};

    const them = {cups_left:10,
                  streak: [],
                heat:false,
              won:false,
            five_rerack: false,
          three_rerack:false};

    const game = {my_turn: true};
    
      const makeThreeTwo = () => {
        $('.cup').show();
 
        $('#cup6').hide();
        $('#cup5').hide();
        $('#cup1').css('left','140px');
        $('#cup1').css('top','530px');
        $('#cup3').css('top','470px');
        $('#cup3').css('left','140px');
        $('#cup7').css('top','410px');
        $('#cup7').css('left','140px')
        $('#cup4').css('left','200px')
        $('#cup4').css('top','440px')

        $('#cup0').hide()
        $('#cup8').css('top','500px')
        $('#cup8').css('left','200px')

        $('#cup2').hide();
        $('#cup9').hide();
        
      }
      const makeTriangle = () => {
        $('.cup').show();

        $('#cup6').hide();
        $('#cup5').hide();
        $('#cup1').css('left','140px');
        $('#cup1').css('top','530px');
        $('#cup3').css('top','470px');
        $('#cup3').css('left','140px');

        $('#cup7').hide();
        $('#cup7').hide();
        $('#cup4').hide();
        $('#cup0').hide();
        $('#cup8').css('top','500px');
        $('#cup8').css('left','200px');

        $('#cup2').hide();
        $('#cup9').hide();    
      }
    
      const makeStoplight = () => {
        $('.cup').show();

        $('#cup6').hide();
        $('#cup5').hide();
        $('#cup1').css('left','170px');
        $('#cup1').css('top','530px');

        $('#cup3').hide();
        $('#cup7').css('top','470px');
        $('#cup7').css('left','170px')
        $('#cup4').css('left','170px')
        $('#cup4').css('top','410px')

        $('#cup0').hide()
        $('#cup8').hide()
        $('#cup2').hide();
        $('#cup9').hide();
      }
      const theyMakeThreeTwo = () => {
        $('.their_cup').show();

        $('#cup26').hide();
        $('#cup25').hide();
        $('#cup21').css('left','140px');
        $('#cup21').css('bottom','520px');
        $('#cup23').css('bottom','460px');
        $('#cup23').css('left','140px');
        $('#cup27').css('bottom','400px');
        $('#cup27').css('left','140px')
        $('#cup24').css('left','200px')
        $('#cup24').css('bottom','490px')

        $('#cup20').hide()
        $('#cup28').css('bottom','430px')
        $('#cup28').css('left','200px')

        $('#cup22').hide();
        $('#cup29').hide();
        
      }
      const theyMakeStoplight = () => {
        $('.their_cup').show();

        $('#cup26').hide();
        $('#cup25').hide();
        $('#cup21').css('left','170px');
        $('#cup21').css('bottom','520px');
 
        $('#cup23').hide();
        $('#cup27').css('bottom','460px');
        $('#cup27').css('left','170px')
        $('#cup24').css('left','170px')
        $('#cup24').css('bottom','400px')

        $('#cup20').hide()
        $('#cup28').hide()
        $('#cup22').hide();
        $('#cup29').hide();
        
      }
      
      const theyMakeTriangle = () => {
        $('.their_cup').show();
        $('#cup26').hide();

        $('#cup25').hide();
        $('#cup21').css('left','140px');
        $('#cup21').css('bottom','520px');
        $('#cup23').css('bottom','460px');
        $('#cup23').css('left','140px');

        $('#cup27').hide();
        $('#cup24').css('left','200px')
        $('#cup24').css('bottom','490px')
        $('#cup20').hide();

        $('#cup28').hide();

        $('#cup22').hide();

        $('#cup29').hide();
      }
    
      $("#rerack").on('click',()=>{
        makeThreeTwo();
        me.five_rerack=true;
      })
    
      $("#stoplight").on('click',()=>{
        makeStoplight();
        me.three_rerack=true;
      })
    
      $("#triangle").on('click',()=>{
        makeTriangle();
        me.three_rerack=true;
      })
    
      $("#start").click(function(){
        $(".ball").animate({left: "700px"},4000);
      });
    
      $("#nightMode").click(function(){
        $('body').css('backgroundColor','black')
      })


      $("#they_rerack").on('click',()=>{
        theyMakeThreeTwo();
        them.five_rerack=true;
      })
    
      $("#they_stoplight").on('click',()=>{
        theyMakeStoplight();
        them.three_rerack=true;
      })
    
      $("#they_triangle").on('click',()=>{
        theyMakeTriangle();
        them.three_rerack=true;
      })
    
      $('#stop').click(function() {
        $('.ball').stop();
    
    })
    
    $("#go").click(function(){
      $(".ball").animate({top: "700px"},4000);
    })
    
    $('#they_stop').click(function() {
      $('.their_ball').stop();
    
    })
    
    $("#they_go").click(function(){
    $(".their_ball").animate({bottom: "700px"},4000);
    })
    
    $("#they_start").click(function(){
      $(".their_ball").animate({left: "10px"},4000);
    });
    
    $('#they_endeth').click(function() {
      $('.their_ball').stop();
      let e, f, g, h;
      let a = $('.their_ball').css('left');
      let b = parseInt(a,10);
      let c = $('.their_ball').css('top');
      let d = parseInt(c,10);
      for (i=0;i<10;i++){
        let e = $(`#cup2${i}`).css('left')
        let f = parseInt(e,10);
        let g = $(`#cup2${i}`).css('top')
        let h = parseInt(g,10);

        if(d>h && d<(h+30) && b>f && b<(f+30)){
          //$(`#cup${i}`).css('left','10000px');
          $(`#cup2${i}`).hide(200);
          console.log('HIT!');
          them.cups_left--;
          if (them.cups_left==0){them.won=true};
          them.streak.push('make');

        }
      }
      them.streak.push('miss');
      if (them.streak[them.streak.length-2]=='miss'){them.heat=false}
      $('.their_ball').css('left','350px');
      $('.their_ball').css('bottom','10px');
      game.my_turn=true;
      checkFire();
      checkIfIWon();
      checkButtons();
    })

    $('#endeth').click(function() {
      $('.ball').stop();
      let e, f, g, h;    
      let a = $('.ball').css('left');
      let b = parseInt(a,10);
      let c = $('.ball').css('top');
      let d = parseInt(c,10);
      for (i=0;i<10;i++){
        let e = $(`#cup${i}`).css('left')
        let f = parseInt(e,10);
        let g = $(`#cup${i}`).css('top')
        let h = parseInt(g,10);
        if(d>h && d<(h+30) && b>f && b<(f+30)){
          //$(`#cup${i}`).css('left','10000px');
          $(`#cup${i}`).hide(200);
          console.log('HIT!')
          me.cups_left--;
          if (me.cups_left==0){me.won=true}
          me.streak.push("make");
        }
      }
      $('.ball').css('left','0');
      $('.ball').css('top','10px');
      me.streak.push("miss");
      if (me.streak[me.streak.length-2]=='miss'){me.heat=false}
      game.my_turn=false;
      checkFire();
      checkIfTheyWon();
      checkButtons();    
    })

const checkIfTheyWon = () => {
  if(them.won==true && me.streak[me.streak.length-2]=="miss" && me.won==false){
    console.log('they won!');
    $('.game_over').show();
  }
  if(them.won==true && me.won==true && me.streak[me.streak.length-2]=="make"){
    game.my_turn=true;
  }
  if(them.won==true && me.won==true && me.streak[me.streak.length-2]=="make"){
    makeGentlemans();
    makeTheirGentlemans();
  }
  if(them.won==true && me.won==true && me.streak[me.streak.length-2]=="miss" && them.streak[them.streak.length-2]=="make"){
    console.log('they won');
    $('.game_over').show();
  }
  if (them.won==false && me.won==false){
    console.log('Your turn bucko!');
  }
  

}

$('#game_over_yes').on('click',()=>{
  location.reload();
})
$('#game_over_no').on('click',()=>{
  $('.game_over').hide();
})

const checkIfIWon = () => {
  if(me.won==true && them.streak[them.streak.length-2]=="miss" && them.won==false){
    console.log('I won!');
    $('.game_over').show();
  }
  if(me.won==true && them.won==false && them.streak[them.streak.length-2]=="make"){
    game.my_turn=false;
  }
  if(me.won==true && them.won==true && them.streak[them.streak.length-2]=="make"){
    makeGentlemans();
    makeTheirGentlemans();
  }
  if(them.won==true && me.won==true && me.streak[me.streak.length-2]=="make" && them.streak[them.streak.length-2]=="miss"){
    console.log('I won');
    $('.game_over').show();
  }
  if (them.won==false && me.won==false){
    console.log('Your turn bucko!');
  }
}

const makeTheirGentlemans = () => {
  $('.their_cup').show();
  $('#cup26').hide();
  $('#cup25').hide();
  $('#cup21').css('left','170px');
  $('#cup21').css('bottom','520px');
  $('#cup23').hide();
  $('#cup27').hide();
  $('#cup24').hide();
  $('#cup20').hide();
  $('#cup28').hide();
  $('#cup28').hide();
  $('#cup22').hide();
  $('#cup29').hide();
  
}

const makeGentlemans = () => {
  $('.cup').show();
  $('#cup6').hide();
  $('#cup5').hide();
  $('#cup1').css('left','170px');
  $('#cup1').css('top','530px');
  $('#cup3').hide();
  $('#cup7').hide();
  $('#cup4').hide();
  $('#cup0').hide()
  $('#cup8').hide()
  $('#cup2').hide();
  $('#cup9').hide();
}

    const checkFire = () => {
      if (me.streak[me.streak.length-2]=="make" && me.streak[me.streak.length-4]=="make" && me.streak[me.streak.length-6]=="make" && me.heat==true){
        $('.ball').css("background-image","url(https://image.freepik.com/free-photo/blazing-fire-flame-background-textured_3236-1123.jpg)")

        game.my_turn=true;
      }
      else {

        $('.ball').css("background-color","white");
        $('.ball').css("background-image","none");
        if (them.streak[them.streak.length-2]=="make" && them.streak[them.streak.length-4]=="make" && them.streak[them.streak.length-6]=="make" && them.heat==true){
          $('.their_ball').css("background-image","url(https://image.freepik.com/free-photo/blazing-fire-flame-background-textured_3236-1123.jpg)")
          game.my_turn=false;
  
        }
        else {
          $('.their_ball').css("background-color","white");
          $('.their_ball').css("background-image","none");
        }
      }
    }

    const checkButtons = () => {
      //if (them.cups_left==0 || me.cups_left==0){alert('The game is over')}
      if (game.my_turn==true){
        $('.ben').show();
        $('.ben.reracks').hide();
        $('.their_ben').hide();
        $('.heat').hide();
        $('.fire').hide();
        $('.their_heat').hide();
        $('.their_fire').hide();
        if (me.cups_left==5 && me.five_rerack==false && me.heat==false){
          $('#rerack').show();
          $('#triangle').hide();
          $('#stoplight').hide();
        }
        if (me.cups_left==3 && me.three_rerack==false && me.heat==false){
          $('#rerack').hide();
          $('#triangle').show();
          $('#stoplight').show();
        }
        if (me.streak[me.streak.length-2]=="make" && me.streak[me.streak.length-4]=="make" && me.heat==false){
          $('.heat').show();

        }
      }
      else {
        $('.their_ben').show();
        $('.their_ben.reracks').hide();
        $('.ben').hide();
        $('.heat').hide();
        $('.fire').hide();
        $('.their_heat').hide();
        $('.their_fire').hide();
        if (them.cups_left==5 && game.my_turn == false && them.five_rerack==false && them.heat==false){
          $('#they_rerack').show();
          $('#they_triangle').hide();
          $('#they_stoplight').hide();
        }
        if (them.cups_left==3 && game.my_turn == false && them.three_rerack==false && them.heat==false){
          $('#they_rerack').hide();
          $('#they_triangle').show();
          $('#they_stoplight').show();
        }
        if (them.streak[them.streak.length-2]=="make" && them.streak[them.streak.length-4]=="make" && them.heat==false){
          $('.their_heat').show();

        }
      }
    }
    
    checkButtons();
        
$('.heat').on('click',()=>{
        if (game.my_turn==true){
          me.heat=true;
        }
    })

$('.their_heat').on('click',()=>{
      if (game.my_turn==false){
        them.heat=true;

      }
  })
    
    ;})
    