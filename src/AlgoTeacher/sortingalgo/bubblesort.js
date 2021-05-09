export function bubblesort(arr)
{
    const comparisions = [];
    //const arr = Array.from(arrr);
    for(var i=arr.length-1;i>=1;i--)
    {
        for(var j=0;j<i;j++)
        {
            comparisions.push([j,j+1,0]);
            comparisions.push([j,j+1,2]);
            if(arr[j] > arr[j+1])
            {
                comparisions.push([j,arr[j+1],1]);
                //comparisions.push([j,arr[j+1],1])
                comparisions.push([j+1,arr[j],1]);
                
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return comparisions;
}