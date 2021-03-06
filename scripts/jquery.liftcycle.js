/**
 * Validating the registration and sign in form plugin
 */ 
 
 $('#ideas-form').validate({
     rules : {
         name : {
             required : true,
             maxlength : 100
         },
         email : {
             required : true,
             email : true,
             maxlength : 256
         },
         message : {
            required : true,
            maxlength : 1000
         }, 
         spam_protection : {
            required : true,
            maxlength : 100
         }
     }
 });    
$( "#tabs" ).tabs(); 

$('#secure').focus(function() {
    $('#correct-code').fadeOut(1000);
}); 
 
 /**
* Checks whether the input is in numeric format
*/ 
function isNumberKey(evt) {
    var dotsCount = 0; 
    
    var charCode = (evt.which) ? evt.which : evt.keyCode; 
    
    if( (charCode >= 48 && charCode <= 57) || (charCode == 46) ){  
        if(charCode === 46) {
            dotsCount++; 
            if(dotsCount > 1) {
                return false;
            }
        }   
        return true;
    }  
    return false;
    /*
     * 
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57 )) {
        return false;
    }		
    return true;
    */
}  
    function inputChecker(field) { 
        if(field === '' || field === undefined || 
            field === null || field === 0){
            return false;
        }
        return true; 
    }
    
    
 
