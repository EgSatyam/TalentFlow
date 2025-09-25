// // // import React, { useState, useEffect } from "react";
// // // import { FixedSizeList as List } from "react-window";
// // // import { InfiniteLoader } from "react-window-infinite-loader";
// // // import { Link } from "react-router-dom";

// // // export default function CandidatesVirtualized() {
// // //   const [candidates, setCandidates] = useState([]);
// // //   const [total, setTotal] = useState(0);
// // //   const pageSize = 50;
// // //   const [loading, setLoading] = useState(false);

// // //   // fetch one page of candidates
// // //   const loadMoreCandidates = async (pageToLoad) => {
// // //     if (loading) return;
// // //     setLoading(true);
// // //     try {
// // //       const res = await fetch(`/candidates?page=${pageToLoad}&pageSize=${pageSize}`);
// // //       if (!res.ok) throw new Error("Failed to fetch");
// // //       const { data, total } = await res.json();

// // //       setCandidates((prev) => [...prev, ...data]);
// // //       setTotal(total);
// // //     } catch (err) {
// // //       console.error("❌ Error fetching candidates:", err);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   // initial load (page 1)
// // //   useEffect(() => {
// // //     loadMoreCandidates(1);
// // //   }, []);

// // //   // check if a row is already loaded
// // //   const isItemLoaded = (index) => index < candidates.length;

// // //   // load next page when InfiniteLoader requests more
// // //   const loadMoreItems = (startIndex, stopIndex) => {
// // //   if (candidates.length >= total) return Promise.resolve();

// // //   const nextPage = Math.floor(startIndex / pageSize) + 1;
// // //   return loadMoreCandidates(nextPage);
// // // };


// // //   // render one row
// // //   const Row = ({ index, style }) => {
// // //     if (!isItemLoaded(index)) {
// // //       return (
// // //         <div style={style} className="px-4 py-3 border-b text-gray-400">
// // //           Loading...
// // //         </div>
// // //       );
// // //     }
// // //     const c = candidates[index];
// // //     return (
// // //       <div style={style} className="px-4 py-3 border-b bg-white flex justify-between">
// // //         <div>
// // //           <Link
// // //             to={`/candidates/${c.id}`}
// // //             className="font-medium text-indigo-600 hover:underline"
// // //           >
// // //             {c.name}
// // //           </Link>
// // //           <div className="text-sm text-gray-600">{c.email}</div>
// // //           <div className="text-xs text-gray-500">Stage: {c.stage}</div>
// // //         </div>
// // //         <div className="text-xs text-gray-400">ID: {c.id}</div>
// // //       </div>
// // //     );
// // //   };

// // //   return (
// // //     <div className="p-6">
// // //       <h1 className="text-2xl font-bold mb-4">Candidates (Infinite Scroll)</h1>
// // //       <p className="mb-2 text-sm text-gray-600">
// // //         Loaded {candidates.length} of {total}
// // //       </p>

// // //       <InfiniteLoader
// // //         isItemLoaded={isItemLoaded}
// // //         itemCount={total || 1000} // total count, fallback to 1000
// // //         loadMoreItems={loadMoreItems}
// // //       >
// // //         {({ onItemsRendered, ref }) => (
// // //           <List
// // //             height={600}
// // //             itemCount={total || 1000}
// // //             itemSize={72}
// // //             width={"100%"}
// // //             onItemsRendered={onItemsRendered}
// // //             ref={ref}
// // //           >
// // //             {Row}
// // //           </List>
// // //         )}
// // //       </InfiniteLoader>
// // //     </div>
// // //   );
// // // }



// // import React, { useState, useEffect } from "react";
// // import { FixedSizeList as List } from "react-window";
// // import { InfiniteLoader } from "react-window-infinite-loader";
// // import { Link } from "react-router-dom";

// // export default function CandidatesVirtualized() {
// //   const [candidates, setCandidates] = useState([]);
// //   const [total, setTotal] = useState(0);
// //   const pageSize = 50;
// //   const [loading, setLoading] = useState(false);

// //   // fetch one page of candidates
// //   const loadMoreCandidates = async (pageToLoad) => {
// //     if (loading) return;
// //     setLoading(true);
// //     try {
// //       const res = await fetch(`/candidates?page=${pageToLoad}&pageSize=${pageSize}`);
// //       if (!res.ok) throw new Error("Failed to fetch");
// //       const { data, total } = await res.json();

