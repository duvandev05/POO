from car import Car

if __name__ == "__main__":
    print("hola mundoo")
    
    car  = Car()
    car.license = "FKD439"
    car.driver = "Fernando Martinez"
    car.passenger = 4
    print(vars(car))
    
    car2 = Car()
    car2.license = "GFT840"
    car2.driver = "Luis calarlca"
    print(vars(car2))
    