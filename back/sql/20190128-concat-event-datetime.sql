ALTER TABLE event ADD COLUMN date DATETIME AFTER eventName;
UPDATE event SET date = CONCAT(eventDate, ' ', eventHour);
ALTER TABLE event DROP COLUMN eventDate;
ALTER TABLE event DROP COLUMN eventHour;