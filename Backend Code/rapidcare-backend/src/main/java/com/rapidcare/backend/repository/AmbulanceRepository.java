package com.rapidcare.backend.repository;

import com.rapidcare.backend.entity.Ambulance;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AmbulanceRepository extends JpaRepository<Ambulance, Long> {

}
