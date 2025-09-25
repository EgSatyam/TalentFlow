// src/pages/candidates/hooks/useCandidates.js
import { useEffect, useState, useCallback } from "react";

/**
 * useCandidates hook
 * - stage: server-like filter (sent to /candidates?stage=...)
 * - fetchAll: when true requests a very large pageSize so server returns all matches;
 *             this allows client-side search + virtualization.
 */
export function useCandidates({ stage = "", page = 1, pageSize = 50, fetchAll = false } = {}) {
  const [candidates, setCandidates] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchCandidates = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (stage) params.append("stage", stage);

      if (fetchAll) {
        params.append("page", "1");
        params.append("pageSize", "10000"); // return all matches
      } else {
        params.append("page", String(page));
        params.append("pageSize", String(pageSize));
      }

      const res = await fetch(`/candidates?${params.toString()}`);
      if (!res.ok) throw new Error("Failed to fetch candidates");
      const json = await res.json();
      setCandidates(Array.isArray(json.data) ? json.data : []);
      setTotal(Number(json.total ?? 0));
    } catch (err) {
      console.error("useCandidates error:", err);
      setCandidates([]);
      setTotal(0);
    } finally {
      setLoading(false);
    }
  }, [stage, page, pageSize, fetchAll]);

  useEffect(() => {
    fetchCandidates();
  }, [fetchCandidates]);

  return { candidates, setCandidates, total, loading, refresh: fetchCandidates };
}
