import { useState, useEffect, useMemo, useCallback } from "react";

export function useJobs({ query, statusFilter, tagFilter, page, pageSize }) {
  const [jobs, setJobs] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let aborted = false;
    async function fetchJobs() {
      setLoading(true);
      setError(null);
      try {
        const url = new URL("/jobs", location.href);
        if (query) url.searchParams.set("search", query);
        if (statusFilter) url.searchParams.set("status", statusFilter);
        if (tagFilter) url.searchParams.set("tag", tagFilter);
        url.searchParams.set("page", page);
        url.searchParams.set("pageSize", pageSize);

        const res = await fetch(url.pathname + url.search);
        if (!res.ok) throw new Error("Network error");
        const data = await res.json();
        if (!aborted) {
          console.log("dsfs",data.data)
          setJobs(data.data);
          setTotal(data.total);
        }
      } catch (err) {
        if (!aborted) setError(err.message);
      } finally {
        if (!aborted) setLoading(false);
      }
    }
    fetchJobs();
    return () => {
      aborted = true;
    };
  }, [query, statusFilter, tagFilter, page, pageSize]);

  const existingSlugs = useMemo(() => jobs.map((j) => j.slug), [jobs]);

  return { jobs, setJobs, total, loading, error, existingSlugs };
}
