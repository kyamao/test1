class Sample {
	private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

	constructor() {
  	this.canvas = document.getElementById('main') as HTMLCanvasElement;
		this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
  }
  
  public init = () => {
    this.drawHouse();
    this.canvas.addEventListener('mouseup', this.onMouseUp.bind(this));
  }
  
  /*
   * お家でお絵かき
   */
  private drawHouse() {
  	const ctx = this.ctx;
  
    // Set line width
    ctx.lineWidth = 10;

    // Wall
    ctx.strokeRect(75, 140, 150, 110);

    // Door
    ctx.fillRect(130, 190, 40, 60);

    // Roof
    ctx.moveTo(50, 140);
    ctx.lineTo(150, 60);
    ctx.lineTo(250, 140);
    ctx.closePath();
    ctx.stroke();
    
		//Door knob
		ctx.fillStyle = "#ffffff";
    ctx.beginPath();
		ctx.arc(160, 220, 5, 0, 2 * Math.PI, false);
		ctx.fill();    
    
		//title
		ctx.font = "48px serif";
    ctx.lineWidth = 2;
		ctx.strokeText("Hackathon", 50, 50);
}
  
  private onMouseUp = (e: MouseEvent) => {
    const size = 10;
    this.ctx.lineWidth = 1;
    this.ctx.fillStyle = "#00ff00";
    this.ctx.fillRect(e.offsetX - (size/2), e.offsetY -(size/2), size, size);
  }
  
}


//メインプログラム
window.addEventListener('DOMContentLoaded', () => {
    const sample: Sample = new Sample();
    sample.init();
});

