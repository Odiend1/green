const menuItems = {
    categories: ["Appetizers", "Brunch", "Americas", "Europe", "Middle East", "Africa", "Asia", "Sides", "Kids", "Desserts", "Drinks"],
    itemLookup: {},
    items: {
      "Appetizers": [
        {
          name: "Coconut Chutney",
          price: 5.99,
          description: "A tangy and creamy chutney made with fresh grated coconut, green chilies, ginger, roasted chana dal, and tamarind or lemon juice. It's seasoned with mustard seeds, cumin, and tempered with curry leaves.",
          vegan: true
        },
        {
          name: "Tortilla Chips with Salsa",
          price: 6.99,
          description: "Homemade tortilla chips baked with oil and salt, paired with a fresh salsa made from diced tomatoes, red onion, jalapeños, cilantro, lime juice, and a dash of cumin.",
          vegan: true
        },
        {
          name: "Cowboy Caviar",
          price: 7.99,
          description: "A vibrant mix of black-eyed peas, corn, red and green bell peppers, red onion, jalapeños, cilantro, and lime juice, seasoned with cumin and salt. Optional avocado adds creaminess.",
          vegan: true
        },
        {
          name: "Pita Bread with Hummus",
          price: 8.99,
          description: "Soft pita bread served with creamy hummus made from blended chickpeas, tahini, garlic, olive oil, lemon juice, and cumin. Garnish with paprika or parsley if desired.",
          vegan: true
        }
      ],
      "Brunch": [
        {
          name: "Eggs Benedict",
          price: 9.99,
          description: "Eggs benedict, cheddar cheese, grilled mushrooms, grilled jalapeno, caramelized onion, served with a side a potato fritters.",
          vegan: false
        },
        {
          name: "Avocado Toast",
          price: 7.99,
          description: "Whole grain toast topped with mashed avocado, a squeeze of lemon, salt, and pepper. Add toppings like tomato, red pepper flakes, or nutritional yeast for extra flavor.",
          vegan: true
        },
        {
          name: "Vegan Smoothie Bowl",
          price: 10.99,
          description: "A blended mix of frozen fruit (banana, berries, mango), plant-based milk, and a handful of spinach or kale. Top with granola, chia seeds, coconut flakes, and fresh fruit.",
          vegan: true
        },
        {
          name: "Chia Pudding",
          price: 8.99,
          description: "Chia seeds soaked overnight in almond milk (or any plant milk) with a touch of maple syrup and vanilla. Serve topped with fresh berries, nuts, and a drizzle of nut butter.",
          vegan: true
        },
        {
          name: "Açaí Bowl",
          price: 9.99,
          description: "Frozen açaí puree blended with frozen berries (like banana, strawberries, or blueberries) and plant-based milk. Top with granola, sliced bananas, coconut flakes, chia seeds, and a drizzle of honey or agave.",
          vegan: true
        }
      ],
      "Americas": [
        {
          name: "Papas Rellenas",
          price: 11.99,
          description: "A crispy ball of mashed potatoes and minced chilies, with a savory filling composed of bell peppers, oyster mushrooms, green olives, and garlic.",
          vegan: true
        },
        {
          name: "Cauliflower Ceviche",
          price: 10.99,
          description: "A mixture of chopped cauliflower, avocado, jalapeno, red onions, cilantro, tomatoes, and fresh lime juice.",
          vegan: true
        },
        {
          name: "Tamale Bowls",
          price: 12.99,
          description: "A plant-based bowl with a saucy polenta made from almond milk, cumin and garlic. Along with beans mixed with cumin, chili powder, cloves, and chopped cilantro.",
          vegan: true
        },
        {
          name: "Cheese Poblano Empanadas",
          price: 9.99,
          description: "A fried crunchy shell enclosed in a delicious filling of poblano, cilantro, and melty vegan cheese.",
          vegan: true
        },
        {
          name: "Frijoles Negros",
          price: 8.99,
          description: "An aromatic dish made up of boiled beans sautéed in garlic, oil, and oregano. Then add a sofrito made from sautéed garlic, onions, and bell peppers.",
          vegan: true
        }
      ],
      "Europe": [
        {
          name: "Mushroom Stroganoff",
          price: 12.99,
          description: "Classic pasta mixed with a hearty blend of sautéed mushrooms, thyme, house made vegetable stock, and freshly grated parmesan cheese.",
          vegan: false
        },
        {
          name: "Ratatouille",
          price: 11.99,
          description: "Sliced zucchini, eggplant, and Roma tomatoes lined on a deep dish, held by a creamy tomato sauce infused with olive oil and herbs.",
          vegan: true
        },
        {
          name: "Rigatoni Pie with Pomodoro Sauce",
          price: 13.99,
          description: "Rigatoni noodles topped with house made herby and creamy pomodoro sauce.",
          vegan: true
        },
        {
          name: "Vegan Dutch Baby",
          price: 10.99,
          description: "A fluffy vegan pancake, made from plant-based eggs and vegan butter, topped with sautéed peas, scallion, and green onions, served in a cast iron pan.",
          vegan: true
        }
      ],
      "Middle East": [
        {
          name: "Shorbet Adas",
          price: 9.99,
          description: "A cozy mixture of boiled potatoes and carrots, blended to the perfect texture and served with a squeeze of lemons, pita chips, and garnished onions or parsley of choice.",
          vegan: true
        },
        {
          name: "Yalanji",
          price: 10.99,
          description: "A tangy filling of short-grained rice and a savory blend of tomatoes, cabbage, chopped green onions, dried mint, parsley, and pomegranate molasses wrapped in a soaked grape leaf.",
          vegan: true
        },
        {
          name: "Falafel",
          price: 7.99,
          description: "A savory filling made of chickpeas, herbs, onion, garlic, and earthy spices, fried until perfectly crispy on the outside.",
          vegan: true
        },
        {
          name: "Vegan Mshaat",
          price: 9.99,
          description: "Crispy cauliflower fritters on the outside, with a soft and juicy inside composed of garlic, parsley, green onions, and a plant-based egg alternative.",
          vegan: true
        }
      ],
      "Africa": [
        {
          name: "Sweet Potato Stew",
          price: 10.99,
          description: "Onions, bell peppers, and orange sweet potatoes mixed with a creamy tomato puree, combined with boiled chickpeas and topped with peanut butter.",
          vegan: true
        },
        {
          name: "Vegan Ghanian Stew",
          price: 11.99,
          description: "A soupy mixture of tomatoes, basil, and herbs combined with tender button mushrooms, topped with parsley and white pepper.",
          vegan: true
        },
        {
          name: "Fried Cassava Root",
          price: 8.99,
          description: "Cassava root tossed in a signature blend of herbs, olive oil, and fresh lime juice, then fried in avocado oil.",
          vegan: true
        },
        {
          name: "Ugali with Soup",
          price: 9.99,
          description: "Soft and chewy Ugali (corn maize bread) sprinkled with herbs and served with stir-fried vegetables and/or soup of choice.",
          vegan: true
        }
      ],
      "Asia": [
        {
          name: "Sesame Ginger Pasta",
          price: 10.99,
          description: "Fresh ramen noodles combined with a zesty ginger glaze with soy sauce, and a sprinkle of green onions and sesame seeds.",
          vegan: true
        },
        {
          name: "Tofu Tikki Masala",
          price: 12.99,
          description: "Traditional masala combined with the soft and silky texture of tofu, served with basmati rice and a sprinkle of parsley.",
          vegan: true
        },
        {
          name: "Creamy Vegan Miso Butter Ramen",
          price: 13.99,
          description: "Freshly made ramen noodles with a vegan miso broth made of soy milk, vegan butter, sesame seeds, bamboo shoots, and ginger.",
          vegan: true
        },
        {
          name: "Vegan Kimchi Jjigae",
          price: 11.99,
          description: "A savory stew with vegan kimchi, shiitake mushrooms, noodles, and silken tofu in a vegetable and kimchi stock broth.",
          vegan: true
        }
      ],
      "Sides": [
        {
          name: "Fruit Bowl",
          price: 5.99,
          description: "A mix of fresh fruits like berries, melons, apples, and bananas.",
          vegan: true
        },
        {
          name: "French Fries",
          price: 4.99,
          description: "Crispy fried potatoes seasoned with salt.",
          vegan: true
        },
        {
          name: "Rice (White or Brown)",
          price: 3.99,
          description: "Cooked white or brown rice with water and salt.",
          vegan: true
        },
        {
          name: "Onion Rings",
          price: 6.99,
          description: "Sliced onions coated in flour, breadcrumbs, and egg, then fried.",
          vegan: false
        },
        {
          name: "Salads (House or Caesar)",
          price: 7.99,
          description: "Mixed greens with tomatoes, cucumbers, croutons, and dressing.",
          vegan: true
        },
        {
          name: "Beans",
          price: 4.99,
          description: "Fresh beans seasoned with salt, pepper, and garlic.",
          vegan: true
        },
        {
          name: "Tater Tots",
          price: 5.99,
          description: "Fried potato nuggets made with potatoes, flour, and salt.",
          vegan: true
        }
      ],
      "Drinks": [
        {
          "name": "Bottled Water",
          "price": 1.99,
          "description": "Refreshing bottled water to quench your thirst.",
          "vegan": true
        },
        {
          "name": "Americano",
          "price": 3.49,
          "description": "Bold espresso diluted with hot water for a rich coffee experience.",
          "vegan": true
        },
        {
          "name": "Espresso",
          "price": 2.99,
          "description": "A strong and concentrated shot of freshly brewed coffee.",
          "vegan": true
        },
        {
          "name": "Affogato (Ice Cream + Coffee)",
          "price": 5.99,
          "description": "A delightful combination of hot espresso poured over creamy vanilla ice cream.",
          "vegan": false
        },
        {
          "name": "Matcha Iced Tea",
          "price": 4.49,
          "description": "Refreshing and earthy matcha green tea served chilled.",
          "vegan": true
        },
        {
          "name": "Hibiscus Tea",
          "price": 3.99,
          "description": "A floral and tangy herbal tea brewed from dried hibiscus flowers.",
          "vegan": true
        }
      ],
      "Desserts": [
        {
          "name": "Gulab Jamun (Milk Doughnuts)",
          "price": 6.99,
          "description": "Soft and spongy milk-based doughnuts soaked in a fragrant sugar syrup.",
          "vegan": false
        },
        {
          "name": "Sakura Mochi (Cherry Blossom Rice Cakes)",
          "price": 7.49,
          "description": "Delicate pink rice cakes filled with sweet red bean paste, wrapped in a salted cherry blossom leaf.",
          "vegan": true
        },
        {
          "name": "Semifreddo or Tiramisu",
          "price": 8.99,
          "description": "Choose between a light Italian frozen dessert or the classic coffee-flavored tiramisu.",
          "vegan": false
        }
      ],
      "Kids": [
        {
          "name": "Grilled Cheese",
          "price": 6.49,
          "description": "Classic grilled cheese sandwich with melted cheddar.",
          "vegan": false
        },
        {
          "name": "Quesadilla",
          "price": 5.99,
          "description": "Cheese-filled tortilla grilled until crispy.",
          "vegan": false
        },
        {
          "name": "Spaghetti and Tomato Sauce",
          "price": 7.99,
          "description": "Classic spaghetti served with house-made tomato sauce.",
          "vegan": true
        },
        {
          "name": "Mac & Cheese",
          "price": 6.99,
          "description": "Creamy macaroni pasta coated in a rich cheese sauce.",
          "vegan": false
        },
        {
          "name": "Peanut Butter and Jelly Sandwich",
          "price": 4.49,
          "description": "A timeless favorite with peanut butter and jelly on soft bread.",
          "vegan": true
        },
        {
          "name": "Mini Cheese Pizza",
          "price": 7.49,
          "description": "A kid-sized pizza topped with gooey melted cheese.",
          "vegan": false
        }
      ]
    }
  };

  function getItemId(itemName){
    return itemName.toLowerCase().replaceAll(" ", "-").substring(0, 4) + itemName.toLowerCase().replaceAll(" ", "-").substring(Math.floor(itemName.length / 2), Math.floor(itemName.length / 2) + 1) + itemName.toLowerCase().replaceAll(" ", "-").substring(Math.floor(itemName.length * 3 / 4), Math.floor(itemName.length * 3 / 4) + 1) + itemName.toLowerCase().replaceAll(" ", "-").substring(itemName.length-1, itemName.length);
  }

  for(let i = 0; i < menuItems.categories.length; i++){
    var category = menuItems.items[menuItems.categories[i]];
    category.forEach((item) => {
        item.category = menuItems.categories[i];
        item.id = getItemId(item.name);
        menuItems.itemLookup[item.id] = item;
    })
  }

  export { menuItems, getItemId };