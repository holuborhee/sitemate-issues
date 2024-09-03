// /app/issues/[id]/page.js
'use client';
import { useRouter, useParams } from 'next/navigation';
import IssueForm from '../../../components/IssueForm';
import { fetchIssue, updateIssue } from '../../../lib/api';
import { useEffect, useState } from 'react';

export default function IssueDetail() {
  const { id } = useParams();
  const router = useRouter();
  const [issue, setIssue] = useState(null);

  useEffect(() => {
    const loadIssue = async () => {
      const data = await fetchIssue(id);
      setIssue(data);
    };
    loadIssue();
  }, [id]);

  const handleSubmit = async (updatedIssue) => {
    await updateIssue(id, updatedIssue);
    router.push('/');
  };

  if (!issue) return <p>Loading...</p>;

  return (
    <main>
      <h1>Edit Issue</h1>
      <IssueForm onSubmit={handleSubmit} initialData={issue} />
    </main>
  );
}
