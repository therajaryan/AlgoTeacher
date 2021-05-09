export function insertionsort(arr)
{
    const comparitions = [];
    //const arr = Array.from(arrr);
    for(var i = 1;i<arr.length;i++)
    {
        var key = arr[i];
        var j = i-1;
        comparitions.push([i,i,0]);
        comparitions.push([i,i,2]);
        while(j>=0)
        {
            comparitions.push([i,j,0]);
            comparitions.push([i,j,2]);
            if(key < arr[j])
            {
                comparitions.push([j+1,arr[j],1]);
                arr[j+1] = arr[j];
                j--;
            }
            else break;
        }
        comparitions.push([j+1,key,1]);
        arr[j+1] = key;
    }
    return comparitions;
}