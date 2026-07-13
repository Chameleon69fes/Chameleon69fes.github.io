class GroovyBounce {
  constructor(){
      this.el=document.querySelector(".groovy-bounce");
      this.x=8;
      this.y=80;
      this.vx=4;
      this.vy=4;
      this.loop();}
  loop(){
      this.x+=this.vx;
      this.y+=this.vy;
      const w=this.el.offsetWidth;
      const h=this.el.offsetHeight;
      if(this.x<=0 || this.x+w>=window.innerWidth){
          this.vx*=-1;}
      if(this.y<=0 || this.y+h>=window.innerHeight){
          this.vy*=-1;}
      this.el.style.transform=`translate(${this.x}px, ${this.y}px)`;
      requestAnimationFrame(()=>this.loop());}}
new GroovyBounce();
