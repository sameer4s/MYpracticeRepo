using RetailInventory;
using RetailInventory.Models;

class Program
{
    static void Main(string[] args)
    {
        using (var context = new AppDbContext())
        {
            // Ensure database is created
            context.Database.EnsureCreated();

            // Insert a product if none exists
            if (!context.Products.Any())
            {
                var product = new Product
                {
                    Name = "Laptop",
                    Category = "Electronics",
                    Stock = 10
                };

                context.Products.Add(product);
                context.SaveChanges();
            }

            // Fetch and print all products
            var products = context.Products.ToList();

            Console.WriteLine("Product List:");
            foreach (var p in products)
            {
                Console.WriteLine($"ID: {p.Id}, Name: {p.Name}, Category: {p.Category}, Stock: {p.Stock}");
            }
        }

        Console.WriteLine("Program finished. Press any key to exit...");
        Console.ReadKey(); // Keeps console window open
    }
}
