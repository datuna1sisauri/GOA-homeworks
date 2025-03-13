def fake_bin(x):
    final=""
    for i in x:
        if int(i) < 5:
            final+="0"
        else: final+="1"
    return final