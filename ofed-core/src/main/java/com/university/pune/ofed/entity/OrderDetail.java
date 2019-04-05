package com.university.pune.ofed.entity;

import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "ORDER_DETAIL")
public class OrderDetail {

	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="ID")
    private Long id;
	
	@ManyToOne(fetch= FetchType.EAGER)
	@JsonIgnoreProperties("orderDetail")
	@JoinColumn(name = "ORDERID")
	private FoodOrder foodOrder;
	
	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "MENUITEMID")
	private RestaurantMenu restaurantMenus;

	@Column(name="TOTALPRICE")
	private Integer totalPrice;
	
	@Column(name="MENUITEMQUANTITY")
	private Integer menuItemQuantity;
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public FoodOrder getFoodOrder() {
		return foodOrder;
	}

	public void setFoodOrder(FoodOrder foodOrder) {
		this.foodOrder = foodOrder;
	}

	public RestaurantMenu getRestaurantMenus() {
		return restaurantMenus;
	}

	public void setRestaurantMenus(RestaurantMenu restaurantMenus) {
		this.restaurantMenus = restaurantMenus;
	}

	public Integer getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(Integer totalPrice) {
		this.totalPrice = totalPrice;
	}

	public Integer getMenuItemQuantity() {
		return menuItemQuantity;
	}

	public void setMenuItemQuantity(Integer menuItemQuantity) {
		this.menuItemQuantity = menuItemQuantity;
	}	
	
	
}
