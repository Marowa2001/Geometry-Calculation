

function calculateEllipseArea () {
    //get parallelogram base value
    const ellipseBaseInput = document.getElementById('ellipse-base');
    const ellipseBaseText = ellipseBaseInput.value ;
    const axis1 = parseFloat(ellipseBaseText);
    //console.log(axis1);
 
 
     //get parallelogram height value
     const ellipseHeightInput = document.getElementById('ellipse-height');
     const ellipseHeightText = ellipseHeightInput.value ;
     const axis2 = parseFloat(ellipseHeightText);
     //console.log(axis2);
 
 
    //Calculate ellipse area
    const area = 3.1416 * axis1 * axis2 ;
    console.log('Area of the ellipse is : ', area);
 
 
    //Display ellipse area
    const ellipseAreaSpan = document.getElementById('ellipse-area');
    ellipseAreaSpan.innerText = area;
 
 }