// //       setCandidates((prev) => {
// //         // avoid duplicates
// //         const ids = new Set(prev.map((c) => c.id));
// //         const merged = [...prev];
// //         for (const c of data) {
// //           if (!ids.has(c.id)) merged.push(c);
// //         }
// //         return merged;
// //       });
// //       setTotal(total);
// //     } catch (err) {
// //       console.error("❌ Error fetching candidates:", err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // initial load (page 1)
// //   useEffect(() => {
// //     loadMoreCandidates(1);
// //   }, []);

// //   // check if a row is already loaded
// //   const isItemLoaded = (index) => index < candidates.length;

// //   // use startIndex from InfiniteLoader to decide next page
// // //   const loadMoreItems = (startIndex, stopIndex) => {
// // //     if (candidates.length >= total) return Promise.resolve();

// // //     const nextPage = Math.floor(startIndex / pageSize) + 1;
// // //     return loadMoreCandidates(nextPage);
// // //   };
// // // load next page based on how many candidates are already loaded
// // const loadMoreItems = () => {
// //   if (candidates.length >= total) return Promise.resolve();

// //   const nextPage = Math.floor(candidates.length / pageSize) + 1;
// //   return loadMoreCandidates(nextPage);
// // };


// //   // render one row
// //   const Row = ({ index, style }) => {
// //     if (!isItemLoaded(index)) {
// //       return (
// //         <div style={style} className="px-4 py-3 border-b text-gray-400">
// //           Loading...
// //         </div>
// //       );
// //     }
// //     const c = candidates[index];
// //     return (
// //       <div style={style} className="px-4 py-3 border-b bg-white flex justify-between">
// //         <div>
// //           <Link
// //             to={`/candidates/${c.id}`}
// //             className="font-medium text-indigo-600 hover:underline"
// //           >
// //             {c.name}
// //           </Link>
// //           <div className="text-sm text-gray-600">{c.email}</div>
// //           <div className="text-xs text-gray-500">Stage: {c.stage}</div>
// //         </div>
// //         <div className="text-xs text-gray-400">ID: {c.id}</div>
// //       </div>
// //     );
// //   };

// //   return (
// //     <div className="p-6">
// //       <h1 className="text-2xl font-bold mb-4">Candidates (Infinite Scroll)</h1>
// //       <p className="mb-2 text-sm text-gray-600">
// //         Loaded {candidates.length} of {total}
// //       </p>

// //       <InfiniteLoader
// //         isItemLoaded={isItemLoaded}
// //         itemCount={total || 1000}
// //         loadMoreItems={loadMoreItems}
// //       >
// //         {({ onItemsRendered, ref }) => (
// //           <List
// //             height={600}
// //             itemCount={total || 1000}
// //             itemSize={72}
// //             width={"100%"}
// //             onItemsRendered={onItemsRendered}
// //             ref={ref}
// //           >
// //             {Row}
// //           </List>
// //         )}
// //       </InfiniteLoader>
// //     </div>
// //   );
// // }


// // import React, { useState, useEffect } from "react";
// // import { FixedSizeList as List } from "react-window";
// // import { InfiniteLoader } from "react-window-infinite-loader";
// // import { Link } from "react-router-dom";

// // export default function CandidatesVirtualized() {
// //   const [candidates, setCandidates] = useState([]);
// //   const [total, setTotal] = useState(0);
// //   const pageSize = 50;
// //   const [loading, setLoading] = useState(false);

// //   // fetch one page of candidates
// //   const loadMoreCandidates = async (pageToLoad) => {
// //     if (loading) return;
// //     setLoading(true);
// //     try {
// //       console.log("📡 Fetching page:", pageToLoad);

// //       const res = await fetch(`/candidates?page=${pageToLoad}&pageSize=${pageSize}`);
// //       if (!res.ok) throw new Error("Failed to fetch");
// //       const { data, total } = await res.json();

// //       console.log("✅ Received", data.length, "candidates for page", pageToLoad);

// //       setCandidates((prev) => {
// //         // avoid duplicates by ID
// //         const ids = new Set(prev.map((c) => c.id));
// //         const merged = [...prev];
// //         for (const c of data) {
// //           if (!ids.has(c.id)) merged.push(c);
// //         }
// //         return merged;
// //       });
// //       setTotal(total);
// //     } catch (err) {
// //       console.error("❌ Error fetching candidates:", err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // initial load (page 1)
// //   useEffect(() => {
// //     loadMoreCandidates(1);
// //   }, []);

