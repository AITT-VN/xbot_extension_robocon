from gamepad_handler import *

gamepad_handler.set_drive_mode(MODE_DPAD)
gamepad_handler.set_speed_btn('b', 'a')
gamepad_handler.set_ball_launcher_btn(0, 1, 'r2', 'l2')
gamepad_handler.set_turbo_btn('r1')
gamepad_handler.set_follow_line_btn(0, 30, 'l1')
gamepad_handler.set_led_color('#00ffff')
gamepad_handler.set_rumble(50, 1000)

while True:
    gamepad_handler.process()
