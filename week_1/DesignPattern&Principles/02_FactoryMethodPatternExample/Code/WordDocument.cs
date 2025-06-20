using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FactoryMethodPatternExample
{
    internal class WordDocument : IDocument
    {
         public void Open()
        {
            System.Console.WriteLine("Word document opened.");
        }
    }
}
