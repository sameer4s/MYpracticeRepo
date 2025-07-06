namespace RetailInventory.Models
{
    public class Product
    {
        public int Id { get; set; }                 // Primary key
        public string Name { get; set; }            // Product name
        public string Category { get; set; }        // Category name
        public int Stock { get; set; }              // Quantity in stock
    }
}
