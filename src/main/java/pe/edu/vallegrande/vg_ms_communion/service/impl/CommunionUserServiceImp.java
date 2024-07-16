package pe.edu.vallegrande.vg_ms_communion.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.vallegrande.vg_ms_communion.dto.CommunionUserDto;
import pe.edu.vallegrande.vg_ms_communion.model.Communion;
import pe.edu.vallegrande.vg_ms_communion.repository.CommunionRepository;
import reactor.core.publisher.Mono;

import java.util.Date;

@Service
public class CommunionUserServiceImp {

    @Autowired
    private CommunionRepository communionRepository;

    public Mono<Communion> createCommunionFromUserDto(CommunionUserDto userDto) {
        // Crear comunión desde DTO de usuario
        Communion communion = new Communion();
        communion.setNames(userDto.getNames());
        communion.setSurnames(userDto.getSurnames());
        communion.setPlaceCommunion(userDto.getPlaceCommunion());
        communion.setEnrolledCatechesis(userDto.isEnrolledCatechesis());
        communion.setState('P');
        communion.setPriest("");
        communion.setCommunionDate(null);
        communion.setComment("");
        communion.setComment("");
        return communionRepository.save(communion);
    }
}
