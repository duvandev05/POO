var car = new Car("AMS234", new Account("Andres Herrera", "AND123"));
car.passanger = 4;
car.printDataCar();

var uberX = new UberX("STR789", new Account("Andres Herrera", "AND670"), "Chevrolet", "Spark");
uberX.passanger = 4;
uberX.printDataCar();

var user = new User("Camilo Lopez", "102067890", "camilolopz@gmail.com", "1234556");
user.printDataAccount();   

var driver = new Driver("Camilo Lopez", "102067890", "camilolopz@gmail.com", "1234556");
user.printDataAccount(); 