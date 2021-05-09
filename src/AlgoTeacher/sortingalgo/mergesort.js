export function mergesort(arr)
{
    const comparitions= [];
    //const arr = arrr;
    actualmergesort(arr,0,arr.length-1,comparitions);
    return comparitions;
}

function actualmergesort(arr, start , end,comparitions)
{
    if(start < end)
    {
        const middle = Math.floor((start+end)/2);
        actualmergesort(arr,start,middle,comparitions);
        actualmergesort(arr,middle+1,end,comparitions);
        merge(arr,start,end,comparitions);
    }
}

function merge(arr,start,end,comparitions)
{
    const auxarr = Array.from(arr);
    const middle  = Math.floor((start+end)/2);
    var i=start,j=middle+1;
    while(i <= middle && j <= end)
    {
        comparitions.push([i,j,0]);
        comparitions.push([i,j,2]);
        if(auxarr[i] < auxarr[j])
        {
            comparitions.push([start,auxarr[i],1]);
            arr[start++] = auxarr[i++];
        }
        else
        {
            comparitions.push([start,auxarr[j],1]);
            arr[start++] = auxarr[j++];
        }
    }
    while(i <= middle){comparitions.push([start,auxarr[i],1]); arr[start++] = auxarr[i++]; }
    while(j <= end){comparitions.push([start,auxarr[j],1]); arr[start++] = auxarr[j++]; }
}