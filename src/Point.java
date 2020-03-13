import javax.persistence.*;

@Entity
@Table
public class Point {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Integer id;
    @Column(nullable = false)
    private Double X;
    @Column(nullable = false)
    private Double Y;
    @Column(nullable = false)
    private Double R;

    public void setX(Double x) {
        X = x;
    }

    public void setY(Double y) {
        Y = y;
    }

    public void setR(Double r) {
        R = r;
    }

    public Boolean getProbil() {
        return probil;
    }

    public void setProbil(Boolean probil) {
        this.probil = probil;
    }
    @Column(nullable = false)
    private Boolean probil;
    
    public Point(){
    }
    public Point(Double X,Double Y,Double R){
        this.X=X;
        this.Y=Y;
        this.R=R;
        checkProbil();
    }
    public Point(Double X,Double Y,Double R,Boolean probil){
        this.X=X;
        this.Y=Y;
        this.R=R;
        this.probil=probil;
    }


    public Double getX() {
        return X;
    }

    public Double getY() {
        return Y;
    }

    public Double getR() {
        return R;
    }

    public void checkProbil(){
        if(this.X<0 && this.Y<0){
            probil=false;
            return;
        }
        if(this.X>=0 && this.Y<=0){
            probil=Math.pow(this.X, 2) + Math.pow(this.Y,2) <= Math.pow(this.R/2, 2);
            return;
        }
        if(this.X>=0 && this.Y>=0){
            probil=this.X<=R/2 && this.Y<=R;
            return;
        }
        if(this.X<=0 && this.Y>=0){
            probil=this.Y<=this.X+this.R;
            return;
        }
        probil=false;
    }
}
