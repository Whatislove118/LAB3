import org.icefaces.util.JavaScriptRunner;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.faces.context.FacesContext;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@ManagedBean(eager = true,name = "ArCh")
@SessionScoped
public class AreaChecker implements Serializable {
    private String valueX;
    private String canvasX;
    private String valueY;
    private String canvasY;
    private String valueR;
    private ArrayList<Point> arrPoints = new ArrayList<>();


    public String getValueX() {
        return valueX;
    }

    public void setValueX(String x) {
        System.out.println("X = " + valueX);
        valueX = x;
    }

    public String getCanvasX() {
        return canvasX;
    }

    public void setCanvasX(String canvasX) {
        this.canvasX = canvasX;
    }

    public String getValueY() {
        return valueY;
    }

    public void setValueY(String y) {
        System.out.println("Y = " + valueY);
        valueY = y;
    }

    public String getCanvasY() {
        return canvasY;
    }

    public void setCanvasY(String canvasY) {
        this.canvasY = canvasY;
    }

    public String getValueR() {
        return valueR;
    }

    public void setValueR(String r) {
        System.out.println("R = " + valueR);
        this.valueR = r;
    }

    public void putPointsFromForm(){
        double y = Double.parseDouble(this.valueY);
        double x = Double.parseDouble(this.valueX);
        double r= Double.parseDouble(this.valueR);
        Point point = new Point(x,y,r);
        arrPoints.add(point);
        toDB(point);

    }

    public void putPointsFromCanvas(){
        double x = Double.parseDouble(this.canvasX);
        double y = Double.parseDouble(this.canvasY);
        double r= Double.parseDouble(this.valueR);
        Point point = new Point(x,y,r);
        arrPoints.add(point);
        toDB(point);
    }

    public void toDB(Point point){

    }

    public List<Point> getPoints(){
        return this.arrPoints;
    }
}
