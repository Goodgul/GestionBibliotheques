package com.example.demo.entities;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class User {
	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long idUser ;
	private String nom;
	private String prenom; 
	@Temporal(TemporalType.DATE)
	private Date dateNaissance;
	private String email;
	private String mdp;
	@Lob
	private byte[] photo;
	@ManyToOne()
	@JoinColumn(name="IdBib")
	private Bibliotheque user;

}
