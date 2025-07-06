using RetailInventory;
using RetailInventory.Models;
using Microsoft.EntityFrameworkCore;

class Program
{
    static async Task Main(string[] args)
    {
        using var context = new AppDbContext();

        await context.Database.EnsureCreatedAsync();

        // OPTIONAL: Clear old data (just for testing)
        context.Products.RemoveRange(context.Products);
        context.Categories.RemoveRange(context.Categories);
        await context.SaveChangesAsync();

        // Add categories
        var electronics = new Category { Name = "Electronics" };
        var groceries = new Category { Name = "Groceries" };

        await context.Categories.AddRangeAsync(electronics, groceries);

        // Add products
        var product1 = new Product { Name = "Laptop", Price = 75000, Category = electronics };
        var product2 = new Product { Name = "Rice Bag", Price = 1200, Category = groceries };

        await context.Products.AddRangeAsync(product1, product2);
        await context.SaveChangesAsync();

        Console.WriteLine("✔ Data inserted successfully!\n");

        // Display all products
        var products = await context.Products
                                    .Include(p => p.Category)
                                    .ToListAsync();

        Console.WriteLine("🛍 Product List:");
        foreach (var p in products)
        {
            Console.WriteLine($"{p.Name} - ₹{p.Price} ({p.Category.Name})");
        }
    }
}