// //   // check if a row is already loaded
// //   const isItemLoaded = (index) => index < candidates.length;

// //   // load next page based on how many we already have
// //   const loadMoreItems = () => {
// //     if (candidates.length >= total) return Promise.resolve();

// //     const nextPage = Math.floor(candidates.length / pageSize) + 1;
// //     console.log("🔍 loadMoreItems called. candidates so far:", candidates.length, "→ nextPage:", nextPage);
// //     return loadMoreCandidates(nextPage);
// //   };

// //   // render one row
// //   const Row = ({ index, style }) => {
// //     if (!isItemLoaded(index)) {
// //       return (
// //         <div style={style} className="px-4 py-3 border-b text-gray-400">
// //           Loading...
// //         </div>
// //       );
// //     }
// //     const c = candidates[index];
// //     return (
// //       <div style={style} className="px-4 py-3 border-b bg-white flex justify-between">
// //         <div>
// //           <Link
// //             to={`/candidates/${c.id}`}
// //             className="font-medium text-indigo-600 hover:underline"
// //           >
// //             {c.name}
// //           </Link>
// //           <div className="text-sm text-gray-600">{c.email}</div>
// //           <div className="text-xs text-gray-500">Stage: {c.stage}</div>
// //         </div>
// //         <div className="text-xs text-gray-400">ID: {c.id}</div>
// //       </div>
// //     );
// //   };

// //   return (
// //     <div className="p-6">
// //       <h1 className="text-2xl font-bold mb-4">Candidates (Infinite Scroll)</h1>
// //       <p className="mb-2 text-sm text-gray-600">
// //         Loaded {candidates.length} of {total}
// //       </p>

// //       <InfiniteLoader
// //         isItemLoaded={isItemLoaded}
// //         itemCount={total || 1000}
// //         loadMoreItems={loadMoreItems}
// //       >
// //         {({ onItemsRendered, ref }) => (
// //           <List
// //             height={600}
// //             itemCount={total || 1000}
// //             itemSize={72}
// //             width={"100%"}
// //             onItemsRendered={onItemsRendered}
// //             ref={ref}
// //           >
// //             {Row}
// //           </List>
// //         )}
// //       </InfiniteLoader>
// //     </div>
// //   );
// // }




// // import React, { useState, useEffect } from "react";
// // import { FixedSizeList as List } from "react-window";
// // import { InfiniteLoader } from "react-window-infinite-loader";
// // import { Link } from "react-router-dom";

// // export default function CandidatesVirtualized() {
// //   const [candidates, setCandidates] = useState([]);
// //   const [total, setTotal] = useState(0);
// //   const [page, setPage] = useState(1); // ✅ track current page
// //   const pageSize = 50;
// //   const [loading, setLoading] = useState(false);

// //   // fetch one page of candidates
// //   const loadMoreCandidates = async (pageToLoad) => {
// //     if (loading) return;
// //     setLoading(true);
// //     try {
// //       console.log("📡 Fetching page:", pageToLoad);

// //       const res = await fetch(`/candidates?page=${pageToLoad}&pageSize=${pageSize}`);
// //       if (!res.ok) throw new Error("Failed to fetch");
// //       const { data, returned } = await res.json();

// //       console.log("✅ Received", data.length, "candidates for page", pageToLoad);

// //       setCandidates((prev) => {
// //         // avoid duplicates by ID
// //         const ids = new Set(prev.map((c) => c.id));
// //         const merged = [...prev];
// //         for (const c of data) {
// //           if (!ids.has(c.id)) merged.push(c);
// //         }
// //         return merged;
// //       });
// //       setTotal(prev => prev+returned);
// //     } catch (err) {
// //       console.error("❌ Error fetching candidates:", err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // initial load (page 1)
// //   useEffect(() => {
// //     loadMoreCandidates(1);
// //   }, []);

// //   // check if a row is already loaded
// //   const isItemLoaded = (index) => index < candidates.length;

// //   // load next page when InfiniteLoader triggers
// //   const loadMoreItems = () => {
// //     if (candidates.length >= total) return Promise.resolve();

// //     const nextPage = page + 1; // ✅ increment current page
// //     setPage(nextPage);
// //     console.log("🔍 loadMoreItems → nextPage:", nextPage);
// //     return loadMoreCandidates(nextPage);
// //   };

