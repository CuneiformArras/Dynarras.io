const { combineStats, makeAuto, makeOver, makeDeco, makeGuard, makeBird, makeRadialAuto, weaponArray, addAurora, addHalo } = require('../facilitators.js');
const { base, statnames, dfltskl, smshskl } = require('../constants.js');
require('./generics.js');
const g = require('../gunvals.js');

// Starters
Class.basic = {
    PARENT: "genericTank",
    LABEL: "Basic",
    DANGER: 4,
    /*BODY: {
        ACCELERATION: base.ACCEL * 1,
        SPEED: base.SPEED * 1,
        HEALTH: base.HEALTH * 1,
        DAMAGE: base.DAMAGE * 1,
        PENETRATION: base.PENETRATION * 1,
        SHIELD: base.SHIELD * 1,
        REGEN: base.REGEN * 1,
        FOV: base.FOV * 1,
        DENSITY: base.DENSITY * 1,
        PUSHABILITY: 1,
        HETERO: 3
    },*/
    GUNS: [
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: 0,
                DELAY: 0
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "bullet",
                /*COLOR: "grey",
                LABEL: "",
                STAT_CALCULATOR: 0,
                WAIT_TO_CYCLE: false,
                AUTOFIRE: false,
                SYNCS_SKILLS: false,
                MAX_CHILDREN: 0,
                ALT_FIRE: false,
                NEGATIVE_RECOIL: false*/
            }
        }
    ]
}
Class.basic2 = {
    PARENT: "genericTank",
    LABEL: "Turret",
    DANGER: 4,
    /*BODY: {
        ACCELERATION: base.ACCEL * 1,
        SPEED: base.SPEED * 1,
        HEALTH: base.HEALTH * 1,
        DAMAGE: base.DAMAGE * 1,
        PENETRATION: base.PENETRATION * 1,
        SHIELD: base.SHIELD * 1,
        REGEN: base.REGEN * 1,
        FOV: base.FOV * 1,
        DENSITY: base.DENSITY * 1,
        PUSHABILITY: 1,
        HETERO: 3
    },*/
    GUNS: [
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: 0,
                DELAY: 0
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "bullet",
                /*COLOR: "grey",
                LABEL: "",
                STAT_CALCULATOR: 0,
                WAIT_TO_CYCLE: false,
                AUTOFIRE: false,
                SYNCS_SKILLS: false,
                MAX_CHILDREN: 0,
                ALT_FIRE: false,
                NEGATIVE_RECOIL: false*/
            }
        }
    ]
}
Class.basebody = {
    PARENT: "genericTank",
    LABEL: "Base",
    DANGER: 4,
    /*BODY: {
        ACCELERATION: base.ACCEL * 1,
        SPEED: base.SPEED * 1,
        HEALTH: base.HEALTH * 1,
        DAMAGE: base.DAMAGE * 1,
        PENETRATION: base.PENETRATION * 1,
        SHIELD: base.SHIELD * 1,
        REGEN: base.REGEN * 1,
        FOV: base.FOV * 1,
        DENSITY: base.DENSITY * 1,
        PUSHABILITY: 1,
        HETERO: 3
    },*/
}
// Tier 1 barrel upgrades
Class.duotwin = {
    PARENT: "genericTank",
    LABEL: "Duo",
    GUNS: [
        {
            POSITION: {
                LENGTH: 20,
                WIDTH: 8,
                Y: 5.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 20,
                WIDTH: 8,
                Y: -5.5,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.sniper = {
    PARENT: "genericTank",
    LABEL: "Sniper",
    BODY: {
        FOV: 1.2 * base.FOV
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 24,
                WIDTH: 8.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.spreaderGun = {
    PARENT: "genericTank",
    LABEL: "Spreader",
    GUNS: [
        {
            POSITION: {
                LENGTH: 12,
                WIDTH: 10,
                ASPECT: 1.4,
                X: 8
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.flanker = {
    PARENT: "genericTank",
    LABEL: "Flanker",
    BODY: {
        SPEED: 1.1 * base.SPEED
    },
    GUNS: weaponArray({
        POSITION: {
            LENGTH: 18,
            WIDTH: 8
        },
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
            TYPE: "bullet"
        }
    }, 2)
}
Class.drummer = {
    PARENT: "genericTank",
    LABEL: "Drummer",
    GUNS: [
        {
            POSITION: {
                LENGTH: 20.5,
                WIDTH: 12
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.trapper = {
    PARENT: "genericTank",
    LABEL: "Trapper",
    STAT_NAMES: statnames.trap,
    GUNS: [
        {
            POSITION: {
                LENGTH: 15,
                WIDTH: 7
            }
        },
        {
            POSITION: {
                LENGTH: 3,
                WIDTH: 7,
                ASPECT: 1.7,
                X: 15
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap"
            }
        }
    ]
}
Class.sinus = {
    PARENT: "genericTank",
    LABEL: "Sinus",
    STAT_NAMES: statnames.desmos,
    GUNS: [
        {
            POSITION: [20, 8, -4/3, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos]),
                TYPE: ["bullet", {CONTROLLERS: ['snake']}]
            }
        },
        {
            POSITION: [3.75, 10, 2.125, 1.5, -6.25, 90, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 1.5, 6.25, -90, 0]
        }
    ]
}
Class.general1 = {
    PARENT: "genericTank",
    LABEL: "General",
    STAT_NAMES: statnames.drone,
    BODY: {
        FOV: base.FOV * 1.1
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 6,
                WIDTH: 11,
                ASPECT: 1.3,
                X: 7
            },
            POSITION: [6, 11, 1.3, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "drone",
                MAX_CHILDREN: 6,
                WAIT_TO_CYCLE: true
            }
        }
    ]
}
Class.disrupter = {
    PARENT: "genericTank",
    LABEL: "Disrupter",
    DANGER: 4,
    GUNS: [
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8.5,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: 0,
                DELAY: 0
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder]),
                TYPE: "firecracker",
            }
        },
        {
            POSITION: {
                LENGTH: 14,
                WIDTH: 6,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: 0,
                DELAY: 0,
            },
            PROPERTIES: {
                COLOR: 2,
            }
        }
    ]
}
Class.heater = {
    PARENT: "genericTank",
    LABEL: "Heater",
    TOOLTIP: "You need to get close to the target and barely touch it with the barrel to do damage.",
    GUNS: [
        {
            POSITION: {
                LENGTH: 23,
                WIDTH: 7.5,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: 0,
                DELAY: 0
            },
            PROPERTIES: {
                COLOR: 13
            }
        },
        {
            POSITION: {
                LENGTH: 21.5,
                WIDTH: 10,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: 0,
                DELAY: 0
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.saw0]),
                TYPE: "bullet",
                /*COLOR: "grey",
                LABEL: "",
                STAT_CALCULATOR: 0,
                WAIT_TO_CYCLE: false,
                AUTOFIRE: false,
                SYNCS_SKILLS: false,
                MAX_CHILDREN: 0,
                ALT_FIRE: false,
                NEGATIVE_RECOIL: false*/
            }
        }
    ]
}

// Tier 1 body upgrades

Class.runnerProp = {
    PARENT: "genericTank",
    DANGER: 4,
    COLOR: 15,
    SHAPE: "M0 5-1 5 0 0-1-5 0-5 1 0Z",
}
Class.sprinterProp = {
    PARENT: "genericTank",
    DANGER: 4,
    COLOR: 15,
    SHAPE: "M-2 5-3 5-2 0-3-5-2-5-1 0ZM0 0-1 5 0 5 1 0 0-5-1-5Z",
}
Class.boosterProp = {
    PARENT: "genericTank",
    DANGER: 4,
    COLOR: 15,
    SHAPE: "M-2 5-3 5-2 0-3-5-2-5-1 0ZM0 0-1 5 0 5 1 0 0-5-1-5ZM2 0 1 5 2 5 3 0 2-5 1-5Z",
}
Class.healProp1 = {
    PARENT: "genericTank",
    DANGER: 4,
    COLOR: 12,
    SHAPE: "M-1 2 1 2 1 1 2 1 2-1 1-1 1-2-1-2-1-1-2-1-2 1-1 1Z",
}
Class.healProp2 = {
    PARENT: "genericTank",
    DANGER: 4,
    COLOR: 2,
    SHAPE: "M-1 2 1 2 1 1 2 1 2-1 1-1 1-2-1-2-1-1-2-1-2 1-1 1Z",
}
Class.healProp3 = {
    PARENT: "genericTank",
    DANGER: 4,
    COLOR: 13,
    SHAPE: "M-1 2 1 2 1 1 2 1 2-1 1-1 1-2-1-2-1-1-2-1-2 1-1 1Z",
}
Class.runner = {
    PARENT: "genericTank",
    LABEL: "Runner",
    DANGER: 4,
    BODY: {
        SPEED: base.SPEED * 1.075
    },
    PROPS: [
        {
            POSITION: [3, 0, 0, 0, 1],
            TYPE: 'runnerProp'
        }
    ]
}
Class.waller = {
    PARENT: "genericTank",
    LABEL: "Wall",
    DANGER: 4,
    BODY: {
        HEALTH: base.HEALTH * 1.25
    },
    PROPS: [
        {
            POSITION: [12, 0, 0, 0, 1],
            TYPE: 'basebody'
        }
    ]
}
Class.turreter = makeAuto("basebody", "Turreter")
Class.hitter = {
    PARENT: "genericSmasher",
    LABEL: "Bumper",
    DANGER: 6,
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody"
        }
    ]
}
Class.auraStrongGen = addAurora();
Class.shielder = {
    PARENT: "genericTank",
    LABEL: "Shield",
    DANGER: 4,
    /*BODY: {
        ACCELERATION: base.ACCEL * 1,
        SPEED: base.SPEED * 1,
        HEALTH: base.HEALTH * 1,
        DAMAGE: base.DAMAGE * 1,
        PENETRATION: base.PENETRATION * 1,
        SHIELD: base.SHIELD * 1,
        REGEN: base.REGEN * 1,
        FOV: base.FOV * 1,
        DENSITY: base.DENSITY * 1,
        PUSHABILITY: 1,
        HETERO: 3
    },*/
    TURRETS: [
        {
            POSITION: [14, 0, 0, 0, 0, 1],
            TYPE: "auraBasicGen"
        }
    ],
}
Class.regenerator = {
    PARENT: "genericTank",
    LABEL: "Regenerator",
    DANGER: 4,
    BODY: {
        REGEN: base.REGEN * 1.25
    },
    PROPS: [
        {
            POSITION: [5, 0, 0, 0, 1],
            TYPE: 'healProp1'
        }
    ]
}

// ignore the smasher pls

Class.smasher = {
    PARENT: "genericSmasher",
    LABEL: "Smasher",
    DANGER: 6,
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody"
        }
    ]
}

// Tier 2 barrel upgrades

