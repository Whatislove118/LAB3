import org.hibernate.Session;
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
    private double valueX;
    private double canvasX;
    private double valueY;
    private double canvasY;
    private double valueR;
    private List<Point> arrPoints = new ArrayList<>();


    public double getValueX() {
        return valueX;
    }

    public void setValueX(double x) {
        valueX = x;
    }

    public double getCanvasX() {
        return canvasX;
    }

    public void setCanvasX(double canvasX) {
        this.canvasX = canvasX;
    }

    public double getValueY() {
        return valueY;
    }

    public void setValueY(double y) {
        valueY = y;
    }

    public double getCanvasY() {
        return canvasY;
    }

    public void setCanvasY(double canvasY) {
        this.canvasY = canvasY;
    }

    public double getValueR() {
        return valueR;
    }

    public void setValueR(double r) {
        this.valueR = r;
    }

    public void putPointsFromForm(){
        System.out.println("X = "+valueX);
        System.out.println("Y = "+valueY);
        System.out.println("R = "+valueR/2);
        Point point = new Point(valueX,valueY,valueR/2);
        toDB(point);

    }

    public void putPointsFromCanvas(){
        System.out.println("X = "+canvasX);
        System.out.println("Y = "+canvasY);
        System.out.println("R = "+valueR/2);
        Point point = new Point(canvasX,canvasY,valueR/2);
        toDB(point);
    }

    public void toDB(Point point){
        try (Session session = HibernateConnection.getSessionFactory().openSession()) {
            session.beginTransaction();
            session.save(point);
            session.getTransaction().commit();
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    public List<Point> getPoints(){
        arrPoints=null;
        try(Session session = HibernateConnection.getSessionFactory().openSession()){
            session.beginTransaction();
            arrPoints =  (ArrayList<Point>)session.createQuery("From Point").list();
        } catch (Exception e){
            e.printStackTrace();
        }
        return arrPoints;
    }
}
