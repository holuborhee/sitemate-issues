// /components/IssueList.js
'use client';
import { useEffect, useState } from 'react';
import { fetchIssues, deleteIssue } from '../lib/api';
import Link from 'next/link'

export default function IssueList() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const loadIssues = async () => {
      const data = await fetchIssues();
      setIssues(data);
    };
    loadIssues();
  }, []);

  const handleDelete = async (id) => {
    await deleteIssue(id);
    setIssues(issues.filter(issue => issue.id !== id));
  };

  return (
    <div>
      {issues.map((issue) => (
        <Link href={`issues/${issue.id}`} key={issue.id}>
          <h2>{issue.title}</h2>
          <p>{issue.description}</p>
          <button onClick={() => handleDelete(issue.id)}>Delete</button>
        </Link>
      ))}
    </div>
  );
};
