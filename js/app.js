$(document).ready(() => {
  $('.ben.heat').hide();
  $('.ben.fire').hide();

    const me = {cups_left:10,
                streak:[],
              heat:false};

    const them = {cups_left:10,
                  streak: [],
                heat:false};

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
        $('#cup0').hide()
        $('#cup8').css('top','500px')
        $('#cup8').css('left','200px')
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
        $('#cup27').css('bottom','460px');
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
      })
    
      $("#stoplight").on('click',()=>{
        makeStoplight();
      })
    
      $("#triangle").on('click',()=>{
        makeTriangle();
      })
    
      $("#start").click(function(){
        $(".ball").animate({left: "700px"},4000);
      });
    
      $("#nightMode").click(function(){
        $('body').css('backgroundColor','black')
      })


      $("#they_rerack").on('click',()=>{
        theyMakeThreeTwo();
      })
    
      $("#they_stoplight").on('click',()=>{
        theyMakeStoplight();
      })
    
      $("#they_triangle").on('click',()=>{
        theyMakeTriangle();
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
          $(`#cup2${i}`).hide();
          them.cups_left--;
          them.streak.push('make');

        }
      }
      them.streak.push('miss');
      $('.their_ball').css('left','350px');
      $('.their_ball').css('bottom','10px');
      game.my_turn=true;
      checkFire();
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
          $(`#cup${i}`).hide();
          me.cups_left--;
          me.streak.push("make");
        }
      }
      $('.ball').css('left','0');
      $('.ball').css('top','10px');
      me.streak.push("miss");
      game.my_turn=false;
      checkFire();
      checkButtons();    
    })


    

    const checkFire = () => {
      console.log('I am checking for fire');
      if (me.streak[me.streak.length-2]=="make" && me.streak[me.streak.length-4]=="make" && me.streak[me.streak.length-6]=="make" && me.heat==true){

        console.log('I am making the ball a fire because I am on fire')
        $('.ball').css("background-image","url(https://image.freepik.com/free-photo/blazing-fire-flame-background-textured_3236-1123.jpg)")
        console.log('Still your turn because you are on fire');
        game.my_turn=true;
      }
      else {
        console.log('I found no fire for you')
        $('.ball').css("background-color","white");
        $('.ball').css("background-image","none");
        if (them.streak[them.streak.length-2]=="make" && them.streak[them.streak.length-4]=="make" && them.streak[them.streak.length-6]=="make" && them.heat==true){
          console.log('Still there turn because they are on fire');
          console.log('I am making the ball a fire because THEY ARE on fire')
          $('.their_ball').css("background-image","url(https://image.freepik.com/free-photo/blazing-fire-flame-background-textured_3236-1123.jpg)")
          game.my_turn=false;
  
        }
        else {
          console.log('I found no fire for them')
          $('.their_ball').css("background-color","white");
          $('.their_ball').css("background-image","none");
        }
      }
      //if (them.streak[them.streak.length-2]=="make" && them.streak[them.streak.length-4]=="make" && them.streak[them.streak.length-6]=="make" && them.heat==true){
      //  console.log('Still there turn because they are on fire');
      //  console.log('I am making the ball a fire because THEY ARE on fire')
      //  $('.their_ball').css("background-image","url(https://image.freepik.com/free-photo/blazing-fire-flame-background-textured_3236-1123.jpg)")
      //  game.my_turn=false;

      //}
      //else {
      //  console.log('I found no fire for them')
      //  $('.their_ball').css("background-color","white");
      //}
    }





    const checkButtons = () => {
      if (them.cups_left==0 || me.cups_left==0){alert('The game is over')}
      if (game.my_turn==true){
        $('.ben').show();
        $('.ben.reracks').hide();
        $('.their_ben').hide();
        $('.heat').hide();
        $('.fire').hide();
        $('.their_heat').hide();
        $('.their_fire').hide();
        if (me.cups_left==5){
          $('#rerack').show();
          $('#triangle').hide();
          $('#stoplight').hide();
        }
        if (me.cups_left==3){
          $('#rerack').hide();
          $('#triangle').show();
          $('#stoplight').show();
        }
        if (me.streak[me.streak.length-2]=="make" && me.streak[me.streak.length-4]=="make"){
          $('.heat').show();
          console.log('I am showing the heat button because I am heating')
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
        if (them.cups_left==5 && game.my_turn == false){
          $('#they_rerack').show();
          $('#they_triangle').hide();
          $('#they_stoplight').hide();
        }
        if (them.cups_left==3 && game.my_turn == false){
          $('#they_rerack').hide();
          $('#they_triangle').show();
          $('#they_stoplight').show();
        }
        if (them.streak[them.streak.length-2]=="make" && them.streak[them.streak.length-4]=="make"){
          $('.their_heat').show();
          console.log('It is showing the heat button because they are heating')
        }
      }
    }
    
    checkButtons();
    

        


    
$('.heat').on('click',()=>{
        if (game.my_turn==true){
          me.heat=true;
          console.log('I am heating!')
        }
    })

$('.their_heat').on('click',()=>{
      if (game.my_turn==false){
        them.heat=true;
        console.log('They are heating!')
      }
  })
    
    ;})
    