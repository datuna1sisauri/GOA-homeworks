def alphabet_war(fight):
    left = {
        "w": 4,
        "p": 3,
        "b": 2,
        "s": 1
    }
    right = {
        "m": 4,
        "q": 3,
        "d": 2,
        "z": 1
    }
    left_score = 0
    right_score = 0
    for i in fight:
        if i in left.keys():
            left_score+= left[i]
        elif i in right.keys():
            right_score+= right[i]
    if left_score > right_score:
        return "Left side wins!"
    elif right_score > left_score:
        return "Right side wins!"
    else: return "Let's fight again!"
        

def adjacent_element_product(array):
    pairs = []
    last_index = len(array) - 1
    for i,e in enumerate(array):
        if i == last_index:
            break
        pairs.append(e * (array[i + 1]))
    return max(pairs)


def filter_string(st):
    return int("".join([i for i in st if i.isdigit()]))


def sort_my_string(s):
    evens = ""
    odds = ""
    for i,c in enumerate(s):
        if i % 2 == 0:
            evens += c
        else: odds += c
    return f"{evens} {odds}"


def my_languages(results):
    languages = []
    for lang, score in results.items():
        if score >= 60:
            languages.append(lang)
    languages.sort(key=lambda lang: results[lang], reverse=True)
    return languages