// backend/controllers/bookingController.js
const db = require('../../../db');

exports.bookSlot = async (req, res) => {
  const { slotId, userName, userEmail } = req.body;

  try {
    // Check current bookings and max limit
    const slot = await db.query(
      `SELECT es.*, e.max_bookings_per_slot
       FROM event_slots es
       JOIN events e ON e.id = es.event_id
       WHERE es.id = $1`, [slotId]
    );

    if (slot.rows.length === 0) {
      return res.status(404).json({ error: 'Slot not found' });
    }

    const { current_bookings, max_bookings_per_slot } = slot.rows[0];

    if (current_bookings >= max_bookings_per_slot) {
      return res.status(400).json({ error: 'Slot fully booked' });
    }

    // Prevent duplicate booking by same user
    const existing = await db.query(
      'SELECT * FROM bookings WHERE slot_id = $1 AND user_email = $2',
      [slotId, userEmail]
    );
    if (existing.rows.length > 0) {
      return res.status(400).json({ error: 'You have already booked this slot' });
    }

    // Insert booking
    await db.query(
      'INSERT INTO bookings (slot_id, user_name, user_email) VALUES ($1, $2, $3)',
      [slotId, userName, userEmail]
    );

    // Update current bookings count
    await db.query(
      'UPDATE event_slots SET current_bookings = current_bookings + 1 WHERE id = $1',
      [slotId]
    );

    res.status(201).json({ message: 'Slot booked successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to book slot' });
  }
};
// backend/controllers/bookingController.js
exports.getUserBookings = async (req, res) => {
    const userEmail = req.params.email;
  
    try {
      const result = await db.query(`
        SELECT 
          b.user_name, b.user_email,
          e.title AS event_title,
          s.slot_time
        FROM bookings b
        JOIN event_slots s ON s.id = b.slot_id
        JOIN events e ON e.id = s.event_id
        WHERE b.user_email = $1
        ORDER BY s.slot_time
      `, [userEmail]);
  
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to fetch bookings' });
    }
  };
  