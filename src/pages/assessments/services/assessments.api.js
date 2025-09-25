// import axios from "../../../services/axios";

import axios from "axios";

// // ✅ Fetch assessment for a job
// export async function getAssessment(jobId) {
//   try {
//     const response = await axios.get(`/assessments/${jobId}`);
//     return response.data;
//   } catch (err) {
//     console.error("[getAssessment] error:", err);

//     if (err.response?.status === 404) {
//       throw new Error("Assessment not found");
//     }
//     throw new Error("Failed to fetch assessment");
//   }
// }

// // ✅ Save (create or update) assessment for a job
// export async function saveAssessment(jobId, data) {
//   try {
//     // const response = await axios.put(`/assessments/${jobId}`, data);
//     //saving assesments on localStorage as mentioned in the requiremnts 
//     return true
//     // return response.data
//   } catch (err) {
//     console.error("[saveAssessment] error:", err);

//     if (err.response?.data?.error) {
//       throw new Error(err.response.data.error);
//     }
//     throw new Error("Failed to save assessment");
//   }
// }

// export async function loadSampleAssessment(type) {
//   console.log("Fetching sample assessment:", type);

//   try {
//     const res = await fetch(`/axios/sample-assessments/${type}`);
//     if (!res.ok) {
//       throw new Error(`Failed to fetch sample assessment: ${res.status}`);
//     }
//     const data = await res.json();
//     console.log("Sample assessment loaded from axios:", data);
//     return data;
//   } catch (err) {
//     console.error("Error loading sample assessment from axios:", err);
//     throw dexieErr;
    
//   }
// }




// export async function getAssessment(jobId) {
//   try {
//     const response = await fetch(`/assessments/${jobId}`);
//     return response.data;
//   } catch (err) {
//     console.error("[getAssessment] error:", err);

//     if (err.response?.status === 404) {
//       throw new Error("Assessment not found");
//     }
//     throw new Error("Failed to fetch assessment");
//   }
// }

// export async function saveAssessment(jobId, data) {
//   try {
//     const response = await axios.put(`/assessments/${jobId}`, data);
//     return response.data;
//   } catch (err) {
//     console.error("[saveAssessment] error:", err);

//     if (err.response?.data?.error) {
//       throw new Error(err.response.data.error);
//     }
//     throw new Error("Failed to save assessment");
//   }
// }

// export async function loadSampleAssessment(type) {
//   try {
//     const response = await axios.get(`/sample-assessments/${type}`);
//     return response.data;
//   } catch (err) {
//     console.error("[loadSampleAssessment] error:", err);
//     throw new Error("Failed to load sample assessment");
//   }
// }

// export async function submitAssessment(jobId, data) {
//   try {
//     const response = await axios.post(`/assessments/${jobId}/submit`, data);
//     return response.data;
//   } catch (err) {
//     console.error("[submitAssessment] error:", err);

//     if (err.response?.data?.error) {
//       throw new Error(err.response.data.error);
//     }
//     throw new Error("Failed to submit assessment");
//   }
// }



export async function getAssessment(jobId) {
  try {
    const response = await fetch(`/assessments/${jobId}`);
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("Assessment not found");
      }
      throw new Error("Failed to fetch assessment");
    }
    const json = await response.json();
    console.log("json: ", json)
    return 
  } catch (err) {
    console.error("[getAssessment] error:", err);
    throw err;
  }
}

export async function saveAssessment(jobId, data) {
  try {
    const response = await fetch(`/assessments/${jobId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      if (errorData?.error) throw new Error(errorData.error);
      throw new Error("Failed to save assessment");
    }
    return await response.json();
  } catch (err) {
    console.error("[saveAssessment] error:", err);
    throw err;
  }
}

export async function loadSampleAssessment(type) {
  try {
    const response = await fetch(`/sample-assessments/${type}`);
    if (!response.ok) {
      throw new Error("Failed to load sample assessment");
    }
    return await response.json();
  } catch (err) {
    console.error("[loadSampleAssessment] error:", err);
    throw err;
  }
}

export async function submitAssessment(jobId, data) {
  try {
    const response = await fetch(`/assessments/${jobId}/submit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      if (errorData?.error) throw new Error(errorData.error);
      throw new Error("Failed to submit assessment");
    }
    return await response.json();
  } catch (err) {
    console.error("[submitAssessment] error:", err);
    throw err;
  }
}
