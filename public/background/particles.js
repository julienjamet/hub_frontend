/**********************************[ SCREEN CONFIG ]*/
// -- ensures the particles background does not overlap the app
const screenConfig = {
    zIndex: -1
};
/****************************************************/


/*************************[ PARTICLES BASIC CONFIG ]*/
// -- 250 particles for 1000px ( densitity = 25% )
const number = {
    value: 250,
    density: {
        enable: true,
        value_area: 1000
    }
};

// -- 1 particle = 1px
const size = {
    value: 1
};

// -- particles base color
const color = {
    value: '#9ee8ff'
};

// -- rolling animation with variable speed ( from 15 to 30 )
const roll = {
    'enable': true,
    'speed': {
        'min': 15,
        'max': 30
    },
    // -- each particle either darkens or brightens up to 30% from its base color each time it rolls
    'darken': {
        'enable': true,
        'value': 30
    },
    'enlighten': {
        'enable': true,
        'value': 30
    }
};

// -- moving animation
const move = {
    enable: true,
    speed: 1,
    // -- particles move toward the top-right with non-linear trajectories
    direction: 'top-right',
    straight: false,
    // -- small trail for a softer effect
    trail: {
        enable: true,
        length: 3
    }
};

// -- enables linking for particles within 150px of each other
const links = {
    enable: true,
    distance: 150,
    width: 1,
    color: "#9ee8ff",
    opacity: 0.5
};

// -- particles basic config
const basicConfig = {
    number: number,
    size: size,
    color: color,
    roll: roll,
    move: move,
    links: links
};
/****************************************************/


/***************************[ INTERACTIVITY CONFIG ]*/
const interactivityConfig = {
    // -- cursor attracts particles within 80px when hovering
    events: {
        onhover: {
            enable: true,
            mode: 'attract'
        }
    },
    modes: {
        attract: {
            distance: 80
        }
    }
};
/****************************************************/


/***************[ PARTICLES BACKGROUND FULL CONFIG ]*/
const particlesConfig = {
    fullScreen: screenConfig,
    particles: basicConfig,
    interactivity: interactivityConfig
};
/****************************************************/


tsParticles.load(particlesConfig);