$(document).ready(() => {
  $('.ben.heat').hide();
  $('.ben.fire').hide();
  $('.game_over').hide();
  $('.ruleSet').hide();

    const me = {cups_left:10,
                streak:[],
              heat:false,
            won:false,
          five_rerack: false,
          four_rerack: false,
        three_rerack: false,
        two_rerack: false,
      one_rerack: false,
    reracks:0};

    const them = {cups_left:10,
                  streak: [],
                heat:false,
              won:false,
            five_rerack: false,
            four_rerack: false,
          three_rerack:false,
          two_rerack: false,
        one_rerack: false,
      reracks:0};

    const game = {my_turn: true,
    nightMode:false};

    $('#their_houseRules').on('click', ()=>{
      $('.ruleSet').show();
    })

    $('#houseRules').on('click', ()=>{
      $('.ruleSet').show();
    })

    $('.ruleSet').on('click', ()=>{
      $('.ruleSet').hide();
    })



    $('#gentlemans').on('click',()=>{
      makeGentlemans();
      me.reracks++;
      me.one_rerack=true;
    })

    $('#their_gentlemans').on('click',()=>{
      makeTheirGentlemans();
      them.reracks++;
      me.one_rerack=true;
    })
    
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

      const makeZipper = () => {
        $('.cup').show();
 
        $('#cup6').hide();
        $('#cup5').hide();
        $('#cup1').css('left','140px');
        $('#cup1').css('top','530px');
        $('#cup3').css('top','470px');
        $('#cup3').css('left','140px');
        $('#cup7').hide();
        $('#cup4').css('left','200px')
        $('#cup4').css('top','440px')

        $('#cup0').hide()
        $('#cup8').css('top','500px')
        $('#cup8').css('left','200px')

        $('#cup2').hide();
        $('#cup9').hide();
        
      }

      $('#zipper').on('click',()=>{
        makeZipper();
        me.four_rerack=true;
        me.reracks++;
      })

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


      const makeTwoDown = () => {
        $('.cup').show();

        $('#cup6').hide();
        $('#cup5').hide();
        $('#cup1').css('left','170px');
        $('#cup1').css('top','530px');

        $('#cup3').hide();
        $('#cup7').css('top','470px');
        $('#cup7').css('left','170px')
        $('#cup4').hide();

        $('#cup0').hide()
        $('#cup8').hide()
        $('#cup2').hide();
        $('#cup9').hide();
      }

      $('#twoDown').on('click',()=>{
        makeTwoDown();
        me.two_rerack=true;
        me.reracks++;
      })

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

      const theyMakeZipper = () => {
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

        $('#cup20').hide()
        $('#cup28').css('bottom','430px')
        $('#cup28').css('left','200px')

        $('#cup22').hide();
        $('#cup29').hide();
        
      }

      $('#they_zipper').on('click',()=>{
        theyMakeZipper();
        them.reracks++;
      })

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

      const theyMakeTwoDown = () => {
        $('.their_cup').show();

        $('#cup26').hide();
        $('#cup25').hide();
        $('#cup21').css('left','170px');
        $('#cup21').css('bottom','520px');
 
        $('#cup23').hide();
        $('#cup27').css('bottom','460px');
        $('#cup27').css('left','170px')
        $('#cup24').hide();
    

        $('#cup20').hide()
        $('#cup28').hide()
        $('#cup22').hide();
        $('#cup29').hide();
        
      }

      $('#theyTwoDown').on('click',()=>{
        theyMakeTwoDown();
        them.two_rerack=true;
        them.reracks++;
      })
      
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
        me.reracks++;
      })
    
      $("#stoplight").on('click',()=>{
        makeStoplight();
        me.three_rerack=true;
        me.reracks++;
      })
    
      $("#triangle").on('click',()=>{
        makeTriangle();
        me.three_rerack=true;
        me.reracks++;
      })
    
      $("#start").mousedown(function(){
        $(".ball").animate({top: '700px', left: "700px"},4000);
      });
    
      $("#nightMode").click(function(){
        $('body').css('backgroundColor','black')
      })


      $("#they_rerack").on('click',()=>{
        theyMakeThreeTwo();
        them.five_rerack=true;
        them.reracks++;
      })
    
      $("#they_stoplight").on('click',()=>{
        theyMakeStoplight();
        them.three_rerack=true;
        them.reracks++;
      })
    
      $("#they_triangle").on('click',()=>{
        theyMakeTriangle();
        them.three_rerack=true;
        them.reracks++;
      })
    
    
    $("#start").mouseup(function(){
      $('.ball').stop();
      $(".ball").animate({left: "10px", top: "700px"},2500);
    })
    
    
    $("#they_start").mouseup(function(){
    $('.their_ball').stop();
    $(".their_ball").animate({bottom: "700px",left:'10px'},2500);
    })
    
    $("#they_start").mousedown(function(){
      
      $(".their_ball").animate({bottom: "700px",left: "700px"},4000);
    });
    
    $('#they_start').keypress(function() {
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
          //if($(`#cup2${i}`).css("display")=="none"){them.cups_left++}//delete this if it messes everything
          $(`#cup2${i}`).hide(200);
          console.log('HIT!');
          if($(`#cup2${i}`).css("display")!="none"){them.cups_left--;}//remove the first part of this if it fucks things up
          if (them.cups_left==0){them.won=true};
          if($(`#cup2${i}`).css("display")!="none"){them.streak.push('make')};

        }
      }
      them.streak.push('miss');
      if (them.streak[them.streak.length-2]=='miss'){them.heat=false}
      $('.their_ball').css('left','200px');
      $('.their_ball').css('bottom','10px');
      game.my_turn=true;
      checkFire();
      checkIfIWon();
      checkButtons();
    })

    $('#start').keypress(function() {
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
          //if($(`#cup${i}`).css("display")=="none"){me.cups_left++}//Delete this if it messes up everything
          $(`#cup${i}`).hide(200);
          console.log('HIT!')
          if($(`#cup${i}`).css("display")!="none"){me.cups_left--;}
          if (me.cups_left==0){me.won=true}
          if($(`#cup${i}`).css("display")!="none"){me.streak.push("make")};//same thing here I may have ruined this
        }
      }
      $('.ball').css('left','200px');
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
    me.won=false;
    them.won=false;
    me.cups_left=1;
    them.cups_left=1;
  }
  if(them.won==true && me.won==true && me.streak[me.streak.length-2]=="miss" && them.streak[them.streak.length-2]=="make"){
    console.log('they won');
    $('.game_over').show();
  }
  if (them.won==false && me.won==false){
    console.log('Your turn bucko!');
  }
  

}
$('#nightMode').on('click',()=>{
  if(game.nightMode==false){$('body').css("background-image",'url(https://lovepirate77.files.wordpress.com/2015/07/img_4757.png)');
game.nightMode=true;}
  else {$('body').css("background-image","url(https://i.pinimg.com/originals/59/03/60/590360c0e4f42455bbd4d35d50a9e6b4.jpg)");
game.nightMode=false;}
})

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
    me.won=false;
    them.won=false;
    me.cups_left=1;
    them.cups_left=1;
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
  them.one_rerack=true;
  
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
  me.one_rerack=true;
}

    const checkFire = () => {
      if (me.streak[me.streak.length-2]=="make" && me.streak[me.streak.length-4]=="make" && me.streak[me.streak.length-6]=="make" && me.heat==true){
        $('.ball').css("background-image","url(https://image.freepik.com/free-photo/blazing-fire-flame-background-textured_3236-1123.jpg)")
        //$('.ball').css("background-image","url(https://media.istockphoto.com/photos/lava-background-picture-id621391550?k=6&m=621391550&s=612x612&w=0&h=bw4i-J29uP6Kl3WqO-O0XlqHRHY12cIOcbtjE_Zr8zE=)")
        game.my_turn=true;
      }
      else {

        $('.ball').css("background-color","white");
        $('.ball').css("background-image","none");
        if (them.streak[them.streak.length-2]=="make" && them.streak[them.streak.length-4]=="make" && them.streak[them.streak.length-6]=="make" && them.heat==true){
          $('.their_ball').css("background-image","url(https://image.freepik.com/free-photo/blazing-fire-flame-background-textured_3236-1123.jpg)")
          //$('.their_ball').css("background-image","url(https://media.istockphoto.com/photos/lava-background-picture-id621391550?k=6&m=621391550&s=612x612&w=0&h=bw4i-J29uP6Kl3WqO-O0XlqHRHY12cIOcbtjE_Zr8zE=)")
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
        if (me.cups_left==5 && me.five_rerack==false && me.heat==false  && them.won!=true){
          $('#rerack').show();
          $('#triangle').hide();
          $('#stoplight').hide();
        }
        if (me.cups_left==4 && me.four_rerack==false && me.heat==false && them.won!=true){
          $('#zipper').show();
          $('#rerack').hide();
          $('#triangle').hide();
          $('#stoplight').hide();
        }
        if (me.cups_left==3 && me.three_rerack==false && me.heat==false && me.reracks<2 && them.won!=true){
          $('#rerack').hide();
          $('#triangle').show();
          $('#stoplight').show();
        }
        if (me.cups_left==2 && me.two_rerack==false && me.heat==false && me.reracks<2 && them.won!=true){
          $('#twoDown').show();
          $('#zipper').hide();
          $('#rerack').hide();
          $('#triangle').hide();
          $('#stoplight').hide();
        }
        if (me.cups_left==1 && me.one_rerack==false && me.heat==false){
          $('#gentlemans').show();
          $('#rerack').hide();
          $('#triangle').hide();
          $('#stoplight').hide();
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
        if (them.cups_left==5 && game.my_turn == false && them.five_rerack==false && them.heat==false && me.won!=true){
          $('#they_rerack').show();
          $('#they_triangle').hide();
          $('#they_stoplight').hide();
        }
        if (them.cups_left==4 && game.my_turn == false && them.four_rerack==false && them.heat==false && me.won!=true){
          $('#they_zipper').show();
          $('#they_rerack').hide();
          $('#they_triangle').hide();
          $('#they_stoplight').hide();
        }
        if (them.cups_left==3 && game.my_turn == false && them.three_rerack==false && them.heat==false && them.reracks<2 && me.won!=true){
          $('#they_rerack').hide();
          $('#they_triangle').show();
          $('#they_stoplight').show();
        }
        if (them.cups_left==2 && game.my_turn == false && them.two_rerack==false && them.heat==false && them.reracks<2 && me.won!=true){
          $('#theyTwoDown').show();
          $('#they_zipper').hide();
          $('#they_rerack').hide();
          $('#they_triangle').hide();
          $('#they_stoplight').hide();
        }
        if (them.cups_left==1 && game.my_turn == false && them.one_rerack==false && them.heat==false){
          $('#their_gentlemans').show();
          $('#they_rerack').hide();
          $('#they_triangle').hide();
          $('#they_stoplight').hide();
        }
        if (them.streak[them.streak.length-2]=="make" && them.streak[them.streak.length-4]=="make" && them.heat==false){
          $('.their_heat').show();

        }
      }
    }
    
    checkButtons();

    const resetBalls = () => {
      $('.ball').css('left','200px');
      $('.ball').css('top','10px');
      $('.their_ball').css('left','200px');
      $('.their_ball').css('bottom','10px');
    }

    $('#their_resetBalls').on('click', ()=>{
      resetBalls();
    })

    $('#resetBalls').on('click', ()=>{
      resetBalls();
    })
        
$('.heat').on('click',()=>{
        if (game.my_turn==true){
          me.heat=true;
          $('.heat').hide();
        }
    })

$('.their_heat').on('click',()=>{
      if (game.my_turn==false){
        them.heat=true;
        $('.their_heat').hide()

      }
  })
    
    ;})
    