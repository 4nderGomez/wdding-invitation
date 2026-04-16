package com.wedding.backend.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "guests")

public class Guest {
    //Variables
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Nombre obligatorio")
    private String name;

    @NotBlank(message = "Apellido obligatorio")
    private String lastname;

    @NotBlank(message = "Tipo obligatorio")
    private String type;

    @ManyToOne
    @JoinColumn(name = "rsvp_id")
    @JsonBackReference
    private Rsvp rsvp;

    //Metodos getter y setter
    public Long getId() { 
        return id; 
    }

    public void setId(Long id) { 
        this.id = id; 
    }

    public String getName() { 
        return name; 
    }

    public void setName(String name) { 
        this.name = name; 
    }

    public String getLastname() { 
        return lastname;
    }
    public void setLastname(String lastname) { 
        this.lastname = lastname; 
    }

    public String getType() { 
        return type; 
    }

    public void setType(String type) { 
        this.type = type; 
    }

    public Rsvp getRsvp() { 
        return rsvp; 
    }
    
    public void setRsvp(Rsvp rsvp) { 
        this.rsvp = rsvp; 
    }
}