// //   // render one row
// //   const Row = ({ index, style }) => {
// //     if (!isItemLoaded(index)) {
// //       return (
// //         <div style={style} className="px-4 py-3 border-b text-gray-400">
// //           Loading...
// //         </div>
// //       );
// //     }
// //     const c = candidates[index];
// //     return (
// //       <div style={style} className="px-4 py-3 border-b bg-white flex justify-between">
// //         <div>
// //           <Link
// //             to={`/candidates/${c.id}`}
// //             className="font-medium text-indigo-600 hover:underline"
// //           >
// //             {c.name}
// //           </Link>
// //           <div className="text-sm text-gray-600">{c.email}</div>
// //           <div className="text-xs text-gray-500">Stage: {c.stage}</div>
// //         </div>
// //         <div className="text-xs text-gray-400">ID: {c.id}</div>
// //       </div>
// //     );
// //   };

// //   return (
// //     <div className="p-6">
// //       <h1 className="text-2xl font-bold mb-4">Candidates (Infinite Scroll)</h1>
// //       <p className="mb-2 text-sm text-gray-600">
// //         Loaded {candidates.length} of {total}
// //       </p>

// //       <InfiniteLoader
// //         isItemLoaded={isItemLoaded}
// //         itemCount={total || 1000}
// //         loadMoreItems={loadMoreItems}
// //       >
// //         {({ onItemsRendered, ref }) => (
// //           <List
// //             height={600}
// //             itemCount={total || 1000}
// //             itemSize={72}
// //             width={"100%"}
// //             onItemsRendered={onItemsRendered}
// //             ref={ref}
// //           >
// //             {Row}
// //           </List>
// //         )}
// //       </InfiniteLoader>
// //     </div>
// //   );
// // // }

// // import React, { useState, useEffect, useCallback } from "react";
// // import { List } from "react-window";

// // export default function CandidatesVirtualized({ loadMoreCallback }) {
// //   const [candidates, setCandidates] = useState([]);
// //   const [total, setTotal] = useState(0);
// //   const [page, setPage] = useState(1);
// //   const pageSize = 50;
// //   const [loading, setLoading] = useState(false);

// //   // Load one page
// //   const loadPage = useCallback(async (pageNum) => {
// //     if (loading) return;
// //     setLoading(true);
// //     try {
// //       console.log("📡 Fetching page:", pageNum);
// //       const res = await fetch(`/candidates?page=${pageNum}&pageSize=${pageSize}`);
// //       if (!res.ok) throw new Error("Fetch failed");
// //       const response= await res.json();
// //       console.log("response: ",response)
// //       const { data } = response
// //       console.log("✅ Received", data.length, "candidates for page", pageNum);
// //       setCandidates((prev) => {
// //         const ids = new Set(prev.map((c) => c.id));
// //         const merged = [...prev];
// //         for (const c of data) {
// //           if (!ids.has(c.id)) merged.push(c);
// //         }
// //         return merged;
// //       });
// //       setTotal(prev => prev + data.length);
// //     } catch (err) {
// //       console.error("❌ Error loading candidates:", err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   }, [loading]);

// //   // initial load
// //   useEffect(() => {
// //     loadPage(1);
// //   }, [loadPage]);

// //   // This function is passed into List
// //   const RowComponent = useCallback(
// //     ({ index, style, candidates }) => {
// //       if (index >= candidates.length) {
// //         // placeholder row for loading more
// //         return (
// //           <div style={style} className="px-4 py-3 border-b text-gray-400">
// //             {loading ? "Loading more..." : null}
// //           </div>
// //         );
// //       }
// //       const c = candidates[index];
// //       return (
// //         <div style={style} className="px-4 py-3 border-b bg-white flex justify-between">
// //           <div>
// //             <a href={`/candidates/${c.id}`} className="font-medium text-indigo-600 hover:underline">
// //               {c.name}
// //             </a>
// //             <div className="text-sm text-gray-600">{c.email}</div>
// //             <div className="text-xs text-gray-500">Stage: {c.stage}</div>
// //           </div>
// //           <div className="text-xs text-gray-400">ID: {c.id}</div>
// //         </div>
// //       );
// //     },
// //     [loading]
// //   );

