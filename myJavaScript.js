<script>
      const $AboutMenu = $(".About-Menu");
      const $MapLocation =$(".mapLocation");
      const $MallLocation =$(".mallLocation");


      $("document").ready(function () {
        
        $(".AboutOpen").on("click", () => {
          $AboutMenu.removeClass("d-none");
          $(window).scrollTop(0);
        });
        $(".AboutClose").on("click", () => {
          $AboutMenu.addClass("d-none");
        });

        $(".BusInfo").on("click",()=>{
          $AboutMenu.addClass("d-none");
        })

        $(".MapOpen").on("click",()=>{
          $AboutMenu.addClass("d-none");
          $MapLocation.removeClass("d-none")
        })
        $(".MapClose").on("click",()=>{
          $MapLocation.addClass("d-none")
        })
        $(".MallOpen").on("click",()=>{
          $AboutMenu.addClass("d-none");
          $MallLocation.removeClass("d-none")
        })
        $(".MallClose").on("click",()=>{
          $MallLocation.addClass("d-none")
        })
       

       

      });
    </script>