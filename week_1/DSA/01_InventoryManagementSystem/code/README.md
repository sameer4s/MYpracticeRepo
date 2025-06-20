QUESTION:-I:->Explain why data structures and algorithms are essential in handling large inventories.
          II:->	Discuss the types of data structures suitable for this problem.


ANSWER:->
The Importance of Data Structures and Algorithms
If you are managing the inventory of a warehouse that could have thousands of products, you would want to:
Easily search for products.
Easily update the quantity or price.
Add/remove products without slowing down performance.
This is where data structures are important; they make searching, insertion, and deletion fast and scalable.
Best Data Structures for Our Scenario
A Dictionary in C#: O(1) average time complexity for a lookup, insert, and delete utilizing the productId as the key in the dictionary.

QUESTION 4:
I:->	Analyze the time complexity of each operation (add, update, delete) in your chosen data structure.
II:->	Discuss how you can optimize these operations.

ANSWER:->(I)
 Operation       Time Complexity   Notes                            
 Add Product     O(1) on average   Dictionary uses hash table.      
 Update Product  O(1) on average   Direct access using "PRODUCT_ID". 
 Delete Product  O(1) on average   Again, constant time using key.  
 Print All       O(n)              Iterates through all entries.    


(II):-
Optimizations:
Use TryGetValue() to avoid double key lookup.
Consider adding timestamps or indexing if sorting is needed later.
