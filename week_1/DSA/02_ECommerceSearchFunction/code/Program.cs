using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ECommerceSearchFunction
{
    namespace ECommerceSearchFunction
    {
        public class Program
        {
            static void Main(string[] args)
            {
                Product[] products = new Product[]
                {
                new Product("P001", "Keyboard", "Electronics"),
                new Product("P002", "Mouse", "Electronics"),
                new Product("P003", "Chair", "Furniture"),
                new Product("P004", "Desk", "Furniture"),
                new Product("P005", "Monitor", "Electronics"),
                };

                Array.Sort(products, (a, b) => a.ProductName.CompareTo(b.ProductName));

                Console.Write("Enter product name to search: ");
                string userInput = Console.ReadLine();

                Product linearResult = Search.LinearSearch(products, userInput);
                Product binaryResult = Search.BinarySearch(products, userInput);

                Console.WriteLine(linearResult != null ? $"Linear: {linearResult.ProductName} found." : "Linear: Not found.");
                Console.WriteLine(binaryResult != null ? $"Binary: {binaryResult.ProductName} found." : "Binary: Not found.");

                Console.ReadLine();
            }
        }
    }
}

