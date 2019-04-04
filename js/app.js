$(document).ready(() => {
    let player = '';
    //player = prompt('type your player');

    const me = {cups_left:10,
                streak:[]};
    const them = {cups_left:10,
                  streak: []};
    const game = {my_turn: true};
    
    let my_makes=0;
    let their_makes=0;
    const $ball = $('.ball');
    const $cup = $('.cup');
    $('body').append(`<h2>I have made ${my_makes} and they have made ${their_makes}</h2>`)
    
    
    
     
      $('.cup').on('click', event => {
        $(event.currentTarget).hide();
        my_makes++;
        $('h2').empty();
        $('body').append(`<h2>I have made ${my_makes} and they have made ${their_makes}</h2>`);
      });
    
      $('.their_cup').on('click', event => {
        $(event.currentTarget).hide();
        their_makes++;
        $('h2').empty();
        $('body').append(`<h2>I have made ${my_makes} and they have made ${their_makes}</h2>`);
      });
    
      $("#start").click(function(){
        $(".ball").animate({left: "300px"},10000);
      });
    
      $("#nightMode").click(function(){
        $('body').css('backgroundColor','black')
      })
    
      const makeThreeTwo = () => {
        $('.cup').show();
        $('#cup6').hide();
        $('#cup5').hide();
        $('#cup1').css('left','140px');
        $('#cup1').css('top','600px');
        $('#cup3').css('top','540px');
        $('#cup3').css('left','140px');
        $('#cup7').css('top','480px');
        $('#cup7').css('left','140px')
        $('#cup4').css('left','200px')
        $('#cup4').css('top','510px')
        $('#cup0').hide()
        $('#cup8').css('top','570px')
        $('#cup8').css('left','200px')
        $('#cup2').hide();
        $('#cup9').hide();
        
      }
    
      const makeTriangle = () => {
        $('.cup').show();
        $('#cup6').hide();
        $('#cup5').hide();
        $('#cup1').css('left','140px');
        $('#cup1').css('top','600px');
        $('#cup3').css('top','540px');
        $('#cup3').css('left','140px');
        $('#cup7').hide();
        $('#cup7').hide();
        $('#cup4').hide();
        $('#cup0').hide()
        $('#cup8').css('top','570px')
        $('#cup8').css('left','200px')
        $('#cup2').hide();
        $('#cup9').hide();
        
      }
    
      const makeStoplight = () => {
        $('.cup').show();
        $('#cup6').hide();
        $('#cup5').hide();
        $('#cup1').css('left','170px');
        $('#cup1').css('top','600px');
        $('#cup3').hide();
        $('#cup7').css('top','540px');
        $('#cup7').css('left','170px')
        $('#cup4').css('left','170px')
        $('#cup4').css('top','480px')
        $('#cup0').hide()
        $('#cup8').hide()
        $('#cup2').hide();
        $('#cup9').hide();
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
      $(".ball").animate({top: "700px"},10000);
    })
    
    
    
    
    
    
    $('#they_stop').click(function() {
      $('.their_ball').stop();
    
    })
    
    $("#they_go").click(function(){
    $(".their_ball").animate({bottom: "700px"},10000);
    })
    
    $("#they_start").click(function(){
      $(".their_ball").animate({left: "10px"},10000);
    });
    
    $('#they_endeth').click(function() {
      $('.their_ball').stop();
      let e;
      let f;
      let g;
      let h;
    
      console.log($('.their_ball').css('left'))
      console.log('balls left margin^')
      console.log($('.their_ball').css('top'))
      console.log('balls top margin^')
      let a = $('.their_ball').css('left');
      let b = parseInt(a,10);
      console.log(`Our left margin b` + b);
      let c = $('.their_ball').css('top');
      let d = parseInt(c,10);
      console.log(`Our top margin d` +d);
      for (i=0;i<10;i++){
        //console.log($(`#cup${i}`).css('left'))
        let e = $(`#cup2${i}`).css('left')
        let f = parseInt(e,10);
        //console.log(`cup ${i}s left margin is ${f} and top margin is ${h}`)
        //console.log( `cup${i}'s left margin^`)
        //console.log($(`#cup${i}`).css('top'))
        let g = $(`#cup2${i}`).css('top')
        let h = parseInt(g,10);
        console.log(`cup 2${i}s left margin  f is 2${f} and top margin is h 2${h}`)
        //console.log( `cup${i}'s right margin^`)
        console.log("d>h && d<(h+30) && b>f && b<(f-30)")
        console.log(`Our left margin b` + b);
        console.log(`Our top margin d` +d);
        if(d>h && d<(h+30) && b>f && b<(f+30)){
          $(`#cup2${i}`).hide();
          them.cups_left--;
          game.my_turn=true;
          them.streak.push('hit');
          checkButtons();
        }
        else {
          game.my_turn=true;
          them.streak.push('miss');
          checkButtons();
        }
        $('.their_ball').css('left','350px');
        $('.their_ball').css('bottom','10px');
      }
    
    })
    


    const checkButtons = () => {
      if (game.my_turn==true){
        $('.ben').show();
        $('.ben.reracks').hide();
        $('.their_ben').hide();
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
      }
      else {
        $('.their_ben').show();
        $('.their_ben.reracks').hide();
        $('.ben').hide();
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
      }


    }
    
    checkButtons();
    
    const theyMakeThreeTwo = () => {
      $('.their_cup').show();
      $('#cup26').hide();
      $('#cup25').hide();
      $('#cup21').css('left','140px');
      $('#cup21').css('bottom','500px');
      $('#cup23').css('bottom','4400px');
      $('#cup23').css('left','140px');
      $('#cup27').css('bottom','4420px');
      $('#cup27').css('left','140px')
      $('#cup24').css('left','200px')
      $('#cup24').css('bottom','470px')
      $('#cup20').hide()
      $('#cup28').css('bottom','410px')
      $('#cup28').css('left','200px')
      $('#cup22').hide();
      $('#cup29').hide();
      
    }
    const theyMakeStoplight = () => {
      $('.their_cup').show();
      $('#cup26').hide();
      $('#cup25').hide();
      $('#cup21').css('left','170px');
      $('#cup21').css('bottom','500px');
      $('#cup23').hide();
      $('#cup27').css('bottom','440px');
      $('#cup27').css('left','170px')
      $('#cup24').css('left','170px')
      $('#cup24').css('bottom','380px')
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
      $('#cup21').css('bottom','500px');
      $('#cup23').css('top','540px');
      $('#cup23').css('bottom','140px');
      $('#cup27').hide();
      $('#cup24').css('left','200px')
      $('#cup24').css('bottom','470px')
      $('#cup20').hide();
      $('#cup28').hide();
      $('#cup22').hide();
      $('#cup29').hide();
      
    }
    
    //for (i=1;i<10;i++){
    //  console.log($(`#cup${i}`).css('left'))
    //  console.log( `cup${i}'s left margin^`)
    //  console.log($(`#cup${i}`).css('top'))
    //  console.log( `cup${i}'s right margin^`)
    //}
    
    
    $('#endeth').click(function() {
      $('.ball').stop();
      let e;
      let f;
      let g;
      let h;
    
      console.log($('.ball').css('left'))
      console.log('balls left margin^')
      console.log($('.ball').css('top'))
      console.log('balls top margin^')
      let a = $('.ball').css('left');
      let b = parseInt(a,10);
      console.log(`Our left margin b` + b);
      let c = $('.ball').css('top');
      let d = parseInt(c,10);
      console.log(`Our top margin d` +d);
      for (i=0;i<10;i++){
        //console.log($(`#cup${i}`).css('left'))
        let e = $(`#cup${i}`).css('left')
        let f = parseInt(e,10);
        //console.log(`cup ${i}s left margin is ${f} and top margin is ${h}`)
        //console.log( `cup${i}'s left margin^`)
        //console.log($(`#cup${i}`).css('top'))
        let g = $(`#cup${i}`).css('top')
        let h = parseInt(g,10);
        console.log(`cup ${i}s left margin  f is ${f} and top margin is h ${h}`)
        //console.log( `cup${i}'s right margin^`)
        console.log("d>h && d<(h+30) && b>f && b<(f-30)")
        console.log(`Our left margin b` + b);
        console.log(`Our top margin d` +d);
        if(d>h && d<(h+30) && b>f && b<(f+30)){
          $(`#cup${i}`).hide();
          me.cups_left--;
          game.my_turn=false;
          me.streak.push("make");
          checkButtons();
        }
        else {
          game.my_turn=false;
          me.streak.push("miss");
          checkButtons();
        }
        $('.ball').css('left','0');
        $('.ball').css('top','80px');
      }
    
    })
    
    
    
    
    ;})
    