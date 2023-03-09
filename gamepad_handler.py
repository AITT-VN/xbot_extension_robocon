import time
from gamepad import *
from robocon_xbot import *

gamepad._verbose = False

robot._speed = 80


class GamepadHandler():

    def __init__(self):
        self.movingMode = 1
        self.btnIncr = 'b'
        self.btnDecr = 'a'
        self.servoVal = [['x', 'y', 0, 90], [None, None, None, None], [None, None, None, None], [None, None, None, None], [
            None, None, None, None], [None, None, None, None], [None, None, None, None], [None, None, None, None]]
        led_onboard.show(1, hex_to_rgb('#00ff00'))
        led_onboard.show(2, hex_to_rgb('#00ff00'))
        print('Robot connected with Gamepad Reciever!')

    def set_mode(self, movingMode=1):
        self.movingMode = movingMode

    def set_speed_btn(self, btnIncr='b', btnDecr='a'):
        self.btnIncr = btnIncr
        self.btnDecr = btnDecr

    def set_servo_btn(self, index=0, btn1='x', btn2='y', angle1=0, angle2=90):
        self.servoVal[index][0] = btn1
        self.servoVal[index][1] = btn2
        self.servoVal[index][2] = angle1
        self.servoVal[index][3] = angle2

    def drive_mode_dpad(self):
        if gamepad.data['dpad_up'] and gamepad.data['dpad_left']:
            robot.move(4)
        elif gamepad.data['dpad_up'] and gamepad.data['dpad_right']:
            robot.move(2)
        elif gamepad.data['dpad_down'] and gamepad.data['dpad_left']:
            robot.move(6)
        elif gamepad.data['dpad_down'] and gamepad.data['dpad_right']:
            robot.move(8)
        elif gamepad.data['dpad_up']:
            robot.move(3)
            #robot.forward(robot._speed, 0.1, True)
        elif gamepad.data['dpad_down']:
            robot.move(7)
        elif gamepad.data['dpad_left']:
            robot.move(5)
        elif gamepad.data['dpad_right']:
            robot.move(1)
        else:
            robot.stop()

    def drive_mode_left_joystick(self):

        dir = gamepad.check_dir()

        if dir == 2:
            robot.move(4)
        elif dir == 4:
            robot.move(2)
        elif dir == 8:
            robot.move(6)
        elif dir == 6:
            robot.move(8)
        elif dir == 3:
            robot.move(3)
        elif dir == 7:
            robot.move(7)
        elif dir == 1:
            robot.move(5)
        elif dir == 5:
            robot.move(1)
        else:
            robot.stop()

    def drive_mode_right_joystick(self):

        dir = gamepad.check_dir(1)

        if dir == 2:
            robot.move(4)
        elif dir == 4:
            robot.move(2)
        elif dir == 8:
            robot.move(6)
        elif dir == 6:
            robot.move(8)
        elif dir == 3:
            robot.move(3)
        elif dir == 7:
            robot.move(7)
        elif dir == 1:
            robot.move(5)
        elif dir == 5:
            robot.move(1)
        else:
            robot.stop()

    def processing(self):

        if self.movingMode == 1:
            self.drive_mode_dpad()
        elif self.movingMode == 2:
            self.drive_mode_left_joystick()
        elif self.movingMode == 3:
            self.drive_mode_right_joystick()

        if gamepad.data[self.btnIncr]:
            robot._speed = (robot._speed if isinstance(
                robot._speed, (int, float)) else 0) + 1
            if robot._speed > 100:
                robot._speed = 100

        if gamepad.data[self.btnDecr]:
            robot._speed = (robot._speed if isinstance(
                robot._speed, (int, float)) else 0) - 1
            if robot._speed < 0:
                robot._speed = 0

        for i in range(8):
            if self.servoVal[i][0] != None:
                if gamepad.data[self.servoVal[i][0]]:
                    servo.position(i, self.servoVal[i][2])
                if gamepad.data[self.servoVal[i][1]]:
                    servo.position(i, self.servoVal[i][3])

        #print('Mode: ',self.modeMove ,'Speed: ',robot._speed)
        gamepad.update()
        time.sleep_ms(20)


gamepad_handler = GamepadHandler()