// //   // Called when visible items change
// //   const handleItemsRendered = useCallback(
// //     ({ visibleStartIndex, visibleStopIndex }) => {
// //       // If the last visible row is the last loaded candidate,
// //       // trigger load more
// //       if (!loading && visibleStopIndex >= candidates.length - 1 && candidates.length < total) {
// //         const nextPage = page + 1;
// //         setPage(nextPage);
// //         // if (typeof loadMoreCallback === "function") {
// //         //   loadMoreCallback(nextPage);
// //         // }
// //         console.log("loading more")
// //         loadPage(nextPage);
// //       }
// //     },
// //     [candidates, total, page, loading, loadMoreCallback, loadPage]
// //   );
// //   console.log("Candidates: ",candidates)
// //   return (
// //     <div className="p-6">
// //       <h1 className="text-2xl font-bold mb-4">Candidates (Infinite Scroll v2)</h1>
// //       <p className="mb-2 text-sm text-gray-600">
// //         Loaded {candidates.length} of {total}
// //       </p>

// //        <List
// //         rowComponent={RowComponent}
// //         rowCount={candidates.length < total ? candidates.length + 1 : candidates.length}
// //         rowHeight={72}
// //         rowProps={{ candidates }}
// //         style={{ width: "100%", height: 600 }}
// //       />
// //     </div>
// //   );
// // }



// // import React, { useState, useEffect, useCallback, useRef } from "react";
// // import { FixedSizeList as List } from "react-window";

// // export default function CandidatesVirtualized() {
// //   const [candidates, setCandidates] = useState([]);
// //   const [page, setPage] = useState(1);
// //   const [hasMore, setHasMore] = useState(true);
// //   const [loading, setLoading] = useState(false);

// //   const pageSize = 50; // how many candidates per request
// //   const listRef = useRef(null);

// //   // Fetch candidates from mock API
// //   const fetchCandidates = useCallback(async (pageNum) => {
// //     if (loading || !hasMore) return;
// //     setLoading(true);

// //     try {
// //       // API expectation
// //       // GET /candidates?page=pageNum
// //       // Response shape: { data: [{id, name, email, stage}], total, hasMore }
// //       const res = await fetch(`/candidates?page=${pageNum}&pageSize=${pageSize}`);
// //       const data = await res.json();

// //       setCandidates((prev) => [...prev, ...data.data]);
// //       setHasMore(data.hasMore); // API should return if more pages exist
// //       setPage((prev) => prev + 1);
// //     } catch (err) {
// //       console.error("Failed to fetch candidates:", err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   }, [loading, hasMore]);

// //   // Load initial page
// //   useEffect(() => {
// //     fetchCandidates(1);
// //   }, [fetchCandidates]);

// //   // Row renderer
// //   const Row = ({ index, style }) => {
// //     const candidate = candidates[index];
// //     if (!candidate) return null;

// //     // When last visible item is rendered → load more
// //     if (index === candidates.length - 1 && hasMore && !loading) {
// //       fetchCandidates(page);
// //     }

// //     return (
// //       <div style={style} className="p-2 border-b border-gray-200">
// //         <p className="font-semibold">{candidate.name}</p>
// //         <p className="text-sm text-gray-600">{candidate.email}</p>
// //         <p className="text-xs text-blue-500">Stage: {candidate.stage}</p>
// //       </div>
// //     );
// //   };

// //   return (
// //     <List
// //       ref={listRef}
// //       height={600}
// //       itemCount={candidates.length}
// //       itemSize={80}
// //       width={"100%"}
// //     >
// //       {Row}
// //     </List>
// //   );
// // }




// // import React, { useState, useEffect, useCallback } from "react";
// // import { List } from "react-window"; // assuming this wrapper is imported

// // export default function CandidatesVirtualized() {
// //   const [candidates, setCandidates] = useState([]);
// //   const [page, setPage] = useState(1);
// //   const [total, setTotal] = useState(0);
// //   const [loading, setLoading] = useState(false);
// //   const [hasMore, setHasMore] = useState(true);

// //   const pageSize = 50;

// //   // Fetch candidates from API
// //   const fetchCandidates = useCallback(
// //     async (pageNum) => {
// //       if (loading || !hasMore) return;
// //       setLoading(true);

// //       try {
// //         const res = await fetch(`/candidates?page=${pageNum}&pageSize=${pageSize}`);
// //         const data = await res.json();

