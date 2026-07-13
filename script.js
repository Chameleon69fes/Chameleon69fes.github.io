class GroovyBounce{
    constructor(){
        this.el=document.querySelector(".groovy-bounce");
        this.x=30;
        this.y=30;
        this.vx=4;
        this.vy=4;
        window.addEventListener("resize",()=>this.keepInside());
        this.loop();
    }
    keepInside(){
        const w=this.el.offsetWidth;
        const h=this.el.offsetHeight;
        this.x=Math.min(this.x,window.innerWidth-w);
        this.y=Math.min(this.y,window.innerHeight-h);
    }
    loop(){
        const w=this.el.offsetWidth;
        const h=this.el.offsetHeight;
        this.x+=this.vx;
        this.y+=this.vy;
        if(this.x<=0){
            this.x=0;
            this.vx*=-1;
        }
        if(this.x+w>=window.innerWidth){
            this.x=window.innerWidth-w;
            this.vx*=-1;
        }
        if(this.y<=0){
            this.y=0;
            this.vy*=-1;
        }
        if(this.y+h>=window.innerHeight){
            this.y=window.innerHeight-h;
            this.vy*=-1;
        }
        this.el.style.transform=`translate(${this.x}px,${this.y}px)`;
        requestAnimationFrame(()=>this.loop());
    }
}
new GroovyBounce();
