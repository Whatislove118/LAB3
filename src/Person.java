import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import java.util.ArrayList;
import java.util.Date;

@ManagedBean(name = "person",eager = true)
@SessionScoped
public class Person {
    private String name;
    private Date date;
    private String sex;

    public Person() {
    }

    public ArrayList<Person> getArrayList() {
        return arrayList;
    }

    private ArrayList<Person> arrayList = new ArrayList<>();

    public Person(String name, Date date, String sex) {
        this.name = name;
        this.date = date;
        this.sex = sex;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public void addPerson(){
        Person person = new Person(this.name,this.date,this.sex);
        arrayList.add(person);
    }
}
