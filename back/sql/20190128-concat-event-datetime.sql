ALTER TABLE event ADD COLUMN date DATETIME;
UPDATE event SET date = CONCAT(eventDate, ' ', eventHour);
ALTER TABLE event DROP COLUMN eventDate;
ALTER TABLE event DROP COLUMN eventHour;