// import axios from "axios";

// export async function fetchCandidatesFromBackend({ page = 1, pageSize = 50, jobId = null }) {
//   const params = {
//     page,
//     pageSize,
//   };
//   if (jobId !== null) {
//     params.jobId = jobId;
//   }

//   const response = await axios.get("/api/candidates", { params });
//   // response.data expected shape: { data: [...], total: N }
//   return {
//     data: response.data.data,
//     total: response.data.total,
//   };
// }





// src/helpers/api.js
// This is a helper to call your backend candidates API

export async function fetchCandidatesFromBackend({ page = 1, pageSize = 50, jobId = null }) {
  const query = new URLSearchParams();
  query.set("page", page);
  query.set("pageSize", pageSize);
  if (jobId != null) {
    query.set("jobId", jobId);
  }

  console.log("[LOG] Calling backend API:", `/api/candidates?${query.toString()}`);

  const response = await fetch(`/api/candidates?${query.toString()}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    console.error("[ERROR] Backend API failed:", response.status, response.statusText);
    throw new Error("Failed to fetch candidates");
  }

  const json = await response.json();
  console.log("[LOG] API response:", json);

  // Expect shape: { data: [...], total: number }
  return {
    data: json.data,
    total: json.total,
  };
}
