using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InventoryManagementSystem
{
    internal class Inventory
    {
        private Dictionary<string, Product> products = new Dictionary<string, Product>();

        public void AddProduct(Product product)
        {
            if (!products.ContainsKey(product.ProductId))
            {
                products.Add(product.ProductId, product);
            }
        }

        public void UpdateProduct(string productId, string name, int quantity, double price)
        {
            if (products.ContainsKey(productId))
            {
                products[productId].ProductName = name;
                products[productId].Quantity = quantity;
                products[productId].Price = price;
            }
        }

        public void DeleteProduct(string productId)
        {
            if (products.ContainsKey(productId))
            {
                products.Remove(productId);
            }
        }

        public void PrintAll()
        {
            foreach (var item in products.Values)
            {
                System.Console.WriteLine($"{item.ProductId} - {item.ProductName} - Qty: {item.Quantity} - ${item.Price}");
            }
        }
    }
}
