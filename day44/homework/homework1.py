def rps(p1, p2):
    output = {
        ("rock", "scissors"): "Player 1 won!",
        ("scissors", "paper"): "Player 1 won!",
        ("paper", "rock"): "Player 1 won!",
        ("scissors", "rock"): "Player 2 won!",
        ("paper", "scissors"): "Player 2 won!",
        ("rock", "paper"): "Player 2 won!"
    }
    
    if p1 == p2:
        return "Draw!"
    
    return output.get((p1,p2),"Draw!")