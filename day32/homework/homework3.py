def bigger_sentence(sentence,word,ind):
    new = sentence.split(" ")
    new.insert(ind,word)

    res = " ".join(new)
    print(res)

bigger_sentence("Hello my friend","old",2)