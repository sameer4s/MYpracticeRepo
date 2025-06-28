CREATE DATABASE RetailDB;
GO
USE RetailDB;
GO

-- Database Schema
CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    Name VARCHAR(100),
    Region VARCHAR(50)
);

CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100),
    Category VARCHAR(50),
    Price DECIMAL(10, 2)
);

CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    CustomerID INT,
    OrderDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

CREATE TABLE OrderDetails (
    OrderDetailID INT PRIMARY KEY,
    OrderID INT,
    ProductID INT,
    Quantity INT,
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);

-- Sample Data
INSERT INTO Customers (CustomerID, Name, Region) VALUES
(1, 'Alice', 'North'),
(2, 'Bob', 'South'),
(3, 'Charlie', 'East'),
(4, 'David', 'West');

INSERT INTO Products (ProductID, ProductName, Category, Price) VALUES
(1, 'Laptop', 'Electronics', 1200.00),
(2, 'Smartphone', 'Electronics', 800.00),
(3, 'Tablet', 'Electronics', 600.00),
(4, 'Headphones', 'Accessories', 150.00);

INSERT INTO Orders (OrderID, CustomerID, OrderDate) VALUES
(1, 1, '2023-01-15'),
(2, 2, '2023-02-20'),
(3, 3, '2023-03-25'),
(4, 4, '2023-04-30');

INSERT INTO OrderDetails (OrderDetailID, OrderID, ProductID, Quantity) VALUES
(1, 1, 1, 1),
(2, 2, 2, 2),
(3, 3, 3, 1),
(4, 4, 4, 3);

--Exercise 1: Non-Clustered Index on ProductName
SELECT * FROM Products WHERE ProductName = 'Laptop';
CREATE NONCLUSTERED INDEX IX_ProductName ON Products(ProductName);
SELECT * FROM Products WHERE ProductName = 'Laptop';
--Exercise 2: Clustered Index on OrderDate
SELECT * FROM Orders WHERE OrderDate = '2023-01-15';

ALTER TABLE OrderDetails 
DROP CONSTRAINT FK__OrderDeta__Order__3E52440B;
ALTER TABLE Orders DROP CONSTRAINT PK__Orders__C3905BAF0CD40C19;

CREATE CLUSTERED INDEX IX_OrderDate ON Orders(OrderDate);

--Exercise 3: Composite Index on CustomerID and OrderDate
SELECT * FROM Orders WHERE CustomerID = 1 AND OrderDate = '2023-01-15';
CREATE NONCLUSTERED INDEX IX_Customer_OrderDate ON Orders(CustomerID, OrderDate);
SELECT * FROM Orders WHERE CustomerID = 1 AND OrderDate = '2023-01-15';