// //         // API expectation:
// //         // { data: [{id,name,email,stage}], total, hasMore }
// //         setCandidates((prev) => [...prev, ...data.data]);
// //         setTotal(data.total);
// //         setHasMore(data.hasMore);
// //         setPage((prev) => prev + 1);
// //       } catch (err) {
// //         console.error("Failed to fetch candidates:", err);
// //       } finally {
// //         setLoading(false);
// //       }
// //     },
// //     [loading, hasMore]
// //   );

// //   // Load first page on mount
// //   useEffect(() => {
// //     fetchCandidates(1);
// //   }, [fetchCandidates]);

// //   // Row renderer
// //   const RowComponent = ({ index, style, candidates }) => {


// //     // "Loading" placeholder row
// //     if (index >= candidates.length) {
// //       if (!loading && hasMore) {
// //         fetchCandidates(page);
// //       }
// //       return (
// //         <div style={style} className="p-2 text-center text-gray-500">
// //           Loading more candidates...
// //         </div>
// //       );
// //     }

// //     const candidate = candidates[index];
// //     return (
// //       <div style={style} className="p-2 border-b border-gray-200">
// //         <p className="font-semibold">{candidate.name}</p>
// //         <p className="text-sm text-gray-600">{candidate.email}</p>
// //         <p className="text-xs text-blue-500">Stage: {candidate.stage}</p>
// //       </div>
// //     );
// //   };

// //   return (
// //     <List
// //       rowComponent={RowComponent}
// //       rowCount={candidates.length < total ? candidates.length + 1 : candidates.length}
// //       rowHeight={72}
// //       rowProps={{ candidates }}
// //       style={{ width: "100%", height: 600 }}
// //     />
// //   );
// // }



// // import React, { useState, useEffect, useCallback } from "react";
// // import { List } from "react-window";

// // export default function CandidatesVirtualized() {
// //   const [candidates, setCandidates] = useState([]);
// //   const [page, setPage] = useState(1);
// //   const [total, setTotal] = useState(0);
// //   const [loading, setLoading] = useState(false);
// //   const [hasMore, setHasMore] = useState(true);

// //   const pageSize = 50;

// //   // API fetch
// //   const fetchCandidates = useCallback(
// //     async (pageNum) => {
// //       if (loading || !hasMore) return;
// //       setLoading(true);

// //       try {
// //         const res = await fetch(`/candidates?page=${pageNum}&pageSize=${pageSize}`);
// //         const data = await res.json();

// //         // API expected response: { data, total, hasMore }
// //         setCandidates((prev) => [...prev, ...data.data]);
// //         setTotal(data.total);
// //         setHasMore(data.hasMore);
// //         setPage((prev) => prev + 1);
// //       } catch (err) {
// //         console.error("Failed to fetch candidates:", err);
// //       } finally {
// //         setLoading(false);
// //       }
// //     },
// //     [loading, hasMore]
// //   );

// //   // Initial load
// //   useEffect(() => {
// //     fetchCandidates(1);
// //   }, [fetchCandidates]);

// //   // Row renderer
// //   const RowComponent = ({ index, style, candidates }) => {
// //     const candidate = candidates[index];

// //     return (
// //       <div style={style} className="p-2 border-b border-gray-200">
// //         <p className="font-semibold">{candidate.name}</p>
// //         <p className="text-sm text-gray-600">{candidate.email}</p>
// //         <p className="text-xs text-blue-500">Stage: {candidate.stage}</p>
// //       </div>
// //     );
// //   };

// //   return (
// //     <List
// //       rowComponent={RowComponent}
// //       rowCount={candidates.length}
// //       rowHeight={72}
// //       rowProps={{ candidates }}
// //       style={{ width: "100%", height: 600 }}
// //       // 🔑 Trigger fetch only when last item is visible
// //       onItemsRendered={({ visibleStopIndex }) => {
// //         if (
// //           visibleStopIndex === candidates.length - 1 && // last element is visible
// //           hasMore &&
// //           !loading
// //         ) {
// //           fetchCandidates(page);
// //         }
// //       }}
// //     />
// //   );
// // }



// // import React, { useState, useEffect, useCallback } from "react";
// // import { List } from "react-window";

// // export default function CandidatesVirtualized() {
// //   const [candidates, setCandidates] = useState([]);
// //   const [page, setPage] = useState(1);
// //   const [total, setTotal] = useState(0);
// //   const [loading, setLoading] = useState(false);
// //   const [hasMore, setHasMore] = useState(true);

