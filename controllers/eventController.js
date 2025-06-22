// backend/controllers/eventController.js
const db = require('../../../db');

exports.createEvent = async (req, res) => {
  const { title, description, timeSlots, maxBookingsPerSlot } = req.body;

  try {
    // 1. Insert into events table
    const result = await db.query(
      'INSERT INTO events (title, description, max_bookings_per_slot) VALUES ($1, $2, $3) RETURNING *',
      [title, description, maxBookingsPerSlot]
    );
    const event = result.rows[0];

    // 2. Insert slots
    const slotPromises = timeSlots.map((slot) => {
      return db.query(
        'INSERT INTO event_slots (event_id, slot_time) VALUES ($1, $2)',
        [event.id, slot]
      );
    });
    await Promise.all(slotPromises);

    res.status(201).json({ message: 'Event created', event });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create event' });
  }
};

exports.listEvents = async (req, res) => {
  try {
    const result = await db.query('SELECT id, title, description FROM events');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to list events' });
  }
};

exports.getEventDetails = async (req, res) => {
  const eventId = req.params.id;

  try {
    const event = await db.query('SELECT * FROM events WHERE id = $1', [eventId]);
    if (event.rows.length === 0) return res.status(404).json({ error: 'Event not found' });

    const slots = await db.query(
      'SELECT id, slot_time, current_bookings FROM event_slots WHERE event_id = $1 ORDER BY slot_time',
      [eventId]
    );

    res.json({ ...event.rows[0], slots: slots.rows });
  } catch (err) {
    res.status(500).json({ error: 'Failed to get event details' });
  }
};
