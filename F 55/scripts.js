// Save events to localStorage (simulate a database)
document.getElementById('eventForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const event = {
      title: document.getElementById('eventTitle').value,
      desc: document.getElementById('eventDesc').value,
      date: document.getElementById('eventDate').value
    };
  
    // Get existing events or init empty array
    const events = JSON.parse(localStorage.getItem('events')) || [];
    events.push(event);
    localStorage.setItem('events', JSON.stringify(events));
  
    alert('Event posted successfully!');
    this.reset();
  });