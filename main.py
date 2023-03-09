import time
from gamepad_handler import *
from robocon_xbot import *

gamepad_handler.set_mode(1)
gamepad_handler.set_speed_btn('b', 'a')
gamepad_handler.set_servo_btn(0, 'x', 'y', 0, 90)
gamepad_handler.set_servo_btn(1, 'r1', 'l1', 0, 180)

while True:
    gamepad_handler.processing()
    #print('L2: ',gamepad.data['al2'], 'R2: ',gamepad.data['ar2'])
