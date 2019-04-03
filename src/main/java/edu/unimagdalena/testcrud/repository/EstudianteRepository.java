package edu.unimagdalena.testcrud.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import edu.unimagdalena.testcrud.entity.Estudiante;

public interface EstudianteRepository extends JpaRepository<Estudiante, Long> {
	
}
