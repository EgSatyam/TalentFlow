// import { useState, useMemo, useCallback, useOptimistic, startTransition } from "react";
// import CreateJobModal from "../../components/CreateJobModal";
// import EditJobModal from "../../components/EditJobModal";
// import Toast from "../../components/Toast";
// import JobDetailsModal from "../../components/JobDetailsModal";
// import JobFilters from "./JobFilters";
// import JobList from "./JobList";
// import Pagination from "./Pagination";
// import { useJobs } from "./hooks/useJobs";

// export default function Jobs() {
//   const [toasts, setToasts] = useState([]);
//   const [query, setQuery] = useState("");
//   const [statusFilter, setStatusFilter] = useState("");
//   const [tagFilter, setTagFilter] = useState("");
//   const [sortBy, setSortBy] = useState("newest");
//   const [viewMode, setViewMode] = useState("grid");
//   const [page, setPage] = useState(1);
//   const pageSize = 6;

//   const { jobs, setJobs, total, existingSlugs } = useJobs({
//     query,
//     statusFilter,
//     tagFilter,
//     page,
//     pageSize,
//   });

//   const [openCreate, setOpenCreate] = useState(false);
//   const [openEdit, setOpenEdit] = useState(false);
//   const [editingJob, setEditingJob] = useState(null);
//   const [detailsJob, setDetailsJob] = useState(null);
//   const [loadingStates, setLoadingStates] = useState({});

//   const pushToast = useCallback((toast) => {
//     const id = Date.now() + Math.floor(Math.random() * 1000);
//     setToasts((prev) => [...prev, { id, ...toast }]);
//   }, []);

//   const [optimisticJobs, addOptimisticJobUpdate] = useOptimistic(
//     jobs,
//     (state, action) => {
//       switch (action.type) {
//         case "archive":
//           return state.map((job) =>
//             job.id === action.jobId
//               ? { ...job, status: job.status === "active" ? "archived" : "active" }
//               : job
//           );
//         case "delete":
//           return state.filter((job) => job.id !== action.jobId);
//         case "reorder":
//           const newJobs = [...state];
//           const [reorderedJob] = newJobs.splice(action.from, 1);
//           newJobs.splice(action.to, 0, reorderedJob);
//           return newJobs;
//         default:
//           return state;
//       }
//     }
//   );

//   const toggleArchive = async (job) => {
//     startTransition(() => {
//       addOptimisticJobUpdate({ type: "archive", jobId: job.id });
//     });
//     setLoadingStates((prev) => ({ ...prev, [`archive-${job.id}`]: true }));
    
//     try {
//       const updatedStatus = job.status === "active" ? "archived" : "active";
      
//       await fetch(`/jobs/${job.id}`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ status: updatedStatus }),
//       });
      
//       setJobs((prevJobs) =>
//         prevJobs.map((j) => (j.id === job.id ? { ...j, status: updatedStatus } : j))
//       );
      
//       pushToast({
//         type: "success",
//         title: "Job Updated!",
//         message: `${job.title} has been ${updatedStatus === "archived" ? "archived" : "unarchived"}.`,
//       });
//     } catch (error) {
//       pushToast({
//         type: "error",
//         title: "Update Failed",
//         message: "Could not update job status.",
//       });
//       setJobs(jobs);
//     } finally {
//       setLoadingStates((prev) => ({ ...prev, [`archive-${job.id}`]: false }));
//     }
//   };

//   const handleDelete = async (job) => {
//     startTransition(() => {
//       addOptimisticJobUpdate({ type: "delete", jobId: job.id });
//     });
//     setLoadingStates((prev) => ({ ...prev, [`delete-${job.id}`]: true }));
//     try {
//       await fetch(`/jobs/${job.id}`, {
//         method: "DELETE",
//       });
//       setJobs((prevJobs) => prevJobs.filter((j) => j.id !== job.id));
//       pushToast({
//         type: "success",
//         title: "Job Deleted!",
//         message: `${job.title} has been successfully deleted.`,
//       });
//     } catch (error) {
//       pushToast({
//         type: "error",
//         title: "Deletion Failed",
//         message: "Could not delete the job.",
//       });
//       setJobs(jobs);
//     } finally {
//       setLoadingStates((prev) => ({ ...prev, [`delete-${job.id}`]: false }));
//     }
//   };
  
//   const handleReorder = async (from, to) => {
//     // startTransition(() => {
//       addOptimisticJobUpdate({ type: "reorder", from, to });
//     // });

