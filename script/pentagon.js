
function calculatePentagonArea () {
   //get Pentagon base value
   const pentagonBaseInput = document.getElementById('pentagon-base');
   const pentagonBaseText = pentagonBaseInput.value ;
   const base = parseFloat(pentagonBaseText);
   //console.log(base);


    //get Pentagon height value
    const pentagonHeightInput = document.getElementById('pentagon-height');
    const pentagonHeightText = pentagonHeightInput.value ;
    const height = parseFloat(pentagonHeightText);
    //console.log(height);


   //Calculate Pentagon area
   const area = 0.5 * 5 * base * height ;
   console.log('Area of the pentagon is : ', area);


   //Display Pentagon area
   const pentagonAreaSpan = document.getElementById('pentagon-area');
   pentagonAreaSpan.innerText = area;

}