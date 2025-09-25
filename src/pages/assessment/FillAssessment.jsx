import React, { useState, useEffect } from "react";
import PreviewForm from "./PreviewForm";

export default function FillAssessment({ jobId = "job-1", candidateId = "cand-123" }) {
  const [assessment, setAssessment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        const res = await fetch(`/assessments/${jobId}`);
        if (!res.ok) throw new Error("Failed to load assessment");
        const data = await res.json();
        if (mounted) setAssessment(data);
      } catch (err) {
        console.error("Error fetching assessment:", err);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => (mounted = false);
  }, [jobId]);

  const handleSubmit = async (values) => {
    try {
      const res = await fetch(`/assessments/${jobId}/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ candidateId, response: values }),
      });
      if (!res.ok) throw new Error("Submit failed");
      alert("✅ Submission saved locally!");
    } catch (err) {
      alert("❌ Failed to save submission");
      console.error(err);
    }
  };

  if (loading) return <div className="p-4">Loading assessment...</div>;
  if (!assessment) return <div className="p-4">No assessment found</div>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Fill Assessment</h1>
      <PreviewForm assessment={assessment} onSubmit={handleSubmit} />
    </div>
  );
}