// //   const pageSize = 50;

// //   // API fetch - always uses current page
// //   const fetchCandidates = useCallback(async () => {
// //     if (loading || !hasMore) return;
// //     setLoading(true);

// //     try {
// //       const res = await fetch(`/candidates?page=${page}&pageSize=${pageSize}`);
// //       const data = await res.json();

// //       // API expected response: { data, total, hasMore }
// //       setCandidates((prev) => [...prev, ...data.data]);
// //       setTotal(data.total);
// //       setHasMore(data.hasMore);

// //       // ✅ increment page AFTER success
// //       setPage((prev) => prev + 1);
// //     } catch (err) {
// //       console.error("Failed to fetch candidates:", err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   }, [page, loading, hasMore]);

// //   // Initial load
// //   useEffect(() => {
// //     fetchCandidates();
// //   }, []); // only run once

// //   // Row renderer
// //   const RowComponent = ({ index, style, candidates }) => {
// //     const candidate = candidates[index];
// //     if (!candidate) return null;

// //     return (
// //       <div style={style} className="p-2 border-b border-gray-200">
// //         <p className="font-semibold">{candidate.name}</p>
// //         <p className="text-sm text-gray-600">{candidate.email}</p>
// //         <p className="text-xs text-blue-500">Stage: {candidate.stage}</p>
// //       </div>
// //     );
// //   };

// //   return (
// //     <List
// //       rowComponent={RowComponent}
// //       rowCount={candidates.length}
// //       rowHeight={72}
// //       rowProps={{ candidates }}
// //       style={{ width: "100%", height: 600 }}
// //       // 🔑 Trigger fetch only when last item is visible
// //       onItemsRendered={({ visibleStopIndex }) => {
// //         if (
// //           visibleStopIndex === candidates.length - 1 && // last element is visible
// //           hasMore &&
// //           !loading
// //         ) {
// //           fetchCandidates();
// //         }
// //       }}
// //     />
// //   );
// // }


// import React, { useState, useEffect } from "react";
// import { List } from "react-window";

// export default function CandidatesVirtualized() {
//   const [candidates, setCandidates] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // Fetch all candidates at once
//   useEffect(() => {
//     const fetchAllCandidates = async () => {
//       setLoading(true);
//       try {
//         const res = await fetch("/candidates/all");
//         const data = await res.json();
//         setCandidates(data.data || []);
//       } catch (err) {
//         console.error("Failed to fetch all candidates:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAllCandidates();
//   }, []);

//   // Row renderer
//   const RowComponent = ({ index, style, candidates }) => {
//     const candidate = candidates[index];
//     if (!candidate) return null;

//     return (
//       <div style={style} className="p-2 border-b border-gray-200">
//         <p className="font-semibold">{candidate.name}</p>
//         <p className="text-sm text-gray-600">{candidate.email}</p>
//         <p className="text-xs text-blue-500">Stage: {candidate.stage}</p>
//       </div>
//     );
//   };

//   if (loading) {
//     return <p className="p-4 text-center text-gray-600">Loading candidates…</p>;
//   }

//   return (
//     <List
//       rowComponent={RowComponent}
//       rowCount={candidates.length}
//       rowHeight={72}
//       rowProps={{ candidates }}
//       style={{ width: "100%", height: 600 }}
//     />
//   );
// }



// // src/pages/candidates/CandidatesVirtualized.jsx

// // src/pages/candidates/CandidatesVirtualized.jsx
// import  { useState, useEffect, useCallback, useMemo } from "react";
// import { FixedSizeList as List } from "react-window";

// src/pages/CandidatesVirtualized.jsx
// src/pages/CandidatesVirtualized.jsx
// src/pages/CandidatesVirtualized.jsx




import  { useState, useEffect, useCallback, useMemo } from "react";
import { FixedSizeList } from "react-window";
import { InfiniteLoader } from "react-window-infinite-loader";
import { Link } from "react-router-dom";




