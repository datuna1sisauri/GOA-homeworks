def get_grade(s1, s2, s3):
    avegage = (s1+s2+s3)/3
    if 90 <= avegage <= 100:
        return 'A'
    elif 80 <= avegage <= 90:
        return 'B'
    elif 70 <= avegage <= 80:
        return 'C'
    elif 60 <= avegage <= 700:
        return 'D'
    elif 0 <= avegage <= 60:
        return 'F'