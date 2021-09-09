package com.devsuperir.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperir.dsvendas.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long> {
	
}
