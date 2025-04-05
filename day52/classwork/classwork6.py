def twice_as_old(dad_years_old, son_years_old):
    res = (dad_years_old - 2 * son_years_old)
    
    if res < 0: return res*-1
    return res