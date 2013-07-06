/*

usage:

var fileHandler = function (file)
{

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

}

*/

function thumb(
  		file /* File object, per File API */,
		sizes /* keyed objects with props height,width */,
		cb /* callback to receive modified sizes object with url property added */
		)
{

								var cel = document.createElement('canvas');
								var cvs = document.body.appendChild(cel);
								var ctx = cvs.getContext('2d');
								var img = new Image;
								var URL = window.URL || window.webkitURL;
								img.src = URL.createObjectURL(file);
								img.onload = function() 
								{
								    	for(sz in sizes) {
								    		var h = sizes[sz].height;
								    		var w = sizes[sz].width;
										cvs.width = w;
										cvs.height = h;
										ctx.drawImage(img, 0,0,h,w);
								        	sizes[sz].url = cvs.toDataURL('image/png');
								     	}
    									document.body.removeChild(cvs);
		    							cb(sizes);
								 };

};
