package edu.unicen.tallerjava.todo.users;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Objects;

@Entity
public class User {
    @Id
    private Integer id;

    private String name;

    public User() {
    }

    public User(String name) {
        this(name, 0);
    }

    public User(String name, Integer id) {
        super();
        this.name = name;
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Override
    public boolean equals(Object o) {
        return Objects.equals(id, ((User) o).id) && Objects.equals(name, ((User) o).name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name);
    }
}
