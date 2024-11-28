const ColorBlock = '#44cbc6';
const ImgUrl = 'https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/xbot_extension_robocon/images/';

// ROBOCON BLOCK

Blockly.Blocks['robocon_follow_line_until_cross'] = {
  init: function () {
    this.jsonInit(
      {
        "type": "robocon_follow_line_until_cross",
        "message0": "dò line cổng %1 tốc độ %2 gặp vạch ngang rồi %3",
        "args0": [
          {
            type: "field_dropdown",
            name: "port",
            options: [
              ["1", "0"],
              ["2", "1"],
              ["3", "2"],
              ["4", "3"],
              ["5", "4"],
              ["6", "5"],
            ],
          },
          {
            type: "input_value",
            check: "Number",
            value: 50,
            name: "speed",
          },
          {
            type: "field_dropdown",
            name: "stop",
            options: [
              ["dừng và khóa bánh", "BRAKE"],
              ["dừng lại", "STOP"],
              ["không làm gì", "None"],
            ]
          },
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": ColorBlock,
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python["robocon_follow_line_until_cross"] = function (block) {
  Blockly.Python.definitions_['import_robocon'] = 'from robocon_xbot import *';
  var speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var port = block.getFieldValue('port');
  var stop = block.getFieldValue('stop');
  // TODO: Assemble Python into code variable.
  var code = "follow_line_until_cross(" + speed + ", " + port + ", 15000, " + stop + ")\n";
  return code;
};

Blockly.Blocks['robocon_follow_line_until_end'] = {
  init: function () {
    this.jsonInit(
      {
        "type": "robocon_follow_line_until_end",
        "message0": "dò line cổng %1 tốc độ %2 đến cuối vạch đen rồi %3",
        "args0": [
          {
            type: "field_dropdown",
            name: "port",
            options: [
              ["1", "0"],
              ["2", "1"],
              ["3", "2"],
              ["4", "3"],
              ["5", "4"],
              ["6", "5"],
            ],
          },
          {
            type: "input_value",
            check: "Number",
            value: 50,
            name: "speed",
          },
          {
            type: "field_dropdown",
            name: "stop",
            options: [
              ["dừng và khóa bánh", "BRAKE"],
              ["dừng lại", "STOP"],
              ["không làm gì", "None"],
            ]
          },
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": ColorBlock,
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python["robocon_follow_line_until_end"] = function (block) {
  Blockly.Python.definitions_['import_robocon'] = 'from robocon_xbot import *';
  var speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var port = block.getFieldValue('port');
  var stop = block.getFieldValue('stop');
  // TODO: Assemble Python into code variable.
  var code = "follow_line_until_end(" + speed + ", " + port + ", 15000, " + stop + ")\n";
  return code;
};

Blockly.Blocks['robocon_turn_until_line_detected_then'] = {
  init: function () {
    this.jsonInit(
      {
        "type": "robocon_turn_until_line_detected_then",
        "message0": "cảm biến dò line cổng %1 quay %2 tốc độ %3 gặp vạch đen rồi %4",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "port",
            "options": [
              ["1", "0"],
              ["2", "1"],
              ["3", "2"],
              ["4", "3"],
              ["5", "4"],
              ["6", "5"],
            ],
          },
          {
            "type": "field_dropdown",
            "name": "direction",
            "options": [
              [
                {
                  "src": "static/blocks/block_images/860774.svg",
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "left"
              ],
              [
                {
                  "src": "static/blocks/block_images/74474.svg",
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "right"
              ]
            ]
          },
          {
            "type": "input_value",
            "name": "speed",
            "check": "Number",
          },
          {
            "type": "field_dropdown",
            "name": "stop",
            "options": [
              ["dừng và khóa bánh", "BRAKE"],
              ["dừng lại", "STOP"],
              ["không làm gì", "None"],
            ]
          },
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": ColorBlock,
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python["robocon_turn_until_line_detected_then"] = function (block) {
  Blockly.Python.definitions_['import_robocon'] = 'from robocon_xbot import *';
  var dir = block.getFieldValue('direction');
  var speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var port = block.getFieldValue('port');
  var stop = block.getFieldValue('stop');
  // TODO: Assemble Python into code variable.
  var code = "";
  if (dir == "left") {
    code = "turn_until_line_detected(" + -speed + ", " + speed + ", " + port + ", 5000, " + stop + ")\n";
  } else {
    code = "turn_until_line_detected(" + speed + ", " + -speed + ", " + port + ", 5000, " + stop + ")\n";
  }
  return code;
};

// OLD
Blockly.Blocks['robocon_follow_line_until'] = {
  init: function () {
    this.jsonInit(
      {
        "type": "robocon_follow_line_until",
        "message0": "dò line cổng %4 tốc độ %1 đến khi %2 tối đa %3 giây",
        "args0": [
          {
            type: "input_value",
            check: "Number",
            value: 50,
            name: "speed",
          },
          {
            "type": "input_value",
            "name": "condition",
          },
          {
            type: "input_value",
            check: "Number",
            name: "timeout",
          },
          {
            type: "field_dropdown",
            name: "port",
            options: [
              ["1", "0"],
              ["2", "1"],
              ["3", "2"],
              ["4", "3"],
              ["5", "4"],
              ["6", "5"],
            ],
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": ColorBlock,
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python["robocon_follow_line_until"] = function (block) {
  Blockly.Python.definitions_['import_robocon'] = 'from robocon_xbot import *';
  var speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var condition = Blockly.Python.valueToCode(block, 'condition', Blockly.Python.ORDER_ATOMIC);
  var timeout = Blockly.Python.valueToCode(block, 'timeout', Blockly.Python.ORDER_ATOMIC);
  var port = block.getFieldValue('port');
  // TODO: Assemble Python into code variable.
  var code = "follow_line_until(" + speed + ", " + "lambda: (" + condition + "), " + port + "," + timeout * 1000 + ")\n";
  return code;
};

Blockly.Blocks['robocon_follow_line_delay'] = {
  init: function () {
    this.jsonInit(
      {
        "type": "robocon_follow_line_delay",
        "message0": "dò line cổng %3 với tốc độ %1 (0-100) trong %2 giây",
        "args0": [

          {
            min: 0,
            type: "input_value",
            check: "Number",
            value: 50,
            name: "speed",
          },
          {
            min: 0,
            type: "input_value",
            check: "Number",
            name: "timeout",
          },
          {
            type: "field_dropdown",
            name: "port",
            options: [
              ["1", "0"],
              ["2", "1"],
              ["3", "2"],
              ["4", "3"],
              ["5", "4"],
              ["6", "5"],
            ],
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": ColorBlock,
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python["robocon_follow_line_delay"] = function (block) {
  Blockly.Python.definitions_['import_robocon'] = 'from robocon_xbot import *';
  var speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var timeout = Blockly.Python.valueToCode(block, 'timeout', Blockly.Python.ORDER_ATOMIC);
  var port = block.getFieldValue('port');
  // TODO: Assemble Python into code variable.
  var code = "follow_line_until(" + speed + ", " + "lambda: (False), " + port + "," + timeout * 1000 + ")\n";
  return code;
};

Blockly.Blocks['robocon_turn_until_line_detected'] = {
  init: function () {
    this.jsonInit(
      {
        "type": "robocon_move_motor",
        "message0": "cảm biến dò line cổng %4 quay động cơ trái %1 phải %2 đến khi gặp vạch đen tối đa %3 giây",
        "args0": [
          {
            "type": "input_value",
            "name": "m1_speed",
            "check": "Number",
          },
          {
            "type": "input_value",
            "name": "m2_speed",
            "check": "Number",
          },
          {
            "type": "input_value",
            "name": "timeout",
            "check": "Number",
          },
          {
            type: "field_dropdown",
            name: "port",
            options: [
              ["1", "0"],
              ["2", "1"],
              ["3", "2"],
              ["4", "3"],
              ["5", "4"],
              ["6", "5"],
            ],
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": ColorBlock,
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python["robocon_turn_until_line_detected"] = function (block) {
  Blockly.Python.definitions_['import_robocon'] = 'from robocon_xbot import *';
  var m1_speed = Blockly.Python.valueToCode(block, 'm1_speed', Blockly.Python.ORDER_ATOMIC);
  var m2_speed = Blockly.Python.valueToCode(block, 'm2_speed', Blockly.Python.ORDER_ATOMIC);
  var port = block.getFieldValue('port');
  var timeout = Blockly.Python.valueToCode(block, 'timeout', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "turn_until_line_detected(" + m1_speed + ", " + m2_speed + ", " + port + "," + timeout * 1000 + ")\n";
  return code;
};

Blockly.Blocks['robocon_turn_until_condition'] = {
  init: function () {
    this.jsonInit(
      {
        "type": "robocon_move_motor",
        "message0": "quay động cơ trái %1 phải %2 đến khi %3 tối đa %4 giây",
        "args0": [
          {
            "type": "input_value",
            "name": "m1_speed",
            "check": "Number",
          },
          {
            "type": "input_value",
            "name": "m2_speed",
            "check": "Number",
          },
          {
            "type": "input_value",
            "name": "condition",
            "check": "Boolean",
          },
          {
            "type": "input_value",
            "name": "timeout",
            "check": "Number",
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": ColorBlock,
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python["robocon_turn_until_condition"] = function (block) {
  Blockly.Python.definitions_['import_robocon'] = 'from robocon_xbot import *';
  var m1_speed = Blockly.Python.valueToCode(block, 'm1_speed', Blockly.Python.ORDER_ATOMIC);
  var m2_speed = Blockly.Python.valueToCode(block, 'm2_speed', Blockly.Python.ORDER_ATOMIC);
  var condition = Blockly.Python.valueToCode(block, 'condition', Blockly.Python.ORDER_ATOMIC);
  var timeout = Blockly.Python.valueToCode(block, 'timeout', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "turn_until_condition(" + m1_speed + ", " + m2_speed + ", " + "lambda: (" + condition + "), " + timeout * 1000 + ")\n";
  return code;
};

// GAMEPAD BLOCK

Blockly.Blocks['gamepad_init'] = {
  init: function () {
    this.jsonInit(
      {
        type: "gamepad_init",
        message0: "khởi tạo gamepad cổng %1",
        previousStatement: null,
        nextStatement: null,
        args0: [
          {
            type: "field_dropdown",
            name: "port",
            options: [
              ["4", "3"],
              ["5", "4"],
              ["6", "5"],
            ],
          },
        ],
        colour: ColorBlock,
        tooltip: "",
        helpUrl: ""
      }
    )
  },
  getDeveloperVars: function () {
    return ['gamepad_handler'];
  }
};

Blockly.Python['gamepad_init'] = function (block) {
  var port = block.getFieldValue("port");
  Blockly.Python.definitions_['import_gamepad'] = 'from gamepad_handler import *';
  Blockly.Python.definitions_['create_gamepad'] = 'gamepad_handler = GamepadHandler(' + port + ')';
  // TODO: Assemble Python into code variable.
  var code = "";
  return code;
};

Blockly.Blocks['gamepad_mode'] = {
  init: function () {
    this.jsonInit(
      {
        type: "gamepad_mode",
        message0: "cài đặt chế độ điều khiển %1",
        previousStatement: null,
        nextStatement: null,
        args0: [
          {
            type: "field_dropdown",
            name: "mode",
            options: [
              [
                "phím điều hướng dpad",
                "MODE_DPAD"
              ],
              [
                "joystick trái",
                "MODE_LEFT_JOYSTICK"
              ],
              [
                "joystick phải",
                "MODE_RIGHT_JOYSTICK"
              ],
              [
                "kết hợp joystick trái và joystick phải",
                "MODE_BOTH_JOYSTICK"
              ],
            ],
          },],
        colour: ColorBlock,
        tooltip: "",
        helpUrl: ""
      }
    );
  },
  getDeveloperVars: function () {
    return ['gamepad_handler'];
  }
};

Blockly.Python['gamepad_mode'] = function (block) {
  var mode = block.getFieldValue('mode');
  // TODO: Assemble Python into code variable.
  var code = 'gamepad_handler.set_drive_mode(' + mode + ')\n';
  return code;
};

Blockly.Blocks['gamepad_speed_btn'] = {
  init: function () {
    this.jsonInit(
      {
        type: "gamepad_speed_btn",
        message0: "cài đặt tốc độ: %1 để tăng - %2 để giảm",
        previousStatement: null,
        nextStatement: null,
        args0: [
          {
            type: "field_dropdown",
            name: "btn1",
            options: [
              [
                {
                  "src": ImgUrl + 'ico-circle.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "circle"
              ],
              [
                {
                  "src": ImgUrl + 'ico-cross.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "cross"
              ],
              [
                {
                  "src": ImgUrl + 'ico-square.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "square"
              ],
              [
                {
                  "src": ImgUrl + 'ico-triangle.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "triangle"
              ],
              ["A", "a"],
              ["B", "b"],
              ["X", "x"],
              ["Y", "y"],
              ["R1", "r1"],
              ["L1", "l1"],
              ["R2", "r2"],
              ["L2", "l2"],
              ["options", "m2"],
              ["share", "m1"],
              ["nút joystick trái", "thumbl"],
              ["nút joystick phải", "thumbr"],
            ],
          },
          {
            type: "field_dropdown",
            name: "btn2",
            options: [
              [
                {
                  "src": ImgUrl + 'ico-cross.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "cross"
              ],
              [
                {
                  "src": ImgUrl + 'ico-circle.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "circle"
              ],
              [
                {
                  "src": ImgUrl + 'ico-square.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "square"
              ],
              [
                {
                  "src": ImgUrl + 'ico-triangle.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "triangle"
              ],
              ["A", "a"],
              ["B", "b"],
              ["X", "x"],
              ["Y", "y"],
              ["R1", "r1"],
              ["L1", "l1"],
              ["R2", "r2"],
              ["L2", "l2"],
              ["options", "m2"],
              ["share", "m1"],
              ["nút joystick trái", "thumbl"],
              ["nút joystick phải", "thumbr"],
            ],
          }],
        colour: ColorBlock,
        tooltip: "",
        helpUrl: ""
      }
    );
  },
  getDeveloperVars: function () {
    return ['gamepad_handler'];
  }
};

Blockly.Python['gamepad_speed_btn'] = function (block) {
  var btn1 = block.getFieldValue('btn1');
  var btn2 = block.getFieldValue('btn2');

  if (btn1 == 'square') btn1 = 'x';
  else if (btn1 == 'triangle') btn1 = 'y';
  else if (btn1 == 'cross') btn1 = 'a';
  else if (btn1 == 'circle') btn1 = 'b';
  if (btn2 == 'square') btn2 = 'x';
  else if (btn2 == 'triangle') btn2 = 'y';
  else if (btn2 == 'cross') btn2 = 'a';
  else if (btn2 == 'circle') btn2 = 'b';

  // TODO: Assemble Python into code variable.
  var code = "gamepad_handler.set_speed_btn('" + btn1 + "', '" + btn2 + "')\n";
  return code;
};

Blockly.Blocks['gamepad_set_servo'] = {
  init: function () {
    this.jsonInit(
      {
        type: "gamepad_set_servo",
        message0: "cài đặt điều khiển servo %1: nút %2 vị trí %3 nút %4 vị trí %5 tốc độ %6",
        previousStatement: null,
        nextStatement: null,
        args0: [
          {
            type: "field_dropdown",
            name: "servo",
            options: [
              ["S1", "0"],
              ["S2", "1"],
              ["S3", "2"],
              ["S4", "3"],
              ["S5", "4"],
              ["S6", "5"],
              ["S7", "6"],
              ["S8", "7"],
            ],
          },
          {
            type: "field_dropdown",
            name: "btn1",
            options: [
              [
                {
                  "src": ImgUrl + 'ico-square.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "square"
              ],
              [
                {
                  "src": ImgUrl + 'ico-circle.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "circle"
              ],
              [
                {
                  "src": ImgUrl + 'ico-cross.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "cross"
              ],
              [
                {
                  "src": ImgUrl + 'ico-triangle.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "triangle"
              ],
              ["A", "a"],
              ["B", "b"],
              ["X", "x"],
              ["Y", "y"],
              ["R1", "r1"],
              ["L1", "l1"],
              ["R2", "r2"],
              ["L2", "l2"],
              ["options", "m2"],
              ["share", "m1"],
              ["nút joystick trái", "thumbl"],
              ["nút joystick phải", "thumbr"],
            ],
          },
          {
            type: "input_value",
            name: "angle_min"
          },
          {
            type: "field_dropdown",
            name: "btn2",
            options: [
              [
                {
                  "src": ImgUrl + 'ico-triangle.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "triangle"
              ],
              [
                {
                  "src": ImgUrl + 'ico-circle.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "circle"
              ],
              [
                {
                  "src": ImgUrl + 'ico-cross.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "cross"
              ],
              [
                {
                  "src": ImgUrl + 'ico-square.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "square"
              ],
              ["A", "a"],
              ["B", "b"],
              ["X", "x"],
              ["Y", "y"],
              ["R1", "r1"],
              ["L1", "l1"],
              ["R2", "r2"],
              ["L2", "l2"],
              ["options", "m2"],
              ["share", "m1"],
              ["nút joystick trái", "thumbl"],
              ["nút joystick phải", "thumbr"],
            ],
          },
          {
            type: "input_value",
            name: "angle_max"
          },
          {
            type: "input_value",
            name: "speed"
          }
        ],
        inputsInline: true,
        previousStatement: null,
        nextStatement: null,
        colour: ColorBlock,
        tooltip: "",
        helpUrl: ""
      }
    );
  },
  getDeveloperVars: function () {
    return ['gamepad_handler'];
  }
};

Blockly.Python['gamepad_set_servo'] = function (block) {
  var servo = block.getFieldValue('servo');
  var btn1 = block.getFieldValue('btn1');
  var btn2 = block.getFieldValue('btn2');

  if (btn1 == 'square') btn1 = 'x';
  else if (btn1 == 'triangle') btn1 = 'y';
  else if (btn1 == 'cross') btn1 = 'a';
  else if (btn1 == 'circle') btn1 = 'b';
  if (btn2 == 'square') btn2 = 'x';
  else if (btn2 == 'triangle') btn2 = 'y';
  else if (btn2 == 'cross') btn2 = 'a';
  else if (btn2 == 'circle') btn2 = 'b';

  var angle_min = Blockly.Python.valueToCode(block, 'angle_min', Blockly.Python.ORDER_ATOMIC);
  var angle_max = Blockly.Python.valueToCode(block, 'angle_max', Blockly.Python.ORDER_ATOMIC);
  var speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "gamepad_handler.set_servo_btn(" + servo + ", '" + btn1 + "', '" + btn2 + "', " + angle_min + ", " + angle_max + ", " + speed + ")\n";
  return code;
};

Blockly.Blocks['gamepad_processing'] = {
  init: function () {
    this.jsonInit(
      {
        type: "gamepad_processing",
        message0: "cập nhật và xử lý gamepad",
        previousStatement: null,
        nextStatement: null,
        args0: [
        ],
        colour: ColorBlock,
        tooltip: "",
        helpUrl: ""
      }
    )
  },
  getDeveloperVars: function () {
    return ['gamepad_handler'];
  }
};

Blockly.Python['gamepad_processing'] = function (block) {
  // TODO: Assemble Python into code variable.
  var code = "gamepad_handler.process()\n";
  return code;
};

Blockly.Blocks['gamepad_set_led_rgb'] = {
  init: function () {
    this.jsonInit({
      "type": "gamepad_set_led_rgb",
      "message0": "đổi màu đèn trên gamepad thành %1",
      "args0": [
        {
          "type": "input_value",
          "name": "color"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": ColorBlock,
      "tooltip": "",
      "helpUrl": ""
    }
    );
  }
};

Blockly.Python['gamepad_set_led_rgb'] = function (block) {
  var value_color = Blockly.Python.valueToCode(block, 'color', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'gamepad_handler.set_led_color(' + value_color + ')\n';
  return code;
};

Blockly.Blocks['gamepad_set_rumble'] = {
  init: function () {
    this.jsonInit(
      {
        "type": "gamepad_set_rumble",
        "message0": "rung gamepad mức %1 (0-100) trong %2 milli giây (0-2000)",
        "args0": [
          {
            min: 0,
            max: 100,
            type: "input_value",
            check: "Number",
            value: 50,
            name: "force",
          },
          {
            min: 0,
            max: 2000,
            type: "input_value",
            check: "Number",
            value: 1000,
            name: "duration",
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": ColorBlock,
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python["gamepad_set_rumble"] = function (block) {
  var force = Blockly.Python.valueToCode(block, 'force', Blockly.Python.ORDER_ATOMIC);
  var duration = Blockly.Python.valueToCode(block, 'duration', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "gamepad_handler.set_rumble(" + force + ", " + duration + ")\n";
  return code;
};

Blockly.Blocks['gamepad_turbo_btn'] = {
  init: function () {
    this.jsonInit(
      {
        type: "gamepad_turbo_btn",
        message0: "cài đặt nút tăng tốc: %1",
        previousStatement: null,
        nextStatement: null,
        args0: [
          {
            type: "field_dropdown",
            name: "btn",
            options: [
              ["R1", "r1"],
              [
                {
                  "src": ImgUrl + 'ico-cross.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "cross"
              ],
              [
                {
                  "src": ImgUrl + 'ico-circle.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "circle"
              ],
              [
                {
                  "src": ImgUrl + 'ico-square.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "square"
              ],
              [
                {
                  "src": ImgUrl + 'ico-triangle.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "triangle"
              ],
              ["A", "a"],
              ["B", "b"],
              ["X", "x"],
              ["Y", "y"],
              ["L1", "l1"],
              ["R2", "r2"],
              ["L2", "l2"],
              ["options", "m2"],
              ["share", "m1"],
              ["nút joystick trái", "thumbl"],
              ["nút joystick phải", "thumbr"],
            ],
          }],
        colour: ColorBlock,
        tooltip: "",
        helpUrl: ""
      }
    );
  },
  getDeveloperVars: function () {
    return ['gamepad_handler'];
  }
};

Blockly.Python['gamepad_turbo_btn'] = function (block) {
  var btn = block.getFieldValue('btn');

  if (btn == 'square') btn = 'x';
  else if (btn == 'triangle') btn = 'y';
  else if (btn == 'cross') btn = 'a';
  else if (btn == 'circle') btn = 'b';

  // TODO: Assemble Python into code variable.
  var code = "gamepad_handler.set_turbo_btn('" + btn + "')\n";
  return code;
};

Blockly.Blocks['gamepad_line_btn'] = {
  init: function () {
    this.jsonInit(
      {
        type: "gamepad_line_btn",
        message0: "cho robot đi dò line cổng %1 tốc độ %3 khi nhấn nút %2",
        previousStatement: null,
        nextStatement: null,
        args0: [
          {
            type: "field_dropdown",
            name: "port",
            options: [
              ["1", "0"],
              ["2", "1"],
              ["3", "2"],
              ["4", "3"],
              ["5", "4"],
              ["6", "5"],
            ],
          },
          {
            type: "field_dropdown",
            name: "btn",
            options: [
              ["L1", "l1"],
              ["chéo", "a1"],
              ["tròn", "b1"],
              ["vuông", "x1"],
              ["tam giác", "y1"],
              ["A", "a"],
              ["B", "b"],
              ["X", "x"],
              ["Y", "y"],
              ["R1", "r1"],
              ["R2", "r2"],
              ["L2", "l2"],
              ["options", "m2"],
              ["share", "m1"],
              ["nút joystick trái", "thumbl"],
              ["nút joystick phải", "thumbr"],
            ],
          },
          {
            type: "input_value",
            name: "speed"
          }],
        inputsInline: true,
        previousStatement: null,
        nextStatement: null,
        colour: ColorBlock,
        tooltip: "",
        helpUrl: ""
      }
    );
  },
  getDeveloperVars: function () {
    return ['gamepad_handler'];
  }
};

Blockly.Python['gamepad_line_btn'] = function (block) {
  var port = block.getFieldValue('port')
  var speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var btn = block.getFieldValue('btn');

  if (btn == 'square') btn = 'x';
  else if (btn == 'triangle') btn = 'y';
  else if (btn == 'cross') btn = 'a';
  else if (btn == 'circle') btn = 'b';

  // TODO: Assemble Python into code variable.
  var code = "gamepad_handler.set_follow_line_btn(" + port + ", " + speed + ", '" + btn + "')\n";
  return code;
};

Blockly.Blocks['gamepad_set_gripper'] = {
  init: function () {
    this.jsonInit(
      {
        type: "gamepad_set_gripper",
        message0: "cài đặt tay gắp %1 : %2 để mở %3 để đóng",
        previousStatement: null,
        nextStatement: null,
        args0: [
          {
            type: "field_dropdown",
            name: "servo",
            options: [
              ["S1", "0"],
              ["S2", "1"],
              ["S3", "2"],
              ["S4", "3"],
              ["S5", "4"],
              ["S6", "5"],
              ["S7", "6"],
              ["S8", "7"],
            ],
          },
          {
            type: "field_dropdown",
            name: "btn1",
            options: [
              [
                {
                  "src": ImgUrl + 'ico-square.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "square"
              ],
              [
                {
                  "src": ImgUrl + 'ico-circle.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "circle"
              ],
              [
                {
                  "src": ImgUrl + 'ico-cross.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "cross"
              ],
              [
                {
                  "src": ImgUrl + 'ico-triangle.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "triangle"
              ],
              ["A", "a"],
              ["B", "b"],
              ["X", "x"],
              ["Y", "y"],
              ["R1", "r1"],
              ["L1", "l1"],
              ["R2", "r2"],
              ["L2", "l2"],
              ["options", "m2"],
              ["share", "m1"],
              ["nút joystick trái", "thumbl"],
              ["nút joystick phải", "thumbr"],
            ],
          },
          {
            type: "field_dropdown",
            name: "btn2",
            options: [
              [
                {
                  "src": ImgUrl + 'ico-triangle.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "triangle"
              ],
              [
                {
                  "src": ImgUrl + 'ico-circle.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "circle"
              ],
              [
                {
                  "src": ImgUrl + 'ico-cross.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "cross"
              ],
              [
                {
                  "src": ImgUrl + 'ico-square.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "square"
              ],
              ["A", "a"],
              ["B", "b"],
              ["X", "x"],
              ["Y", "y"],
              ["R1", "r1"],
              ["L1", "l1"],
              ["R2", "r2"],
              ["L2", "l2"],
              ["options", "m2"],
              ["share", "m1"],
              ["nút joystick trái", "thumbl"],
              ["nút joystick phải", "thumbr"],
            ],
          }],
        inputsInline: true,
        previousStatement: null,
        nextStatement: null,
        colour: ColorBlock,
        tooltip: "",
        helpUrl: ""
      }
    );
  },
  getDeveloperVars: function () {
    return ['gamepad_handler'];
  }
};

Blockly.Python['gamepad_set_gripper'] = function (block) {
  var servo = block.getFieldValue('servo');
  var btn1 = block.getFieldValue('btn1');
  var btn2 = block.getFieldValue('btn2');

  if (btn1 == 'square') btn1 = 'x';
  else if (btn1 == 'triangle') btn1 = 'y';
  else if (btn1 == 'cross') btn1 = 'a';
  else if (btn1 == 'circle') btn1 = 'b';
  if (btn2 == 'square') btn2 = 'x';
  else if (btn2 == 'triangle') btn2 = 'y';
  else if (btn2 == 'cross') btn2 = 'a';
  else if (btn2 == 'circle') btn2 = 'b';

  // TODO: Assemble Python into code variable.
  var code = "gamepad_handler.set_servo_btn(" + servo + ", '" + btn1 + "', '" + btn2 + "', 0, 90)\n";
  return code;
};

Blockly.Blocks['gamepad_set_forklift'] = {
  init: function () {
    this.jsonInit(
      {
        type: "gamepad_set_forklift",
        message0: "cài đặt đầu nâng %1 : %2 để mở %3 để đóng",
        previousStatement: null,
        nextStatement: null,
        args0: [
          {
            type: "field_dropdown",
            name: "servo",
            options: [
              ["S1", "0"],
              ["S2", "1"],
              ["S3", "2"],
              ["S4", "3"],
              ["S5", "4"],
              ["S6", "5"],
              ["S7", "6"],
              ["S8", "7"],
            ],
          },
          {
            type: "field_dropdown",
            name: "btn1",
            options: [
              [
                {
                  "src": ImgUrl + 'ico-square.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "square"
              ],
              [
                {
                  "src": ImgUrl + 'ico-circle.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "circle"
              ],
              [
                {
                  "src": ImgUrl + 'ico-cross.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "cross"
              ],
              [
                {
                  "src": ImgUrl + 'ico-triangle.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "triangle"
              ],
              ["A", "a"],
              ["B", "b"],
              ["X", "x"],
              ["Y", "y"],
              ["R1", "r1"],
              ["L1", "l1"],
              ["R2", "r2"],
              ["L2", "l2"],
              ["options", "m2"],
              ["share", "m1"],
              ["nút joystick trái", "thumbl"],
              ["nút joystick phải", "thumbr"],
            ],
          },
          {
            type: "field_dropdown",
            name: "btn2",
            options: [
              [
                {
                  "src": ImgUrl + 'ico-triangle.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "triangle"
              ],
              [
                {
                  "src": ImgUrl + 'ico-circle.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "circle"
              ],
              [
                {
                  "src": ImgUrl + 'ico-cross.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "cross"
              ],
              [
                {
                  "src": ImgUrl + 'ico-square.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "square"
              ],
              ["A", "a"],
              ["B", "b"],
              ["X", "x"],
              ["Y", "y"],
              ["R1", "r1"],
              ["L1", "l1"],
              ["R2", "r2"],
              ["L2", "l2"],
              ["options", "m2"],
              ["share", "m1"],
              ["nút joystick trái", "thumbl"],
              ["nút joystick phải", "thumbr"],
            ],
          }],
        inputsInline: true,
        previousStatement: null,
        nextStatement: null,
        colour: ColorBlock,
        tooltip: "",
        helpUrl: ""
      }
    );
  },
  getDeveloperVars: function () {
    return ['gamepad_handler'];
  }
};

Blockly.Python['gamepad_set_forklift'] = function (block) {
  var servo = block.getFieldValue('servo');
  var btn1 = block.getFieldValue('btn1');
  var btn2 = block.getFieldValue('btn2');

  if (btn1 == 'square') btn1 = 'x';
  else if (btn1 == 'triangle') btn1 = 'y';
  else if (btn1 == 'cross') btn1 = 'a';
  else if (btn1 == 'circle') btn1 = 'b';
  if (btn2 == 'square') btn2 = 'x';
  else if (btn2 == 'triangle') btn2 = 'y';
  else if (btn2 == 'cross') btn2 = 'a';
  else if (btn2 == 'circle') btn2 = 'b';

  // TODO: Assemble Python into code variable.
  var code = "gamepad_handler.set_servo_fork_btn(" + servo + ", '" + btn1 + "', '" + btn2 + "', 0, 90)\n";
  return code;
};

Blockly.Blocks['gamepad_set_ball_launcher'] = {
  init: function () {
    this.jsonInit(
      {
        type: "gamepad_set_ball_launcher",
        message0: "cài đặt kit bắn bóng ở servo %1 và %2 : %3 để nạp đạn %4 để bắn",
        previousStatement: null,
        nextStatement: null,
        args0: [
          {
            type: "field_dropdown",
            name: "servo1",
            options: [
              ["S1", "0"],
              ["S2", "1"],
              ["S3", "2"],
              ["S4", "3"],
              ["S5", "4"],
              ["S6", "5"],
              ["S7", "6"],
              ["S8", "7"],
            ],
          },
          {
            type: "field_dropdown",
            name: "servo2",
            options: [
              ["S2", "1"],
              ["S1", "0"],
              ["S3", "2"],
              ["S4", "3"],
              ["S5", "4"],
              ["S6", "5"],
              ["S7", "6"],
              ["S8", "7"],
            ],
          },
          {
            type: "field_dropdown",
            name: "btn1",
            options: [
              [
                {
                  "src": ImgUrl + 'ico-square.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "square"
              ],
              [
                {
                  "src": ImgUrl + 'ico-circle.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "circle"
              ],
              [
                {
                  "src": ImgUrl + 'ico-cross.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "cross"
              ],
              [
                {
                  "src": ImgUrl + 'ico-triangle.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "triangle"
              ],
              ["A", "a"],
              ["B", "b"],
              ["X", "x"],
              ["Y", "y"],
              ["R1", "r1"],
              ["L1", "l1"],
              ["R2", "r2"],
              ["L2", "l2"],
              ["options", "m2"],
              ["share", "m1"],
              ["nút joystick trái", "thumbl"],
              ["nút joystick phải", "thumbr"],
            ],
          },
          {
            type: "field_dropdown",
            name: "btn2",
            options: [
              [
                {
                  "src": ImgUrl + 'ico-triangle.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "triangle"
              ],
              [
                {
                  "src": ImgUrl + 'ico-circle.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "circle"
              ],
              [
                {
                  "src": ImgUrl + 'ico-cross.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "cross"
              ],
              [
                {
                  "src": ImgUrl + 'ico-square.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "square"
              ],
              ["A", "a"],
              ["B", "b"],
              ["X", "x"],
              ["Y", "y"],
              ["R1", "r1"],
              ["L1", "l1"],
              ["R2", "r2"],
              ["L2", "l2"],
              ["options", "m2"],
              ["share", "m1"],
              ["nút joystick trái", "thumbl"],
              ["nút joystick phải", "thumbr"],
            ],
          }],
        inputsInline: true,
        previousStatement: null,
        nextStatement: null,
        colour: ColorBlock,
        tooltip: "",
        helpUrl: ""
      }
    );
  },
  getDeveloperVars: function () {
    return ['gamepad_handler'];
  }
};

Blockly.Python['gamepad_set_ball_launcher'] = function (block) {
  var servo1 = block.getFieldValue('servo1');
  var servo2 = block.getFieldValue('servo2');
  var btn1 = block.getFieldValue('btn1');
  var btn2 = block.getFieldValue('btn2');

  if (btn1 == 'square') btn1 = 'x';
  else if (btn1 == 'triangle') btn1 = 'y';
  else if (btn1 == 'cross') btn1 = 'a';
  else if (btn1 == 'circle') btn1 = 'b';
  if (btn2 == 'square') btn2 = 'x';
  else if (btn2 == 'triangle') btn2 = 'y';
  else if (btn2 == 'cross') btn2 = 'a';
  else if (btn2 == 'circle') btn2 = 'b';

  // TODO: Assemble Python into code variable.
  var code = "gamepad_handler.set_ball_launcher_btn(" + servo1 + ", " + servo2 + ", '" + btn1 + "', '" + btn2 + "')\n";
  return code;
};

Blockly.Blocks['gamepad_change_mode_btn'] = {
  init: function () {
    this.jsonInit(
      {
        type: "gamepad_change_mode_btn",
        message0: "cài đặt nút đổi chế độ điều khiển: %1",
        previousStatement: null,
        nextStatement: null,
        args0: [
          {
            type: "field_dropdown",
            name: "btn",
            options: [
              ["options", "m2"],
              [
                {
                  "src": ImgUrl + 'ico-cross.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "cross"
              ],
              [
                {
                  "src": ImgUrl + 'ico-circle.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "circle"
              ],
              [
                {
                  "src": ImgUrl + 'ico-square.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "square"
              ],
              [
                {
                  "src": ImgUrl + 'ico-triangle.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "triangle"
              ],
              ["A", "a"],
              ["B", "b"],
              ["X", "x"],
              ["Y", "y"],
              ["R1", "r1"],
              ["L1", "l1"],
              ["R2", "r2"],
              ["L2", "l2"],
              ["share", "m1"],
              ["nút joystick trái", "thumbl"],
              ["nút joystick phải", "thumbr"],
            ],
          }],
        colour: ColorBlock,
        tooltip: "",
        helpUrl: ""
      }
    );
  },
  getDeveloperVars: function () {
    return ['gamepad_handler'];
  }
};

Blockly.Python['gamepad_change_mode_btn'] = function (block) {
  var btn = block.getFieldValue('btn');

  if (btn == 'square') btn = 'x';
  else if (btn == 'triangle') btn = 'y';
  else if (btn == 'cross') btn = 'a';
  else if (btn == 'circle') btn = 'b';

  // TODO: Assemble Python into code variable.
  var code = "gamepad_handler.set_change_mode_btn('" + btn + "')\n";
  return code;
};

Blockly.Blocks['gamepad_is_connected'] = {
  init: function () {
    this.jsonInit(
      {
        "type": "gamepad_is_connected",
        "message0": "đang kết nối gamepad",
        "args0": [
        ],
        "colour": ColorBlock,
        "output": "Boolean",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python["gamepad_is_connected"] = function (block) {
  // TODO: Assemble Python into code variable.
  var code = "gamepad_handler.is_connected()";
  return [code, Blockly.Python.ORDER_NONE];
};

// 10-01-2024

Blockly.Blocks['control_servo'] = {
  init: function () {
    this.jsonInit(
      {
        "type": "control_servo",
        "message0": "servo %1 quay %2 độ tốc độ %3 (0-100)",
        "args0": [
          {
            type: "field_dropdown",
            name: "pin",
            options: [
              ["S1", "0"],
              ["S2", "1"],
              ["S3", "2"],
              ["S4", "3"],
              ["S5", "4"],
              ["S6", "5"],
              ["S7", "6"],
              ["S8", "7"],
            ],
          },
          {
            "type": "input_value",
            "name": "angle",
            "check": "Number",
          },
          {
            "type": "input_value",
            "name": "speed",
            "check": "Number",
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": ColorBlock,
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python["control_servo"] = function (block) {
  Blockly.Python.definitions_['import_robocon'] = 'from robocon_xbot import *';
  var angle_servo = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);
  var dropdown_pin = block.getFieldValue('pin');
  var servo_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "set_servo_position(" + dropdown_pin + ", " + angle_servo + ", " + servo_speed + ")\n";
  return code;
};

Blockly.Blocks['control_gripper'] = {
  init: function () {
    this.jsonInit(
      {
        "type": "control_gripper",
        "message0": "%1 tay gắp %3 tốc độ %2 (0-100)",
        "args0": [
          {
            type: "field_dropdown",
            name: "action",
            options: [
              ["nâng", "lift_up"],
              ["hạ", "lift_down"],
              ["đóng", "collect"],
              ["mở", "release"],
            ]
          },
          {
            "type": "input_value",
            "name": "speed",
            "check": "Number",
          },
          {
            type: "field_dropdown",
            name: "pin",
            options: [
              ["S1", "0"],
              ["S2", "1"],
              ["S3", "2"],
              ["S4", "3"],
              ["S5", "4"],
              ["S6", "5"],
              ["S7", "6"],
              ["S8", "7"],
            ],
          },
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": ColorBlock,
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python["control_gripper"] = function (block) {
  Blockly.Python.definitions_['import_robocon'] = 'from robocon_xbot import *';
  var dropdown_type = block.getFieldValue('action');
  var dropdown_pin = block.getFieldValue('pin');
  var rotate_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "";
  if (dropdown_type == 'collect')
    code = "set_servo_position(" + dropdown_pin + ", 90, " + rotate_speed + ")\n";
  else if (dropdown_type == 'release')
    code = "set_servo_position(" + dropdown_pin + ", 0, " + rotate_speed + ")\n";
  else if (dropdown_type == 'lift_up')
    code = "set_servo_position(" + dropdown_pin + ", 90, " + rotate_speed + ")\n";
  else
    code = "set_servo_position(" + dropdown_pin + ", 0, " + rotate_speed + ")\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};


// REMOTE CONTROL BLOCK

Blockly.Blocks['xbot_remote_control_init'] = {
  init: function () {
    this.jsonInit(
      {
        type: "xbot_remote_control_init",
        message0: "khởi tạo gamepad cổng %1",
        args0: [
          {
            type: "field_dropdown",
            name: "port",
            options: [
              ["4", "3"],
              ["5", "4"],
              ["6", "5"],
            ],
          },
        ],
        previousStatement: null,
        nextStatement: null,
        colour: ColorBlock,
        tooltip: "",
        helpUrl: ""
      }
    )
  },
  getDeveloperVars: function () {
    return ['rc_mode'];
  }
};

Blockly.Python['xbot_remote_control_init'] = function (block) {
  var port = block.getFieldValue("port");
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_remote_control'] = 'from remote_control import *\n';
  Blockly.Python.definitions_['import_remote_control_init'] = "rc_mode = RemoteControlMode(" + port + ")\n"
  var code = "";
  return code;
};

Blockly.Blocks['xbot_remote_control_processing'] = {
  init: function () {
    this.jsonInit(
      {
        type: "xbot_remote_control_processing",
        message0: "xử lý lệnh từ gamepad",
        previousStatement: null,
        nextStatement: null,
        args0: [
        ],
        colour: ColorBlock,
        tooltip: "",
        helpUrl: ""
      }
    )
  },
  getDeveloperVars: function () {
    return ['rc_mode'];
  }
};

Blockly.Python['xbot_remote_control_processing'] = function (block) {
  // TODO: Assemble Python into code variable.
  var code = "rc_mode.run()\n";
  return code;
};

Blockly.Blocks["xbot_remote_control_on_button_pressed"] = {
  init: function () {
    this.jsonInit({
      colour: ColorBlock,
      message0: "nếu nút %1 trên gamepad được nhấn %2 %3 ",
      tooltip: "Thực hiện một tập lệnh khi nút gamepad được nhấn",
      args0: [
        {
          type: "field_dropdown",
          name: "BUTTON",
          options: [
            ['A', 'BTN_A'],
            ['B', 'BTN_B'],
            ['C', 'BTN_C'],
            ['D', 'BTN_D'],
            [
              {
                "src": ImgUrl + 'ico-cross.png',
                "width": 15,
                "height": 15,
                "alt": "*"
              },
              "BTN_CROSS"
            ],
            [
              {
                "src": ImgUrl + 'ico-circle.png',
                "width": 15,
                "height": 15,
                "alt": "*"
              },
              "BTN_CIRCLE"
            ],
            [
              {
                "src": ImgUrl + 'ico-square.png',
                "width": 15,
                "height": 15,
                "alt": "*"
              },
              "BTN_SQUARE"
            ],
            [
              {
                "src": ImgUrl + 'ico-triangle.png',
                "width": 15,
                "height": 15,
                "alt": "*"
              },
              "BTN_TRIANGLE"
            ],
            ["L1", "BTN_L1"],
            ["R1", "BTN_R1"],
            ["L2", "BTN_L2"],
            ["R2", "BTN_R2"],
            ["SHARE", "BTN_M1"],
            ["OPTIONS", "BTN_M2"],
            ["Left Joystick", "BTN_THUMBL"],
            ["Right Joystick", "BTN_THUMBR"],
            [
              {
                "src": "static/blocks/block_images/59043.svg",
                "width": 15,
                "height": 15,
                "alt": "*"
              },
              "BTN_UP"
            ],
            [
              {
                "src": "static/blocks/block_images/959159.svg",
                "width": 15,
                "height": 15,
                "alt": "*"
              },
              "BTN_DOWN"
            ],
            [
              {
                "src": "static/blocks/block_images/arrow-left.svg",
                "width": 15,
                "height": 15,
                "alt": "side left"
              },
              "BTN_LEFT"
            ],
            [
              {
                "src": "static/blocks/block_images/arrow-right.svg",
                "width": 15,
                "height": 15,
                "alt": "side right"
              },
              "BTN_RIGHT"
            ],
          ],
        },
        {
          type: "input_dummy",
        },
        {
          type: "input_statement",
          name: "ACTION",
        },
      ],
      helpUrl: "",
    });
  },
  getDeveloperVars: function () {
    return ['rc_mode'];
  }
};

Blockly.Python['xbot_remote_control_on_button_pressed'] = function (block) {
  Blockly.Python.definitions_['import_remote_control'] = 'from remote_control import *';
  var button = block.getFieldValue('BUTTON');
  var statements_action = Blockly.Python.statementToCode(block, 'ACTION');

  var globals = buildGlobalString(block);

  var cbFunctionName = Blockly.Python.provideFunction_(
    'on_gamepad_button_' + button,
    (globals != '') ?
      ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '():',
        globals,
      statements_action || Blockly.Python.PASS
      ] :
      ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '():',
      statements_action || Blockly.Python.PASS
      ]);

  var code = 'rc_mode.set_command(' + button + ', ' + cbFunctionName + ')\n';
  Blockly.Python.definitions_['on_gamepad_button_callback' + button] = code;

  return '';
  
};

Blockly.Blocks['xbot_control_gripper_slow'] = {
  init: function () {
    this.jsonInit(
      {
        "type": "xbot_control_gripper_slow",
        "message0": "servo %2 xoay %1 độ",
        "args0": [
          {
            "type": "input_value",
            "name": "angle",
            "check": "Number",
          },
          {
            type: "field_dropdown",
            name: "pin",
            options: [
              ["S1", "0"],
              ["S2", "1"],
              ["S3", "2"],
              ["S4", "3"],
              ["S5", "4"],
              ["S6", "5"],
              ["S7", "6"],
              ["S8", "7"],
            ],
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": ColorBlock,
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python["xbot_control_gripper_slow"] = function (block) {
  Blockly.Python.definitions_['import_robocon'] = 'from robocon_xbot import *';
  var pin = block.getFieldValue('pin');
  var angle = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "move_servo_position(" + pin + "," + angle + ")\n";
  
  return code;
};