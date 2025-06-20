using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ECommerceSearchFunction
{
    public class Product
    {
        public string ProductId { get; set; }
        public string ProductName { get; set; }
        public string Category { get; set; }

        public Product(string id, string name, string category)
        {
            ProductId = id;
            ProductName = name;
            Category = category;
        }
    }
}
