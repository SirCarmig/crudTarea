package edu.unimagdalena.testcrud.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import edu.unimagdalena.testcrud.entity.Estudiante;
import edu.unimagdalena.testcrud.service.EstudianteService;

@RequestMapping("/estudiantes")
@RestController
public class EstudianteController {
	@Autowired
	private EstudianteService estudianteService;
	
	@RequestMapping
	public ResponseEntity<List<Estudiante>> getEstudiantes() {
		List<Estudiante> response =  estudianteService.getAllEstudiantes();
		return new ResponseEntity<List<Estudiante>>(response, HttpStatus.OK);
	}
	
	@RequestMapping("/{id}")
	public ResponseEntity<Estudiante> getEstudiantes(@PathVariable Long id) {
		Estudiante response = estudianteService.getEstudiante(id);
		if(response == null) {
			return ResponseEntity.notFound().build();
		}
		return new ResponseEntity<Estudiante>(response, HttpStatus.OK);
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/add")
	public ResponseEntity<Estudiante> addEstudiante(@RequestBody Estudiante estudiante) {
		Estudiante response = estudianteService.createEstudiante(estudiante);
		return new ResponseEntity<Estudiante>(response, HttpStatus.CREATED);
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value = "/delete")
	public void deleteEstudiante(@RequestBody long id) {
		estudianteService.deleteEstudiante(id);
	}

	@RequestMapping(method=RequestMethod.PUT, value = "/update")
	public ResponseEntity<Estudiante> updateEstudiante(@RequestBody Estudiante estudiante) {
		Estudiante response = estudianteService.updateEstudiante(estudiante);
		if(response == null) {
			return ResponseEntity.status(512).build();
		}
		return new ResponseEntity<Estudiante>(response, HttpStatus.OK);
	}
}