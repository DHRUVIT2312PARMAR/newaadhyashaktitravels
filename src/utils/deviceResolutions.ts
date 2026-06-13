/**
 * Mobile Device Resolutions Configuration
 * Used for responsive design and testing across different devices
 */

export const DEVICE_RESOLUTIONS = {
  // Extra Small Phones
  iPhone_SE: {
    width: 375,
    height: 667,
    name: 'iPhone SE',
    breakpoint: 'xs',
    type: 'phone',
    devicePixelRatio: 2,
  },
  
  // Small Phones
  iPhone_12_mini: {
    width: 375,
    height: 812,
    name: 'iPhone 12 Mini',
    breakpoint: 'sm',
    type: 'phone',
    devicePixelRatio: 3,
  },
  
  // Medium Phones
  iPhone_14: {
    width: 390,
    height: 844,
    name: 'iPhone 14',
    breakpoint: 'md',
    type: 'phone',
    devicePixelRatio: 3,
  },
  
  iPhone_14_Pro: {
    width: 393,
    height: 852,
    name: 'iPhone 14 Pro',
    breakpoint: 'md',
    type: 'phone',
    devicePixelRatio: 3,
  },

  // Android Phones
  Samsung_Galaxy_S21: {
    width: 360,
    height: 800,
    name: 'Samsung Galaxy S21',
    breakpoint: 'md',
    type: 'phone',
    devicePixelRatio: 2,
  },

  Samsung_Galaxy_S23: {
    width: 360,
    height: 800,
    name: 'Samsung Galaxy S23',
    breakpoint: 'md',
    type: 'phone',
    devicePixelRatio: 2,
  },

  Pixel_7: {
    width: 412,
    height: 915,
    name: 'Google Pixel 7',
    breakpoint: 'md',
    type: 'phone',
    devicePixelRatio: 2.75,
  },

  // Tablets
  iPad_Mini: {
    width: 768,
    height: 1024,
    name: 'iPad Mini',
    breakpoint: 'lg',
    type: 'tablet',
    devicePixelRatio: 2,
  },

  iPad_Air: {
    width: 820,
    height: 1180,
    name: 'iPad Air',
    breakpoint: 'lg',
    type: 'tablet',
    devicePixelRatio: 2,
  },

  iPad_Pro_11: {
    width: 834,
    height: 1194,
    name: 'iPad Pro 11"',
    breakpoint: 'xl',
    type: 'tablet',
    devicePixelRatio: 2,
  },

  iPad_Pro_12_9: {
    width: 1024,
    height: 1366,
    name: 'iPad Pro 12.9"',
    breakpoint: 'xl',
    type: 'tablet',
    devicePixelRatio: 2,
  },

  // Desktop/Laptop
  Desktop_HD: {
    width: 1280,
    height: 720,
    name: 'Desktop HD',
    breakpoint: '2xl',
    type: 'desktop',
    devicePixelRatio: 1,
  },

  Desktop_Full_HD: {
    width: 1920,
    height: 1080,
    name: 'Desktop Full HD',
    breakpoint: '3xl',
    type: 'desktop',
    devicePixelRatio: 1,
  },

  Laptop_4K: {
    width: 2560,
    height: 1440,
    name: '4K Laptop',
    breakpoint: '3xl',
    type: 'desktop',
    devicePixelRatio: 1,
  },
};

export const MOBILE_BREAKPOINTS = {
  xs: 320,  // Extra small phones
  sm: 375,  // Small phones
  md: 425,  // Medium phones
  lg: 768,  // Tablets
  xl: 1024, // Large tablets
  '2xl': 1280, // Desktops
  '3xl': 1536, // Large desktops
};

export const SAFE_AREA_INSETS = {
  standard: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  iPhone_notch: {
    top: 44,
    right: 0,
    bottom: 0,
    left: 0,
  },
  iPhone_dynamic_island: {
    top: 50,
    right: 0,
    bottom: 0,
    left: 0,
  },
  iPhone_max_notch: {
    top: 44,
    right: 0,
    bottom: 34,
    left: 0,
  },
  landscape_notch: {
    top: 0,
    right: 32,
    bottom: 0,
    left: 32,
  },
};

export type Device = keyof typeof DEVICE_RESOLUTIONS;
export type Breakpoint = keyof typeof MOBILE_BREAKPOINTS;

export const getDeviceByWidth = (width: number) => {
  return Object.entries(DEVICE_RESOLUTIONS).find(
    ([, device]) => device.width === width
  )?.[0] as Device | undefined;
};

export const getBreakpointByWidth = (width: number) => {
  const breakpoints = Object.entries(MOBILE_BREAKPOINTS)
    .sort(([, a], [, b]) => b - a);
  
  for (const [breakpoint, breakpointWidth] of breakpoints) {
    if (width >= breakpointWidth) {
      return breakpoint as Breakpoint;
    }
  }
  return 'xs';
};

export const isPhoneResolution = (width: number) => width < MOBILE_BREAKPOINTS.lg;
export const isTabletResolution = (width: number) => 
  width >= MOBILE_BREAKPOINTS.lg && width < MOBILE_BREAKPOINTS['2xl'];
export const isDesktopResolution = (width: number) => width >= MOBILE_BREAKPOINTS['2xl'];
