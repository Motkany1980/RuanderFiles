console.log("Start");

let tomb=[1,4,2,8,23,2]

function MinErtekKereses(tomb)
{
 let minErtek=tomb[0];
 let min=0;
    for(let i=1;i<tomb.length;i++)
    {
     if(tomb[i]<minErtek)
     {
         minErtek=tomb[i];
         min=i+1;
     }
    }
    document.write("<br> A tömb legkisebb elemének értéke: "+minErtek+"<br> helyen szerepel: "+min);
    console.log("A tömb legkisebb elemének értéke: "+minErtek+" helyen szerepel: "+min);
}

function MaxErtekKereses(tomb)
{
 let maxErtek=tomb[0];
 let max=0;
    for(let j=1;j<tomb.length;j++)
    {
     if(tomb[j]>maxErtek)
     {
         maxErtek=tomb[j];
         max=j+1;
     }
    }
    document.write("<br> A tömb legnagyobb elemének értéke: "+maxErtek+"<br> helyen szerepel: "+max);
    console.log("A tömb legnagyobb elemének értéke: "+maxErtek+" helyen szerepel: "+max);
}

MinErtekKereses(tomb);
MaxErtekKereses(tomb);