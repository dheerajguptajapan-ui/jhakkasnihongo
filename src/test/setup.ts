import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock matchMedia for components that use it (e.g., shadcn, radix)
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // Deprecated
    removeListener: vi.fn(), // Deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock Capacitor
vi.mock('@capacitor/core', () => ({
  Capacitor: {
    isNativePlatform: () => false,
  },
}));

// Mock Native Storage (to avoid localstorage issues in JSDOM)
vi.mock('./src/lib/services/NativeStorage', () => ({
  NativeStorage: {
    get: vi.fn(),
    set: vi.fn(),
    remove: vi.fn(),
    clear: vi.fn(),
  },
}));
