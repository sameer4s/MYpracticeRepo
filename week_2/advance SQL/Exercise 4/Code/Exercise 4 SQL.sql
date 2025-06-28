CREATE DATABASE EmployeeDB;
GO
USE EmployeeDB;
GO
CREATE TABLE Departments (
    DepartmentID INT PRIMARY KEY,
    DepartmentName VARCHAR(100)
);

CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY IDENTITY(1,1),
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    DepartmentID INT FOREIGN KEY REFERENCES Departments(DepartmentID),
    Salary DECIMAL(10,2),
    JoinDate DATE
);

INSERT INTO Departments (DepartmentID, DepartmentName) VALUES
(1, 'HR'),
(2, 'Finance'),
(3, 'IT'),
(4, 'Marketing');

INSERT INTO Employees (FirstName, LastName, DepartmentID, Salary, JoinDate) VALUES
('John', 'Doe', 1, 5000.00, '2020-01-15'),
('Jane', 'Smith', 2, 6000.00, '2019-03-22'),
('Michael', 'Johnson', 3, 7000.00, '2018-07-30'),
('Emily', 'Davis', 4, 5500.00, '2021-11-05');
GO
--Exercise 1: Create sp_InsertEmployee
CREATE PROCEDURE sp_InsertEmployee
    @FirstName VARCHAR(50),
    @LastName VARCHAR(50),
    @DepartmentID INT,
    @Salary DECIMAL(10,2),
    @JoinDate DATE
AS
BEGIN
    INSERT INTO Employees (FirstName, LastName, DepartmentID, Salary, JoinDate)
    VALUES (@FirstName, @LastName, @DepartmentID, @Salary, @JoinDate);
END;
GO
--Exercise 2: Modify Stored Procedure (Include Salary)
CREATE PROCEDURE sp_GetEmployeesByDept
    @DeptID INT
AS
BEGIN
    SELECT EmployeeID, FirstName, LastName, Salary
    FROM Employees
    WHERE DepartmentID = @DeptID;
END;
GO
--Exercise 3: Delete a Stored Procedure
DROP PROCEDURE sp_GetEmployeesByDept;
GO
--Exercise 4: Execute a Stored Procedure
EXEC sp_GetEmployeesByDept @DeptID = 2;
GO
--Exercise 5: Return Employee Count by Department
CREATE PROCEDURE sp_CountEmployeesInDept
    @DeptID INT
AS
BEGIN
    SELECT COUNT(*) AS EmployeeCount
    FROM Employees
    WHERE DepartmentID = @DeptID;
END;
EXEC sp_CountEmployeesInDept @DeptID = 1;
GO
--Exercise 6: Output Parameter - Total Salary by Department

CREATE PROCEDURE sp_TotalSalaryByDept
    @DeptID INT,
    @TotalSalary DECIMAL(10,2) OUTPUT
AS
BEGIN
    SELECT @TotalSalary = SUM(Salary)
    FROM Employees
    WHERE DepartmentID = @DeptID;
END;
GO
DECLARE @Total DECIMAL(10,2);
EXEC sp_TotalSalaryByDept @DeptID = 1, @TotalSalary = @Total OUTPUT;
SELECT @Total AS TotalSalary;
Go
--Exercise 7: Update Employee Salary
CREATE PROCEDURE sp_UpdateEmployeeSalary
    @EmployeeID INT,
    @NewSalary DECIMAL(10,2)
AS
BEGIN
    UPDATE Employees
    SET Salary = @NewSalary
    WHERE EmployeeID = @EmployeeID;
END;
EXEC sp_UpdateEmployeeSalary 1, 5500.00;
Go
--Exercise 8: Bonus by Department
CREATE PROCEDURE sp_GiveBonus
    @DeptID INT,
    @BonusAmount DECIMAL(10,2)
AS
BEGIN
    UPDATE Employees
    SET Salary = Salary + @BonusAmount
    WHERE DepartmentID = @DeptID;
END;
EXEC sp_GiveBonus 1, 500.00;
GO
--Exercise 9: Transaction in Salary Update
CREATE PROCEDURE sp_UpdateSalaryWithTransaction
    @EmployeeID INT,
    @NewSalary DECIMAL(10,2)
AS
BEGIN
    BEGIN TRANSACTION;
    BEGIN TRY
        UPDATE Employees
        SET Salary = @NewSalary
        WHERE EmployeeID = @EmployeeID;

        COMMIT;
    END TRY
    BEGIN CATCH
        ROLLBACK;
        PRINT 'Error occurred while updating salary.';
    END CATCH;
END;
GO
--Exercise 10: Dynamic SQL
CREATE PROCEDURE sp_GetEmployeesByDynamicFilter
    @ColumnName NVARCHAR(50),
    @FilterValue NVARCHAR(100)
AS
BEGIN
    DECLARE @SQL NVARCHAR(MAX);
    SET @SQL = 'SELECT * FROM Employees WHERE ' + QUOTENAME(@ColumnName) + ' = @Value';

    EXEC sp_executesql @SQL, N'@Value NVARCHAR(100)', @Value = @FilterValue;
END;
EXEC sp_GetEmployeesByDynamicFilter 'FirstName', 'John';
Go
--Exercise 11: Error Handling
CREATE PROCEDURE sp_UpdateSalaryWithErrorHandling
    @EmployeeID INT,
    @NewSalary DECIMAL(10,2)
AS
BEGIN
    BEGIN TRY
        UPDATE Employees
        SET Salary = @NewSalary
        WHERE EmployeeID = @EmployeeID;

        PRINT 'Salary updated successfully.';
    END TRY
    BEGIN CATCH
        PRINT 'An error occurred: ' + ERROR_MESSAGE();
    END CATCH;
END;
