# Polkadot Secret Code
## Full code
![](image/image11.png)

## Code Breakdown
![](image/image1.png)
   - The `decipher_code(start, end)` function processes a range of numbers defined by `start` and `end`.

![](image/image2.png)
   - We initialize a `value` to 0 to track the result as we iterate through the range.

![](image/image3.png)
   - For each number in the range, the function follows these rules:

     ![](image/image4.png) 
       - If a number is a multiple of both 3 and 5, it is skipped.

     ![](image/image5.png) 
       - If a number is a multiple of 3, it is added to `value`.
       
     ![](image/image6.png) 
       - If a number is a multiple of 5, it is subtracted from `value`.

![](image/image7.png)
   - After processing all numbers, the function returns the final `value`, representing the result of the additions, subtractions, and skips.

![](image/image8.png)
   - The user is then prompted to input the start and end of the range.

![](image/image9.png)
   - The `decipher_code` function is executed with the provided input.

![](image/image10.png)
   - Finally, the calculated `value` is printed, displaying the result to the user.