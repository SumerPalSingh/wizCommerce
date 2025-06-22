-- Drop tables if they exist
DROP TABLE IF EXISTS bookings;
DROP TABLE IF EXISTS event_slots;
DROP TABLE IF EXISTS events;

-- Create events table
CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    max_bookings_per_slot INTEGER NOT NULL
);

-- Create event_slots table
CREATE TABLE event_slots (
    id SERIAL PRIMARY KEY,
    event_id INTEGER REFERENCES events(id) ON DELETE CASCADE,
    slot_time TIMESTAMP NOT NULL,
    current_bookings INTEGER DEFAULT 0
);

-- Create bookings table
CREATE TABLE bookings (
    id SERIAL PRIMARY KEY,
    slot_id INTEGER REFERENCES event_slots(id) ON DELETE CASCADE,
    user_name TEXT NOT NULL,
    user_email TEXT NOT NULL,
    UNIQUE (slot_id, user_email)
);
