using System;
using System.Threading.Tasks;
using Confluent.Kafka;

class Producer
{
    static async Task Main(string[] args)
    {
        var config = new ProducerConfig { BootstrapServers = "localhost:9092" };
        using var producer = new ProducerBuilder<Null, string>(config).Build();

        Console.WriteLine("Producer started. Type messages:");

        while (true)
        {
            Console.Write("You: ");
            var message = Console.ReadLine();
            await producer.ProduceAsync("chat-topic", new Message<Null, string> { Value = message });
        }
    }
}