Class.mirrorDuo = {
    PARENT: "genericTank",
    LABEL: "Mirror Duo",
    DANGER: 6,
    GUNS: weaponArray([
        {
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doubleTwin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doubleTwin]),
                TYPE: "bullet"
            }
        }
    ], 2)
}
Class.trio = {
    PARENT: "genericTank",
    LABEL: "Trio",
    GUNS: [
        {
            POSITION: {
                LENGTH: 20,
                WIDTH: 8,
                Y: 5.5,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 20,
                WIDTH: 8,
                Y: -5.5,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 22,
                WIDTH: 8.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.spread = {
    PARENT: "genericTank",
    LABEL: "Rounder",
    GUNS: [
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8,
                ANGLE: -30,
                DELAY: 0.75
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8,
                ANGLE: 30,
                DELAY: 0.75
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 20,
                WIDTH: 8,
                ANGLE: -15,
                DELAY: 0.25
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 20,
                WIDTH: 8,
                ANGLE: 15,
                DELAY: 0.25
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 22,
                WIDTH: 8.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.denel = {
    PARENT: "genericTank",
    LABEL: "Denel",
    BODY: {
        FOV: 1.2 * base.FOV
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 24,
                Y: 5.5,
                WIDTH: 8.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 24,
                Y: -5.5,
                WIDTH: 8.5,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.ranger1 = {
    PARENT: "genericTank",
    LABEL: "Ranger",
    BODY: {
        FOV: 1.4 * base.FOV
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 26,
                WIDTH: 8.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.assassin]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.quad0 = {
    PARENT: "genericTank",
    LABEL: "Quad",
    DANGER: 4,
    GUNS: weaponArray([
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: 0,
                DELAY: 0
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "bullet",
            }
        },
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: 90,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "bullet",
            }
        }
    ], 2)
}
Class.redeemer = {
    PARENT: "genericTank",
    LABEL: "Redeemer",
    BODY: {
        FOV: 1.2 * base.FOV
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 24,
                WIDTH: 8.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8,
                ANGLE: 180
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.refocuser = {
    PARENT: "genericTank",
    LABEL: "Refocuser",
    BODY: {
        FOV: 1.2 * base.FOV
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 2,
                WIDTH: 4,
                ASPECT: 1.2,
                X: 24
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 24,
                WIDTH: 8.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.vassalizer = {
    PARENT: "genericTank",
    LABEL: "Vassalizer",
    BODY: {
        FOV: 1.2 * base.FOV
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 24,
                WIDTH: 8.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 14,
                WIDTH: 8,
                ASPECT: 1.4,
                ANGLE: 180
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.drone]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "drone",
                MAX_CHILDREN: 6,
                WAIT_TO_CYCLE: true
            }
        }
    ]
}
Class.thrower = {
    PARENT: "genericTank",
    LABEL: "Thrower",
    STAT_NAMES: statnames.trap,
    BODY: {
        FOV: 1.2 * base.FOV
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 19,
                WIDTH: 7
            }
        },
        {
            POSITION: {
                LENGTH: 3,
                WIDTH: 7,
                ASPECT: 1.7,
                X: 19
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.sniper]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap"
            }
        }
    ]
}
Class.spray = {
    PARENT: "genericTank",
    LABEL: "Sprayer",
    GUNS: [
        {
            POSITION: {
                LENGTH: 12,
                WIDTH: 10,
                ASPECT: 1.4,
                X: 10,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 12,
                WIDTH: 10,
                ASPECT: 1.4,
                X: 8
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.radiowave = {
    PARENT: "genericTank",
    LABEL: "Radiowave",
    GUNS: weaponArray([
        {
            POSITION: {
                LENGTH: 12,
                WIDTH: 10,
                ASPECT: 1.4,
                X: 8
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "bullet"
            }
        }
    ], 2)
}
Class.horizon = {
    PARENT: "genericTank",
    LABEL: "Horizon",
    GUNS: [
        {
            POSITION: {
                LENGTH: 15,
                WIDTH: 13,
                ASPECT: 1.4,
                X: 8
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.tween = {
    PARENT: "genericTank",
    LABEL: "Tween",
    GUNS: [
        {
            POSITION: {
                LENGTH: 12,
                WIDTH: 10,
                ASPECT: 1.4,
                X: 8
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 10,
                WIDTH: 7.5,
                Y: -3.5,
                DELAY: 0.75
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 10,
                WIDTH: 7.5,
                Y: 3.5,
                DELAY: 0.25
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.driver = {
    PARENT: "genericTank",
    LABEL: "Driver",
    BODY: {
        SPEED: 1.1 * base.SPEED
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8,
                DELAY: 0
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8,
                ANGLE: 150,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8,
                ANGLE: -150,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.supriser = {
    PARENT: "genericTank",
    LABEL: "Supriser",
    BODY: {
        SPEED: 1.1 * base.SPEED
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 15,
                WIDTH: 7,
                ANGLE: 180
            }
        },
        {
            POSITION: {
                LENGTH: 3,
                WIDTH: 7,
                ASPECT: 1.7,
                X: 15,
                ANGLE: 180
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap"
            }
        }
    ]
}
Class.trion = {
    PARENT: "genericTank",
    LABEL: "Trion",
    STAT_NAMES: statnames.trap,
    GUNS: weaponArray([
        {
            POSITION: {
                LENGTH: 15,
                WIDTH: 7
            }
        },
        {
            POSITION: {
                LENGTH: 3,
                WIDTH: 7,
                ASPECT: 1.7,
                X: 15
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap"
            }
        }
    ], 3)
}
Class.heavy = {
    PARENT: "genericTank",
    LABEL: "Heavy",
    GUNS: [
        {
            POSITION: {
                LENGTH: 20.5,
                WIDTH: 14
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.destroyer]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.megion = {
    PARENT: "genericTank",
    LABEL: "Megion",
    GUNS: [
        {
            POSITION: {
                LENGTH: 16,
                WIDTH: 12
            }
        },
        {
            POSITION: {
                LENGTH: 3,
                WIDTH: 12,
                ASPECT: 1.4,
                X: 16
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.pounder]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap"
            }
        }
    ]
}
Class.sincos = {
    PARENT: "genericTank",
    LABEL: "SinusCosinus",
    STAT_NAMES: statnames.desmos,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, -5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos]),
                TYPE: ["bullet", {CONTROLLERS: ['snake']}]
            }
        },
        {
            POSITION: [18, 8, 1, 0, 5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos]),
                TYPE: ["bullet", {CONTROLLERS: ['snake']}]
            }
        },
        {
            POSITION: [3.75, 10, 2.125, 1.5, 6, -15, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 1.5, -6, 15, 0]
        }
    ]
}
Class.fractorial = {
    PARENT: "genericTank",
    LABEL: "Fractorial",
    STAT_NAMES: statnames.desmos,
    GUNS: [
        {
            POSITION: [20, 12, -4/3, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos, g.pounder]),
                TYPE: ["bullet", {CONTROLLERS: ['snake']}]
            }
        },
        {
            POSITION: [3.75, 10, 2.125, 1.5, -11.25, 90, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 1.5, 11.25, -90, 0]
        }
    ]
}
Class.overseer = {
    PARENT: "genericTank",
    LABEL: "Overseer",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.9 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    MAX_CHILDREN: 8,
    GUNS: weaponArray({
        POSITION: [6, 12, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.overseer]),
            TYPE: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: "drone",
            WAIT_TO_CYCLE: true
        }
    }, 2)
}
Class.sailor = {
    PARENT: "genericTank",
    LABEL: "Sailor",
    DANGER: 6,
    FACING_TYPE: "locksFacing",
    STAT_NAMES: statnames.swarm,
    BODY: {
        FOV: 1.2 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: "swarm",
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: "swarm",
            },
        },
    ],
}
Class.producer = {
    PARENT: "genericTank",
    LABEL: "Producer",
    STAT_NAMES: statnames.drone,
    BODY: {
        FOV: base.FOV * 1.1
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 8,
                WIDTH: 9,
                ASPECT: 1,
                X: 7
            }
        },
        {
            POSITION: {
                LENGTH: 6,
                WIDTH: 11,
                ASPECT: 1.3,
                X: 7
            },
            POSITION: [6, 11, 1.3, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.overseer]),
                TYPE: "minion",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "drone",
                MAX_CHILDREN: 7,
                WAIT_TO_CYCLE: true
            }
        }
    ]
}
Class.bomber = {
    PARENT: "genericTank",
    LABEL: "Bomber",
    DANGER: 4,
    GUNS: [
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 12,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: 0,
                DELAY: 0
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder]),
                TYPE: "bomba",
            }
        },
        {
            POSITION: {
                LENGTH: 14,
                WIDTH: 9,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: 0,
                DELAY: 0,
            },
            PROPERTIES: {
                COLOR: 2,
            }
        }
    ]
}
Class.dropper = {
    PARENT: "genericTank",
    LABEL: "Dropper",
    DANGER: 4,
    GUNS: [
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8.5,
                ASPECT: 1,
                X: 0,
                Y: 5.5,
                ANGLE: 0,
                DELAY: 0
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder]),
                TYPE: "firecracker",
            }
        },
        {
            POSITION: {
                LENGTH: 14,
                WIDTH: 6,
                ASPECT: 1,
                X: 0,
                Y: 5.5,
                ANGLE: 0,
                DELAY: 0,
            },
            PROPERTIES: {
                COLOR: 2,
            }
        },
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8.5,
                ASPECT: 1,
                X: 0,
                Y: -5.5,
                ANGLE: 0,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder]),
                TYPE: "firecracker",
            }
        },
        {
            POSITION: {
                LENGTH: 14,
                WIDTH: 6,
                ASPECT: 1,
                X: 0,
                Y: -5.5,
                ANGLE: 0,
                DELAY: 0.5,
            },
            PROPERTIES: {
                COLOR: 2,
            }
        }
    ]
}
Class.aviator = {
    PARENT: "genericTank",
    LABEL: "Aviator",
    DANGER: 4,
    GUNS: [
        {
            POSITION: {
                LENGTH: 12,
                WIDTH: 8,
                ASPECT: 1,
                X: 0,
                Y: 6,
                ANGLE: 0,
                DELAY: 0.25,
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet",
            }
        },
        {
            POSITION: {
                LENGTH: 12,
                WIDTH: 8,
                ASPECT: 1,
                X: 0,
                Y: -6,
                ANGLE: 0,
                DELAY: 0.75,
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet",
            }
        },
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8.5,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: 0,
                DELAY: 0
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder]),
                TYPE: "firecracker",
            }
        },
        {
            POSITION: {
                LENGTH: 14,
                WIDTH: 6,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: 0,
                DELAY: 0,
            },
            PROPERTIES: {
                COLOR: 2,
            }
        }
    ]
}
Class.superheater = {
    PARENT: "genericTank",
    LABEL: "Superheater",
    TOOLTIP: "You need to get close to the target and barely touch it with the barrel to do damage.",
    GUNS: [
        {
            POSITION: {
                LENGTH: 26,
                WIDTH: 8.5,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: 0,
                DELAY: 0
            },
            PROPERTIES: {
                COLOR: 13
            }
        },
        {
            POSITION: {
                LENGTH: 24.5,
                WIDTH: 12,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: 0,
                DELAY: 0
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.saw1]),
                TYPE: "bullet",
                /*COLOR: "grey",
                LABEL: "",
                STAT_CALCULATOR: 0,
                WAIT_TO_CYCLE: false,
                AUTOFIRE: false,
                SYNCS_SKILLS: false,
                MAX_CHILDREN: 0,
                ALT_FIRE: false,
                NEGATIVE_RECOIL: false*/
            }
        }
    ]
}
Class.heatwave = {
    PARENT: "genericTank",
    LABEL: "Heatwave",
    TOOLTIP: "You need to get close to the target and barely touch it with the barrel to do damage.",
    GUNS: weaponArray([
        {
            POSITION: {
                LENGTH: 23,
                WIDTH: 7.5,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: 0,
                DELAY: 0
            },
            PROPERTIES: {
                COLOR: 13
            }
        },
        {
            POSITION: {
                LENGTH: 21.5,
                WIDTH: 10,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: 0,
                DELAY: 0
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.saw1]),
                TYPE: "bullet",
                /*COLOR: "grey",
                LABEL: "",
                STAT_CALCULATOR: 0,
                WAIT_TO_CYCLE: false,
                AUTOFIRE: false,
                SYNCS_SKILLS: false,
                MAX_CHILDREN: 0,
                ALT_FIRE: false,
                NEGATIVE_RECOIL: false*/
            }
        }
    ], 4)
}
Class.piercer = {
    PARENT: "genericTank",
    LABEL: "Piercer",
    TOOLTIP: "You need to get close to the target and barely touch it with the barrel to do damage.",
    GUNS: [
        {
            POSITION: {
                LENGTH: 23,
                WIDTH: 7.5,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: 0,
                DELAY: 0
            },
            PROPERTIES: {
                COLOR: 13
            }
        },
        {
            POSITION: {
                LENGTH: 21.5,
                WIDTH: 10,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: 0,
                DELAY: 0
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.saw0]),
                TYPE: "bullet",
                /*COLOR: "grey",
                LABEL: "",
                STAT_CALCULATOR: 0,
                WAIT_TO_CYCLE: false,
                AUTOFIRE: false,
                SYNCS_SKILLS: false,
                MAX_CHILDREN: 0,
                ALT_FIRE: false,
                NEGATIVE_RECOIL: false*/
            }
        },
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: 140,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
                TYPE: "bullet",
                /*COLOR: "grey",
                LABEL: "",
                STAT_CALCULATOR: 0,
                WAIT_TO_CYCLE: false,
                AUTOFIRE: false,
                SYNCS_SKILLS: false,
                MAX_CHILDREN: 0,
                ALT_FIRE: false,
                NEGATIVE_RECOIL: false*/
            }
        },
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: -140,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
                TYPE: "bullet",
                /*COLOR: "grey",
                LABEL: "",
                STAT_CALCULATOR: 0,
                WAIT_TO_CYCLE: false,
                AUTOFIRE: false,
                SYNCS_SKILLS: false,
                MAX_CHILDREN: 0,
                ALT_FIRE: false,
                NEGATIVE_RECOIL: false*/
            }
        }
    ]
}
Class.boxer = {
    PARENT: "genericTank",
    LABEL: "Boxer",
    TOOLTIP: "You need to get close to the target and barely touch it with the barrel to do damage.",
    GUNS: [
        {
            POSITION: {
                LENGTH: 23,
                WIDTH: 7.5,
                ASPECT: 1,
                X: 0,
                Y: -5.5,
                ANGLE: 0,
                DELAY: 0
            },
            PROPERTIES: {
                COLOR: 13
            }
        },
        {
            POSITION: {
                LENGTH: 21.5,
                WIDTH: 10,
                ASPECT: 1,
                X: 0,
                Y: -5.5,
                ANGLE: 0,
                DELAY: 0
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.saw0]),
                TYPE: "bullet",
                /*COLOR: "grey",
                LABEL: "",
                STAT_CALCULATOR: 0,
                WAIT_TO_CYCLE: false,
                AUTOFIRE: false,
                SYNCS_SKILLS: false,
                MAX_CHILDREN: 0,
                ALT_FIRE: false,
                NEGATIVE_RECOIL: false*/
            }
        },
        {
            POSITION: {
                LENGTH: 23,
                WIDTH: 7.5,
                ASPECT: 1,
                X: 0,
                Y: 5.5,
                ANGLE: 0,
                DELAY: 0
            },
            PROPERTIES: {
                COLOR: 13
            }
        },
        {
            POSITION: {
                LENGTH: 21.5,
                WIDTH: 10,
                ASPECT: 1,
                X: 0,
                Y: 5.5,
                ANGLE: 0,
                DELAY: 0
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.saw0]),
                TYPE: "bullet",
                /*COLOR: "grey",
                LABEL: "",
                STAT_CALCULATOR: 0,
                WAIT_TO_CYCLE: false,
                AUTOFIRE: false,
                SYNCS_SKILLS: false,
                MAX_CHILDREN: 0,
                ALT_FIRE: false,
                NEGATIVE_RECOIL: false*/
            }
        }
    ]
}

// Tier 2 body upgrades

Class.fortProp1 = {
    PARENT: "genericTank",
    DANGER: 4,
    SHAPE: 9,
}
Class.sprinter = {
    PARENT: "genericTank",
    LABEL: "Sprinter",
    DANGER: 4,
    BODY: {
        SPEED: base.SPEED * 1.15
    },
    PROPS: [
        {
            POSITION: [3, 0, 0, 0, 1],
            TYPE: 'sprinterProp'
        }
    ]
}
Class.fortresser = {
    PARENT: "genericTank",
    LABEL: "Fortress",
    DANGER: 4,
    BODY: {
        HEALTH: base.HEALTH * 1.5
    },
    PROPS: [
        {
            POSITION: [12, 0, 0, 0, 1],
            TYPE: 'fortProp1'
        }
    ]
}
Class.gunnerdyna = makeAuto("basebody", "Gunner", {type: "autoGunnerGun"})
Class.basher = {
    PARENT: "genericSmasher",
    LABEL: "Basher",
    DANGER: 6,
    BODY: {
        DAMAGE: base.DAMAGE * 1.25
    },
    TURRETS: [
        {
            POSITION: [24, 0, 0, 0, 360, 0],
            TYPE: "smasherBody"
        }
    ]
}
Class.aurora1 = {
    PARENT: "genericTank",
    LABEL: "Aurora",
    DANGER: 4,
    /*BODY: {
        ACCELERATION: base.ACCEL * 1,
        SPEED: base.SPEED * 1,
        HEALTH: base.HEALTH * 1,
        DAMAGE: base.DAMAGE * 1,
        PENETRATION: base.PENETRATION * 1,
        SHIELD: base.SHIELD * 1,
        REGEN: base.REGEN * 1,
        FOV: base.FOV * 1,
        DENSITY: base.DENSITY * 1,
        PUSHABILITY: 1,
        HETERO: 3
    },*/
    TURRETS: [
        {
            POSITION: [14, 0, 0, 0, 0, 1],
            TYPE: "auraStrongGen"
        }
    ],
}
Class.rebuilder = {
    PARENT: "genericTank",
    LABEL: "Rebuilder",
    DANGER: 4,
    BODY: {
        REGEN: base.REGEN * 1.75
    },
    PROPS: [
        {
            POSITION: [5, 0, 0, 0, 1],
            TYPE: 'healProp2'
        }
    ]
}
Class.swordsman = makeAuto("basebody", "Swordsman", {type: "lancerTurret"})

// Tier 3 barrel upgrades

