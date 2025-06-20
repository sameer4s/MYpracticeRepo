using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InventoryManagementSystem
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Inventory inventory = new Inventory();

            Product p1 = new Product("P001", "Mouse", 50, 25.5);
            Product p2 = new Product("P002", "Keyboard", 30, 45.0);
            Product p3 = new Product("P003", "Monitor", 20, 150.0);

            inventory.AddProduct(p1);
            inventory.AddProduct(p2);
            inventory.AddProduct(p3);

            inventory.UpdateProduct("P002", "Mechanical Keyboard", 25, 60.0);

            inventory.DeleteProduct("P003");

            inventory.PrintAll();

            Console.ReadLine();
        }
    }
}
