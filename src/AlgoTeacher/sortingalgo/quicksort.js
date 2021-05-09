export function quicksort(arr)
{
    const comparitions = [];
    //const arr = Array.from(arrr);
    actualquicksort(arr,0,arr.length-1,comparitions);
    return comparitions;
}

function actualquicksort(arr,low,high,comparitions)
{
    if (low < high)  
    {  
        var pi = partition(arr, low, high,comparitions);    
        actualquicksort(arr, low, pi - 1,comparitions);  
        actualquicksort(arr, pi + 1, high,comparitions);  
    }  
}

function partition(arr,low,high,comparitions)
{
    var pivot = arr[high]; // pivot  
    var i = (low - 1); // Index of smaller element  
  
    for (var j = low; j <= high - 1; j++)  
    {   
        comparitions.push([high,j,0]);
        comparitions.push([high,j,2]);
        if (arr[j] < pivot)  
        {  
            i++; 
            comparitions.push([i,arr[j],1]);
            comparitions.push([j,arr[i],1]);
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp; 
        }  
    }  
    comparitions.push([high,arr[i+1],1]);
    comparitions.push([i+1,arr[high],1]);
    temp = arr[high];
    arr[high] = arr[i+1];
    arr[i+1] = temp; 
    return (i + 1);  
}



