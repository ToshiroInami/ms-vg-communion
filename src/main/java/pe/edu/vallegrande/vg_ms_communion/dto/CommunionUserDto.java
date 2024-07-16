package pe.edu.vallegrande.vg_ms_communion.dto;

import lombok.Data;

@Data
public class CommunionUserDto {
    private String id;
    private String names;
    private String surnames;
    private String placeCommunion;
    private boolean enrolledCatechesis;
}
