using RetailInventory.Models;

using (var context = new AppDbContext())
{
    var category = new Category
    {
        Name = "Electronics"
    };

    var product = new Product
    {
        Name = "Laptop",
        Price = 999.99m,
        Category = category  // ✅ correct object assignment
    };

    context.Categories.Add(category);
    context.Products.Add(product);
    context.SaveChanges();

    // Display all products
    var products = context.Products.ToList();
    foreach (var p in products)
    {
        Console.WriteLine($"{p.Name} - {p.Price}");
    }
}
