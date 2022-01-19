package com.example.demo.entities;


import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
@Entity

public class Bibliotheque {
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
@Column(unique=true, nullable=false)

	private Long idbib;
     private int  nbrAdhrent;
 	@Column(length=1000)
	private String description;
	private String titre;
	private byte[] image;
	

	
	@OneToMany(mappedBy="bibliotheque")
	private List<Livre> livres;

	
	
	
	
}
