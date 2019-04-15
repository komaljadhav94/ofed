package com.university.pune.ofed.entity;

import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="RESTAURANT")
public class Restaurant {

	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="ID")
    private Long id;
	
	@Column(name="NAME")
	private String name;

	@Column(name="ADDRESS1")
	private String address1;
	
	@Column(name="ADDRESS2")
	private String address2;
	
	@Column(name="STATE")
	private String state;
	
	@Column(name="CITY")
	private String city;
	
	@Column(name="ZIPCODE")
	private String zipCode;

	@Column(name="DESCRIPTION")
	private String description;
	
	@OneToMany(mappedBy="restaurant", fetch=FetchType.EAGER)
	@JsonIgnoreProperties("restaurant")
	private Set<RestaurantMenu> restaurantMenus;
	
	@Lob
	@Column(name="IMAGE", length=100000)
	private byte[] image;
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress1() {
		return address1;
	}

	public void setAddress1(String address1) {
		this.address1 = address1;
	}

	public String getAddress2() {
		return address2;
	}

	public void setAddress2(String address2) {
		this.address2 = address2;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getZipCode() {
		return zipCode;
	}

	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}
	
	

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Set<RestaurantMenu> getRestaurantMenus() {
		return restaurantMenus;
	}

	public void setRestaurantMenus(Set<RestaurantMenu> restaurantMenus) {
		this.restaurantMenus = restaurantMenus;
	}

	public byte[] getImage() {
		return image;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}

}
