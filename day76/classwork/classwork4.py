def number(bus_stops):
    total = 0
    for x, y in bus_stops:
        total += x - y
    return total