Class.reflectionDuo = {
    PARENT: "genericTank",
    LABEL: "Reflection Duo",
    DANGER: 6,
    GUNS: weaponArray([
        {
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doubleTwin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doubleTwin]),
                TYPE: "bullet"
            }
        }
    ], 3)
}
Class.hedronDuo = {
    PARENT: "genericTank",
    LABEL: "Hedron Duo",
    DANGER: 6,
    GUNS: weaponArray([
        {
            POSITION: [20, 8, 1, 0, 0, -60, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doubleTwin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20, 8, 1, 0, 0, 60, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doubleTwin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doubleTwin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doubleTwin]),
                TYPE: "bullet"
            }
        }
    ], 2)
}
Class.mirrorTrio = {
    PARENT: "genericTank",
    LABEL: "Mirror Trio",
    DANGER: 6,
    GUNS: weaponArray([
        {
            POSITION: {
                LENGTH: 20,
                WIDTH: 8,
                Y: 5.5,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 20,
                WIDTH: 8,
                Y: -5.5,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 22,
                WIDTH: 8.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        }
    ], 2)
}
Class.mirrorDenel = {
    PARENT: "genericTank",
    LABEL: "Mirror Denel",
    BODY: {
        FOV: 1.2 * base.FOV
    },
    GUNS: weaponArray([
        {
            POSITION: {
                LENGTH: 24,
                Y: 5.5,
                WIDTH: 8.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 24,
                Y: -5.5,
                WIDTH: 8.5,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
                TYPE: "bullet"
            }
        }
    ], 2)
}
Class.quartet = {
    PARENT: "genericTank",
    LABEL: "Quartet",
    GUNS: [
        {
            POSITION: {
                LENGTH: 20,
                WIDTH: 5,
                Y: 7,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 20,
                WIDTH: 5,
                Y: -7,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 22,
                WIDTH: 7,
                Y: 4.5,
                DELAY: 0
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 22,
                WIDTH: 7,
                Y: -4.5,
                DELAY: 0
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.trix = {
    PARENT: "genericTank",
    LABEL: "Trix",
    GUNS: [
        {
            POSITION: {
                LENGTH: 24,
                WIDTH: 6,
                ASPECT: 1.6,
                DELAY: 1/3
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 20,
                WIDTH: 8,
                Y: 5.5,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 20,
                WIDTH: 8,
                Y: -5.5,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 22,
                WIDTH: 8.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.unleasher = {
    PARENT: "genericTank",
    LABEL: "Unleasher",
    DANGER: 4,
    GUNS: [
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8.5,
                ASPECT: 1,
                X: 0,
                Y: 6,
                ANGLE: 0,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder]),
                TYPE: "firecracker",
            }
        },
        {
            POSITION: {
                LENGTH: 14,
                WIDTH: 6,
                ASPECT: 1,
                X: 0,
                Y: 6,
                ANGLE: 0,
                DELAY: 0.5,
            },
            PROPERTIES: {
                COLOR: 2,
            }
        },
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8.5,
                ASPECT: 1,
                X: 0,
                Y: -6,
                ANGLE: 0,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder]),
                TYPE: "firecracker",
            }
        },
        {
            POSITION: {
                LENGTH: 14,
                WIDTH: 6,
                ASPECT: 1,
                X: 0,
                Y: -6,
                ANGLE: 0,
                DELAY: 0.5,
            },
            PROPERTIES: {
                COLOR: 2,
            }
        },
        {
            POSITION: {
                LENGTH: 20,
                WIDTH: 9,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: 0,
                DELAY: 0
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder]),
                TYPE: "firecracker",
            }
        },
        {
            POSITION: {
                LENGTH: 16,
                WIDTH: 7,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: 0,
                DELAY: 0,
            },
            PROPERTIES: {
                COLOR: 2,
            }
        }
    ]
}
Class.barett = {
    PARENT: "genericTank",
    LABEL: "Barett",
    BODY: {
        FOV: 1.2 * base.FOV
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 24,
                WIDTH: 8,
                Y: 5.5,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 24,
                WIDTH: 8,
                Y: -5.5,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 26,
                WIDTH: 8.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.express = {
    PARENT: "genericTank",
    LABEL: "Express",
    BODY: {
        FOV: 1.4 * base.FOV
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 28,
                Y: 5.5,
                WIDTH: 8.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.assassin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 28,
                Y: -5.5,
                WIDTH: 8.5,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.assassin]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.circlist = {
    PARENT: "genericTank",
    LABEL: "Circlist",
    GUNS: [
        {
            POSITION: {
                LENGTH: 14,
                WIDTH: 8,
                ANGLE: -60,
                DELAY: 1
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 14,
                WIDTH: 8,
                ANGLE: 60,
                DELAY: 1
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 16,
                WIDTH: 8,
                ANGLE: -45,
                DELAY: 4/5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 16,
                WIDTH: 8,
                ANGLE: 45,
                DELAY: 4/5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8,
                ANGLE: -30,
                DELAY: 3/5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8,
                ANGLE: 30,
                DELAY: 3/5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 20,
                WIDTH: 8,
                ANGLE: -15,
                DELAY: 2/5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 20,
                WIDTH: 8,
                ANGLE: 15,
                DELAY: 2/5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 22,
                WIDTH: 8.5,
                DELAY: 1/5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.mirrorSpread = {
    PARENT: "genericTank",
    LABEL: "Mirror Rounder",
    GUNS: weaponArray([
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8,
                ANGLE: -30,
                DELAY: 0.75
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8,
                ANGLE: 30,
                DELAY: 0.75
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 20,
                WIDTH: 8,
                ANGLE: -15,
                DELAY: 0.25
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 20,
                WIDTH: 8,
                ANGLE: 15,
                DELAY: 0.25
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 22,
                WIDTH: 8.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        }
    ], 2)
}
Class.septa = {
    PARENT: "genericTank",
    LABEL: "Septa",
    DANGER: 4,
    GUNS: weaponArray([
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: 0,
                DELAY: 0
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "bullet",
            }
        }
    ], 7)
}
Class.hexion = {
    PARENT: "genericTank",
    LABEL: "Hexion",
    STAT_NAMES: statnames.trap,
    GUNS: weaponArray([
        {
            POSITION: {
                LENGTH: 15,
                WIDTH: 7
            }
        },
        {
            POSITION: {
                LENGTH: 3,
                WIDTH: 7,
                ASPECT: 1.7,
                X: 15
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap"
            }
        }
    ], 6)
}
Class.keyframe = {
    PARENT: "genericTank",
    LABEL: "Keyframe",
    GUNS: [
        {
            POSITION: {
                LENGTH: 12,
                WIDTH: 10,
                ASPECT: 1.4,
                X: 10,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 12,
                WIDTH: 10,
                ASPECT: 1.4,
                X: 8
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 10,
                WIDTH: 7.5,
                Y: -3.5,
                DELAY: 0.75
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 10,
                WIDTH: 7.5,
                Y: 3.5,
                DELAY: 0.25
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.mirrorTween = {
    PARENT: "genericTank",
    LABEL: "Mirror Tween",
    GUNS: weaponArray([
        {
            POSITION: {
                LENGTH: 12,
                WIDTH: 10,
                ASPECT: 1.4,
                X: 8
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 10,
                WIDTH: 7.5,
                Y: -3.5,
                DELAY: 0.75
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 10,
                WIDTH: 7.5,
                Y: 3.5,
                DELAY: 0.25
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        }
    ], 2)
}
Class.treen = {
    PARENT: "genericTank",
    LABEL: "Treen",
    GUNS: [
        {
            POSITION: {
                LENGTH: 12,
                WIDTH: 10,
                ASPECT: 1.4,
                X: 8
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 10,
                WIDTH: 7.5,
                Y: -3.5,
                DELAY: 0.25
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 10,
                WIDTH: 7.5,
                Y: 3.5,
                DELAY: 0.25
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 12,
                WIDTH: 8,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.nukist = {
    PARENT: "genericTank",
    LABEL: "Launcher",
    DANGER: 4,
    GUNS: [
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8.5,
                ASPECT: 1,
                X: 0,
                Y: 5.5,
                ANGLE: 0,
                DELAY: 0
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder]),
                TYPE: "bomba",
            }
        },
        {
            POSITION: {
                LENGTH: 14,
                WIDTH: 7,
                ASPECT: 1,
                X: 0,
                Y: 5.5,
                ANGLE: 0,
                DELAY: 0,
            },
            PROPERTIES: {
                COLOR: 2,
            }
        },
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8.5,
                ASPECT: 1,
                X: 0,
                Y: -5.5,
                ANGLE: 0,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder]),
                TYPE: "bomba",
            }
        },
        {
            POSITION: {
                LENGTH: 14,
                WIDTH: 7,
                ASPECT: 1,
                X: 0,
                Y: -5.5,
                ANGLE: 0,
                DELAY: 0.5,
            },
            PROPERTIES: {
                COLOR: 2,
            }
        }
    ]
}
Class.blaser = {
    PARENT: "genericTank",
    LABEL: "Blaser",
    DANGER: 4,
    GUNS: [
        {
            POSITION: {
                LENGTH: 13,
                WIDTH: 8,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: -70,
                DELAY: 0.75,
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet",
            }
        },
        {
            POSITION: {
                LENGTH: 13,
                WIDTH: 8,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: 70,
                DELAY: 0.75,
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet",
            }
        },
        {
            POSITION: {
                LENGTH: 12,
                WIDTH: 8,
                ASPECT: 1,
                X: 0,
                Y: 6,
                ANGLE: 0,
                DELAY: 0.25,
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet",
            }
        },
        {
            POSITION: {
                LENGTH: 12,
                WIDTH: 8,
                ASPECT: 1,
                X: 0,
                Y: -6,
                ANGLE: 0,
                DELAY: 0.25,
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet",
            }
        },
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8.5,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: 0,
                DELAY: 0
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder]),
                TYPE: "firecracker",
            }
        },
        {
            POSITION: {
                LENGTH: 14,
                WIDTH: 6,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: 0,
                DELAY: 0,
            },
            PROPERTIES: {
                COLOR: 2,
            }
        }
    ]
}
Class.detonator = {
    PARENT: "genericTank",
    LABEL: "Detonator",
    DANGER: 4,
    GUNS: [
        {
            POSITION: {
                LENGTH: 19,
                WIDTH: 14,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: 0,
                DELAY: 0
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder]),
                TYPE: "heavyBomb",
            }
        },
        {
            POSITION: {
                LENGTH: 16,
                WIDTH: 11,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: 0,
                DELAY: 0,
            },
            PROPERTIES: {
                COLOR: 2,
            }
        }
    ]
}
Class.marksguy = {
    PARENT: "genericTank",
    LABEL: "Marksman",
    BODY: {
        FOV: 1.8 * base.FOV
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 14,
                WIDTH: 5.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 30,
                WIDTH: 8.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.assassin]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.calliope = {
    PARENT: "genericTank",
    LABEL: "Calliope",
    BODY: {
        FOV: 1.2 * base.FOV
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 24,
                WIDTH: 8.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8,
                ANGLE: 180
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8,
                ANGLE: 210,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8,
                ANGLE: 150,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.piper = {
    PARENT: "genericTank",
    LABEL: "Piper",
    BODY: {
        FOV: 1.4 * base.FOV
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 26,
                WIDTH: 8.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.assassin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 24,
                WIDTH: 8,
                ANGLE: 180,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.auditor = {
    PARENT: "genericTank",
    LABEL: "Auditor",
    BODY: {
        FOV: 1.2 * base.FOV
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 24,
                WIDTH: 8.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 14,
                WIDTH: 8,
                ASPECT: 1.6,
                ANGLE: 180
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.overseer]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "drone",
                WAIT_TO_CYCLE: true,
                MAX_CHILDREN: 6
            }
        },
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8,
                ANGLE: 240,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8,
                ANGLE: 120,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.scar1 = {
    PARENT: "genericTank",
    LABEL: "Scar",
    BODY: {
        FOV: 1.2 * base.FOV
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 2,
                WIDTH: 4,
                ASPECT: 1.2,
                X: 27,
                DELAY: 0.75
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 2,
                WIDTH: 4,
                ASPECT: 1.2,
                X: 25.5,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 2,
                WIDTH: 4,
                ASPECT: 1.2,
                X: 24,
                DELAY: 0.25
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 24,
                WIDTH: 8.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.retasker = {
    PARENT: "genericTank",
    LABEL: "Retasker",
    BODY: {
        FOV: 1.4 * base.FOV
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 2,
                WIDTH: 4,
                ASPECT: 1.2,
                X: 26
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 26,
                WIDTH: 8.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.assassin]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.sharpshooter = {
    PARENT: "genericTank",
    LABEL: "Sharpshooter",
    BODY: {
        FOV: 1.2 * base.FOV
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 24,
                WIDTH: 8.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 14,
                WIDTH: 8,
                ASPECT: 1.4,
                ANGLE: 140
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.drone]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "drone",
                MAX_CHILDREN: 6,
                WAIT_TO_CYCLE: true
            }
        },
        {
            POSITION: {
                LENGTH: 14,
                WIDTH: 8,
                ASPECT: 1.4,
                ANGLE: 220
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.drone]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "drone",
                MAX_CHILDREN: 6,
                WAIT_TO_CYCLE: true
            }
        }
    ]
}
Class.sinker = {
    PARENT: "genericTank",
    LABEL: "Sinker",
    BODY: {
        FOV: 1.4 * base.FOV
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 26,
                WIDTH: 8.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.assassin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 14,
                WIDTH: 8,
                ASPECT: 1.4,
                ANGLE: 180
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.drone]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "drone",
                MAX_CHILDREN: 6,
                WAIT_TO_CYCLE: true
            }
        }
    ]
}
Class.sawer = {
    PARENT: "genericTank",
    LABEL: "Sawer",
    STAT_NAMES: statnames.trap,
    BODY: {
        FOV: 1.4 * base.FOV
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 21,
                WIDTH: 7
            }
        },
        {
            POSITION: {
                LENGTH: 3,
                WIDTH: 7,
                ASPECT: 1.7,
                X: 21
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.assassin]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap"
            }
        }
    ]
}
Class.hearer = {
    PARENT: "genericTank",
    LABEL: "Hearer",
    STAT_NAMES: statnames.trap,
    BODY: {
        FOV: 1.2 * base.FOV
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 19,
                WIDTH: 7,
                ANGLE: 30
            }
        },
        {
            POSITION: {
                LENGTH: 3,
                WIDTH: 7,
                ASPECT: 1.7,
                X: 19,
                ANGLE: 30
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.sniper]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap"
            }
        },
        {
            POSITION: {
                LENGTH: 19,
                WIDTH: 7,
                ANGLE: -30
            }
        },
        {
            POSITION: {
                LENGTH: 3,
                WIDTH: 7,
                ASPECT: 1.7,
                X: 19,
                ANGLE: -30
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.sniper]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap"
            }
        }
    ]
}
Class.mill = {
    PARENT: "genericTank",
    LABEL: "Mill",
    GUNS: [
        {
            POSITION: {
                LENGTH: 12,
                WIDTH: 10,
                ASPECT: 1.4,
                X: 12,
                DELAY: 2/3
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 12,
                WIDTH: 10,
                ASPECT: 1.4,
                X: 10,
                DELAY: 1/3
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 12,
                WIDTH: 10,
                ASPECT: 1.4,
                X: 8
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.field = {
    PARENT: "genericTank",
    LABEL: "Field",
    GUNS: [
        {
            POSITION: {
                LENGTH: 13,
                WIDTH: 10,
                ASPECT: 1.4,
                X: 0,
                ANGLE: -30,
                DELAY: 0.75
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 13,
                WIDTH: 10,
                ASPECT: 1.4,
                X: 0,
                ANGLE: 30,
                DELAY: 0.75
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 12,
                WIDTH: 10,
                ASPECT: 1.4,
                X: 10,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 12,
                WIDTH: 10,
                ASPECT: 1.4,
                X: 8
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.aggregator = {
    PARENT: "genericTank",
    LABEL: "Aggregator",
    GUNS: [
        {
            POSITION: {
                LENGTH: 16,
                WIDTH: 8,
                Y: -3.5,
                DELAY: 0.75
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 16,
                WIDTH: 8,
                Y: 3.5,
                DELAY: 0.25
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 12,
                WIDTH: 10,
                ASPECT: 1.4,
                X: 10,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 12,
                WIDTH: 10,
                ASPECT: 1.4,
                X: 8
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.radioStation = {
    PARENT: "genericTank",
    LABEL: "Radio Station",
    GUNS: weaponArray([
        {
            POSITION: {
                LENGTH: 12,
                WIDTH: 10,
                ASPECT: 1.4,
                X: 8
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "bullet"
            }
        }
    ], 3)
}
Class.infrared = {
    PARENT: "genericTank",
    LABEL: "Infrared",
    GUNS: weaponArray([
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8,
                ANGLE: 90,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.single]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 12,
                WIDTH: 10,
                ASPECT: 1.4,
                X: 8
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "bullet"
            }
        }
    ], 2)
}
Class.setter = {
    PARENT: "genericTank",
    LABEL: "Setter",
    GUNS: [
        {
            POSITION: {
                LENGTH: 8,
                WIDTH: 7,
                ASPECT: 1.4,
                X: 4
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 16,
                WIDTH: 15,
                ASPECT: 1.4,
                X: 8
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.pulsator = {
    PARENT: "genericTank",
    LABEL: "Pulsator",
    GUNS: weaponArray([
        {
            POSITION: {
                LENGTH: 15,
                WIDTH: 13,
                ASPECT: 1.4,
                X: 8
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "bullet"
            }
        }
    ], 2)
}
Class.grater = {
    PARENT: "genericTank",
    LABEL: "Grater",
    GUNS: [
        {
            POSITION: {
                LENGTH: 15,
                WIDTH: 10,
                ASPECT: 1.4,
                X: 10
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 15,
                WIDTH: 13,
                ASPECT: 1.4,
                X: 8
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.racecar = {
    PARENT: "genericTank",
    LABEL: "Racecar",
    BODY: {
        SPEED: 1.1 * base.SPEED
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8,
                DELAY: 0
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 14,
                WIDTH: 8,
                ANGLE: 125,
                DELAY: 0.25
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 14,
                WIDTH: 8,
                ANGLE: -125,
                DELAY: 0.25
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8,
                ANGLE: 150,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8,
                ANGLE: -150,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.bender = {
    PARENT: "genericTank",
    LABEL: "Bender",
    BODY: {
        SPEED: 1.1 * base.SPEED
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 16,
                WIDTH: 8,
                ANGLE: 20,
                DELAY: 0.25
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 16,
                WIDTH: 8,
                ANGLE: -20,
                DELAY: 0.25
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8,
                DELAY: 0
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8,
                ANGLE: 150,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8,
                ANGLE: -150,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.jumper = {
    PARENT: "genericTank",
    LABEL: "Jumper",
    BODY: {
        SPEED: 1.1 * base.SPEED
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8,
                DELAY: 0
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8,
                ANGLE: 135,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8,
                ANGLE: -135,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 20,
                WIDTH: 9,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: 180,
                DELAY: 0
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder]),
                TYPE: "firecracker",
            }
        },
        {
            POSITION: {
                LENGTH: 16,
                WIDTH: 7,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: 180,
                DELAY: 0,
            },
            PROPERTIES: {
                COLOR: 2,
            }
        }
    ]
}
Class.residue = {
    PARENT: "genericTank",
    LABEL: "Residue",
    BODY: {
        SPEED: 1.1 * base.SPEED
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 15,
                WIDTH: 7,
                ANGLE: -160
            }
        },
        {
            POSITION: {
                LENGTH: 3,
                WIDTH: 7,
                ASPECT: 1.7,
                X: 15,
                ANGLE: -160
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap"
            }
        },
        {
            POSITION: {
                LENGTH: 15,
                WIDTH: 7,
                ANGLE: 160
            }
        },
        {
            POSITION: {
                LENGTH: 3,
                WIDTH: 7,
                ASPECT: 1.7,
                X: 15,
                ANGLE: 160
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap"
            }
        },
        {
            POSITION: {
                LENGTH: 15,
                WIDTH: 7,
                ANGLE: 180
            }
        },
        {
            POSITION: {
                LENGTH: 3,
                WIDTH: 7,
                ASPECT: 1.7,
                X: 15,
                ANGLE: 180
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap"
            }
        }
    ]
}
Class.trailer = {
    PARENT: "genericTank",
    LABEL: "Trailer",
    BODY: {
        SPEED: 1.1 * base.SPEED
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 15,
                WIDTH: 12,
                ANGLE: 180
            }
        },
        {
            POSITION: {
                LENGTH: 3,
                WIDTH: 12,
                ASPECT: 1.7,
                X: 15,
                ANGLE: 180
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.pounder]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap"
            }
        }
    ]
}
Class.ultrion = {
    PARENT: "genericTank",
    LABEL: "Ultrion",
    STAT_NAMES: statnames.trap,
    GUNS: [
        {
            POSITION: {
                LENGTH: 16,
                WIDTH: 15
            }
        },
        {
            POSITION: {
                LENGTH: 3,
                WIDTH: 15,
                ASPECT: 1.4,
                X: 16
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.destroyer]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap"
            }
        }
    ]
}
Class.stickyBomber = {
    PARENT: "genericTank",
    LABEL: "Sticky Bomber",
    STAT_NAMES: statnames.trap,
    GUNS: [
        {
            POSITION: {
                LENGTH: 16,
                WIDTH: 12
            }
        },
        {
            POSITION: {
                LENGTH: 3,
                WIDTH: 12,
                ASPECT: 1.4,
                X: 16
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.pounder]),
                TYPE: "stickyBomb",
                STAT_CALCULATOR: "trap"
            }
        },
        {
            POSITION: {
                LENGTH: 14,
                WIDTH: 9,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: 0,
                DELAY: 0,
            },
            PROPERTIES: {
                COLOR: 2,
            }
        }
    ]
}
Class.piller = {
    PARENT: "genericTank",
    LABEL: "Piller",
    STAT_NAMES: statnames.trap,
    GUNS: [
        {
            POSITION: {
                LENGTH: 21,
                WIDTH: 10
            }
        },
        {
            POSITION: {
                LENGTH: 16,
                WIDTH: 14
            }
        },
        {
            POSITION: {
                LENGTH: 3,
                WIDTH: 14,
                ASPECT: 1.4,
                X: 16
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.pounder]),
                TYPE: "pillbox",
                STAT_CALCULATOR: "setTrap"
            }
        }
    ]
}
Class.boomer1 = {
    PARENT: "genericTank",
    LABEL: "Boomer",
    STAT_NAMES: statnames.trap,
    GUNS: [
        {
            POSITION: {
                LENGTH: 21,
                WIDTH: 10,
                ASPECT: 1.6
            }
        },
        {
            POSITION: {
                LENGTH: 16,
                WIDTH: 14
            }
        },
        {
            POSITION: {
                LENGTH: 3,
                WIDTH: 14,
                ASPECT: 1.4,
                X: 16
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.pounder]),
                TYPE: "boomerang",
                STAT_CALCULATOR: "boomerang"
            }
        }
    ]
}
Class.integral = {
    PARENT: "genericTank",
    LABEL: "Integral",
    STAT_NAMES: statnames.desmos,
    GUNS: [
        {
            POSITION: [20, 16, -4/3, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos, g.destroyer]),
                TYPE: ["bullet", {CONTROLLERS: ['snake']}]
            }
        },
        {
            POSITION: [3.75, 10, 2.125, 1.5, -11.25, 90, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 1.5, 11.25, -90, 0]
        }
    ]
}
Class.hefty = {
    PARENT: "genericTank",
    LABEL: "Hefty",
    GUNS: [
        {
            POSITION: {
                LENGTH: 21,
                WIDTH: 17
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.annihilator]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.liberator = {
    PARENT: "genericTank",
    LABEL: "Liberator",
    GUNS: [
        {
            POSITION: {
                LENGTH: 4,
                WIDTH: 10
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.shotgun]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 4,
                WIDTH: 8,
                Y: -0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.shotgun]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 4,
                WIDTH: 8,
                Y: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.shotgun]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 4,
                WIDTH: 8
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.shotgun]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 20.5,
                WIDTH: 16,
                ASPECT: 0.8
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.destroyer]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.tangent = {
    PARENT: "genericTank",
    LABEL: "Tangent",
    STAT_NAMES: statnames.desmos,
    GUNS: weaponArray([
        {
            POSITION: [18, 8, 1, 0, -5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos]),
                TYPE: ["bullet", {CONTROLLERS: ['snake']}]
            }
        },
        {
            POSITION: [18, 8, 1, 0, 5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos]),
                TYPE: ["bullet", {CONTROLLERS: ['snake']}]
            }
        },
        {
            POSITION: [3.75, 10, 2.125, 1.5, 6, -15, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 1.5, -6, 15, 0]
        }
    ], 2)
}
Class.overlord1 = {
    PARENT: "genericTank",
    LABEL: "Overlord",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.9 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    MAX_CHILDREN: 8,
    GUNS: weaponArray({
        POSITION: [6, 12, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.overseer]),
            TYPE: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: "drone",
            WAIT_TO_CYCLE: true
        }
    }, 4)
}
Class.battlecruiser = {
    PARENT: "genericTank",
    LABEL: "Battlecruiser",
    DANGER: 6,
    FACING_TYPE: "locksFacing",
    STAT_NAMES: statnames.swarm,
    BODY: {
        FOV: 1.2 * base.FOV,
    },
    GUNS: weaponArray([
        {
            POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: "swarm",
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: "swarm",
            },
        },
    ], 2)
}
Class.industry1 = {
    PARENT: "genericTank",
    LABEL: "Industry",
    STAT_NAMES: statnames.drone,
    BODY: {
        FOV: base.FOV * 1.1
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 8,
                WIDTH: 9,
                ASPECT: 1,
                X: 7
            }
        },
        {
            POSITION: {
                LENGTH: 6,
                WIDTH: 11,
                ASPECT: 1.3,
                X: 7
            },
            POSITION: [6, 11, 1.3, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.overseer]),
                TYPE: "minion",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "drone",
                MAX_CHILDREN: 6,
                WAIT_TO_CYCLE: true
            }
        },
        {
            POSITION: {
                LENGTH: 8,
                WIDTH: 9,
                ASPECT: 1,
                X: 7,
                ANGLE: 180
            }
        },
        {
            POSITION: {
                LENGTH: 6,
                WIDTH: 11,
                ASPECT: 1.3,
                X: 7,
                ANGLE: 180
            },
            POSITION: [6, 11, 1.3, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.overseer]),
                TYPE: "minion",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "drone",
                MAX_CHILDREN: 6,
                WAIT_TO_CYCLE: true
            }
        }
    ]
}
Class.ultraheater = {
    PARENT: "genericTank",
    LABEL: "Ultraheater",
    TOOLTIP: "You need to get close to the target and barely touch it with the barrel to do damage.",
    GUNS: [
        {
            POSITION: {
                LENGTH: 27.5,
                WIDTH: 10.5,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: 0,
                DELAY: 0
            },
            PROPERTIES: {
                COLOR: 13
            }
        },
        {
            POSITION: {
                LENGTH: 26,
                WIDTH: 14,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: 0,
                DELAY: 0
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.saw2]),
                TYPE: "bullet",
                /*COLOR: "grey",
                LABEL: "",
                STAT_CALCULATOR: 0,
                WAIT_TO_CYCLE: false,
                AUTOFIRE: false,
                SYNCS_SKILLS: false,
                MAX_CHILDREN: 0,
                ALT_FIRE: false,
                NEGATIVE_RECOIL: false*/
            }
        }
    ]
}
Class.champion = {
    PARENT: "genericTank",
    LABEL: "Champion",
    TOOLTIP: "You need to get close to the target and barely touch it with the barrel to do damage.",
    GUNS: [
        {
            POSITION: {
                LENGTH: 26,
                WIDTH: 8.5,
                ASPECT: 1,
                X: 0,
                Y: 4.5,
                ANGLE: 0,
                DELAY: 0
            },
            PROPERTIES: {
                COLOR: 13
            }
        },
        {
            POSITION: {
                LENGTH: 24.5,
                WIDTH: 12,
                ASPECT: 1,
                X: 0,
                Y: 4.5,
                ANGLE: 0,
                DELAY: 0
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.saw1]),
                TYPE: "bullet",
                /*COLOR: "grey",
                LABEL: "",
                STAT_CALCULATOR: 0,
                WAIT_TO_CYCLE: false,
                AUTOFIRE: false,
                SYNCS_SKILLS: false,
                MAX_CHILDREN: 0,
                ALT_FIRE: false,
                NEGATIVE_RECOIL: false*/
            }
        },
        {
            POSITION: {
                LENGTH: 26,
                WIDTH: 8.5,
                ASPECT: 1,
                X: 0,
                Y: -4.5,
                ANGLE: 0,
                DELAY: 0
            },
            PROPERTIES: {
                COLOR: 13
            }
        },
        {
            POSITION: {
                LENGTH: 24.5,
                WIDTH: 12,
                ASPECT: 1,
                X: 0,
                Y: -4.5,
                ANGLE: 0,
                DELAY: 0
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.saw1]),
                TYPE: "bullet",
                /*COLOR: "grey",
                LABEL: "",
                STAT_CALCULATOR: 0,
                WAIT_TO_CYCLE: false,
                AUTOFIRE: false,
                SYNCS_SKILLS: false,
                MAX_CHILDREN: 0,
                ALT_FIRE: false,
                NEGATIVE_RECOIL: false*/
            }
        }
    ]
}
Class.heatBurst = {
    PARENT: "genericTank",
    LABEL: "Heat Burst",
    TOOLTIP: "You need to get close to the target and barely touch it with the barrel to do damage.",
    GUNS: weaponArray([
        {
            POSITION: {
                LENGTH: 23,
                WIDTH: 7.5,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: 0,
                DELAY: 0
            },
            PROPERTIES: {
                COLOR: 13
            }
        },
        {
            POSITION: {
                LENGTH: 21.5,
                WIDTH: 10,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: 0,
                DELAY: 0
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.saw1]),
                TYPE: "bullet",
                /*COLOR: "grey",
                LABEL: "",
                STAT_CALCULATOR: 0,
                WAIT_TO_CYCLE: false,
                AUTOFIRE: false,
                SYNCS_SKILLS: false,
                MAX_CHILDREN: 0,
                ALT_FIRE: false,
                NEGATIVE_RECOIL: false*/
            }
        }
    ], 6)
}
Class.fireTornado = {
    PARENT: "genericTank",
    LABEL: "Fire Tornado",
    TOOLTIP: "You need to get close to the target and barely touch it with the barrel to do damage.",
    GUNS: weaponArray([
        {
            POSITION: {
                LENGTH: 26,
                WIDTH: 8.5,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: 0,
                DELAY: 0
            },
            PROPERTIES: {
                COLOR: 13
            }
        },
        {
            POSITION: {
                LENGTH: 24.5,
                WIDTH: 12,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: 0,
                DELAY: 0
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.saw1]),
                TYPE: "bullet",
                /*COLOR: "grey",
                LABEL: "",
                STAT_CALCULATOR: 0,
                WAIT_TO_CYCLE: false,
                AUTOFIRE: false,
                SYNCS_SKILLS: false,
                MAX_CHILDREN: 0,
                ALT_FIRE: false,
                NEGATIVE_RECOIL: false*/
            }
        }
    ], 4)
}
Class.spearhead = {
    PARENT: "genericTank",
    LABEL: "Spearhead",
    TOOLTIP: "You need to get close to the target and barely touch it with the barrel to do damage.",
    GUNS: [
        {
            POSITION: {
                LENGTH: 23,
                WIDTH: 7.5,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: 0,
                DELAY: 0
            },
            PROPERTIES: {
                COLOR: 13
            }
        },
        {
            POSITION: {
                LENGTH: 21.5,
                WIDTH: 10,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: 0,
                DELAY: 0
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.saw0]),
                TYPE: "bullet",
                /*COLOR: "grey",
                LABEL: "",
                STAT_CALCULATOR: 0,
                WAIT_TO_CYCLE: false,
                AUTOFIRE: false,
                SYNCS_SKILLS: false,
                MAX_CHILDREN: 0,
                ALT_FIRE: false,
                NEGATIVE_RECOIL: false*/
            }
        },
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: 140,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
                TYPE: "bullet",
                /*COLOR: "grey",
                LABEL: "",
                STAT_CALCULATOR: 0,
                WAIT_TO_CYCLE: false,
                AUTOFIRE: false,
                SYNCS_SKILLS: false,
                MAX_CHILDREN: 0,
                ALT_FIRE: false,
                NEGATIVE_RECOIL: false*/
            }
        },
        {
            POSITION: {
                LENGTH: 14,
                WIDTH: 8,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: -120,
                DELAY: 0.25
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
                TYPE: "bullet",
                /*COLOR: "grey",
                LABEL: "",
                STAT_CALCULATOR: 0,
                WAIT_TO_CYCLE: false,
                AUTOFIRE: false,
                SYNCS_SKILLS: false,
                MAX_CHILDREN: 0,
                ALT_FIRE: false,
                NEGATIVE_RECOIL: false*/
            }
        },
        {
            POSITION: {
                LENGTH: 14,
                WIDTH: 8,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: 120,
                DELAY: 0.25
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
                TYPE: "bullet",
                /*COLOR: "grey",
                LABEL: "",
                STAT_CALCULATOR: 0,
                WAIT_TO_CYCLE: false,
                AUTOFIRE: false,
                SYNCS_SKILLS: false,
                MAX_CHILDREN: 0,
                ALT_FIRE: false,
                NEGATIVE_RECOIL: false*/
            }
        },
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: -140,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
                TYPE: "bullet",
                /*COLOR: "grey",
                LABEL: "",
                STAT_CALCULATOR: 0,
                WAIT_TO_CYCLE: false,
                AUTOFIRE: false,
                SYNCS_SKILLS: false,
                MAX_CHILDREN: 0,
                ALT_FIRE: false,
                NEGATIVE_RECOIL: false*/
            }
        }
    ]
}

