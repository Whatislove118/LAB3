public class Point {
    private double X;
    private  double Y;
    private double R;
    private boolean isProbil;

    public Point(double X,double Y,double r){
        this.X=X;
        this.Y=Y;
        this.R=r;
        checkisProbil();
    }


    public double getX() {
        return X;
    }

    public double getY() {
        return Y;
    }

    public double getR() {
        return R;
    }

    public void checkisProbil(){
        if(this.X<0 && this.Y>0){
            isProbil=false;
            return;
        }
        if(this.X<=0 && this.Y<=0){
            isProbil=Math.pow(this.X, 2) + Math.pow(this.Y,2) <= Math.pow(this.R, 2);
            return;
        }
        if(this.X>=0 && this.Y>=0){
            isProbil=this.X<=R && this.Y<=R/2;
            return;
        }
        if(this.X>=0 && this.Y<0){
            isProbil=this.Y<=-this.X/2+this.R/2;
            return;
        }
        isProbil=false;
    }
}
