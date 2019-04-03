package edu.unimagdalena.testcrud.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="estudiantes")
public class Estudiante {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	@Column
	private String nombre;
	@Column
	private String apellido;
	@Column
	private long codigo;
	@Column
	private int edad;
	
	public Estudiante() {
	}
	
	public Estudiante(long id, String nombre, String apellido, long codigo, int edad) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.apellido = apellido;
		this.codigo = codigo;
		this.edad = edad;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getApellido() {
		return apellido;
	}
	public void setApellido(String apellido) {
		this.apellido = apellido;
	}
	public long getCodigo() {
		return codigo;
	}
	public void setCodigo(long codigo) {
		this.codigo = codigo;
	}
	public int getEdad() {
		return edad;
	}
	public void setEdad(int edad) {
		this.edad = edad;
	}
	
}
