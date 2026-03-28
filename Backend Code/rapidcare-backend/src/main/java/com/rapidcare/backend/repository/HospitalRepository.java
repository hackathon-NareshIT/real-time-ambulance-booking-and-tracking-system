package com.rapidcare.backend.repository;

import com.rapidcare.backend.entity.Hospital;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HospitalRepository extends JpaRepository<Hospital, Long>{

}