//     const newJobs = [...jobs];
//     const [reorderedJob] = newJobs.splice(from, 1);
//     newJobs.splice(to, 0, reorderedJob);
//     startTransition(async () => {
//     try {
//       await fetch(`/jobs/${reorderedJob.id}/reorder`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ fromOrder: from, toOrder: to }),
//       });

//       setJobs(newJobs);

//       pushToast({
//         type: "success",
//         title: "Reorder Successful!",
//         message: "Jobs have been reordered.",
//       });
//     } catch (error) {
//       pushToast({
//         type: "error",
//         title: "Reorder Failed",
//         message: "Could not reorder jobs. Changes have been rolled back.",
//       });
//       setJobs(jobs);
//     }
//     })
//   };

//   const handleCreated = async (newJob) => {
//     try {
//       const response = await fetch("/jobs", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newJob),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to create job");
//       }

//       const createdJob = await response.json();
//       setJobs((prevJobs) => [createdJob, ...prevJobs]);
//       pushToast({
//         type: "success",
//         title: "Job created!",
//         message: `${createdJob.title} has been successfully added.`,
//       });
//       setOpenCreate(false);
//     } catch (error) {
//       pushToast({
//         type: "error",
//         title: "Creation Failed",
//         message: "Could not create job.",
//       });
//     }
//   };

//   const sortedJobs = useMemo(() => {
//     const sorted = [...optimisticJobs];
//     switch (sortBy) {
//       case "newest":
//         return sorted.sort((a, b) => b.id - a.id);
//       case "oldest":
//         return sorted.sort((a, b) => a.id - b.id);
//       default:
//         return sorted;
//     }
//   }, [optimisticJobs, sortBy]);

//   const allTags = useMemo(
//     () => Array.from(new Set(jobs.flatMap((job) => job.tags || []))),
//     [jobs]
//   );
//   const totalPages = Math.ceil(total / pageSize) || 1;

//   return (
//     <div className="flex flex-col min-h-screen">
//       <JobFilters
//         query={query}
//         setQuery={setQuery}
//         statusFilter={statusFilter}
//         setStatusFilter={setStatusFilter}
//         tagFilter={tagFilter}
//         setTagFilter={setTagFilter}
//         sortBy={sortBy}
//         setSortBy={setSortBy}
//         allTags={allTags}
//         viewMode={viewMode}
//         toggleViewMode={() =>
//           setViewMode((m) => (m === "grid" ? "list" : "grid"))
//         }
//         onCreate={() => setOpenCreate(true)}
//       />

//       <JobList
//         jobs={sortedJobs}
//         viewMode={viewMode}
//         onReorder={handleReorder}
//         onArchive={toggleArchive}
//         onEdit={(job) => {
//           setEditingJob(job);
//           setOpenEdit(true);
//         }}
//         onDelete={handleDelete}
//         onDetails={setDetailsJob}
//         loadingStates={loadingStates}
//       />

//       <Pagination page={page} setPage={setPage} totalPages={totalPages} />

//       <CreateJobModal
//         open={openCreate}
//         onClose={() => setOpenCreate(false)}
//         onCreated={handleCreated}
//         existingSlugs={existingSlugs}
//       />
//       <EditJobModal
//         open={openEdit}
//         onClose={() => setOpenEdit(false)}
//         onUpdated={(updatedJob) => {
//           setJobs((prevJobs) =>
//             prevJobs.map((j) => (j.id === updatedJob.id ? updatedJob : j))
//           );
//           pushToast({
//             type: "success",
//             title: "Job Updated!",
//             message: `${updatedJob.title} has been successfully updated.`,
//           });
//         }}
//         job={editingJob}
//         existingSlugs={existingSlugs}
//       />
//       <JobDetailsModal
//         open={!!detailsJob}
//         onClose={() => setDetailsJob(null)}
//         job={detailsJob}
//         onArchive={toggleArchive}
//         onDelete={handleDelete}
//         onEdit={(job) => {
//           setEditingJob(job);
//           setOpenEdit(true);
//         }}
//       />
//       <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
//         {toasts.map((toast) => (
//           <Toast
//             key={toast.id}
//             {...toast}
//             onClose={() =>
//               setToasts((prev) => prev.filter((t) => t.id !== toast.id))
//             }
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

import { useState, useMemo, useCallback, useOptimistic, startTransition } from "react";
import CreateJobModal from "../../components/CreateJobModal";
import EditJobModal from "../../components/EditJobModal";
import Toast from "../../components/Toast";
import JobDetailsModal from "../../components/JobDetailsModal";
import JobFilters from "./JobFilters";
import JobList from "./JobList";
import Pagination from "./Pagination";
import { useJobs } from "./hooks/useJobs";

