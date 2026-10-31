import { useState, useCallback, useEffect } from "react";
import { useAuth } from "../context/AuthContext.jsx";

// مفتاح كل مصدر = معرّف التراك + عنوان المصدر
export const resourceKey = (trackId, title) => `${trackId}:${title}`;

export default function useProgress() {
  let auth = null;
  try {
    auth = useAuth();
  } catch {
    // fallback if used outside AuthProvider
    auth = null;
  }

  const currentUser = auth?.currentUser;
  const saveUserProgress = auth?.saveUserProgress;

  // تحديد مفتاح التخزين الخاص بهذا المستخدم لحفظ تقدمه بشكل مستقل
  const storageKey = currentUser
    ? `ct_done_${currentUser.id}`
    : auth?.isGuest
    ? "ct_done_guest"
    : "ct_done";

  const loadProgress = useCallback(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
          return parsed;
        }
      }
      // إذا كان المستخدم جديداً ولديه كائن progress صالح
      if (
        currentUser?.progress &&
        typeof currentUser.progress === "object" &&
        !Array.isArray(currentUser.progress) &&
        Object.keys(currentUser.progress).length > 0
      ) {
        return currentUser.progress;
      }
      return {};
    } catch {
      return {};
    }
  }, [storageKey, currentUser]);

  const [done, setDone] = useState(loadProgress);

  // تحديث حالة التقدم فور تغيير المستخدم المسجل
  useEffect(() => {
    setDone(loadProgress());
  }, [loadProgress]);

  const toggle = useCallback(
    (k) => {
      setDone((prev) => {
        const safePrev = prev && typeof prev === "object" && !Array.isArray(prev) ? prev : {};
        const next = { ...safePrev };
        if (next[k]) delete next[k];
        else next[k] = 1;

        try {
          localStorage.setItem(storageKey, JSON.stringify(next));
        } catch (e) {
          console.error("Failed to persist course progress", e);
        }

        if (saveUserProgress) {
          saveUserProgress(next);
        }

        return next;
      });
    },
    [storageKey, saveUserProgress]
  );

  return { done: (done && typeof done === "object") ? done : {}, toggle };
}

// حساب عدد ونسبة الكورسات المنجزة في مسار معين
export const trackCount = (track, done = {}) => {
  if (!track || !track.stages) return { done: 0, total: 0, pct: 0 };
  const safeDone = done && typeof done === "object" && !Array.isArray(done) ? done : {};
  const all = track.stages.flatMap((s) => s.resources || []);
  const d = all.filter((x) => x && x.title && safeDone[resourceKey(track.id, x.title)]).length;
  const pct = all.length > 0 ? Math.round((d / all.length) * 100) : 0;
  return { done: d, total: all.length, pct };
};

// حساب إجمالي الكورسات المنجزة عبر كافة المسارات
export const overallCount = (tracksList = [], done = {}) => {
  if (!tracksList || !Array.isArray(tracksList)) return { done: 0, total: 0, pct: 0 };
  const safeDone = done && typeof done === "object" && !Array.isArray(done) ? done : {};
  let d = 0;
  let total = 0;
  tracksList.forEach((t) => {
    const c = trackCount(t, safeDone);
    d += c.done;
    total += c.total;
  });
  const pct = total > 0 ? Math.round((d / total) * 100) : 0;
  return { done: d, total, pct };
};

