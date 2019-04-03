package edu.unimagdalena.testcrud.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.unimagdalena.testcrud.entity.Estudiante;
import edu.unimagdalena.testcrud.repository.EstudianteRepository;

@Service
public class EstudianteService {
	@Autowired
	private EstudianteRepository repository;
	
	public List<Estudiante> getAllEstudiantes(){
		return (List<Estudiante>) repository.findAll();
	}
	
	public Estudiante getEstudiante(long id) {
		return repository.getOne(id);
	}
	
	public Estudiante createEstudiante(Estudiante estudiante) {
		return repository.save(estudiante);
	}
	
	public Estudiante updateEstudiante(Estudiante estudiante) {
		return repository.save(estudiante);
	}
	
	public void deleteEstudiante(long id) {
		repository.deleteById(id);
	}
}