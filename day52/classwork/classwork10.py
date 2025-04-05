def enough(cap, on, wait):
    available = cap - on
    
    if available >= wait: return 0
    return wait - available