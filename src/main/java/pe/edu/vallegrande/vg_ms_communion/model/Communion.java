package pe.edu.vallegrande.vg_ms_communion.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@Document(collection = "communion")
public class Communion {
    @Id
    private String id;
    private String names;
    private String surnames;
    private String placeCommunion;
    private boolean enrolledCatechesis;
    private String priest;
    private Date communionDate;
    private String comment;
    private char state;

}
