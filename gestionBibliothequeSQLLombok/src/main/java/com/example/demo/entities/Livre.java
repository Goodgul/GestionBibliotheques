package com.example.demo.entities;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

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
public class Livre {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
		private Long idlivre;
	
	@Column(length=1000)
	private String titre;
	private Integer quantite;
	private String description;

	private byte[] image;
	

	@ManyToOne()
	@JoinColumn(name="idbib")

	private Bibliotheque bibliotheque;
	

}
