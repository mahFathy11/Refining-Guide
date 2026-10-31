import { useState, useCallback, useEffect } from "react";
import { useAuth } from "../context/AuthContext.jsx";

export default function useBookmarks() {
  let auth = null;
  try {
    auth = useAuth();
  } catch {
    auth = null;
  }

  const currentUser = auth?.currentUser;
  const storageKey = currentUser
    ? `ct_bookmarks_${currentUser.id}`
    : auth?.isGuest
    ? "ct_bookmarks_guest"
    : "ct_bookmarks";

  const loadBookmarks = useCallback(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          return parsed;
        }
      }
      return [];
    } catch {
      return [];
    }
  }, [storageKey]);

  const [bookmarks, setBookmarks] = useState(loadBookmarks);

  useEffect(() => {
    setBookmarks(loadBookmarks());
  }, [loadBookmarks]);

  const saveBookmarks = useCallback(
    (newBookmarks) => {
      setBookmarks(newBookmarks);
      try {
        localStorage.setItem(storageKey, JSON.stringify(newBookmarks));
        // إرسال حدث مخصص لتحديث المكونات الأخرى فوراً
        window.dispatchEvent(new Event("ct_bookmarks_updated"));
      } catch (e) {
        console.error("Failed to save bookmarks", e);
      }
    },
    [storageKey]
  );

  // استماع للتحديثات عبر النوافذ أو المكونات المتزامنة
  useEffect(() => {
    const handleSync = () => {
      setBookmarks(loadBookmarks());
    };
    window.addEventListener("ct_bookmarks_updated", handleSync);
    window.addEventListener("storage", handleSync);
    return () => {
      window.removeEventListener("ct_bookmarks_updated", handleSync);
      window.removeEventListener("storage", handleSync);
    };
  }, [loadBookmarks]);

  const isBookmarked = useCallback(
    (id) => {
      return bookmarks.some((b) => b && b.id === id);
    },
    [bookmarks]
  );

  const toggleBookmark = useCallback(
    (item) => {
      if (!item || !item.id) return;
      setBookmarks((prev) => {
        const exists = prev.some((b) => b && b.id === item.id);
        const next = exists
          ? prev.filter((b) => b && b.id !== item.id)
          : [
              {
                id: item.id,
                title: item.title,
                type: item.type || "resource",
                subtitle: item.subtitle || "",
                link: item.link || "",
                badge: item.badge || "",
                savedAt: Date.now(),
              },
              ...prev,
            ];
        try {
          localStorage.setItem(storageKey, JSON.stringify(next));
          window.dispatchEvent(new Event("ct_bookmarks_updated"));
        } catch (e) {
          console.error("Failed to persist bookmark", e);
        }
        return next;
      });
    },
    [storageKey]
  );

  const removeBookmark = useCallback(
    (id) => {
      setBookmarks((prev) => {
        const next = prev.filter((b) => b && b.id !== id);
        try {
          localStorage.setItem(storageKey, JSON.stringify(next));
          window.dispatchEvent(new Event("ct_bookmarks_updated"));
        } catch (e) {
          console.error("Failed to remove bookmark", e);
        }
        return next;
      });
    },
    [storageKey]
  );

  const clearBookmarks = useCallback(() => {
    saveBookmarks([]);
  }, [saveBookmarks]);

  return {
    bookmarks,
    count: bookmarks.length,
    isBookmarked,
    toggleBookmark,
    removeBookmark,
    clearBookmarks,
  };
}
