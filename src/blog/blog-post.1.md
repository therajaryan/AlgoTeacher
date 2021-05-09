# Bubble Sort Algorithm

#### April 1, 2021 by [Shriyansh Agrawal]()

The Bubble sort algorithm compares each pair of elements in an array and swaps them if they are out of order until the entire array is sorted. For each element in the list, the algorithm compares every pair of elements.

## The bubble sort algorithm is as follows:

- Compare A[0]A[0] and A[1]A[1]. If A[0]A[0] is bigger than A[1]A[1], swap the elements.
- Move to the next element, A[1]A[1] (which might now contain the result of a swap from the previous step), and compare it with A[2]A[2]. If A[1]A[1] is bigger than A[2]A[2], swap the elements. Do this for every pair of elements until the end of the list.
- Do steps 1 and 2 'n' times.

## Pseudo-code describing the algorithm:

Bubble-sort(a)

for (i = a.length() to 1) {
    for (j = 1 to i-1)  {
        if a[j]>a[j+1]{
            swap(a[j],a[j+1]);
        }
        end if
    }
}

### **How the code works:**

1.  it goes from j=1j=1 to j=N-1j=N−1 comparing each element of the list with the next \big((i.e. the (j+1)^\text{th}(j+1)
    th
    element\big).). If the j^\text{th}j
    th
    element is bigger than the next one, they change places, and so on.

- This way, in the first iteration, the element with the greatest value goes to the last position ((i.e. goes to \text{a[N]}).a[N]). Doing the same, in the second iteration of the loop, jj goes from j=1j=1 to j=N-2,j=N−2, and the element of the second greatest value goes to one position before the last element ((i.e. it goes to \text{a[N-1]}).a[N-1]). The program does this process until the array is sorted.

## Implementing Bubble Sort

1. def bubble_sort(array):
   - index = len(array) - 1
   - while index >= 0:
     - for j in range(index):
       - if array[j] > array[j+1]:
         - array[j], array[j+1] = array[j+1], array[j]
     - index -= 1
   - return array