export default function CandidatesVirtualized({ loadMoreCallback }) {
  const [candidates, setCandidates] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  // Fetch initial + paginated candidates
  const fetchCandidates = useCallback(async () => {
    try {
      const res = await loadMoreCallback(page);
      // 👆 Expecting API-like result: { data: Candidate[], total: number }
      setCandidates(prev => [...prev, ...res.data]);
      setTotal(res.total);
    } catch (err) {
      console.error("Failed to fetch candidates:", err);
    }
  }, [page, loadMoreCallback]);

  useEffect(() => {
    fetchCandidates();
  }, [fetchCandidates]);

  // Client-side filtering (name/email)
  const filteredCandidates = useMemo(() => {
    if (!search.trim()) return candidates;
    return candidates.filter(c =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase())
    );
  }, [candidates, search]);

  // Virtualized Row renderer
  const Row = ({ index, style }) => {
    const candidate = filteredCandidates[index];
    if (!candidate) return null;

    return (
      <div
        style={style}
        className="flex justify-between items-center px-4 py-2 border-b border-gray-200 dark:border-gray-700"
      >
        <div>
          <div className="font-medium text-gray-900 dark:text-gray-100">{candidate.name}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">{candidate.email}</div>
        </div>
        <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
          {candidate.stage}
        </span>
      </div>
    );
  };

  return (
    <div className="h-full flex flex-col">
      {/* 🔍 Search input */}
      <div className="p-3 border-b border-gray-200 dark:border-gray-700">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search by name or email..."
          className="w-full rounded-md border px-3 py-2 text-sm dark:bg-slate-800 dark:text-white"
        />
      </div>

      {/* Virtualized List */}
      {/* <List
        height={600}
        itemCount={filteredCandidates.length}
        itemSize={64}
        width="100%"
      >
        {Row}
      </List> */}
      import FixedSizeList from "react-window";

<FixedSizeList
  height={600}
  itemCount={filteredCandidates.length}
  itemSize={64}
  width="100%"
>
  {Row}
</FixedSizeList>

    </div>
  );
}









// import React, { useState, useEffect, useCallback, useMemo } from "react";
// import { FixedSizeList } from "react-window"; // ✅ correct import
// import { Link } from "react-router-dom";

// export default function CandidatesVirtualized({ loadMoreCallback }) {
//   const [candidates, setCandidates] = useState([]);
//   const [total, setTotal] = useState(0);
//   const [page, setPage] = useState(1);
//   const [search, setSearch] = useState("");

//   // Fetch initial + paginated candidates
//   const fetchCandidates = useCallback(async () => {
//     try {
//       const res = await loadMoreCallback(page);
//       // 👆 Expecting API-like result: { data: Candidate[], total: number }
//       setCandidates((prev) => [...prev, ...res.data]);
//       setTotal(res.total);
//     } catch (err) {
//       console.error("Failed to fetch candidates:", err);
//     }
//   }, [page, loadMoreCallback]);

//   useEffect(() => {
//     fetchCandidates();
//   }, [fetchCandidates]);

//   // Client-side filtering (name/email)
//   const filteredCandidates = useMemo(() => {
//     if (!search.trim()) return candidates;
//     return candidates.filter(
//       (c) =>
//         c.name.toLowerCase().includes(search.toLowerCase()) ||
//         c.email.toLowerCase().includes(search.toLowerCase())
//     );
//   }, [candidates, search]);

//   // Virtualized Row renderer
//   const Row = ({ index, style }) => {
//     const candidate = filteredCandidates[index];
//     if (!candidate) return null;

//     return (
//       <div
//         style={style}
//         className="flex justify-between items-center px-4 py-2 border-b border-gray-200 dark:border-gray-700"
//       >
//         <div>
//           <div className="font-medium text-gray-900 dark:text-gray-100">
//             {candidate.name}
//           </div>
//           <div className="text-sm text-gray-500 dark:text-gray-400">
//             {candidate.email}
//           </div>
//         </div>
//         <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
//           {candidate.stage}
//         </span>
//       </div>
//     );
//   };

//   return (
//     <div className="h-full flex flex-col">
//       {/* 🔍 Search input */}
//       <div className="p-3 border-b border-gray-200 dark:border-gray-700">
//         <input
//           type="text"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           placeholder="Search by name or email..."
//           className="w-full rounded-md border px-3 py-2 text-sm dark:bg-slate-800 dark:text-white"
//         />
//       </div>

//       {/* Virtualized List */}
//       <FixedSizeList
//         height={600}
//         itemCount={filteredCandidates.length}
//         itemSize={64}
//         width="100%"
//       >
//         {Row}
//       </FixedSizeList>
//     </div>
//   );
// }
