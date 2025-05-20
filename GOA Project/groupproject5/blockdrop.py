import arcade
import random

# თამაშის მონაცემები
SCREEN_WIDTH = 600
SCREEN_HEIGHT = 800
SCREEN_TITLE = "Block drop"

PLAYER_WIDTH = 100
PLAYER_HEIGHT = 20
PLAYER_SPEED = 8

BLOCK_SIZE = 40
BLOCK_SPEED = 9.5
BLOCK_COUNT = 300


# ქმინს main ფანჯარას სადაც შემდგომში გამოვა თამაში
class BreakoutGame(arcade.Window):
    # __init__ ქმინს ფანჯარას მოცემული ზომებით
    def __init__(self):
        # თამაშის პარამეტრები
        super().__init__(SCREEN_WIDTH, SCREEN_HEIGHT, SCREEN_TITLE)
        self.player = None
        self.score = 0
        self.game_over = False
        # ტაიმერის პარამეტრები
        self.countdown = 3 
        self.countdown_timer = 0
        self.game_started = False
        # ახალი ცვლადები/ატრიბუტები იმისათვის რომ ბლოკები ერთმანეთის მიყოლებით სპავნდებოდნენ
        self.block_data = []
        self.spawn_timer = 0 
        self.spawn_delay = 1
        
        
        # ბლოკის დაჭერის ხმა
        self.catch_sound = arcade.load_sound("goal homework/GOA Project/groupproject5/pop.mp3")
        # დათვლის ხმა
        self.countdown_sound = arcade.load_sound("goal homework/GOA Project/groupproject5/countdown.mp3")
        # თამაშის დამთავრების ხმა
        self.game_over_sound = arcade.load_sound("goal homework/GOA Project/groupproject5/gameover.mp3")
        
        
    # თამაშის დაყენება
    def setup(self):
        self.player_list = arcade.SpriteList()
        self.block_list = arcade.SpriteList()

        food = [
            "goal homework/GOA Project/groupproject5/burger.png",
            "goal homework/GOA Project/groupproject5/pizza.png",
            "goal homework/GOA Project/groupproject5/soup.png",
        ]
        
        # მოთამაშის შექმნა
        self.player = arcade.SpriteSolidColor(PLAYER_WIDTH, PLAYER_HEIGHT,)
        self.player.center_x = SCREEN_WIDTH // 2
        self.player.center_y = 30
        self.player.change_x = 0
        self.player_list.append(self.player)

        # რანდომული საჭმელებით ბლოკების შექმნა
        self.block_data = []
        for _ in range(BLOCK_COUNT):
            image = random.choice(food)
            x = random.randint(BLOCK_SIZE, SCREEN_WIDTH - BLOCK_SIZE)
            y = random.randint(SCREEN_HEIGHT // 2, SCREEN_HEIGHT)
            self.block_data.append((image, x, y))
            
            
            
            

        # არესეტებს თამაშის ძირითად მონაცემებს
        self.current_block = None
        self.score = 0
        self.game_over = False


    # ეკრანზე ხატავს/გამოაქვს თითოეული ნაწილი
    def on_draw(self):
        """ Called every frame to draw everything """
        self.clear()  # ასუფთავებს ეკრანს
        
        arcade.draw_text("Press R to Restart", SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2 - 100,
                arcade.color.LIGHT_GRAY, font_size=18, anchor_x="center")

        # გამოაქვს საბოლოო შედეგი
        if self.game_over:
            arcade.draw_text("GAME OVER", SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2,
                arcade.color.WHITE, font_size=40, anchor_x="center")
            arcade.draw_text(f"Score: {self.score}", SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2 - 50,
                arcade.color.WHITE, font_size=20, anchor_x="center")
            
            if self.score >= 100:
                arcade.draw_text("Congratulations Promo Code:GOA50", SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2 -150,
                    arcade.color.WHITE , font_size = 24, anchor_x="center")
            
        # ხოლო თუ თამაში ისევ ფრძელდება ხატავს ბლოკებს რომლებიც უნდა ჩამოვარდნენ ა.შ
        else:
            self.player_list.draw()
            self.block_list.draw()
            arcade.draw_text(f"Score: {self.score}", 10, SCREEN_HEIGHT - 30,
            arcade.color.WHITE, font_size=20)
            
            # ასფტავებს ყვლეაფერს
            self.clear()

        # თუ თამაში არ დაწყებულა გამოაქვს countdown-ის რიცხვები
        if not self.game_started:
            arcade.draw_text(str(self.countdown), SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2,
                arcade.color.WHITE, font_size=80, anchor_x="center", anchor_y="center")
            return

        if self.game_over:
            arcade.draw_text("GAME OVER", SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2,
                arcade.color.WHITE, font_size=40, anchor_x="center")
            arcade.draw_text(f"Score: {self.score}", SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2 - 50,
                arcade.color.WHITE, font_size=20, anchor_x="center")
        else:
            self.player_list.draw()
            self.block_list.draw()
            arcade.draw_text(f"Score: {self.score}", 10, SCREEN_HEIGHT - 30,
                arcade.color.WHITE, font_size=20)
    
    
    # თამაშის ლოგიკა ნახლდება
    def on_update(self, delta_time):
        if not self.game_started:
            # 3 წამიანი ტაიმერი
            self.countdown_timer += delta_time
            if self.countdown_timer >= 1:
                self.countdown_timer = 0
                self.countdown -= 1
                arcade.play_sound(self.countdown_sound)
                if self.countdown == 0:
                    self.game_started = True
            return  

        # თუ თამაში მორჩენილია წყვეტს on_update-ში ინფორმაციის განახლებას
        if self.game_over:
            return

        # მოთამაშის გადაადგილება X ღერძზე
        self.player.center_x += self.player.change_x
        self.player.center_x = max(PLAYER_WIDTH // 2, min(SCREEN_WIDTH - PLAYER_WIDTH // 2, self.player.center_x))

        # ეს კოდი მუშაობს იმ შემთხვევაში თუ ბლოკი რომელიც ვარდება არ არსებობს
        if not self.current_block:
            self.spawn_timer += delta_time 
            
            if self.block_data and self.spawn_timer >= self.spawn_delay:
                image, x, y = self.block_data.pop(0)
                new_block = arcade.Sprite(image, scale=BLOCK_SIZE / 260)
                new_block.center_x = x
                new_block.center_y = y
                self.block_list.append(new_block)
                self.current_block = new_block
                self.spawn_timer = 0

        # თუ ბლოკი არსებობს ვუშვებთ მას იმ სისწრაფით რაც არის გაწერილი block-speed-ში
        if self.current_block:
            self.current_block.center_y -= BLOCK_SPEED

            # თუ ბლოკი ჩავიდა y=0-ს ქვემოთ თამაში მორჩა
            if self.current_block.center_y < 0:
                self.game_over = True
                arcade.play_sound(self.game_over_sound)

            # თუ მოთამაშემ დაიჭირა ბლოკი
            if arcade.check_for_collision(self.player, self.current_block):
                arcade.play_sound(self.catch_sound)
                self.current_block.remove_from_sprite_lists()
                self.score += 1
                self.current_block = None

        # თუ აღარ დარჩა ბლოკები თამაში მთავრდება
        if not self.block_data and len(self.block_list) == 0:
            self.game_over = True
            arcade.play_sound(self.game_over_sound)


    # ფუნქცია იმისათვის რომ დავამატოთ მოთამაშისთვის მოძრაობა
    def on_key_press(self, key, modifiers):
        """ Called when a key is pressed """
        if key == arcade.key.A:
            self.player.change_x = -PLAYER_SPEED
        elif key == arcade.key.D:
            self.player.change_x = PLAYER_SPEED
                
            # არესტარტებს თამაშს
        if self.game_over and key == arcade.key.R:
            self.setup()
            self.countdown = 3
            self.countdown_timer = 0
            self.game_started = False
                

            # როცა აეშვება ღილაკს ხელი პლატფორმა გაჩერდება
    def on_key_release(self, key, modifiers):
        """ Called when a key is released """
        if key in (arcade.key.A, arcade.key.D):
            self.player.change_x = 0


# უშვებს პროგრამას
if __name__ == "__main__":
    game = BreakoutGame()
    game.setup()
    arcade.run()
