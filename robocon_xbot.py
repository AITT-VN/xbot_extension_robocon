import machine

# support libs
from setting import *
from utility import *

# hardware libs
from pins import *
from led import *
from speaker import speaker, BIRTHDAY, TWINKLE, JINGLE_BELLS, WHEELS_ON_BUS, FUR_ELISE, CHASE, JUMP_UP, JUMP_DOWN, POWER_UP, POWER_DOWN
from ultrasonic import ultrasonic
from line_array import line_array
from button import *
from motor import motor
from servo import servo
from led_matrix import Image, led_matrix
from motion import motion
from robot import robot

# wireless libs
from ble import ble_o, ble
#from wifi import *
def follow_line_until(speed, condition, port, timeout=10000):


    count = 0
    last_time = time.ticks_ms()

    while time.ticks_ms() - last_time < timeout:
        if condition():
            count = count + 1
            if count == 3:
                break

        if speed >= 0:
            if line_array.read(port) == (1, 0, 0, 0):
                robot.turn_left(70 if speed > 50 else 50)
            elif line_array.read(port) == (1, 1, 0, 0):
                robot.turn_left(speed)
            elif line_array.read(port) == (0, 0, 0, 1):
                robot.turn_right((70 if speed > 50 else 50))
            elif line_array.read(port) == (0, 0, 1, 1):
                robot.turn_right(speed)
            elif line_array.read(port) == (0, 0, 0, 0):
                robot.backward(25)
            else:
                robot.forward(30)


        time.sleep_ms(20)

    robot.stop()

def turn_until_line_detected(m1_speed, m2_speed, port, timeout=5000):
    count = 0
    sensor_index = 2
    if m1_speed > m2_speed:
        sensor_index = 3
 
    last_line_status = line_array.read(port,sensor_index)
  
    robot.set_wheel_speed(m1_speed, m2_speed)
  
    last_time = time.ticks_ms()

    while time.ticks_ms() - last_time < timeout:
    
        current_line_status = line_array.read(port,sensor_index)

        if current_line_status == 1: # black line detected
	          # ignore case when robot is still on black line since started turning
            if last_line_status == 1 or time.ticks_ms() - last_time < 500:
                continue
            else:
                # only considered as black line detected after 3 times reading
                if count > 3:
                    robot.stop()
                    break
                else:
                    count = count + 1
        else: # meet white background
            last_line_status = 0
  
        time.sleep_ms(10)

    robot.stop()

def turn_until_condition(m1_speed, m2_speed, condition, timeout=5000):
    count = 0

    robot.set_wheel_speed(m1_speed, m2_speed)

    last_time = time.ticks_ms()

    while time.ticks_ms() - last_time < timeout:
        if condition():
            count = count + 1
            if count == 3:
                break
        time.sleep_ms(10)

    robot.stop()
 
