import time
from gamepad import *
from robocon_xbot import *

gamepad._verbose = True

robot._speed = 80

while True:
  gamepad.update()
  if gamepad.data['r1']:
      robot._speed = 100
  else:
      robot._speed = 80
  drive_mode_dpad()
  time.sleep_ms(20)