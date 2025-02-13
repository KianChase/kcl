"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

type ShortcutHandler = (e: KeyboardEvent) => void;

interface ShortcutConfig {
  key: string;
  ctrlKey?: boolean;
  altKey?: boolean;
  shiftKey?: boolean;
  handler: ShortcutHandler;
}

export function useKeyboardShortcuts(shortcuts: ShortcutConfig[]) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      // Ignore shortcuts when typing in input fields
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        e.target instanceof HTMLSelectElement
      ) {
        return;
      }

      // Handle Escape key for dialogs and search
      if (e.key === "Escape") {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement?.tagName === "INPUT") {
          activeElement.blur();
          if (activeElement.name === "q") {
            (activeElement as HTMLInputElement).value = "";
          }
        }
        return;
      }

      for (const shortcut of shortcuts) {
        if (
          e.key.toLowerCase() === shortcut.key.toLowerCase() &&
          !!shortcut.ctrlKey === e.ctrlKey &&
          !!shortcut.altKey === e.altKey &&
          !!shortcut.shiftKey === e.shiftKey
        ) {
          e.preventDefault();
          shortcut.handler(e);
          break;
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [shortcuts]);
}

export function useAdminShortcuts() {
  const router = useRouter();

  useKeyboardShortcuts([
    {
      key: "s",
      altKey: true,
      handler: () => router.push("/admin/submissions"),
    },
    {
      key: "g",
      altKey: true,
      handler: () => router.push("/admin/settings"),
    },
    {
      key: "h",
      altKey: true,
      handler: () => router.push("/admin"),
    },
    {
      key: "/",
      handler: () => {
        const searchInput = document.querySelector<HTMLInputElement>('input[name="q"]');
        if (searchInput) {
          searchInput.focus();
        }
      },
    },
  ]);
} 