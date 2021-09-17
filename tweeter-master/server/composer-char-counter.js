
   
        $(document).ready(function () {



            $(".new-tweet").on("keydown keyup", "textarea", function () {
          
              let $theValue = $(this).val();
              let $theRemaining = 140 - $theValue.length;
              let $theCounter = $(this).closest("form").find(".counter");
              $theCounter.text($theRemaining);
        console.log($theValue,$theRemaining, $theCounter )
        if ($theRemaining < 0) { $theCounter.css("color", "red")}

            });

       

          });

