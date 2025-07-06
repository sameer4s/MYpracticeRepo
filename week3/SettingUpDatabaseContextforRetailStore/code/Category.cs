using System.Collections.Generic;

namespace RetailInventory.Models
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty; // ✅ fix warning
        public List<Product> Products { get; set; } = new(); // ✅ fix warning
    }
}
