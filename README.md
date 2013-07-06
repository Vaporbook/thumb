thumb
=====

Really simple and stupid client-side thumbnailer. Requires the File API and canvas.


usage
===


     var fileHandler = function (file) {

        var sizes = {
                  sm: {
                          height:100,
                          width:100
                      },
                  med: {
                          height:200,
                          width:200
                      }
              };
              
        thumb(file, sizes, function (o) {
   
           console.log('small thumbnail url is '+o.sm.url);
      
        });

     };
   
   

