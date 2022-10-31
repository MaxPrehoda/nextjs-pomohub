BEGIN;

ALTER TABLE session DROP CONSTRAINT IF EXISTS session_username_start_date_key;

ALTER TABLE session DROP CONSTRAINT IF EXISTS session_start_date_key;

ALTER TABLE session ALTER COLUMN start_date TYPE timestamp with time zone USING start_date AT TIME ZONE 'UTC';

UPDATE session SET start_date = now() AT TIME ZONE 'UTC';

ALTER TABLE session ALTER COLUMN start_date SET NOT NULL;

COMMIT;