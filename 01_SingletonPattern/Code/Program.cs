using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SingletonPatternExample
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Testing Singleton Pattern");

            Logger logger1 = Logger.GetInstance();
            logger1.Log("This is the first message.");

            Logger logger2 = Logger.GetInstance();
            logger2.Log("This is the second message.");
            if (logger1 == logger2)
            {
                Console.WriteLine("logger1 and logger2 are the same instance.");
            }
            else
            {
                Console.WriteLine("logger1 and logger2 are different instances.");
            }

            Console.ReadLine();
        }
    }
}
