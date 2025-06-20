using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FactoryMethodPatternExample
{
    public class ExcelDocument : IDocument
    {
        public void Open()
        {
            System.Console.WriteLine("Excel document opened.");
        }
    }
}