// Tier 3 body upgrades

Class.castleProp1 = {
    PARENT: "genericTank",
    DANGER: 4,
    SHAPE: 6,
}
Class.booster1 = {
    PARENT: "genericTank",
    LABEL: "Booster",
    DANGER: 4,
    BODY: {
        SPEED: base.SPEED * 1.25
    },
    PROPS: [
        {
            POSITION: [3, 0, 0, 0, 1],
            TYPE: 'boosterProp'
        }
    ]
}
Class.castle = {
    PARENT: "genericTank",
    LABEL: "Castle",
    DANGER: 4,
    BODY: {
        HEALTH: base.HEALTH * 1.5
    },
    PROPS: [
        {
            POSITION: [12, 0, 0, 0, 1],
            TYPE: 'castleProp1'
        }
    ]
}
Class.refrainer = makeAuto("basebody", "Refrainer", {type: "refrainerTurret"})
Class.caver = {
    PARENT: "genericSmasher",
    LABEL: "Caver",
    DANGER: 6,
    BODY: {
        DAMAGE: base.DAMAGE * 1.35
    },
    TURRETS: [
        {
            POSITION: [26, 0, 0, 0, 360, 0],
            TYPE: "smasherBody"
        }
    ]
}
Class.auraGodGen = addHalo();
Class.atmosphere = {
    PARENT: "genericTank",
    LABEL: "Atmosphere",
    DANGER: 4,
    /*BODY: {
        ACCELERATION: base.ACCEL * 1,
        SPEED: base.SPEED * 1,
        HEALTH: base.HEALTH * 1,
        DAMAGE: base.DAMAGE * 1,
        PENETRATION: base.PENETRATION * 1,
        SHIELD: base.SHIELD * 1,
        REGEN: base.REGEN * 1,
        FOV: base.FOV * 1,
        DENSITY: base.DENSITY * 1,
        PUSHABILITY: 1,
        HETERO: 3
    },*/
    TURRETS: [
        {
            POSITION: [14, 0, 0, 0, 0, 1],
            TYPE: "auraGodGen"
        }
    ],
}
Class.reconstructor = {
    PARENT: "genericTank",
    LABEL: "Reconstructor",
    DANGER: 4,
    BODY: {
        REGEN: base.REGEN * 1.95
    },
    PROPS: [
        {
            POSITION: [5, 0, 0, 0, 1],
            TYPE: 'healProp3'
        }
    ]
}
Class.piker = makeAuto("basebody", "Piker", {type: "pikerTurret"})
Class.cannon1 = makeAuto("waller", "Cannon", {type: "cannonTurret"})
Class.citadel1 = makeAuto("fortresser", "Citadel")
Class.rammer = {
    PARENT: "genericSmasher",
    LABEL: "Rammer",
    DANGER: 6,
    BODY: {
        DAMAGE: base.DAMAGE * 1.25,
        SPEED: base.SPEED * 1.075
    },
    TURRETS: [
        {
            POSITION: [24, 0, 0, 0, 360, 0],
            TYPE: "smasherBody"
        }
    ],
    PROPS: [
        {
            POSITION: [3, 0, 0, 0, 1],
            TYPE: 'runnerProp'
        }
    ]
}
Class.weigher = {
    PARENT: "genericTank",
    LABEL: "Weigher",
    DANGER: 4,
    BODY: {
        HEALTH: base.HEALTH * 1.5,
        DAMAGE: base.DAMAGE * 1.15
    },
    PROPS: [
        {
            POSITION: [12, 0, 0, 0, 1],
            TYPE: 'fortProp1'
        }
    ],
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody"
        }
    ]
}

// CANON ARRAS TANKS
Class.cruiser = {
    PARENT: "genericTank",
    LABEL: "Cruiser",
    DANGER: 6,
    FACING_TYPE: "locksFacing",
    STAT_NAMES: statnames.swarm,
    BODY: {
        FOV: 1.2 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: "swarm",
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: "swarm",
            },
        },
    ],
}
Class.factory2 = {
    PARENT: "genericTank",
    LABEL: "Factory 2",
    STAT_NAMES: statnames.drone,
    BODY: {
        FOV: base.FOV * 1.1
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 8,
                WIDTH: 9,
                ASPECT: 1,
                X: 7
            }
        },
        {
            POSITION: {
                LENGTH: 6,
                WIDTH: 11,
                ASPECT: 1.3,
                X: 7
            },
            POSITION: [6, 11, 1.3, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.factory]),
                TYPE: "minion",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "drone",
                MAX_CHILDREN: 7,
                WAIT_TO_CYCLE: true
            }
        }
    ]
}
Class.healer = {
    PARENT: "genericTank",
    LABEL: "Healer",
    STAT_NAMES: statnames.heal,
    TURRETS: [
        {
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: "healerSymbol"
        }
    ],
    GUNS: [
        {
            POSITION: {
                LENGTH: 8,
                WIDTH: 9,
                ASPECT: -0.5,
                X: 12.5
            }
        },
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 10
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.healer]),
                TYPE: "healerBullet"
            }
        }
    ]
}

