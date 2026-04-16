CREATE TABLE rsvp (
	id SERIAL PRIMARY KEY,
	attendance VARCHAR(10) NOT NULL,
	phone VARCHAR(20),
	email VARCHAR(100),
	city VARCHAR(10),
	message TEXT,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE guests (
	id SERIAL PRIMARY KEY,
	rsvp_id INT,
	name VARCHAR(100),
	lastname VARCHAR(100),
	type VARCHAR(10),
	FOREIGN KEY (rsvp_id) REFERENCES rsvp(id) ON DELETE CASCADE
);

-- Se limpian duplicados
SELECT email, COUNT(*)
FROM rsvp
GROUP BY email
HAVING COUNT(*) > 1;

-- Si existen duplicados se eliminan
DELETE FROM rsvp
WHERE id NOT IN (
    SELECT MIN(id)
    FROM rsvp
    GROUP BY email
);

ALTER TABLE rsvp ADD CONSTRAINT unique_email UNIQUE (email);

ALTER TABLE rsvp ALTER COLUMN email SET NOT NULL;