export default function Jobs() {
  const [toasts, setToasts] = useState([]);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [tagFilter, setTagFilter] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState("grid");
  const [page, setPage] = useState(1);
  const pageSize = 6;

  const { jobs, setJobs, total, existingSlugs } = useJobs({
    query,
    statusFilter,
    tagFilter,
    page,
    pageSize,
  });

  const [openCreate, setOpenCreate] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [detailsJob, setDetailsJob] = useState(null);
  const [loadingStates, setLoadingStates] = useState({});

  const pushToast = useCallback((toast) => {
    const id = Date.now() + Math.floor(Math.random() * 1000);
    setToasts((prev) => [...prev, { id, ...toast }]);
  }, []);

  const [optimisticJobs, addOptimisticJobUpdate] = useOptimistic(
    jobs,
    (state, action) => {
      switch (action.type) {
        case "archive":
          return state.map((job) =>
            job.id === action.jobId
              ? { ...job, status: job.status === "active" ? "archived" : "active" }
              : job
          );
        case "delete":
          return state.filter((job) => job.id !== action.jobId);
        case "reorder":
          const newJobs = [...state];
          const [reorderedJob] = newJobs.splice(action.from, 1);
          newJobs.splice(action.to, 0, reorderedJob);
          return newJobs;
        case "swap": {
        const { fromId, toId } = action;
        const fromJob = state.find((job) => job.id === fromId);
        const toJob = state.find((job) => job.id === toId);

        if (!fromJob || !toJob) return state; // safety

        // Swap their order values
        const final = state.map((job) => {
          if (job.id === fromId) return { ...job, order: toJob.order };
          if (job.id === toId) return { ...job, order: fromJob.order };
          return job;
        });
        
        const sortedjob = [...final].sort((a,b)=>(a.order - b.order))
        console.log("sorted: s",sortedjob) 
        return sortedjob
      }
        default:
          return state;
      }
    }
  );

  const toggleArchive = async (job) => {
    startTransition(() => {
      addOptimisticJobUpdate({ type: "archive", jobId: job.id });
    });
    setLoadingStates((prev) => ({ ...prev, [`archive-${job.id}`]: true }));

    try {
      const updatedStatus = job.status === "active" ? "archived" : "active";

      await fetch(`/jobs/${job.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: updatedStatus }),
      });

      setJobs((prevJobs) =>
        prevJobs.map((j) => (j.id === job.id ? { ...j, status: updatedStatus } : j))
      );

      pushToast({
        type: "success",
        title: "Job Updated!",
        message: `${job.title} has been ${updatedStatus === "archived" ? "archived" : "unarchived"}.`,
      });
    } catch {
      pushToast({
        type: "error",
        title: "Update Failed",
        message: "Could not update job status.",
      });
      setJobs(jobs);
    } finally {
      setLoadingStates((prev) => ({ ...prev, [`archive-${job.id}`]: false }));
    }
  };

  const handleDelete = async (job) => {
    startTransition(() => {
      addOptimisticJobUpdate({ type: "delete", jobId: job.id });
    });
    setLoadingStates((prev) => ({ ...prev, [`delete-${job.id}`]: true }));

    try {
      await fetch(`/jobs/${job.id}`, { method: "DELETE" });
      setJobs((prevJobs) => prevJobs.filter((j) => j.id !== job.id));
      pushToast({
        type: "success",
        title: "Job Deleted!",
        message: `${job.title} has been successfully deleted.`,
      });
    } catch {
      pushToast({
        type: "error",
        title: "Deletion Failed",
        message: "Could not delete the job.",
      });
      setJobs(jobs);
    } finally {
      setLoadingStates((prev) => ({ ...prev, [`delete-${job.id}`]: false }));
    }
  };

  const handleReorder = async (fromJob, toJob) => {
    console.log(fromJob,toJob)
    addOptimisticJobUpdate({ type: "swap", fromId:fromJob.id, toId:toJob.id});

    startTransition(async()=>{
    try {
      await fetch("/jobs/reorder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
     body: JSON.stringify({ fromId: fromJob.id, toId: toJob.id }),
    });

      // On success: sync actual jobs state
      setJobs((prev) =>
        prev.map((j) =>
          j.id === fromJob.id
            ? { ...j, order: toJob.order }
            : j.id === toJob.id
            ? { ...j, order: fromJob.order }
            : j
        ).sort((a, b) => a.order - b.order)
      );
    pushToast({
      type: "success",
      title: "Reorder Successful!",
      message: "Jobs have been reordered.",
    });
    } catch(err) {
      console.log(err)
      pushToast({
        type: "error",
        title: "Reorder Failed",
        message: "Could not reorder jobs. Changes rolled back.",
      });
    }
    })
  };
  // const handleReorder = async (fromJob, toJob) => {
  //   console.log(fromJob,toJob)
  //   addOptimisticJobUpdate({ type: "swap", fromId:fromJob.id, toId:toJob.id});

  //   startTransition(async()=>{
  //   try {
  //     await fetch(`/jobs/reorder`, {
  //       method: "POST", // ✅ fixed to match handlers.js
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ order: jobs.map((j) => j.id) }),
  //     });

  //     setJobs((prev) => {
  //       console.log("prev:",prev)
  //       return optimisticJobs})

  //     pushToast({
  //       type: "success",
  //       title: "Reorder Successful!",
  //       message: "Jobs have been reordered.",
  //     });
  //   } catch(err) {
  //     console.log(err)
  //     pushToast({
  //       type: "error",
  //       title: "Reorder Failed",
  //       message: "Could not reorder jobs. Changes rolled back.",
  //     });
  //   }
  //   })
  // };

  const handleCreated = async (newJob) => {
    try {
      const response = await fetch("/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newJob),
      });

      if (!response.ok) throw new Error("Failed to create job");

      const createdJob = await response.json();
      setJobs((prevJobs) => [createdJob, ...prevJobs]);
      pushToast({
        type: "success",
        title: "Job created!",
        message: `${createdJob.title} has been successfully added.`,
      });
      setOpenCreate(false);
    } catch {
      pushToast({
        type: "error",
        title: "Creation Failed",
        message: "Could not create job.",
      });
    }
  };

  // const sortedJobs = useMemo(() => {
  //   const sorted = [...optimisticJobs];
  //   switch (sortBy) {
  //     case "newest":
  //       return sorted.sort((a, b) => b.id - a.id);
  //     case "oldest":
  //       return sorted.sort((a, b) => a.id - b.id);
  //     default:
  //       return sorted;
  //   }
  // }, [optimisticJobs, sortBy]);

  const allTags = useMemo(
    () => Array.from(new Set(jobs.flatMap((job) => job.tags || []))),
    [jobs]
  );
  const totalPages = Math.ceil(total / pageSize) || 1;

  return (
    <div className="flex flex-col min-h-screen">
      <JobFilters
        query={query}
        setQuery={setQuery}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        tagFilter={tagFilter}
        setTagFilter={setTagFilter}
        sortBy={sortBy}
        setSortBy={setSortBy}
        allTags={allTags}
        viewMode={viewMode}
        toggleViewMode={() => setViewMode((m) => (m === "grid" ? "list" : "grid"))}
        onCreate={() => setOpenCreate(true)}
      />

      <JobList
        jobs={optimisticJobs}
        viewMode={viewMode}
        onReorder={handleReorder}
        onArchive={toggleArchive}
        onEdit={(job) => {
          setEditingJob(job);
          setOpenEdit(true);
        }}
        onDelete={handleDelete}
        onDetails={setDetailsJob}
        loadingStates={loadingStates}
      />

      <Pagination page={page} setPage={setPage} totalPages={totalPages} />

      <CreateJobModal
        open={openCreate}
        onClose={() => setOpenCreate(false)}
        onCreated={handleCreated}
        existingSlugs={existingSlugs}
      />
      <EditJobModal
        open={openEdit}
        onClose={() => setOpenEdit(false)}
        onUpdated={(updatedJob) => {
          setJobs((prevJobs) =>
            prevJobs.map((j) => (j.id === updatedJob.id ? updatedJob : j))
          );
          pushToast({
            type: "success",
            title: "Job Updated!",
            message: `${updatedJob.title} has been successfully updated.`,
          });
        }}
        job={editingJob}
        existingSlugs={existingSlugs}
      />
      <JobDetailsModal
        open={!!detailsJob}
        onClose={() => setDetailsJob(null)}
        job={detailsJob}
        onArchive={toggleArchive}
        onDelete={handleDelete}
        onEdit={(job) => {
          setEditingJob(job);
          setOpenEdit(true);
        }}
      />
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            {...toast}
            onClose={() =>
              setToasts((prev) => prev.filter((t) => t.id !== toast.id))
            }
          />
        ))}
      </div>
    </div>
  );
}
