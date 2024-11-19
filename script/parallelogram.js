
function calculateParallelogramArea () {
    //get parallelogram base value
   const parallelogramBaseInput = document.getElementById('parallelogram-base');
   const parallelogramBaseText = parallelogramBaseInput.value ;
   const base = parseFloat(parallelogramBaseText);
   //console.log(base);


    //get parallelogram height value
    const parallelogramHeightInput = document.getElementById('parallelogram-height');
    const parallelogramHeightText = parallelogramHeightInput.value ;
    const height = parseFloat(parallelogramHeightText);
    //console.log(height);


   //Calculate parallelogram area
   const area = base * height ;
   console.log('Area of the parallelogram is : ', area);


   //Display parallelogram area
   const parallelogramAreaSpan = document.getElementById('parallelogram-area');
   parallelogramAreaSpan.innerText = area;

}