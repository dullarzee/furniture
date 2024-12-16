
let share0 = document.querySelector('.img3');
 let share1 = document.querySelector('.share2');
  let shareBar0 = document.querySelector('.action0');
  let shareBar1 = document.querySelector('.action');
 shareBar1.style.pointerEvents = 'none';
 //IN THE CASE OF USER INTENDING TO SHARE 
  /*      share0.addEventListener('click', (event)=>{
            //turn actual sharebar visible 
            shareBar1.style.opacity = '100%';
            //reactivate the button to toggle on the actual share button 
            shareBar1.style.pointerEvents = 'all';
            //deactivate the current sharebar for my maximum code security
            shareBar0.style.pointerEvents = 'none';
            //turning current sharebar transparent for proper visuals
            shareBar0.style.opacity = '0%';
        } );

share1.addEventListener('click', (event)=>{
    shareBar0.style.opacity = '100%';
    shareBar0.style.pointerEvents = 'all'
    shareBar1.style.opacity = '0%';
    shareBar1.style.pointerEvents = 'none';
    
    
})*/

function bigScreen0()
{
    shareBar1.style.opacity = '100%';
    shareBar1.style.pointerEvents = 'all';
}

function bigScreen1()
{
    setTimeout(()=>{
    shareBar1.style.opacity = '0%';
    shareBar1.style.pointerEvents = 'none';
}, 3000);
}

function hoverShareBar()
{
    bigScreen0();
    share0.removeEventListener('mouseleave', bigScreen1);
}

function hoverShareButton()
{

}

//setTimeout(bigScreen1,5000);
const largeScreen = window.matchMedia("(min-width:768px)");
let hovered = 0;
function bigScreens(e)
{
    if(e.matches)
    {
        //when the user intends to share on large screen
        share0.addEventListener('mouseenter', bigScreen0);

        //under a timing,turn share bar invisible after leaving initial share button
        share0.addEventListener('mouseleave', bigScreen1);

        //intended to turn share bar invisible after removing mouse from the share bar
    // shareBar1.addEventListener('mouseleave', bigScreen1);

        //intended to keep the share bar visible while its been hovered over
        //shareBar1.addEventListener('mouseenter', hoverShareBar);
        

    }
    else
    {
        share0.removeEventListener('mouseenter', bigScreen0);
            share0.removeEventListener('mouseleave', bigScreen1);
            share0.addEventListener('click', (event)=>{
                //turn actual sharebar visible 
                shareBar1.style.opacity = '100%';
                //reactivate the button to toggle on the actual share button 
                shareBar1.style.pointerEvents = 'all';
                //deactivate the current sharebar for my maximum code security
                shareBar0.style.pointerEvents = 'none';
                //turning current sharebar transparent for proper visuals
                shareBar0.style.opacity = '0%';
            } );

        share1.addEventListener('click', (event)=>{
        shareBar0.style.opacity = '100%';
        shareBar0.style.pointerEvents = 'all'
        shareBar1.style.opacity = '0%';
        shareBar1.style.pointerEvents = 'none';

    });
}
}

largeScreen.addEventListener('change', bigScreens);

bigScreens(largeScreen);

/*smallScreen.addEventListener('change', smallScreens);

smallScreens(smallScreen);*/
