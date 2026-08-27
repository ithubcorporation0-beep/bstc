import React from "react";

/**
 * Inline Theme Script.
 * Injected into <head> to execute synchronously before browser paint and React hydration.
 * Checks localStorage ('bstc_theme') and system color scheme to set or remove the 'dark' class.
 */
export function ThemeScript() {
  const code = `
    (function() {
      try {
        var saved = localStorage.getItem('bstc_theme');
        var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (saved === 'dark' || (!saved && prefersDark)) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } catch (e) {}
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}

export default ThemeScript;
