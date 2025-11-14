import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/notes`);
      setNotes(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch notes. Check API connection.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      setError('Title and content are required');
      return;
    }

    try {
      if (editingId) {
        await axios.put(`${API_URL}/notes/${editingId}`, { title, content });
      } else {
        await axios.post(`${API_URL}/notes`, { title, content });
      }
      setTitle('');
      setContent('');
      setEditingId(null);
      setError('');
      fetchNotes();
    } catch (err) {
      setError('Failed to save note');
    }
  };

  const handleEdit = (note) => {
    setTitle(note.title);
    setContent(note.content);
    setEditingId(note._id);
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this note?')) return;
    try {
      await axios.delete(`${API_URL}/notes/${id}`);
      fetchNotes();
    } catch (err) {
      setError('Failed to delete note');
    }
  };

  const handleCancel = () => {
    setTitle('');
    setContent('');
    setEditingId(null);
    setError('');
  };

  return (
    <div className="app">
      <header>
        <h1>📝 Notes App</h1>
        <p>Create, Read, Update, Delete Notes</p>
      </header>

      <div className="container">
        <form onSubmit={handleSubmit} className="note-form">
          <h2>{editingId ? 'Edit Note' : 'Create New Note'}</h2>
          {error && <div className="error">{error}</div>}
          <input
            type="text"
            placeholder="Note Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Note Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="5"
            required
          />
          <div className="form-actions">
            <button type="submit" className="btn-primary">
              {editingId ? '✏️ Update' : '➕ Add Note'}
            </button>
            {editingId && (
              <button type="button" onClick={handleCancel} className="btn-secondary">
                ❌ Cancel
              </button>
            )}
          </div>
        </form>

        <div className="notes-section">
          <h2>My Notes ({notes.length})</h2>
          {loading ? (
            <p className="loading">Loading notes...</p>
          ) : notes.length === 0 ? (
            <p className="empty">No notes yet. Create your first note!</p>
          ) : (
            <div className="notes-grid">
              {notes.map((note) => (
                <div key={note._id} className="note-card">
                  <h3>{note.title}</h3>
                  <p>{note.content}</p>
                  <div className="note-actions">
                    <button onClick={() => handleEdit(note)} className="btn-edit">
                      ✏️ Edit
                    </button>
                    <button onClick={() => handleDelete(note._id)} className="btn-delete">
                      🗑️ Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