// Twin upgrades
Class.doubleTwin = {
    PARENT: "genericTank",
    LABEL: "Double Twin",
    DANGER: 6,
    GUNS: weaponArray([
        {
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doubleTwin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doubleTwin]),
                TYPE: "bullet"
            }
        }
    ], 2)
}
Class.tripleShot = {
    PARENT: "genericTank",
    LABEL: "Triple Shot",
    DANGER: 6,
    BODY: {
        SPEED: base.SPEED * 0.9
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 19,
                WIDTH: 8,
                Y: -2,
                ANGLE: -17.5,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 19,
                WIDTH: 8,
                Y: 2,
                ANGLE: 17.5,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 22,
                WIDTH: 8
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot]),
                TYPE: "bullet"
            }
        }
    ]
}

// Double Twin upgrades
Class.tripleTwin = {
    PARENT: "genericTank",
    LABEL: "Triple Twin",
    DANGER: 7,
    GUNS: weaponArray([
        {
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.doubleTwin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.doubleTwin]),
                TYPE: "bullet"
            }
        }
    ], 3)
}
Class.hewnDouble = {
    PARENT: "genericTank",
    LABEL: "Hewn Double",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [19, 8, 1, 0, 5.5, 205, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.twin, g.doubleTwin, g.hewnDouble, { recoil: 1.15 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [19, 8, 1, 0, -5.5, -205, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.twin, g.doubleTwin, g.hewnDouble, { recoil: 1.15 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20, 8, 1, 0, 5.5, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doubleTwin, g.hewnDouble, { recoil: 1.15 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doubleTwin, g.hewnDouble, { recoil: 1.15 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doubleTwin, g.hewnDouble]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doubleTwin, g.hewnDouble]),
                TYPE: "bullet"
            }
        }
    ]
}

// Triple Shot upgrades
Class.pentaShot = {
    PARENT: "genericTank",
    LABEL: "Penta Shot",
    DANGER: 7,
    BODY: {
        SPEED: 0.85 * base.SPEED
    },
    GUNS: [
        {
            POSITION: [16, 8, 1, 0, -3, -30, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [16, 8, 1, 0, 3, 30, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [19, 8, 1, 0, -2, -15, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [19, 8, 1, 0, 2, 15, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [22, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.spreadshot = {
    PARENT: "genericTank",
    LABEL: "Spreadshot",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [13, 4, 1, 0, -0.5, -75, 5 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin, g.spreadshot]),
                TYPE: "bullet",
                LABEL: "Spread"
            }
        },
        {
            POSITION: [13, 4, 1, 0, 0.5, 75, 5 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin, g.spreadshot]),
                TYPE: "bullet",
                LABEL: "Spread"
            }
        },
        {
            POSITION: [14.5, 4, 1, 0, -0.5, -60, 4 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin, g.spreadshot]),
                TYPE: "bullet",
                LABEL: "Spread"
            }
        },
        {
            POSITION: [14.5, 4, 1, 0, 0.5, 60, 4 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin, g.spreadshot]),
                TYPE: "bullet",
                LABEL: "Spread"
            }
        },
        {
            POSITION: [16, 4, 1, 0, -0.5, -45, 3 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin, g.spreadshot]),
                TYPE: "bullet",
                LABEL: "Spread"
            }
        },
        {
            POSITION: [16, 4, 1, 0, 0.5, 45, 3 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin, g.spreadshot]),
                TYPE: "bullet",
                LABEL: "Spread"
            }
        },
        {
            POSITION: [17.5, 4, 1, 0, -0.5, -30, 2 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin, g.spreadshot]),
                TYPE: "bullet",
                LABEL: "Spread"
            }
        },
        {
            POSITION: [17.5, 4, 1, 0, 0.5, 30, 2 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin, g.spreadshot]),
                TYPE: "bullet",
                LABEL: "Spread"
            }
        },
        {
            POSITION: [19, 4, 1, 0, -1, -15, 1 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin, g.spreadshot]),
                TYPE: "bullet",
                LABEL: "Spread"
            }
        },
        {
            POSITION: [19, 4, 1, 0, 1, 15, 1 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin, g.spreadshot]),
                TYPE: "bullet",
                LABEL: "Spread"
            }
        },
        {
            POSITION: [12, 8, 1, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.spreadshotMain, g.spreadshot]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.bentDouble = {
    PARENT: "genericTank",
    LABEL: "Bent Double",
    DANGER: 7,
    GUNS: weaponArray([
        {
            POSITION: [19, 8, 1, 0, -2, -17.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot, g.doubleTwin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [19, 8, 1, 0, 2, 17.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot, g.doubleTwin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [22, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot, g.doubleTwin]),
                TYPE: "bullet"
            }
        }
    ], 2)
}
Class.triplet = {
    PARENT: "genericTank",
    DANGER: 7,
    LABEL: "Triplet",
    BODY: {
        FOV: 1.05 * base.FOV
    },
    GUNS: [
        {
            POSITION: [18, 10, 1, 0, 5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triplet]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [18, 10, 1, 0, -5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triplet]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [21, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triplet]),
                TYPE: "bullet"
            }
        }
    ]
}

// Sniper upgrades
Class.assassin = {
    PARENT: "genericTank",
    DANGER: 6,
    LABEL: "Assassin",
    BODY: {
        SPEED: 0.85 * base.SPEED,
        FOV: 1.4 * base.FOV
    },
    GUNS: [
        {
            POSITION: [27, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [5, 8, -1.4, 8, 0, 0, 0]
        }
    ]
}
Class.hunter = {
    PARENT: "genericTank",
    LABEL: "Hunter",
    DANGER: 6,
    BODY: {
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.25
    },
    CONTROLLERS: ["zoom"],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [
        {
            POSITION: [24, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunterSecondary]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [21, 12, 1, 0, 0, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.rifle = {
    PARENT: "genericTank",
    LABEL: "Rifle",
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.225
    },
    GUNS: [
        {
            POSITION: [20, 12, 1, 0, 0, 0, 0]
        },
        {
            POSITION: [24, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.marksman = {
    PARENT: "genericTank",
    LABEL: "Marksman",
    DANGER: 6,
    BODY: {
        FOV: 1.2 * base.FOV
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 5,
                WIDTH: 8.5,
                ASPECT: 1.3,
                X: 8
            }
        },
        {
            POSITION: {
                LENGTH: 5,
                WIDTH: 8.5,
                ASPECT: 1.3,
                X: 13
            }
        },
        {
            POSITION: {
                LENGTH: 5,
                WIDTH: 8.5,
                ASPECT: 1.3,
                X: 18
            }
        },
        {
            POSITION: {
                LENGTH: 24,
                WIDTH: 8.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, { pen: 2 }]),
                TYPE: "bullet"
            }
        }
    ]
}

// Assassin upgrades
Class.ranger = {
    PARENT: "genericTank",
    LABEL: "Ranger",
    DANGER: 7,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.5 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [32, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5, 8, -1.4, 8, 0, 0, 0],
        },
    ],
}
Class.stalker = {
    PARENT: "genericTank",
    DANGER: 7,
    LABEL: "Stalker",
    BODY: {
        SPEED: 0.85 * base.SPEED,
        FOV: 1.35 * base.FOV
    },
    INVISIBLE: [0.08, 0.03],
    TOOLTIP: "Stay still to turn invisible.",
    GUNS: [
        {
            POSITION: [27, 8, -1.8, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.single = {
    PARENT: "genericTank",
    LABEL: "Single",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [19, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.single]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
        }
    ]
}

// Hunter upgrades
Class.predator = {
    PARENT: "genericTank",
    LABEL: "Predator",
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.25
    },
    CONTROLLERS: ["zoom"],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [
        {
            POSITION: [24, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunterSecondary, g.hunterSecondary, g.predator]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [21, 12, 1, 0, 0, 0, 0.15],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunterSecondary, g.predator]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [18, 16, 1, 0, 0, 0, 0.3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.predator]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.xHunter = {
    PARENT: "genericTank",
    LABEL: "X-Hunter",
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.25
    },
    CONTROLLERS: [["zoom", { distance: 550 }]],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [
        {
            POSITION: [24, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunterSecondary]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [21, 12, 1, 0, 0, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [5, 12, -1.2, 7, 0, 0, 0]
        }
    ]
}
Class.dual = {
    PARENT: "genericTank",
    LABEL: "Dual",
    DANGER: 7,
    BODY: {
        FOV: 1.1 * base.FOV
    },
    CONTROLLERS: ["zoom"],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [
        {
            POSITION: [18, 7, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowPower]),
                TYPE: "bullet",
                LABEL: "Small"
            }
        },
        {
            POSITION: [18, 7, 1, 0, -5.5, 0, .5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowPower]),
                TYPE: "bullet",
                LABEL: "Small"
            }
        },
        {
            POSITION: [16, 8.5, 1, 0, 5.5, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [16, 8.5, 1, 0, -5.5, 0, .75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
                TYPE: "bullet"
            }
        }
    ]
}

// Rifle upgrades
Class.musket = {
    PARENT: "genericTank",
    LABEL: "Musket",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.225
    },
    GUNS: [
        {
            POSITION: [16, 19, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [18, 7, 1, 0, 4, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.twin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [18, 7, 1, 0, -4, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.twin]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.crossbow = {
    PARENT: "genericTank",
    LABEL: "Crossbow",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.225
    },
    GUNS: [
        {
            POSITION: [12.5, 2.5, 1, 0, 3.5, 35, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.crossbow, { recoil: 0.5 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [12.5, 2.5, 1, 0, -3.5, -35, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.crossbow, { recoil: 0.5 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [15, 2.5, 1, 0, 3.5, 35/2, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.crossbow, { recoil: 0.5 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [15, 2.5, 1, 0, -3.5, -35/2, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.crossbow, { speed: 0.7, maxSpeed: 0.7 }, { recoil: 0.5 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20, 3.5, 1, 0, 4, 0, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.crossbow, { speed: 0.7, maxSpeed: 0.7 }, { recoil: 0.5 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20, 3.5, 1, 0, -4, 0, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.crossbow, { speed: 0.7, maxSpeed: 0.7 }, { recoil: 0.5 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [24, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.crossbow, { speed: 0.7, maxSpeed: 0.7 }, { recoil: 0.5 }]),
                TYPE: "bullet"
            }
        }
    ]
}

// Marksman upgrades
Class.deadeye = {
    PARENT: "genericTank",
    LABEL: "Deadeye",
    DANGER: 7,
    BODY: {
        SPEED: 0.85 * base.SPEED,
        FOV: 1.4 * base.FOV
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 5,
                WIDTH: 8,
                ASPECT: 1.3,
                X: 10
            }
        },
        {
            POSITION: {
                LENGTH: 5,
                WIDTH: 8,
                ASPECT: 1.3,
                X: 15
            }
        },
        {
            POSITION: {
                LENGTH: 23,
                WIDTH: 8,
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, { pen: 2 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [5, 8, -1.4, 8, 0, 0, 0]
        }
    ]
}
Class.nimrod = {
    PARENT: "genericTank",
    LABEL: "Nimrod",
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.25
    },
    CONTROLLERS: ["zoom"],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [
        {
            POSITION: {
                LENGTH: 5,
                WIDTH: 12,
                ASPECT: 1.25,
                X: 8
            }
        },
        {
            POSITION: {
                LENGTH: 5,
                WIDTH: 12,
                ASPECT: 1.25,
                X: 13
            }
        },
        {
            POSITION: {
                LENGTH: 24,
                WIDTH: 8
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunterSecondary, { pen: 2 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 21,
                WIDTH: 12,
                DELAY: 0.25
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, { pen: 2 }]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.revolver = {
    PARENT: "genericTank",
    LABEL: "Revolver",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.225
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 5,
                WIDTH: 12,
                ASPECT: 1.25,
                X: 8
            }
        },
        {
            POSITION: {
                LENGTH: 5,
                WIDTH: 12,
                ASPECT: 1.25,
                X: 13
            }
        },
        {
            POSITION: {
                LENGTH: 20,
                WIDTH: 12
            }
        },
        {
            POSITION: {
                LENGTH: 24,
                WIDTH: 7
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, { pen: 2 }]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.fork = {
    PARENT: "genericTank",
    LABEL: "Fork",
    DANGER: 7,
    BODY: {
        FOV: 1.2 * base.FOV
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 5,
                WIDTH: 8.5,
                ASPECT: 1.3,
                X: 8
            }
        },
        {
            POSITION: {
                LENGTH: 5,
                WIDTH: 8.5,
                ASPECT: 1.3,
                X: 13
            }
        },
        {
            POSITION: {
                LENGTH: 5,
                WIDTH: 8.5,
                ASPECT: 1.3,
                X: 18
            }
        },
        {
            POSITION: {
                LENGTH: 5,
                WIDTH: 8.5,
                ASPECT: 1.3,
                X: 23
            }
        },
        {
            POSITION: {
                LENGTH: 29,
                WIDTH: 8.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, { pen: 2, reload: 3.5 }]),
                TYPE: "forkSplitterBullet"
            }
        }
    ]
}
// Machine Gun upgrades
Class.minigun = {
    PARENT: "genericTank",
    LABEL: "Minigun",
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.2
    },
    GUNS: [
        {
            POSITION: [21, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [19, 8, 1, 0, 0, 0, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [17, 8, 1, 0, 0, 0, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.gunner = {
    PARENT: "genericTank",
    LABEL: "Gunner",
    DANGER: 6,
    GUNS: [
        {
            POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, { speed: 1.2 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, { speed: 1.2 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, { speed: 1.2 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, { speed: 1.2 }]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.sprayer = {
    PARENT: "genericTank",
    LABEL: "Sprayer",
    DANGER: 6,
    GUNS: [
        {
            POSITION: [23, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.lowPower, g.pelleter, { recoil: 1.15 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [12, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "bullet"
            }
        }
    ]
}

// Minigun upgrades
Class.streamliner = {
    PARENT: "genericTank",
    LABEL: "Streamliner",
    DANGER: 7,
    BODY: {
        FOV: 1.3,
    },
    GUNS: [
        {
            POSITION: [25, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [23, 8, 1, 0, 0, 0, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [21, 8, 1, 0, 0, 0, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 8, 1, 0, 0, 0, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [17, 8, 1, 0, 0, 0, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner]),
                TYPE: "bullet",
            },
        },
    ],
}
Class.barricade = {
    PARENT: "genericTank",
    DANGER: 7,
    LABEL: "Barricade",
    STAT_NAMES: statnames.trap,
    BODY: {
        FOV: 1.15,
    },
    GUNS: [
        {
            POSITION: [24, 8, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [4, 8, 1.3, 22, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.minigun, { range: 0.5 }]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap",
            },
        },
        {
            POSITION: [4, 8, 1.3, 18, 0, 0, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.minigun, { range: 0.5 }]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap",
            },
        },
        {
            POSITION: [4, 8, 1.3, 14, 0, 0, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.minigun, { range: 0.5 }]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap",
            },
        },
    ],
}

// Gunner upgrades
Class.nailgun = {
    PARENT: "genericTank",
    LABEL: "Nailgun",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.1,
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [
        {
            POSITION: [19, 2, 1, 0, -2.5, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 2, 1, 0, 2.5, 0, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 2, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5.5, 7, -1.8, 6.5, 0, 0, 0],
        },
    ],
}
Class.machineGunner = {
    PARENT: "genericTank",
    LABEL: "Machine Gunner",
    DANGER: 7,
    BODY: {
        SPEED: 0.9 * base.SPEED,
    },
    GUNS: [
        {
            POSITION: [14, 3, 4, -3, 5, 0, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.machineGunner]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 3, 4, -3, -5, 0, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.machineGunner]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 3, 4, 0, 2.5, 0, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.machineGunner]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 3, 4, 0, -2.5, 0, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.machineGunner]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 3, 4, 3, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.machineGunner]),
                TYPE: "bullet",
            },
        },
    ],
}

// Sprayer upgrades
Class.redistributor = {
    PARENT: "genericTank",
    LABEL: "Redistributor",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [26, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.lowPower, g.machineGun, { recoil: 1.15 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [23, 10, 1, 0, 0, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.lowPower, g.machineGun, { recoil: 1.15 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "bullet",
            },
        },
    ],
}
Class.atomizer = {
    PARENT: "genericTank",
    LABEL: "Atomizer",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [5, 7.5, 1.3, 18.5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.lowPower, g.machineGun, { recoil: 1.15 }, g.atomizer]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "bullet",
            },
        },
    ],
}
Class.focal = {
    PARENT: "genericTank",
    LABEL: "Focal",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [25, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.lowPower, g.machineGun, { recoil: 1.15 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 10, 1.3, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.focal]),
                TYPE: "bullet",
            },
        },
    ],
}

// Flank Guard upgrades
Class.hexaTank = {
    PARENT: "genericTank",
    LABEL: "Hexa Tank",
    DANGER: 6,
    GUNS: weaponArray({
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.flankGuard]),
            TYPE: "bullet"
        }
    }, 6, 0.5)
}
Class.triAngle = {
    PARENT: "genericTank",
    LABEL: "Tri-Angle",
    BODY: {
        HEALTH: 0.8 * base.HEALTH,
        SHIELD: 0.8 * base.SHIELD,
        DENSITY: 0.6 * base.DENSITY,
    },
    DANGER: 6,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.triAngleFront, { recoil: 4 }]),
                TYPE: "bullet",
                LABEL: "Front",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "thruster",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "thruster",
            },
        },
    ],
}
Class.auto3 = makeRadialAuto("autoTankGun", {isTurret: true, danger: 6, label: "Auto-3"})

// Hexa Tank upgrades
Class.octoTank = {
    PARENT: "genericTank",
    LABEL: "Octo Tank",
    DANGER: 7,
    GUNS: weaponArray([
        // Must be kept like this to preserve visual layering
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.flankGuard, g.spam]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [18, 8, 1, 0, 0, 45, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.flankGuard, g.spam]),
                TYPE: "bullet"
            }
        }
    ], 4)
}
Class.cyclone = {
    PARENT: "genericTank",
    LABEL: "Cyclone",
    DANGER: 7,
    GUNS: weaponArray([
        {
            POSITION: [15, 3.5, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.cyclone]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [15, 3.5, 1, 0, 0, 30, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.cyclone]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [15, 3.5, 1, 0, 0, 60, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.cyclone]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [15, 3.5, 1, 0, 0, 90, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.cyclone]),
                TYPE: "bullet"
            }
        }
    ], 3)
}

