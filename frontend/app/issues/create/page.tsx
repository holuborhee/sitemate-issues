// /app/issues/create/page.js
'use client';
import { useRouter } from 'next/navigation';
import IssueForm from '../../../components/IssueForm';
import { createIssue } from '../../../lib/api';

export default function CreateIssue() {
  const router = useRouter();

  const handleSubmit = async (issue) => {
    await createIssue(issue);
    router.push('/');
  };

  return (
    <main>
      <h1>Create Issue</h1>
      <IssueForm onSubmit={handleSubmit} />
    </main>
  );
}
