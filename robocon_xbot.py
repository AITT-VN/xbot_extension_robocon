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
speed_factors = [ 
    [1, 1], [0.5, 1], [0, 1], [-0.5, 0.5], 
    [-2/3, -2/3], [0, 1], [-0.5, 0.5], [-0.7, 0.7] 
] 
#0: forward, 1: light turn, 2: normal turn, 3: heavy turn, 4:  backward, 5: strong light turn, 6: strong normal turn, 7: strong heavy turn


m_dir = -1 #no found
i_lr = 0 #0 for left, 1 for right
t_finding_point = time.time_ns()

def follow_line(speed, port):
    global m_dir, i_lr, t_finding_point

    now = line_array.read(port)
    if now == (0, 0, 0, 0): #no line found
        robot.backward(speed)
    else:
        if (now[1], now[2]) == (1, 1):
            if m_dir == 0:
                robot.set_wheel_speed(speed, speed) #if it is running straight before then robot should speed up now           
            else:
                m_dir = 0 #forward
                robot.set_wheel_speed(speed * 2/3, speed * 2/3) #just turn before, shouldn't set high speed immediately, speed up slowly
        else:
            if (now[0], now[1]) == (1, 1): 
                m_dir = 2 #left normal turn
                i_lr = 0
            elif (now[2], now[3]) == (1, 1): 
                m_dir = 2 #right normal turn
                i_lr = 1
            elif now == (1, 0, 1, 0): 
                if m_dir != -1:
                    m_dir = 1
                    i_lr = 0
            elif now == (0, 1, 0, 1): 
                if m_dir != -1:
                    m_dir = 1
                    i_lr = 1
            elif now == (1, 0, 0, 1): 
                if m_dir != -1:
                    m_dir = 0
                    i_lr = 0
            elif now[1] == 1: 
                m_dir = 1 #left light turn
                i_lr = 0
            elif now[2] == 1:
                m_dir = 1 #right light turn
                i_lr = 1
            elif now[0] == 1: 
                m_dir = 3 #left heavy turn
                i_lr = 0
            elif now[3] == 1: 
                m_dir = 3 #right heavy turn
                i_lr = 1

            robot.set_wheel_speed( speed * speed_factors[m_dir][i_lr], speed * speed_factors[m_dir][1-i_lr] )
def follow_line_until(speed, condition, port, timeout=10000):
    count = 0
    last_time = time.ticks_ms()

    while time.ticks_ms() - last_time < timeout:
        if condition():
            count = count + 1
            if count == 3:
                break

        if speed >= 0:
            follow_line(speed, port)
        else:
            robot.backward(abs(speed))

        time.sleep_ms(10)

    robot.stop()

def turn_until_line_detected(m1_speed, m2_speed, port, timeout=5000):
    count = 0
    sensor_index = 2
    sensor_indices = [1, 2]
    sensor1 = 0
    sensor2 = 0
    if m1_speed > m2_speed:
        sensor_index = 3
        sensor_indices = [3, 4]
 
    last_line_status = line_array.read(port, sensor_index)
  
    robot.set_wheel_speed(m1_speed, m2_speed)
  
    last_time = time.ticks_ms()

    while time.ticks_ms() - last_time < timeout:
    
        current_line_status = line_array.read(port, sensor_index)

        if current_line_status == 1: # black line detected
	          # ignore case when robot is still on black line since started turning
            if last_line_status == 1 or time.ticks_ms() - last_time < 500:
                continue
            else:
                if not sensor1:
                  sensor1 = line_array.read(port, sensor_indices[0])
                if not sensor2:
                  sensor2 = line_array.read(port, sensor_indices[1])
                if sensor1 and sensor2:
                # only considered as black line detected after 3 times reading
                #if count > 3:
                    robot.stop()
                    break
                #else:
                #    count = count + 1
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