(function($){  
   
    $('#myModal').modal({
      'backdrop': false,
      'show': false
    });

    var checkInputNumber = function() {
      
        var inputNumber = $(this).val(),  
            dotsCount = 0,
            count,
            digitWhole = 0,
            digitFloating = 0;  
        
        for(count = 0; count < inputNumber.length; count++) { 
            if( (inputNumber[count].charCodeAt(0) >= 48 && 
                inputNumber[count].charCodeAt(0) <= 57) || 
                (inputNumber[count].charCodeAt(0) == 46)) {
                
                if((inputNumber[count].charCodeAt(0) == 46)) {
                    dotsCount++;
                    if(dotsCount > 1) {
                         $(this).val(""); 
                    }
                } else { 
                    if(dotsCount == 1) {
                        digitFloating++; 
                        if(digitFloating>1)
                            $(this).val("");
                    } else {
                        digitWhole++; 
                        if(digitWhole > 3) {
                            $(this).val("");
                        }                        
                    } 
                }  
            }  else {
                $(this).val("");
            }
            
        }         
    }; 
    $(".inputNumberForCalculation").bind('blur',  checkInputNumber); 
       
  
        $('#calculate').click(function() {

            var max = parseInt($('#max').val(), 10); 

            $('#cycle').attr('style', '');

            $('#week1').attr('value', Math.ceil(max * 0.66) || 0);
            $('#week2').attr('value', Math.ceil(max * 0.667) || 0);
            $('#week3').attr('value', Math.ceil(max * 0.7) || 0);
            $('#week4').attr('value', Math.ceil(max * 0.74) || 0);
            $('#week5').attr('value', Math.ceil(max * 0.77) || 0);
            $('#week6').attr('value', Math.ceil(max * 0.81) || 0);
            $('#week7').attr('value', Math.ceil(max * 0.85) || 0);
            $('#week8').attr('value', Math.ceil(max * 0.88) || 0);
            $('#week9').attr('value', Math.ceil(max * 0.92) || 0);
            $('#week10').attr('value', Math.ceil(max * 0.96) || 0);
            $('#week11').attr('value', Math.ceil(max) || 0);
            $('#week12').attr('value', Math.ceil(max * 1.03) || 0);
            $('#week13').attr('value', Math.ceil(max * 1.07) || 0);
            $('#week14').attr('value', Math.ceil(max * 1.10) || 0);
        });

//SMOLOV Squat routine calculations 

        $('#calculateBase').click(function() {
            var maxBase = parseInt($('#maxBase').val(), 10);  

            $('#monBaseW1').attr('value', Math.ceil(maxBase * 0.7) || 0);
            $('#monBaseW2').attr('value', Math.ceil(maxBase * 0.8) || 0);
            $('#monBaseW3').attr('value', Math.ceil(maxBase * 0.85) || 0);

            $('#wedBaseW1').attr('value', Math.ceil(maxBase * 0.75) || 0);
            $('#wedBaseW2').attr('value', Math.ceil(maxBase * 0.85) || 0);
            $('#wedBaseW3').attr('value', Math.ceil(maxBase * 0.95) || 0);

            $('#friBaseW1').attr('value', Math.ceil(maxBase * 0.8) || 0);
            $('#friBaseW2').attr('value', Math.ceil(maxBase * 0.9) || 0);
            $('#friBaseW3').attr('value', Math.ceil(maxBase * 0.95) || 0);

            $('#satBaseW1').attr('value', Math.ceil(maxBase * 0.85) || 0);
            $('#satBaseW2').attr('value', Math.ceil(maxBase * 0.95) || 0);
            $('#satBaseW3').attr('value', Math.ceil(maxBase) || 0);

            $('#baseMax').attr('value', Math.ceil(maxBase * 1.12) || 0);
        });

        //Smolov intense cycle calculations 

        $('#calculateIntense').click(function() {

           var newMax = parseInt($('#newMax').val(), 10);  

           //WEEK 1
           //
           //MONDAY 
           $('#mW1S1').attr('value', Math.ceil(newMax * 0.65) || 0);
           $('#mW1S2').attr('value', Math.ceil(newMax * 0.75) || 0);
           $('#mW1S3').attr('value', Math.ceil(newMax * 0.85) || 0);
           $('#mW1S4').attr('value', Math.ceil(newMax * 0.85) || 0);

           //WEDNESDAY
           $('#wW1S1').attr('value', Math.ceil(newMax * 0.6) || 0);
           $('#wW1S2').attr('value', Math.ceil(newMax * 0.7) || 0);
           $('#wW1S3').attr('value', Math.ceil(newMax * 0.8) || 0);
           $('#wW1S4').attr('value', Math.ceil(newMax * 0.9) || 0);
           $('#wW1S5').attr('value', Math.ceil(newMax * 0.85) || 0);

           //FRIDAY 
           $('#fW1S1').attr('value', Math.ceil(newMax * 0.65) || 0);
           $('#fW1S2').attr('value', Math.ceil(newMax * 0.7) || 0);
           $('#fW1S3').attr('value', Math.ceil(newMax * 0.8) || 0);

           //WEEK 2
           //MONDAY
           $('#mW2S1').attr('value', Math.ceil(newMax * 0.6) || 0);
           $('#mW2S2').attr('value', Math.ceil(newMax * 0.7) || 0 );
           $('#mW2S3').attr('value', Math.ceil(newMax * 0.8) || 0);
           $('#mW2S4').attr('value', Math.ceil(newMax * 0.9) || 0);
           $('#mW2S5').attr('value', Math.ceil(newMax * 0.9) || 0);

           //WEDNESDAY
           $('#wW2S1').attr('value', Math.ceil(newMax * 0.65) || 0);
           $('#wW2S2').attr('value', Math.ceil(newMax * 0.75) || 0);
           $('#wW2S3').attr('value', Math.ceil(newMax * 0.85) || 0 );
           $('#wW2S4').attr('value', Math.ceil(newMax * 0.95) || 0);
           $('#wW2S5').attr('value', Math.ceil(newMax * 0.95) || 0);

           //FRIDAY 
           $('#fW2S1').attr('value', Math.ceil(newMax * 0.65) || 0);
           $('#fW2S2').attr('value', Math.ceil(newMax * 0.75) || 0);
           $('#fW2S3').attr('value', Math.ceil(newMax * 0.85) || 0);
           $('#fW2S4').attr('value', Math.ceil(newMax * 0.9) || 0);   

           //WEEK 3
           //MONDAY
           $('#mW3S1').attr('value', Math.ceil(newMax * 0.65) || 0);
           $('#mW3S2').attr('value', Math.ceil(newMax * 0.7) || 0);
           $('#mW3S3').attr('value', Math.ceil(newMax * 0.8) || 0);
           $('#mW3S4').attr('value', Math.ceil(newMax * 0.9) || 0);

           //WEDNESDAY
           $('#wW3S1').attr('value', Math.ceil(newMax * 0.6) || 0);
           $('#wW3S2').attr('value', Math.ceil(newMax * 0.7) || 0);
           $('#wW3S3').attr('value', Math.ceil(newMax * 0.8) || 0);
           $('#wW3S4').attr('value', Math.ceil(newMax * 0.95) || 0);

           //FRIDAY 
           $('#fW3S1').attr('value', Math.ceil(newMax * 0.65) || 0);
           $('#fW3S2').attr('value', Math.ceil(newMax * 0.75) || 0);
           $('#fW3S3').attr('value', Math.ceil(newMax * 0.85) || 0);
           $('#fW3S4').attr('value', Math.ceil(newMax * 0.95) || 0);      

           //WEEK 4
           //MONDAY
           $('#mW4S1').attr('value', Math.ceil(newMax * 0.7) || 0);
           $('#mW4S2').attr('value', Math.ceil(newMax * 0.8) || 0);
           $('#mW4S3').attr('value', Math.ceil(newMax * 0.9) || 0);

           //WEDNESDAY
           $('#wW4S1').attr('value', Math.ceil(newMax * 0.7) || 0);
           $('#wW4S2').attr('value', Math.ceil(newMax * 0.8) || 0);
           $('#wW4S3').attr('value', Math.ceil(newMax * 0.95) || 0);

            //FRIDAY 
           $('#fW4S1').attr('value', Math.ceil(newMax * 0.75) || 0);
           $('#fW4S2').attr('value', Math.ceil(newMax * 0.9) || 0);
           $('#fW4S3').attr('value', Math.ceil(newMax * 0.95) || 0); 

           //WEEK 4
           //MONDAY
           $('#mW5S1').attr('value', Math.ceil(newMax * 0.75) || 0);
           $('#mW5S2').attr('value', Math.ceil(newMax * 0.85) || 0);  
        });

        /**
         * Calculates Smolov bench press routine
         */
        $('#calculate-bp').click(function() {

             var max_bp = parseInt($('#max-bp').val(), 10);  

             $('#monBPW1').attr('value', Math.ceil(max_bp * 0.7) || 0);
             $('#wedBPW1').attr('value', Math.ceil(max_bp * 0.75) || 0);
             $('#friBPW1').attr('value', Math.ceil(max_bp * 0.8) || 0);
             $('#sunBPW1').attr('value', Math.ceil(max_bp * 0.85) || 0);


             $('#monBPW2').attr('value', Math.ceil(max_bp * 0.7) + 5 || 0);
             $('#wedBPW2').attr('value', Math.ceil(max_bp * 0.75) + 5 || 0);
             $('#friBPW2').attr('value', Math.ceil(max_bp * 0.8) + 5 || 0);
             $('#sunBPW2').attr('value', Math.ceil(max_bp * 0.85) + 5 || 0);

             $('#monBPW3').attr('value', Math.ceil(max_bp * 0.7) + 10 || 0);
             $('#wedBPW3').attr('value', Math.ceil(max_bp * 0.75) + 10 || 0);
             $('#friBPW3').attr('value', Math.ceil(max_bp * 0.8) + 10 || 0);
             $('#sunBPW3').attr('value', Math.ceil(max_bp * 0.85) + 10 || 0); 
        });  

        /**
         * Russian powerlifting system
         */
        $('#calculateRussian').click(function() {

            var sq =  parseInt($('#maxSquat').val(), 10);  
            var bp = parseInt($('#maxBenchpress').val(), 10);  
            var dl = parseInt($('#maxDeadlift').val(), 10);      

            //WEEK 1
            $('#w1s1').attr('value', Math.ceil(sq * 0.8) || 0);
            $('#w1dl').attr('value', Math.ceil(dl * 0.8) || 0);
            $('#w1s2').attr('value', Math.ceil(sq * 0.8) || 0);

            $('#w1bp1').attr('value', Math.ceil(bp * 0.8) || 0);
            $('#w1bp2').attr('value', Math.ceil(bp * 0.8) || 0);

            //WEEK 2    
            $('#w2s1').attr('value', Math.ceil(sq * 0.8) || 0);
            $('#w2dl').attr('value', Math.ceil(dl * 0.8) || 0);
            $('#w2s2').attr('value', Math.ceil(sq * 0.8) || 0);

            $('#w2bp1').attr('value', Math.ceil(bp * 0.8) || 0);
            $('#w2bp2').attr('value', Math.ceil(bp * 0.8) || 0);

            //WEEK 3
            $('#w3s1').attr('value', Math.ceil(sq * 0.8) || 0);
            $('#w3dl').attr('value', Math.ceil(dl * 0.8) || 0);
            $('#w3s2').attr('value', Math.ceil(sq * 0.8) || 0);

            $('#w3bp1').attr('value', Math.ceil(bp * 0.8) || 0);
            $('#w3bp2').attr('value', Math.ceil(bp * 0.8) || 0);

            //WEEK 4
            $('#w4s1').attr('value', Math.ceil(sq * 0.8) || 0);
            $('#w4dl').attr('value', Math.ceil(dl * 0.8) || 0);
            $('#w4s2').attr('value', Math.ceil(sq * 0.8) || 0);

            $('#w4bp1').attr('value', Math.ceil(bp * 0.8) || 0);
            $('#w4bp2').attr('value', Math.ceil(bp * 0.8) || 0);

            //WEEK 5
            $('#w5s1').attr('value', Math.ceil(sq * 0.8) || 0);
            $('#w5dl').attr('value', Math.ceil(dl * 0.85) || 0);
            $('#w5s2').attr('value', Math.ceil(sq * 0.85) || 0);

            $('#w5bp1').attr('value', Math.ceil(bp * 0.85) || 0);
            $('#w5bp2').attr('value', Math.ceil(bp * 0.8) || 0);

            //WEEK 6
            $('#w6s1').attr('value', Math.ceil(sq * 0.8) || 0);
            $('#w6dl').attr('value', Math.ceil(dl * 0.9) || 0);
            $('#w6s2').attr('value', Math.ceil(bp * 0.9) || 0);

            $('#w6bp1').attr('value', Math.ceil(bp * 0.9) || 0);
            $('#w6bp2').attr('value', Math.ceil(bp * 0.8) || 0);

            //WEEK 7
            $('#w7s1').attr('value', Math.ceil(sq * 0.8) || 0);
            $('#w7dl').attr('value', Math.ceil(dl * 0.95) || 0);
            $('#w7s2').attr('value', Math.ceil(sq * 0.95) || 0);

            $('#w7bp1').attr('value', Math.ceil(bp * 0.95) || 0);
            $('#w7bp2').attr('value', Math.ceil(bp * 0.8) || 0);

            //WEEK 8
            $('#w8s1').attr('value', Math.ceil(sq * 0.8) || 0);
            $('#w8dl').attr('value', Math.ceil(dl) || 0);
            $('#w8s2').attr('value', Math.ceil(sq) || 0);

            $('#w8bp1').attr('value', Math.ceil(bp) || 0);
            $('#w8bp2').attr('value', Math.ceil(bp * 0.8) || 0);

            //WEEK 9
            $('#w9s1').attr('value', Math.ceil(sq * 0.8) || 0);
            $('#w9dl').attr('value', Math.ceil(dl * 1.05) || 0);
            $('#w9s2').attr('value', Math.ceil(sq * 1.05) || 0);

            $('#w9bp1').attr('value', Math.ceil(bp * 1.05) || 0);
            $('#w9bp2').attr('value', Math.ceil(bp * 0.8) || 0);


        });

        /**
         * Ivan Abadjiev weightlifting week
         */
        $('#calculateAbadjiev').click(function() {

            var fs = parseInt($('#frontSquat').val(), 10);  
            var sn = parseInt($('#snatch').val(), 10);
            var cj = parseInt($('#cleanJerk').val(), 10);

            $('#MTTF_bs1').attr('value', Math.ceil(fs) || 0 );
            $('#MTTF_bs2').attr('value', Math.ceil(fs * 0.9) || 0);

            $('#MTTF_sn1').attr('value', Math.ceil(sn) || 0);
            $('#MTTF_sn2').attr('value', Math.ceil(sn * 0.9) || 0);

            $('#MTTF_cj1').attr('value', Math.ceil(cj) || 0);
            $('#MTTF_cj2').attr('value', Math.ceil(cj * 0.9) || 0);

            $('#MTTF_sn2_1').attr('value', Math.ceil(sn) || 0);
            $('#MTTF_sn2_2').attr('value', Math.ceil(sn * 0.9) || 0);

            $('#MTTF_fs1').attr('value', Math.ceil(fs) || 0);
            $('#MTTF_fs2').attr('value', Math.ceil(fs * 0.9) || 0);

            $('#MTTF_sn3_1').attr('value', Math.ceil(sn) || 0);
            $('#MTTF_sn3_2').attr('value', Math.ceil(sn * 0.9) || 0);

            $('#MTTF_cj2_1').attr('value', Math.ceil(cj) || 0);
            $('#MTTF_cj2_2').attr('value', Math.ceil(cj * 0.9) || 0);

            $('#MTTF_sn4_1').attr('value', Math.ceil(sn) || 0);
            $('#MTTF_sn4_2').attr('value', Math.ceil(sn * 0.9) || 0);

            $('#MTTF_cj3_1').attr('value', Math.ceil(cj) || 0);
            $('#MTTF_cj3_2').attr('value', Math.ceil(cj * 0.9) || 0);
        });

        /**
         * Calculate 1 max repetition
         */
        $('#calculate-1rep').click(function() {
           var weight = parseInt($('#max').val(), 10);
           var reps = parseInt($('#repetitions_select').val(), 10);

           switch(reps) {
               case 10 :
                  $('#rep-max-result').attr('value', Math.ceil(weight * 1.37) || 0);
                  break;
               case 9 :
                  $('#rep-max-result').attr('value', Math.ceil(weight * 1.328) || 0);
                  break;
               case 8 :
                  $('#rep-max-result').attr('value', Math.ceil(weight * 1.266) || 0);
                  break;
               case 7 :
                  $('#rep-max-result').attr('value', Math.ceil(weight * 1.22) || 0);
                  break;
               case 6 :
                  $('#rep-max-result').attr('value', Math.ceil(weight * 1.177) || 0);
                  break;
               case 5 :
                  $('#rep-max-result').attr('value', Math.ceil(weight * 1.137) || 0);
                  break;
               case 4 :
                  $('#rep-max-result').attr('value', Math.ceil(weight * 1.099) || 0);
                   break;
               case 3 :
                  $('#rep-max-result').attr('value', Math.ceil(weight * 1.064) || 0);
                  break;
               case 2 :
                  $('#rep-max-result').attr('value', Math.ceil(weight * 1.031) || 0);
                  break;
           } 
        });
       
       $("#calculateWilks").click(function(){ 
           var bw = parseInt($("#bodyweight").val(), 10);
           var lw = parseInt($("#liftedweight").val(), 10);           
           var genger = $("#genderChoose").val();
           var a,b,c,d,e,f, resultWilks = 0;
           
           if( genger === '0' ) {
                a = parseFloat("-216.0475144");
                b = parseFloat( "16.2606339" );
                c = parseFloat("-0.002388645");
                d = parseFloat("-0.00113732");
                e = parseFloat("7.01863e-06");
                f = parseFloat("-1.291e-08");
           } else {
                a = parseFloat( "594.31747775582" );
                b = parseFloat( "-27.23842536447" );
                c = parseFloat( "0.82112226871" );
                d = parseFloat( "-0.00930733913" );
                e = parseFloat( "0.00004731582" );
                f = parseFloat( "-0.00000009054" );  
           }  

            resultWilks =  parseFloat( lw * 500 / ( a + b * bw + c * Math.pow(bw, 2) + d * Math.pow( bw, 3) + e * Math.pow( bw, 4 ) + f * Math.pow( bw, 5)  ) ) ; 

            if( !isNaN( resultWilks ) ) {
                $("#result").val(resultWilks);
            } else {
                $("#result").val(0);  
            }  
       }); 
       $("#calculateSinclair").click(function(){
           
           var bw = parseInt($("#bodyweight").val(), 10);
           var lw = parseInt($("#liftedweight").val(), 10);           
           var gender = $("#genderChoose").val();
           var A, b, X, AX2, SC, SCTotal;
            
           if( gender === 'm') {
               b = parseFloat("173.961");
               if( bw > b ) {
                   A = parseFloat("1.0");
               } else {
                   A = parseFloat("0.784780654");
               }
           } else {
               b = parseFloat("125.441");
               if( bw > b ) {
                   A = parseFloat("1.0");
               } else {
                   A = parseFloat("1.056683941");
               }               
           }
            X = ( Math.log( bw / b ) )/( Math.log(10) ); 
            AX2 = A * ( X * X );
            SC     = Math.pow(10,AX2);
            SCTotal= Math.round( ( SC * lw )*100 )/100;      
 
            if( !isNaN( SCTotal ) ) {
                $("#result").val(SCTotal);
            } else {
                $("#result").val(0);  
            }   
       });  
})(jQuery);
 
$('body').layout({ 
    applyDemoStyles: true,
    resizable : false
});    
 
   
// (function() {     
    
    var resultTableExist = function() {
        var element =  document.getElementById('tableGoals');//
        return function() {
            if (typeof(element) !== undefined && element !== null) {
                return true;
            }   
            return false;
        };  
    }; 
    
    var checkEmpty = function(field) {
        return function(){
            if(field === '' || field === 'undefined') {
                return false;
            }
            return true;
        }; 
    };  

// }(jQuery));  

var isNumeric = function(o) {
    return typeof o == 'number' && isFinite(o);
} 




(function() {
    if (location.href.indexOf('/contact') > -1 ) { 
       document.getElementById('contactPage').className = 'active';
    } else if(location.href.indexOf('/cycles') > -1 ) {
        document.getElementById('cyclesPage').className = 'active';
    } else if(location.href.indexOf('/users') > -1 ) {
        document.getElementById('usersPage').className = 'active';
    } 

}());  