using CalcLibrary; // Reference to your main project
using NUnit.Framework;
using System;

namespace CalcLibrary.Tests
{
    [TestFixture]
    public class SimpleCalculatorTests
    {
        private SimpleCalculator _calculator;

        [SetUp]
        public void SetUp()
        {
            _calculator = new SimpleCalculator();
        }

        [TearDown]
        public void TearDown()
        {
            _calculator.AllClear();
        }

        [TestCase(10, 5, 15)]
        [TestCase(0, 0, 0)]
        [TestCase(-5, -3, -8)]
        public void Addition_ShouldReturnCorrectSum(double a, double b, double expected)
        {
            double result = _calculator.Addition(a, b);
            Assert.That(result, Is.EqualTo(expected));
        }

        [TestCase(10, 5, 5)]
        [TestCase(-10, -5, -5)]
        [TestCase(0, 5, -5)]
        public void Subtraction_ShouldReturnCorrectResult(double a, double b, double expected)
        {
            double result = _calculator.Subtraction(a, b);
            Assert.That(result, Is.EqualTo(expected));
        }

        [TestCase(3, 4, 12)]
        [TestCase(-3, 3, -9)]
        [TestCase(0, 5, 0)]
        public void Multiplication_ShouldReturnCorrectProduct(double a, double b, double expected)
        {
            double result = _calculator.Multiplication(a, b);
            Assert.That(result, Is.EqualTo(expected));
        }

        [TestCase(10, 2, 5)]
        [TestCase(-10, 2, -5)]
        public void Division_ShouldReturnCorrectQuotient(double a, double b, double expected)
        {
            double result = _calculator.Division(a, b);
            Assert.That(result, Is.EqualTo(expected));
        }

        [Test]
        public void Division_ByZero_ShouldThrowArgumentException()
        {
            var ex = Assert.Throws<ArgumentException>(() => _calculator.Division(10, 0));
            Assert.That(ex.Message, Is.EqualTo("Second Parameter Can't be Zero"));
        }

        [Test]
        public void AllClear_ShouldResetResultToZero()
        {
            _calculator.Addition(5, 10);
            _calculator.AllClear();
            Assert.That(_calculator.GetResult, Is.EqualTo(0));
        }

        [Test]
        public void GetResult_ShouldReturnLastCalculatedValue()
        {
            _calculator.Subtraction(10, 2); // 8
            Assert.That(_calculator.GetResult, Is.EqualTo(8));
        }
    }
}
