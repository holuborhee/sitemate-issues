// /lib/api.js
export const fetchIssues = async () => {
    const response = await fetch('http://localhost:3000/issues');
    return response.json();
  };
  
  export const fetchIssue = async (id) => {
    const response = await fetch(`http://localhost:3000/issues/${id}`);
    return response.json();
  };
  
  export const createIssue = async (issue) => {
    const response = await fetch('http://localhost:3000/issues', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(issue),
    });
    return response.json();
  };
  
  export const updateIssue = async (id, issue) => {
    const response = await fetch(`http://localhost:3000/issues/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(issue),
    });
    return response.json();
  };
  
  export const deleteIssue = async (id) => {
    await fetch(`http://localhost:3000/issues/${id}`, { method: 'DELETE' });
  };
  