using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinancialForecasting
{
    internal class Program
    {
        static void Main(string[] args)
        {
            double initialValue,growthRate,years;

            Console.Write("Enter initial Value:-");
            initialValue=Convert.ToDouble(Console.ReadLine());

            Console.Write("Enter Growth Rate:-");
            growthRate = Convert.ToDouble(Console.ReadLine());

            Console.Write("Enter  years:-");
            years = Convert.ToDouble(Console.ReadLine());

            double futureValue = PredictValue(initialValue, growthRate, years);
            Console.WriteLine($"Future Value after {years} years is: {futureValue}");

            Console.ReadLine();
        }

        static double PredictValue(double currentValue, double rate, double years)
        {
            if (years == 0)
                return currentValue;
            return PredictValue(currentValue * (1 + rate), rate, years - 1);
        }
    
    }
}
