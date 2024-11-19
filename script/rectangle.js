function calculateRectangleArea () {
    //get rectangle length value
   const rectangleLengthInput = document.getElementById('rectangle-length');
   const rectangleLengthText = rectangleLengthInput.value ;
   const length = parseFloat(rectangleLengthText);
   //console.log(length);


   //get rectangle width value
   const rectangleWidthInput = document.getElementById('rectangle-width');
   const rectangleWidthText = rectangleWidthInput.value ;
   const width = parseFloat(rectangleWidthText);
   //console.log(width);


   //Calculate triangle area
   const area = length * width ;
   console.log('Area of the rectangle is : ', area);


   //Display rectangle area
   const rectangleAreaSpan = document.getElementById('rectangle-area');
   rectangleAreaSpan.innerText = area;

}