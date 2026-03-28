package com.rapidcare.backend.controller;

import com.rapidcare.backend.entity.Hospital;
import com.rapidcare.backend.service.HospitalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/hospital")
@CrossOrigin
public class HospitalController {
	@Autowired
    private HospitalService hospitalService;

    @PostMapping("/add")
    public Hospital addHospital(@RequestBody Hospital hospital) {
        return hospitalService.saveHospital(hospital);
    }

    @GetMapping("/all")
    public List<Hospital> getAllHospitals() {
        return hospitalService.getAllHospitals();
    }
}
