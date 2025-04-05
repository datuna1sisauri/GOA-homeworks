def sum_array(arr):
    if arr is None or len(arr) == 1 or len(arr) == 0: return 0

    min_ind = arr.index(min(arr))
    arr.pop(min_ind)

    max_ind = arr.index(max(arr))
    arr.pop(max_ind)

    return sum(arr)