// Tri-Angle upgrades
Class.fighter = {
    PARENT: "genericTank",
    LABEL: "Fighter",
    BODY: {
        DENSITY: 0.6 * base.DENSITY,
    },
    DANGER: 7,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.triAngleFront, { recoil: 4 }]),
                TYPE: "bullet",
                LABEL: "Front",
            },
        },
        {
            POSITION: [16, 8, 1, 0, -1, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.triAngleFront]),
                TYPE: "bullet",
                LABEL: "Side",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 1, -90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.triAngleFront]),
                TYPE: "bullet",
                LABEL: "Side",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "thruster",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "thruster",
            },
        },
    ],
}
Class.booster = {
    PARENT: "genericTank",
    LABEL: "Booster",
    BODY: {
        HEALTH: base.HEALTH * 0.4,
        SHIELD: base.SHIELD * 0.4,
        DENSITY: base.DENSITY * 0.3
    },
    DANGER: 7,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.triAngleFront, { recoil: 4 }]),
                TYPE: "bullet",
                LABEL: "Front"
            }
        },
        {
            POSITION: [14, 8, 1, 0, -1, 140, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "thruster"
            }
        },
        {
            POSITION: [14, 8, 1, 0, 1, -140, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "thruster"
            }
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "thruster"
            }
        },
        {
            POSITION: [16, 8, 1, 0, 0, -150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "thruster"
            }
        }
    ]
}
Class.surfer = {
    PARENT: "genericTank",
    LABEL: "Surfer",
    BODY: {
        DENSITY: 0.6 * base.DENSITY,
    },
    DANGER: 7,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.triAngleFront]),
                TYPE: "bullet",
                LABEL: "Front",
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -1, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: "swarm",
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, 1, -90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: "swarm",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "thruster",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "thruster",
            },
        },
    ],
}

// Auto-3 upgrades
Class.auto5 = makeRadialAuto("autoTankGun", {isTurret: true, danger: 7, label: "Auto-5", count: 5})
Class.mega3 = makeRadialAuto("megaAutoTankGun", {isTurret: true, danger: 7, size: 14, label: "Mega-3", body: {SPEED: 0.95 * base.SPEED}})
Class.auto4 = makeRadialAuto("auto4gun", {isTurret: true, danger: 7, size: 13, x: 6, angle: 45, label: "Auto-4", count: 4})
Class.banshee = makeRadialAuto("bansheegun", {isTurret: true, danger: 7, size: 10, arc: 80, label: "Banshee", body: {SPEED: 0.8 * base.SPEED, FOV: 1.1 * base.FOV}})
Class.banshee.GUNS = weaponArray({
    POSITION: [6, 11, 1.2, 8, 0, 60, 0],
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.overseer]),
        TYPE: "drone",
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: "drone",
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 2,
    },
}, 3)

// Director upgrades
Class.underseer = {
    PARENT: "genericTank",
    LABEL: "Underseer",
    DANGER: 6,
    NECRO: true,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.1,
    },
    SHAPE: 4,
    MAX_CHILDREN: 14,
    GUNS: weaponArray({
        POSITION: [5.25, 12, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, {reload: 0.8}]),
            TYPE: "sunchip",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: "necro",
            WAIT_TO_CYCLE: true,
            DELAY_SPAWN: false,
        }
    }, 2)
}
Class.spawner = {
    PARENT: "genericTank",
    LABEL: "Spawner",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: 1.1,
    },
    GUNS: [
        {
            POSITION: [4.5, 10, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [1, 12, 1, 15, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 4,
                SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
                TYPE: "minion",
                STAT_CALCULATOR: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [11.5, 12, 1, 0, 0, 0, 0],
        },
    ],
}
Class.manager = {
    PARENT: "genericTank",
    LABEL: "Manager",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.85 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    INVISIBLE: [0.08, 0.03],
    TOOLTIP: "Stay still to turn invisible.",
    MAX_CHILDREN: 8,
    GUNS: [
        {
            POSITION: [6, 12, 1.2, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.overseer, { reload: 0.5 }]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "drone",
            },
        },
    ],
}
Class.bigCheese = {
    PARENT: "genericTank",
    LABEL: "Big Cheese",
    STAT_NAMES: statnames.drone,
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.1,
    },
    GUNS: [
        {
            POSITION: [16, 16, 1.4, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.bigCheese]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "drone",
                MAX_CHILDREN: 1,
            },
        },
    ],
}

// Overseer upgrades
Class.overlord = {
    PARENT: "genericTank",
    LABEL: "Overlord",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    MAX_CHILDREN: 8,
    GUNS: weaponArray({
        POSITION: [6, 12, 1.2, 8, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.overseer]),
            TYPE: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: "drone",
            WAIT_TO_CYCLE: true
        }
    }, 4)
}
Class.overdrive = {
    PARENT: "genericTank",
    LABEL: "Overdrive",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.9 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: "overdriveDeco",
        },
    ],
    GUNS: weaponArray({
        POSITION: [6, 12, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.overseer]),
            TYPE: "turretedDrone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: "drone",
            WAIT_TO_CYCLE: true,
            MAX_CHILDREN: 4
        }
    }, 2)
}
Class.commander = {
    PARENT: "genericTank",
    LABEL: "Commander",
    STAT_NAMES: statnames.drone,
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.15,
    },
    GUNS: [
        ...weaponArray({
            POSITION: [8, 11, 1.3, 6, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 2,
                STAT_CALCULATOR: "drone",
            },
        }, 3),
        ...weaponArray({
            POSITION: [7, 7.5, 0.6, 7, 0, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.commander]),
                TYPE: "swarm",
                STAT_CALCULATOR: "swarm",
            },
        }, 3, 1/3),
    ]
}

// Cruiser upgrades
Class.carrier = {
    PARENT: "genericTank",
    LABEL: "Carrier",
    DANGER: 7,
    STAT_NAMES: statnames.swarm,
    FACING_TYPE: "locksFacing",
    BODY: {
        FOV: base.FOV * 1.2,
    },
    GUNS: [
        {
            POSITION: [7, 8, 0.6, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battleship, g.carrier]),
                TYPE: "swarm",
                STAT_CALCULATOR: "swarm",
            },
        },
        {
            POSITION: [7, 8, 0.6, 7, 2, 30, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battleship, g.carrier]),
                TYPE: "swarm",
                STAT_CALCULATOR: "swarm",
            },
        },
        {
            POSITION: [7, 8, 0.6, 7, -2, -30, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battleship, g.carrier]),
                TYPE: "swarm",
                STAT_CALCULATOR: "swarm",
            },
        },
    ],
}
Class.battleship = {
    PARENT: "genericTank",
    LABEL: "Battleship",
    DANGER: 7,
    STAT_NAMES: statnames.swarm,
    FACING_TYPE: "locksFacing",
    BODY: {
        FOV: 1.2 * base.FOV
    },
    GUNS: [
        {
            POSITION: [7, 7.5, 0.6, 7, 4, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battleship]),
                TYPE: "swarm",
                STAT_CALCULATOR: "swarm",
                LABEL: "Guided"
            }
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -4, 90, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: "swarm",
                LABEL: "Autonomous"
            }
        },
        {
            POSITION: [7, 7.5, 0.6, 7, 4, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: "swarm",
                LABEL: "Autonomous"
            }
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -4, 270, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battleship]),
                TYPE: "swarm",
                STAT_CALCULATOR: "swarm",
                LABEL: "Guided"
            }
        }
    ]
}
Class.fortress = {
    PARENT: "genericTank",
    LABEL: "Fortress",
    DANGER: 7,
    STAT_NAMES: statnames.mixed,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.2 * base.FOV,
    },
    GUNS: [
        ...weaponArray(
        {
            POSITION: [7, 7.5, 0.6, 7, 0, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: "swarm",
            },
        }, 3, 1/3),
        ...weaponArray([
            {
                POSITION: [14, 9, 1, 0, 0, 0, 0],
            },
            {
                POSITION: [4, 9, 1.5, 14, 0, 0, 0],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, { range: 0.5, speed: 0.7, maxSpeed: 0.7 }]),
                    TYPE: "trap",
                    STAT_CALCULATOR: "trap",
                },
            }
        ], 3)
    ],
}

// Underseer upgrades
Class.necromancer = {
    PARENT: "genericTank",
    LABEL: "Necromancer",
    DANGER: 7,
    NECRO: true,
    STAT_NAMES: statnames.necro,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: base.FOV * 1.1,
    },
    SHAPE: 4,
    MAX_CHILDREN: 14,
    GUNS: weaponArray({
        POSITION: [5.25, 12, 1.2, 8, 0, 0, 0.25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: "sunchip",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: "necro",
            WAIT_TO_CYCLE: true,
            DELAY_SPAWN: false,
        },
    }, 4, 0.75),
}
Class.maleficitor = {
    PARENT: "genericTank",
    LABEL: "Maleficitor",
    DANGER: 7,
    NECRO: true,
    TOOLTIP: "Press R and wait to turn your drones invisible.",
    STAT_NAMES: statnames.necro,
    BODY: {
        SPEED: base.SPEED * 0.85,
        FOV: base.FOV * 1.1,
    },
    SHAPE: 4,
    MAX_CHILDREN: 20,
    GUNS: [
        {
            POSITION: [5.25, 12, 1.2, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.maleficitor]),
                TYPE: [
                    "sunchip",
                    {
                        INVISIBLE: [0.06, 0.03],
                    },
                ],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "necro",
                WAIT_TO_CYCLE: true,
                DELAY_SPAWN: false,
            },
        },
    ],
}
Class.infestor = {
    PARENT: "genericTank",
    LABEL: "Infestor",
    DANGER: 7,
    NECRO: true,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.1,
    },
    MAX_CHILDREN: 20,
    GUNS: weaponArray([
        {
            POSITION: [7.25, 6, 1.2, 6, -5, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, {reload: 0.5}]),
                TYPE: "eggchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "necro",
                WAIT_TO_CYCLE: true,
                DELAY_SPAWN: false,
            }
        },
        {
            POSITION: [7.25, 6, 1.2, 6, 5, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, {reload: 0.5}]),
                TYPE: "eggchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "necro",
                WAIT_TO_CYCLE: true,
                DELAY_SPAWN: false,
            }
        }
    ], 2)
}

// Spawner upgrades
Class.factory = {
    PARENT: "genericTank",
    LABEL: "Factory",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: 1.1,
    },
    GUNS: [
        {
            POSITION: [5, 11, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [2, 14, 1, 15.5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory]),
                TYPE: "minion",
                MAX_CHILDREN: 6,
                STAT_CALCULATOR: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [12, 14, 1, 0, 0, 0, 0],
        },
    ],
}

// Pounder upgrades
Class.destroyer = {
    PARENT: "genericTank",
    LABEL: "Destroyer",
    DANGER: 6,
    GUNS: [
        {
            POSITION: [21, 14, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer]),
                TYPE: "bullet",
            },
        },
    ],
}
Class.artillery = {
    PARENT: "genericTank",
    LABEL: "Artillery",
    DANGER: 6,
    GUNS: [
        {
            POSITION: [17, 3, 1, 0, -6, -7, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [17, 3, 1, 0, 6, 7, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [19, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery]),
                TYPE: "bullet",
                LABEL: "Heavy",
            },
        },
    ],
}
Class.launcher = {
    PARENT: "genericTank",
    LABEL: "Launcher",
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.1,
    },
    GUNS: [
        {
            POSITION: [10, 9, 1, 9, 0, 0, 0],
        },
        {
            POSITION: [17, 13, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.launcher]),
                TYPE: "minimissile",
                STAT_CALCULATOR: "sustained",
            },
        },
    ],
}
Class.shotgun = {
    PARENT: "genericTank",
    LABEL: "Shotgun",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [4, 3, 1, 11, -3, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [4, 3, 1, 11, 3, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [4, 4, 1, 13, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 4, 1, 12, -1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 4, 1, 11, 1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 3, 1, 13, -1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [1, 3, 1, 13, 1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [1, 2, 1, 13, 2, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 2, 1, 13, -2, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [15, 14, 1, 6, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun, g.fake]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [8, 14, -1.3, 4, 0, 0, 0],
        },
    ],
}

// Destroyer upgrades
Class.annihilator = {
    PARENT: "genericTank",
    LABEL: "Annihilator",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [20.5, 19.5, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.annihilator]),
                TYPE: "bullet",
            },
        },
    ],
}

// Artillery upgrades
Class.mortar = {
    PARENT: "genericTank",
    LABEL: "Mortar",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [13, 3, 1, 0, -8, -7, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [13, 3, 1, 0, 8, 7, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [17, 3, 1, 0, -6, -7, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [17, 3, 1, 0, 6, 7, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [19, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery]),
                TYPE: "bullet",
                LABEL: "Heavy",
            },
        },
    ],
}
Class.ordnance = {
    PARENT: "genericTank",
    LABEL: "Ordnance",
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.25,
    },
    CONTROLLERS: ["zoom"],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [
        {
            POSITION: [17, 3, 1, 0, -5.75, -6, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [17, 3, 1, 0, 5.75, 6, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [24, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunterSecondary]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [21, 11, 1, 0, 0, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
                TYPE: "bullet",
            },
        },
    ],
}
Class.beekeeper = {
    PARENT: "genericTank",
    LABEL: "Beekeeper",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [14, 3, 1, 0, -6, -7, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.bee]),
                TYPE: ["bee", { INDEPENDENT: true }],
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "drone",
                WAIT_TO_CYCLE: true,
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [14, 3, 1, 0, 6, 7, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.bee]),
                TYPE: ["bee", { INDEPENDENT: true }],
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "drone",
                WAIT_TO_CYCLE: true,
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [19, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery]),
                TYPE: "bullet",
                LABEL: "Heavy",
            },
        },
    ],
}
Class.fieldGun = {
    PARENT: "genericTank",
    LABEL: "Field Gun",
    BODY: {
        FOV: base.FOV * 1.1,
    },
    DANGER: 7,
    GUNS: [
        {
            POSITION: [15, 3, 1, 0, -6, -7, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [15, 3, 1, 0, 6, 7, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [10, 9, 1, 9, 0, 0, 0],
        },
        {
            POSITION: [17, 13, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery, g.artillery]),
                TYPE: "minimissile",
                STAT_CALCULATOR: "sustained",
            },
        },
    ],
}

