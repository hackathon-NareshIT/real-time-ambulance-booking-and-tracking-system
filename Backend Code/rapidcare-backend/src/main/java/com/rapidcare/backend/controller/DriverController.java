package com.rapidcare.backend.controller;
import com.rapidcare.backend.entity.Driver;
import com.rapidcare.backend.service.DriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/driver")
@CrossOrigin

public class DriverController {
	@Autowired
    private DriverService driverService;

    // Add driver
    @PostMapping("/add")
    public Driver addDriver(@RequestBody Driver driver) {
        return driverService.saveDriver(driver);
    }

    //  Get available drivers
    @GetMapping("/available")
    public List<Driver> getAvailableDrivers() {
        return driverService.getAvailableDrivers();
    }

    //  Update location
    @PutMapping("/location/{id}")
    public Driver updateLocation(@PathVariable Long id,
                                 @RequestParam Double lat,
                                 @RequestParam Double lng) {
        return driverService.updateLocation(id, lat, lng);
    }
}
