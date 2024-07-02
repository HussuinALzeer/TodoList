import gsap from "gsap";


export const LoaderGsap = () =>{

    const line1 = document.getElementsByClassName("loader_Line1__S7IO0")
    const line2 = document.getElementsByClassName("loader_Line2__pM2l1")
    const line3 = document.getElementsByClassName("loader_Line3__3VCMG")
    const line4 = document.getElementsByClassName("loader_Line4__6pJoM")
    const line5 = document.getElementsByClassName("loader_Line5__YRv3w")

    const main = document.getElementById('Main')
    const LoaderID = document.getElementById('LoaderID')
    const textCon = document.getElementById('text-con')

    const tl = gsap.timeline({defaults: {duration:1}})
    .to( line1,1.5 ,{
       width:"190vw",
      delay:1
    })

    gsap.to( line2,1.5 ,{
        width:"190vw",
        delay:1
     })

    gsap.to(line3 , 1.1 ,{
        width:"190vw",
        delay:2
    }) 

    gsap.to(line4 , 1.1 ,{
        width:"190vw",
        delay:2
    }) 

    gsap.to(line5 , 1.1 ,{
        width:"190vw",
        delay:2
    }) 

    gsap.to(main , 1.1 ,{
        background:"#001f2b",
        delay:3,
        zIndex:"3"

    }) 

    gsap.to(LoaderID , 0.1 ,{
        display:"none",
        delay:5

    }) 
     gsap.to(textCon , 2, {
         display:"inline",
         delay:5,
         opacity:1
     })



}


export const cardgsap = (element: gsap.TweenTarget) => {
    gsap.fromTo(element, 
        { opacity: 0, y: 100 },  // Initial state
        { opacity: 1, y: 0, duration: 1.3 ,delay:0.3 }  // Final state
    );

};

export const DeleteCardgsap = (element: gsap.TweenTarget) => {
    gsap.fromTo(element, 
        { opacity: 1, y: 0 },  // Initial state
        { opacity: 0, y: -100, duration: 1.3 ,delay:0.3 }  // Final state
    );

};