// Launcher upgrades
Class.skimmer = {
    PARENT: "genericTank",
    LABEL: "Skimmer",
    DANGER: 7,
    BODY: {
        FOV: 1.15 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [10, 14, -0.5, 9, 0, 0, 0],
        },
        {
            POSITION: [17, 15, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery, g.artillery, g.skimmer]),
                TYPE: "missile",
                STAT_CALCULATOR: "sustained",
            },
        },
    ],
}
Class.twister = {
    PARENT: "genericTank",
    LABEL: "Twister",
    TOOLTIP: "Hold right click to reverse missile rotation.",
    DANGER: 7,
    BODY: {
        FOV: 1.1 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [10, 13, -0.5, 9, 0, 0, 0],
        },
        {
            POSITION: [17, 14, -1.4, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery, g.artillery, g.skimmer, { reload: 4/3 }]),
                TYPE: "spinmissile",
                STAT_CALCULATOR: "sustained",
            },
        },
    ],
}
Class.swarmer = {
    PARENT: "genericTank",
    DANGER: 7,
    LABEL: "Swarmer",
    GUNS: [
        {
            POSITION: [15, 14, -1.2, 5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.hive]),
                TYPE: "hive",
            },
        },
        {
            POSITION: [15, 12, 1, 5, 0, 0, 0],
        },
    ],
}
Class.rocketeer = {
    PARENT: "genericTank",
    LABEL: "Rocketeer",
    BODY: {
        FOV: 1.15 * base.FOV,
    },
    DANGER: 7,
    GUNS: [
        {
            POSITION: [10, 12.5, -0.7, 10, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.launcher, g.rocketeer]),
                TYPE: "rocketeerMissile",
                STAT_CALCULATOR: "sustained",
            },
        },
        {
            POSITION: [17, 18, 0.65, 0, 0, 0, 0],
        },
    ],
}

// Trapper upgrades
Class.builder = {
    PARENT: "genericTank",
    LABEL: "Builder",
    DANGER: 6,
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.15 * base.FOV
    },
    GUNS: [
        {
            POSITION: [18, 12, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [2, 12, 1.1, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.setTrap]),
                TYPE: "setTrap",
                STAT_CALCULATOR: "block"
            }
        }
    ]
}
Class.triTrapper = {
    PARENT: "genericTank",
    LABEL: "Tri-Trapper",
    DANGER: 6,
    STAT_NAMES: statnames.trap,
    GUNS: weaponArray([
        {
            POSITION: [15, 7, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.flankGuard]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap"
            }
        }
    ], 3)
}
Class.trapGuard = makeGuard({
    PARENT: "genericTank",
    LABEL: "Trap",
    STAT_NAMES: statnames.mixed,
    GUNS: [
        {
            POSITION: [20, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.flankGuard]),
                TYPE: "bullet"
            }
        }
    ]
})

// Builder upgrades
Class.construct = { // it's "construct" and not "constructor" because "constructor" breaks things
    PARENT: "genericTank",
    LABEL: "Constructor",
    STAT_NAMES: statnames.trap,
    DANGER: 7,
    BODY: {
        SPEED: 0.7 * base.SPEED,
        FOV: 1.15 * base.FOV
    },
    GUNS: [
        {
            POSITION: [18, 18, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [2, 18, 1.2, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.construct]),
                TYPE: "setTrap",
                STAT_CALCULATOR: "block"
            }
        }
    ]
}
Class.engineer = {
    PARENT: "genericTank",
    DANGER: 7,
    LABEL: "Engineer",
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: 0.75 * base.SPEED,
        FOV: 1.15 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [5, 11, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [3, 14, 1, 15.5, 0, 0, 0],
        },
        {
            POSITION: [2, 14, 1.3, 18, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 6,
                SHOOT_SETTINGS: combineStats([g.trap, g.setTrap]),
                TYPE: "pillbox",
                SYNCS_SKILLS: true,
                DESTROY_OLDEST_CHILD: true,
                STAT_CALCULATOR: "block"
            },
        },
        {
            POSITION: [4, 14, 1, 8, 0, 0, 0],
        },
    ],
}
Class.boomer = {
    PARENT: "genericTank",
    DANGER: 7,
    LABEL: "Boomer",
    STAT_NAMES: statnames.trap,
    FACING_TYPE: "locksFacing",
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.15,
    },
    GUNS: [
        {
            POSITION: [5, 10, 1, 13, 0, 0, 0],
        },
        {
            POSITION: [6, 10, -1.5, 7, 0, 0, 0],
        },
        {
            POSITION: [2, 10, 1.3, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.boomerang]),
                TYPE: "boomerang",
                STAT_CALCULATOR: "block"
            },
        },
    ],
}
Class.assembler = {
    PARENT: "genericTank",
    DANGER: 7,
    LABEL: 'Assembler',
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.15 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [18, 12, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [2, 12, 1.1, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.setTrap]),
                TYPE: 'assemblerTrap',
                MAX_CHILDREN: 8,
                STAT_CALCULATOR: "block",
            }
        }
    ],
    TURRETS: [
        {
            POSITION: [2.5, 14, 0, 0,    360, 1],
            TYPE: 'assemblerDot'
        }
    ]
}

// Tri-Trapper upgrades
Class.hexaTrapper = makeAuto({
    PARENT: "genericTank",
    DANGER: 7,
    BODY: {
        SPEED: 0.8 * base.SPEED,
    },
    STAT_NAMES: statnames.trap,
    HAS_NO_RECOIL: true,
    GUNS: weaponArray([
        {
            POSITION: [15, 7, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexaTrapper]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap",
            },
        },
    ], 6, 0.5),
}, "Hexa-Trapper")
Class.septaTrapper = {
    PARENT: "genericTank",
    LABEL: "Septa-Trapper",
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.8,
    },
    STAT_NAMES: statnames.trap,
    HAS_NO_RECOIL: true,
    GUNS: weaponArray([
        {
            POSITION: [15, 7, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexaTrapper]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap",
            },
        },
    ], 7, 4/7),
}
Class.architect = makeRadialAuto("architectGun", {isTurret: true, danger: 7, size: 12, label: "Architect", body: {SPEED: 1.1 * base.SPEED}})

// Trap Guard upgrades
Class.bushwhacker = makeGuard("sniper", "Bushwhacker")
Class.gunnerTrapper = {
    PARENT: "genericTank",
    LABEL: "Gunner Trapper",
    DANGER: 7,
    STAT_NAMES: statnames.mixed,
    BODY: {
        FOV: 1.25 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [19, 2, 1, 0, -2.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, { recoil: 4 }, { recoil: 1.8 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, { recoil: 4 }, { recoil: 1.8 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12, 11, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [13, 11, 1, 0, 0, 180, 0],
        },
        {
            POSITION: [4, 11, 1.7, 13, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, { speed: 1.2 }, { recoil: 0.5 }]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap",
            },
        },
    ],
}
Class.bomberarras = {
    PARENT: "genericTank",
    LABEL: "Bomber",
    BODY: {
        DENSITY: base.DENSITY * 0.6,
    },
    DANGER: 7,
    GUNS: [
        {
            POSITION: [20, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.triAngleFront]),
                TYPE: "bullet",
                LABEL: "Front",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 130, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle]),
                TYPE: "bullet",
                LABEL: "Wing",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 230, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle]),
                TYPE: "bullet",
                LABEL: "Wing",
            },
        },
        {
            POSITION: [13, 8, 1, 0, 0, 180, 0],
        },
        {
            POSITION: [4, 8, 1.7, 13, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap",
            },
        },
    ],
}
Class.conqueror = {
    PARENT: "genericTank",
    DANGER: 7,
    LABEL: "Conqueror",
    STAT_NAMES: statnames.mixed,
    BODY: {
        SPEED: 0.8 * base.SPEED,
    },
    REVERSE_TARGET_WITH_TANK: true,
    GUNS: [
        {
            POSITION: [21, 14, 1, 0, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 12, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [2, 12, 1.1, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.setTrap]),
                TYPE: "setTrap",
                STAT_CALCULATOR: "block"
            },
        },
    ],
}
Class.bulwark = {
    PARENT: "genericTank",
    LABEL: "Bulwark",
    STAT_NAMES: statnames.mixed,
    DANGER: 7,
    GUNS: [
        {
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.flankGuard, g.twin]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.flankGuard, g.twin]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 8, 1, 0, 5.5, 185, 0],
        },
        {
            POSITION: [3, 9, 1.5, 14, 5.5, 185, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.twin]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap",
            },
        },
        {
            POSITION: [14, 8, 1, 0, -5.5, 175, 0],
        },
        {
            POSITION: [3, 9, 1.5, 14, -5.5, 175, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.twin]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap",
            },
        },
    ],
}

// Desmos upgrades
Class.helix = {
    PARENT: "genericTank",
    LABEL: "Helix",
    DANGER: 6,
    STAT_NAMES: statnames.desmos,
    GUNS: [
        {
            POSITION: [20, 6, -4/3, 0, -5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.desmos]),
                TYPE: ["bullet", {CONTROLLERS: ['snake']}]
            },
        },
        {
            POSITION: [20, 6, -4/3, 0, 5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.desmos]),
                TYPE: ["bullet", {CONTROLLERS: [['snake', {invert: true}]]}]
            },
        },
        {
            POSITION: [3.625, 7.5, 2.75, 5.75, -6.75, 90, 0],
        },
        {
            POSITION: [3.625, 7.5, 2.75, 5.75, 6.75, -90, 0],
        },
        {
            POSITION: [6, 8, 0.25, 10.5, 0, 0, 0],
        },
    ],
}
Class.spiral = {
    PARENT: "genericTank",
    LABEL: "Spiral",
    DANGER: 6,
    STAT_NAMES: statnames.desmos,
    UPGRADE_TOOLTIP: "[DEV NOTE] This tank does not function as intended yet!",
    GUNS: [
        {
            POSITION: [10, 8.5, 1.4, 7, 0, 0, 0]
        },
        {
            POSITION: [20, 8, -4/3, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos]),
                TYPE: ["bullet", {CONTROLLERS: ['snake']}]
            }
        },
        {
            POSITION: [4.25, 11, 2, 2.25, -4.25, 92.5, 0]
        },
        {
            POSITION: [4.25, 11, 2, 2.25, 4.25, -92.5, 0]
        }
    ]
}
Class.undertowEffect = {
            PARENT: 'genericTank',
            TYPE: 'undertowEffect',
            SIZE: 5,
            COLOR: 1,
            HITS_OWN_TYPE: "never",
            GIVE_KILL_MESSAGE: false,
            ACCEPTS_SCORE: false,
            DRAW_HEALTH: false,
            DIE_AT_RANGE: true,
            BODY: {
                HEALTH: 9e99,
                DAMAGE: 0,
                RANGE: 5,
                PUSHABILITY: 0,
            }
         };
        Class.undertowBullet = {
            PARENT: 'bullet',
            ON: [
            {
             event: "tick",
             handler: ({ body }) => {
               for (let instance of entities) {
                     let diffX = instance.x - body.x,
                         diffY = instance.y - body.y,
                         dist2 = diffX ** 2 + diffY ** 2;
                     if (dist2 <= ((body.size / 12)*250) ** 1.9) {
                     if ((instance.team != body.team || (instance.type == "undertowEffect" && instance.master.id == body.master.id)) && instance.type != "wall" && instance.isTurret != true) {
                     if (instance.type == "undertowEffect") {
                        forceMulti = 1
                     }
                     else if (instance.type == "food") {
                        forceMulti = (6 / instance.size)
                     }      
                     else {
                        forceMulti = (2 / instance.size)
                     }           
                        instance.velocity.x += util.clamp(body.x - instance.x, -90, 90) * instance.damp * forceMulti;//0.05
                        instance.velocity.y += util.clamp(body.y - instance.y, -90, 90) * instance.damp * forceMulti;//0.05
                        if (instance.type != "undertowEffect" && instance.type != "bullet" && instance.type != "swarm" && instance.type != "drone" && instance.type != "trap" && instance.type != "dominator") {
                                let o = new Entity({x: instance.x, y: instance.y})
                                o.define('undertowEffect')
                                o.team = body.team;
                                o.color = instance.color;
                                o.alpha = 0.3;
                                o.master = body.master;
                        }
                 }
             }
                  if (dist2 < body.size ** 3 + instance.size ** 3) {
                     if (instance.master.id == body.master.id) {
                         if (instance.type == "undertowEffect")
                         {
                            instance.kill();
                         }
                        }
                    }
                }
            }
        }
          ],
        }
         Class.undertow = {
            PARENT: "genericTank",
            LABEL: "Undertow",
            DANGER: 6,
            GUNS: [
                {
                    POSITION: [14, 12, 0.8, 0, 0, 0, 0],
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, { size: 0.8, reload: 1.2 }]),
                        TYPE: 'undertowBullet'
                    }
                },
                {
                    POSITION: [11.25, 8, 0.15, 4.25, 4, 13.5, 0]
                },
                {
                    POSITION: [11.25, 8, 0.15, 4.25, -4, -13.5, 0]
                }
            ]
        }
Class.repeater = {
    PARENT: "genericTank",
    LABEL: "Repeater",
    GUNS: [
        {
            POSITION: [20, 10, 0.8, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos]),
                TYPE: ["splitterBullet", {CONTROLLERS: ['snake']}]
            }
        },
        {
            POSITION: [4.625, 9.5, 2, 0.375, -8, 91.5, 0]
        },
        {
            POSITION: [4.625, 9.5, 2, 0.375, 8, -91.5, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 0, -4.75, 50, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 0, 4.75, -50, 0]
        }
    ]
}

// Helix upgrades
Class.triplex = {
    PARENT: "genericTank",
    LABEL: "Triplex",
    DANGER: 7,
    STAT_NAMES: statnames.desmos,
    GUNS: [
        {
            POSITION: [18, 7, -4/3, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot, {speed: 1.25, maxSpeed: 1.25}]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 7, -4/3, 0, 0, 45, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot, g.desmos]),
                TYPE: ["bullet", {CONTROLLERS: ['snake']}]
            },
        },
        {
            POSITION: [18, 7, -4/3, 0, 0, -45, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot, g.desmos]),
                TYPE: ["bullet", {CONTROLLERS: [['snake', {invert: true}]]}]
            },
        },
        {
            POSITION: [3.75, 10, 2.125, 1, -4.25, 10, 0],
        },
        {
            POSITION: [3.75, 10, 2.125, 1, 4.25, -10, 0],
        },
        {
            POSITION: [5, 6, 0.5, 10.5, 0, 22.5, 0],
        },
        {
            POSITION: [5, 6, 0.5, 10.5, 0, -22.5, 0],
        },
    ],
}
Class.quadruplex = {
    PARENT: "genericTank",
    LABEL: "Quadruplex",
    DANGER: 7,
    STAT_NAMES: statnames.desmos,
    GUNS: [
        {
            POSITION: [20, 8, -4/3, 0, 0, 45, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos, g.twin, { reload: 2 }]),
                TYPE: ["bullet", {CONTROLLERS: [['snake', {invert: true, amplitude: 180, yOffset: 50}]]}]
            }
        },
        {
            POSITION: [3.75, 10, 2.125, 1.5, -6.25, 135, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 1.5, 6.25, -45, 0]
        },
        {
            POSITION: [20, 8, -4/3, 0, 0, -45, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos, g.twin, { reload: 2 }]),
                TYPE: ["bullet", {CONTROLLERS: [['snake', {invert: false, amplitude: 180, yOffset: -50}]]}]
            }
        },
        {
            POSITION: [3.75, 10, 2.125, 1.5, -6.25, 45, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 1.5, 6.25, -135, 0]
        },
        {
            POSITION: [20, 8, -4/3, 0, 0, 135, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos, g.twin, { reload: 2 }]),
                TYPE: ["bullet", {CONTROLLERS: [['snake', {invert: false, amplitude: 180, yOffset: 50}]]}]
            }
        },
        {
            POSITION: [3.75, 10, 2.125, 1.5, -6.25, -135, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 1.5, 6.25, 45, 0]
        },
        {
            POSITION: [20, 8, -4/3, 0, 0, -135, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos, g.twin, { reload: 2 }]),
                TYPE: ["bullet", {CONTROLLERS: [['snake', {invert: true, amplitude: 180, yOffset: -50}]]}]
            }
        },
        {
            POSITION: [3.75, 10, 2.125, 1.5, -6.25, -45, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 1.5, 6.25, 135, 0]
        },
    ],
}

