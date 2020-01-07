import { WINDOW_BREAKPOINTS } from '@/constants';

export default {
  currentWindowWidth: ({ windowWidth }) => windowWidth,
  isDesktopWidth: ({ windowWidth }) => windowWidth > WINDOW_BREAKPOINTS.DESKTOP_MEDIUM,
  isMediumDesktopWidth: ({ windowWidth }) => (
    windowWidth <= WINDOW_BREAKPOINTS.DESKTOP_MEDIUM
    && windowWidth > WINDOW_BREAKPOINTS.TABLET
  ),
  isTabletWidth: ({ windowWidth }) => (
    windowWidth <= WINDOW_BREAKPOINTS.TABLET
    && windowWidth > WINDOW_BREAKPOINTS.MOBILE
  ),
  isMobileWidth: ({ windowWidth }) => windowWidth <= WINDOW_BREAKPOINTS.MOBILE,
  isSmallScreens: (state, { isTabletWidth, isMobileWidth }) => isTabletWidth || isMobileWidth,
};
