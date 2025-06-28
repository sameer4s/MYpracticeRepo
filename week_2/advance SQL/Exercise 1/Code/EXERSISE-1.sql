CREATE DATABASE OnlineRetailStore;
GO

USE OnlineRetailStore;
GO

-- Customers
CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    Name VARCHAR(100),
    Region VARCHAR(50)
);
GO

-- Products
CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100),
    Category VARCHAR(50),
    Price DECIMAL(10, 2)
);
go
-- Orders
CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    CustomerID INT,
    OrderDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);
GO
-- OrderDetails
CREATE TABLE OrderDetails (
    OrderDetailID INT PRIMARY KEY,
    OrderID INT,
    ProductID INT,
    Quantity INT,
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);
GO

-- Customers
INSERT INTO Customers VALUES
(1, 'Alice', 'North'), 
(2, 'Bob', 'South'),
(3, 'Carol', 'East');
GO
-- Products
INSERT INTO Products VALUES 
(1, 'Laptop', 'Electronics', 1000),
(2, 'Phone', 'Electronics', 800),
(3, 'Tablet', 'Electronics', 800),
(4, 'Chair', 'Furniture', 200),
(5, 'Table', 'Furniture', 250);
GO
-- Orders
INSERT INTO Orders VALUES 
(101, 1, '2025-01-05'),
(102, 2, '2025-01-10'),
(103, 1, '2025-01-15'),
(104, 3, '2025-01-20');
GO
-- OrderDetails
INSERT INTO OrderDetails VALUES 
(1001, 101, 1, 2),
(1002, 101, 2, 1),
(1003, 102, 4, 4),
(1004, 103, 3, 1),
(1005, 104, 5, 2);
GO

--EXERSISE-1
SELECT 
    Category,
    ProductName,
    Price,
    ROW_NUMBER() OVER (PARTITION BY Category ORDER BY Price DESC) AS RowNum,
    RANK() OVER (PARTITION BY Category ORDER BY Price DESC) AS RankNum,
    DENSE_RANK() OVER (PARTITION BY Category ORDER BY Price DESC) AS DenseRankNum
FROM Products;
GO
WITH RankedProducts AS (
    SELECT 
        *,
        ROW_NUMBER() OVER (PARTITION BY Category ORDER BY Price DESC) AS rn
    FROM Products
)
SELECT * FROM RankedProducts WHERE rn <= 3;

--EXERSISE 2
-- GROUPING SETS
SELECT 
    c.Region,
    p.Category,
    SUM(od.Quantity) AS TotalQuantity
FROM Orders o
JOIN OrderDetails od ON o.OrderID = od.OrderID
JOIN Customers c ON o.CustomerID = c.CustomerID
JOIN Products p ON od.ProductID = p.ProductID
GROUP BY GROUPING SETS (
    (c.Region),
    (p.Category),
    (c.Region, p.Category)
);

-- ROLLUP
SELECT 
    c.Region,
    p.Category,
    SUM(od.Quantity) AS TotalQuantity
FROM Orders o
JOIN OrderDetails od ON o.OrderID = od.OrderID
JOIN Customers c ON o.CustomerID = c.CustomerID
JOIN Products p ON od.ProductID = p.ProductID
GROUP BY ROLLUP (c.Region, p.Category);

-- CUBE
SELECT 
    c.Region,
    p.Category,
    SUM(od.Quantity) AS TotalQuantity
FROM Orders o
JOIN OrderDetails od ON o.OrderID = od.OrderID
JOIN Customers c ON o.CustomerID = c.CustomerID
JOIN Products p ON od.ProductID = p.ProductID
GROUP BY CUBE (c.Region, p.Category);
--EXERSISE 3
--A
WITH Calendar AS (
    SELECT CAST('2025-01-01' AS DATE) AS CalendarDate
    UNION ALL
    SELECT DATEADD(DAY, 1, CalendarDate)
    FROM Calendar
    WHERE CalendarDate < '2025-01-31'
)
SELECT * FROM Calendar
OPTION (MAXRECURSION 1000);
--B
-- Create StagingProducts
CREATE TABLE StagingProducts (
    ProductID INT,
    ProductName VARCHAR(100),
    Category VARCHAR(50),
    Price DECIMAL(10, 2)
);

-- Insert updated/new product
INSERT INTO StagingProducts VALUES
(2, 'Phone', 'Electronics', 850), -- updated price
(6, 'Lamp', 'Furniture', 120);    -- new product

-- MERGE
MERGE Products AS target
USING StagingProducts AS source
ON target.ProductID = source.ProductID
WHEN MATCHED THEN
    UPDATE SET target.Price = source.Price
WHEN NOT MATCHED THEN
    INSERT (ProductID, ProductName, Category, Price)
    VALUES (source.ProductID, source.ProductName, source.Category, source.Price);
--Exercise 4
-- Add MONTH info to Orders for pivoting
SELECT 
    p.ProductName,
    MONTH(o.OrderDate) AS OrderMonth,
    SUM(od.Quantity) AS TotalQty
INTO SalesSummary
FROM Orders o
JOIN OrderDetails od ON o.OrderID = od.OrderID
JOIN Products p ON od.ProductID = p.ProductID
GROUP BY p.ProductName, MONTH(o.OrderDate);

-- PIVOT
SELECT * FROM (
    SELECT ProductName, OrderMonth, TotalQty FROM SalesSummary
) AS SourceTable
PIVOT (
    SUM(TotalQty) FOR OrderMonth IN ([1], [2], [3])
) AS PivotTable;
SELECT ProductName, OrderMonth, TotalQty
FROM (
    SELECT ProductName, [1], [2], [3]
    FROM (
        SELECT ProductName, OrderMonth, TotalQty FROM SalesSummary
    ) AS SourceTable
    PIVOT (
        SUM(TotalQty) FOR OrderMonth IN ([1], [2], [3])
    ) AS Pivoted
) AS PivotedTable
UNPIVOT (
    TotalQty FOR OrderMonth IN ([1], [2], [3])
) AS UnpivotedTable;
--Exercise 5
WITH CustomerOrderCounts AS (
    SELECT 
        CustomerID,
        COUNT(OrderID) AS OrderCount
    FROM Orders
    GROUP BY CustomerID
)
SELECT 
    c.CustomerID,
    c.Name,
    coc.OrderCount
FROM CustomerOrderCounts coc
JOIN Customers c ON c.CustomerID = coc.CustomerID
WHERE coc.OrderCount > 3;