// Sidewinder upgrades
Class.coil = {
    PARENT: "genericTank",
    LABEL: "Coil",
    DANGER: 7,
    STAT_NAMES: statnames.desmos,
    UPGRADE_TOOLTIP: "[DEV NOTE] This tank does not function as intended yet!",
    GUNS: [
        {
            POSITION: [20, 8, 0.75, 0, -5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.desmos]),
                TYPE: ["bullet", {CONTROLLERS: [["snake", {invert: false}]]}]
            },
        },
        {
            POSITION: [20, 8, 0.75, 0, 5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.desmos]),
                TYPE: ["bullet", {CONTROLLERS: [["snake", {invert: true}]]}]
            },
        },
        {
            POSITION: [21, 4, 0.75, 0, -5, 0, 0]
        },
        {
            POSITION: [21, 4, 0.75, 0, 5, 0, 0]
        },
        {
            POSITION: [3.625, 7.5, 2.75, 5.75, -6.75, 90, 0],
        },
        {
            POSITION: [3.625, 7.5, 2.75, 5.75, 6.75, -90, 0],
        },
        {
            POSITION: [6, 8, 0.25, 10.5, 0, 0, 0],
        }
    ]
}
Class.python = {
    PARENT: "genericTank",
    LABEL: "Python",
    DANGER: 7,
    STAT_NAMES: statnames.desmos,
    UPGRADE_TOOLTIP: "[DEV NOTE] This tank is a placeholder!"
}
Class.ranch = {
    PARENT: "genericTank",
    LABEL: "Ranch",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    UPGRADE_TOOLTIP: "[DEV NOTE] This tank does not function as intended yet!",
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: 1.1,
    },
    GUNS: [
        {
            POSITION: [4.5, 10, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [1, 12, 1, 15, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 3,
                SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
                TYPE: "minion",
                STAT_CALCULATOR: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [11.5, 12, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [5, 7.5, 2.5, 1, -4.5, 95, 0],
        },
        {
            POSITION: [5, 7.5, 2.5, 1, 4.5, -95, 0],
        },
    ],
}
Class.oroboros = {
    PARENT: "genericTank",
    LABEL: "Oroboros",
    DANGER: 7,
    STAT_NAMES: statnames.desmos,
    UPGRADE_TOOLTIP: "[DEV NOTE] This tank is a placeholder!"
}
Class.cocciPart1 = {
    PARENT: "genericSmasher",
    LABEL: "",
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody"
        },
        {
            POSITION: [20, -22, 0, 0, 90/4, 0],
            TYPE: "smasher",
            VULNERABLE: true
        },
    ]
}
Class.cocciPart2 = {
    PARENT: "genericSmasher",
    LABEL: "",
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody"
        },
        {
            POSITION: [20, -22, 0, 0, 90/3, 0],
            TYPE: "cocciPart1",
            VULNERABLE: true
        },
    ]
}
Class.cocciPart3 = {
    PARENT: "genericSmasher",
    LABEL: "",
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody"
        },
        {
            POSITION: [20, -22, 0, 0, 90/2, 0],
            TYPE: "cocciPart2",
            VULNERABLE: true
        },
    ]
}
Class.cocci = {
    PARENT: "genericSmasher",
    LABEL: "Cocci",
    UPGRADE_TOOLTIP: "[DEV NOTE] this is a very early prototype and probably won't work so well lol",
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody"
        },
        {
            POSITION: [20, -22, 0, 0, 90, 0],
            TYPE: "cocciPart3",
            VULNERABLE: true
        }
    ]
}

// Undertow upgrades
Class.riptide = {
    PARENT: "genericTank",
    LABEL: "Riptide",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [6.5, 23.5, 0.25, 3, 0, 180, 0],
        },
        {
            POSITION: [18, 16, 0.75, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, { size: 0.9, reload: 1.2 }]),
                TYPE: "undertowBullet"
            }
        },
        {
            POSITION: [17, 16, 0.1, 0.25, 4, 13.5, 0]
        },
        {
            POSITION: [17, 16, 0.1, 0.25, -4, -13.5, 0]
        }
    ]
}

// Repeater upgrades
Class.iterator = {
    PARENT: "genericTank",
    LABEL: "Iterator",
    DANGER: 7,
    STAT_NAMES: statnames.desmos,
    GUNS: [
        {
            POSITION: [22, 8, -4/3, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos]),
                TYPE: ["superSplitterBullet", {CONTROLLERS: ['snake']}]
            }
        },
        {
            POSITION: [4.625, 10.5, 2.75, 0.375, -7, 91.5, 0]
        },
        {
            POSITION: [4.625, 10.5, 2.75, 0.375, 7, -91.5, 0]
        },
        {
            POSITION: [4, 9, 3, 1.5, -5, 95, 0]
        },
        {
            POSITION: [4, 9, 3, 1.5, 5, -95, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, -1.5, -5.25, 50, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, -1.5, 5.25, -50, 0]
        }
    ]
}
Class.duplicator = {
    PARENT: "genericTank",
    LABEL: "Duplicator",
    DANGER: 7,
    STAT_NAMES: statnames.desmos,
    GUNS: [
        {
            POSITION: [20, 8, -4/3, 0, 0, 20, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.desmos]),
                TYPE: ["splitterBullet", {CONTROLLERS: [["snake", {invert: false}]]}]
            }
        },
        {
            POSITION: [20, 8, -4/3, 0, 0, -20, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.desmos]),
                TYPE: ["splitterBullet", {CONTROLLERS: [["snake", {invert: true}]]}]
            }
        },
        {
            POSITION: [5.625, 9.5, 2, 0.375-1, -8, 111.5, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 0, 4.75, -30, 0]
        },
        {
            POSITION: [5.625, 9.5, 2, 0.375-1, 8, -111.5, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 0, -4.75, 30, 0]
        },
        {
            POSITION: [17, 8, 0.65, 0, 0, 0, 0]
        },
        {
            POSITION: [18, 8, 0.25, 0, 0, 0, 0]
        },
    ]
}

// Smasher upgrades
Class.megaSmasher = {
    PARENT: "genericSmasher",
    LABEL: "Mega-Smasher",
    BODY: {
        SPEED: 1.05 * base.SPEED,
        FOV: 1.1 * base.FOV,
        DENSITY: 4 * base.DENSITY,
    },
    TURRETS: [
        {
            POSITION: [25, 0, 0, 0, 360, 0],
            TYPE: "smasherBody",
        },
    ],
}
Class.spike = {
    PARENT: "genericSmasher",
    LABEL: "Spike",
    BODY: {
        SPEED: base.SPEED * 0.9,
        DAMAGE: base.DAMAGE * 1.1,
    },
    TURRETS: [
        {
            POSITION: [18.5, 0, 0, 0, 360, 0],
            TYPE: "spikeBody",
        },
        {
            POSITION: [18.5, 0, 0, 90, 360, 0],
            TYPE: "spikeBody",
        },
        {
            POSITION: [18.5, 0, 0, 180, 360, 0],
            TYPE: "spikeBody",
        },
        {
            POSITION: [18.5, 0, 0, 270, 360, 0],
            TYPE: "spikeBody",
        },
    ],
}
Class.landmine = {
    PARENT: "genericSmasher",
    LABEL: "Landmine",
    INVISIBLE: [0.06, 0.01],
    TOOLTIP: "Stay still to turn invisible.",
    BODY: {
        SPEED: 1.1 * base.SPEED
    },
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody"
        },
        {
            POSITION: [21.5, 0, 0, 30, 360, 0],
            TYPE: "landmineBody"
        }
    ]
}

// Healer upgrades
Class.medic = {
    PARENT: "genericTank",
    LABEL: "Medic",
    BODY: {
        FOV: base.FOV * 1.2,
    },
    TURRETS: [
        {
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: "healerSymbol",
        },
    ],
    GUNS: [
        {
            POSITION: [8, 9, -0.5, 16.5, 0, 0, 0],
        },
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.healer, g.sniper]),
                TYPE: "healerBullet",
            },
        },
    ],
    STAT_NAMES: statnames.heal,
}
Class.ambulance = {
    PARENT: "genericTank",
    LABEL: "Ambulance",
    BODY: {
        HEALTH: base.HEALTH * 0.8,
        SHIELD: base.SHIELD * 0.8,
        DENSITY: base.DENSITY * 0.6,
    },
    TURRETS: [
        {
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: "healerSymbol",
        },
    ],
    GUNS: [
        {
            POSITION: [8, 9, -0.5, 12.5, 0, 0, 0],
        },
        {
            POSITION: [18, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.triAngleFront, { recoil: 4 }, g.healer]),
                TYPE: "healerBullet",
                LABEL: "Front",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "thruster",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "thruster",
            },
        },
    ],
    STAT_NAMES: statnames.heal,
}
Class.surgeon = {
    PARENT: "genericTank",
    LABEL: "Surgeon",
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: base.SPEED * 0.75,
        FOV: base.FOV * 1.15,
    },
    TURRETS: [
        {
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: "healerSymbol",
        },
    ],
    GUNS: [
        {
            POSITION: [5, 11, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [3, 14, 1, 15.5, 0, 0, 0],
        },
        {
            POSITION: [2, 14, 1.3, 18, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 2,
                SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, { speed: 0.7, maxSpeed: 0.7 }]),
                TYPE: "surgeonPillbox",
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "block"
            },
        },
        {
            POSITION: [4, 14, 1, 8, 0, 0, 0],
        },
    ],
    STAT_NAMES: statnames.heal,
}
Class.paramedic = {
    PARENT: "genericTank",
    LABEL: "Paramedic",
    BODY: {
        SPEED: base.SPEED * 0.9,
    },
    TURRETS: [
        {
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: "healerSymbol",
        },
    ],
    GUNS: [
        {
            POSITION: [8, 9, -0.5, 10, 0, -17.5, 0.5],
        },
        {
            POSITION: [15.5, 10, 1, 0, 0, -17.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot, g.healer]),
                TYPE: "healerBullet",
            },
        },
        {
            POSITION: [8, 9, -0.5, 10, 0, 17.5, 0.5],
        },
        {
            POSITION: [15.5, 10, 1, 0, 0, 17.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot, g.healer]),
                TYPE: "healerBullet",
            },
        },
        {
            POSITION: [8, 9, -0.5, 12.5, 0, 0, 0],
        },
        {
            POSITION: [18, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot, g.healer]),
                TYPE: "healerBullet",
            },
        },
    ],
    STAT_NAMES: statnames.heal,
}

// Bird tanks
Class.falcon = makeBird("assassin", "Falcon")
Class.vulture = makeBird({
    PARENT: "genericTank",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.2,
    },
    GUNS: [
        {
            POSITION: [22, 7, -1.5, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20, 7.5, -1.5, 0, 0, 0, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, {size: 7/7.5}]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [18, 8, -1.5, 0, 0, 0, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, {size: 7/8}]),
                TYPE: "bullet"
            }
        }
    ]
}, "Vulture")

// Over tanks
Class.overgunner = makeOver({
    PARENT: "genericTank",
    LABEL: "Gunner",
    DANGER: 6,
    GUNS: [
        {
            POSITION: [19, 2, 1, 0, -2.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, { speed: 0.7, maxSpeed: 0.7 }, g.flankGuard, { recoil: 1.8 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, { speed: 0.7, maxSpeed: 0.7 }, g.flankGuard, { recoil: 1.8 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12, 11, 1, 0, 0, 0, 0],
        },
    ],
})
Class.overtrapper = makeOver({
    PARENT: "genericTank",
    LABEL: "Trapper",
    DANGER: 6,
    STAT_NAMES: statnames.mixed,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.2
    },
    GUNS: [
        {
            POSITION: [14, 8, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [4, 8, 1.5, 14, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap"
            }
        }
    ]
})

// Auto tanks
Class.autoDouble = makeAuto("doubleTwin", "Auto-Double")
Class.autoAssassin = makeAuto("assassin")
Class.autoGunner = makeAuto("gunner")
Class.autoTriAngle = makeAuto("triAngle")
Class.autoOverseer = makeAuto("overseer")
Class.autoSpawner = makeAuto("spawner")
Class.autoBuilder = makeAuto("builder")
Class.autoSmasher = makeAuto({
    PARENT: "genericSmasher",
    DANGER: 6,
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody"
        }
    ],
    SKILL_CAP: [smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl]
}, "Auto-Smasher", {type: "autoSmasherTurret", size: 11})

// Upgrade Paths
Class.basic.UPGRADES_TIER_0 = [["basic2", "basebody"]]
    // Barrel Upgrades
    Class.basic2.UPGRADES_TIER_1 = ["duotwin", "sniper", "spreaderGun", "flanker", "drummer", "trapper", "sinus", "general1", "disrupter", "heater"]
        Class.duotwin.UPGRADES_TIER_2 = ["mirrorDuo", "trio", "spread", "denel", "quad0", "tween", "dropper", "aviator"]
            Class.mirrorDuo.UPGRADES_TIER_3 = ["reflectionDuo", "hedronDuo", "mirrorTrio", "mirrorDenel", "mirrorSpread", "mirrorTween"]
            Class.trio.UPGRADES_TIER_3 = ["quartet", "mirrorTrio", "trix", "unleasher", "barett", "treen"]
            Class.spread.UPGRADES_TIER_3 = ["circlist", "mirrorSpread"]
            Class.denel.UPGRADES_TIER_3 = ["express", "barett", "mirrorDenel"]
            Class.quad0.UPGRADES_TIER_3 = ["septa", "hexion", "radioStation"]
            Class.tween.UPGRADES_TIER_3 = ["keyframe", "mirrorTween", "treen"]
        Class.sniper.UPGRADES_TIER_2 = ["denel", "ranger1", "redeemer", "refocuser", "vassalizer", "thrower"]
            Class.ranger1.UPGRADES_TIER_3 = ["marksguy", "express", "piper"]
            Class.redeemer.UPGRADES_TIER_3 = ["calliope", "piper", "auditor"]
            Class.refocuser.UPGRADES_TIER_3 = ["scar1", "retasker"]
            Class.vassalizer.UPGRADES_TIER_3 = ["auditor", "sharpshooter", "sinker"]
            Class.thrower.UPGRADES_TIER_3 = ["sawer", "hearer"]
        Class.spreaderGun.UPGRADES_TIER_2 = ["refocuser", "spray", "radiowave", "horizon", "tween"]
            Class.spray.UPGRADES_TIER_3 = ["mill", "field", "aggregator", "grater"]
            Class.radiowave.UPGRADES_TIER_3 = ["radioStation", "infrared", "pulsator"]
            Class.horizon.UPGRADES_TIER_3 = ["setter", "pulsator", "grater"]
        Class.flanker.UPGRADES_TIER_2 = ["redeemer", "driver", "supriser", "trion", "quad0"]
            Class.driver.UPGRADES_TIER_3 = ["racecar", "bender", "jumper"]
            Class.supriser.UPGRADES_TIER_3 = ["residue", "trailer"]
        Class.drummer.UPGRADES_TIER_2 = ["heavy", "megion", "fractorial", "bomber"]
            Class.heavy.UPGRADES_TIER_3 = ["hefty", "liberator", "detonator"]
            Class.megion.UPGRADES_TIER_3 = ["ultrion", "trailer", "stickyBomber", "piller", "boomer1"]
            Class.fractorial.UPGRADES_TIER_3 = ["integral"]
        Class.trapper.UPGRADES_TIER_2 = ["thrower", "trion", "megion", "supriser"]
            Class.trion.UPGRADES_TIER_3 = ["hexion", "residue"]
        Class.sinus.UPGRADES_TIER_2 = ["sincos", "fractorial"]
            Class.sincos.UPGRADES_TIER_3 = ["tangent"]
        Class.general1.UPGRADES_TIER_2 = ["vassalizer", "overseer", "sailor", "producer"]
            Class.overseer.UPGRADES_TIER_3 = ["overlord"]
            Class.sailor.UPGRADES_TIER_3 = ["battlecruiser"]
            Class.producer.UPGRADES_TIER_3 = ["industry1"]
        Class.disrupter.UPGRADES_TIER_2 = ["bomber", "dropper", "aviator"]
            Class.bomber.UPGRADES_TIER_2 = ["detonator", "nukist", "stickyBomber"]
            Class.dropper.UPGRADES_TIER_3 = ["unleasher", "nukist"]
            Class.aviator.UPGRADES_TIER_3 = ["unleasher", "blaser", "jumper"]
        Class.heater.UPGRADES_TIER_2 = ["superheater", "heatwave", "piercer", "boxer"]
            Class.superheater.UPGRADES_TIER_3 = ["ultraheater", "champion"]
            Class.heatwave.UPGRADES_TIER_3 = ["heatBurst", "fireTornado"]
            Class.piercer.UPGRADES_TIER_3 = ["spearhead"]
            Class.boxer.UPGRADES_TIER_3 = ["champion"]
    // Body upgrades
    Class.basebody.UPGRADES_TIER_1 = ["runner", "waller", "turreter", "hitter", "shielder", "regenerator"]
        Class.runner.UPGRADES_TIER_2 = ["sprinter"]
            Class.sprinter.UPGRADES_TIER_3 = ["booster1", "rammer"]
        Class.waller.UPGRADES_TIER_2 = ["fortresser"]
            Class.fortresser.UPGRADES_TIER_3 = ["castle", "cannon1", "citadel1", "weigher"]
        Class.turreter.UPGRADES_TIER_2 = ["gunnerdyna", "swordsman"]
            Class.gunnerdyna.UPGRADES_TIER_3 = ["refrainer", "cannon1", "citadel1"]
            Class.swordsman.UPGRADES_TIER_3 = ["piker"]
        Class.hitter.UPGRADES_TIER_2 = ["basher"]
            Class.basher.UPGRADES_TIER_3 = ["caver", "rammer", "weigher"]
        Class.shielder.UPGRADES_TIER_2 = ["aurora1"]
            Class.aurora1.UPGRADES_TIER_3 = ["atmosphere"]
        Class.regenerator.UPGRADES_TIER_2 = ["rebuilder"]
            Class.rebuilder.UPGRADES_TIER_3 = ["reconstructor"]
