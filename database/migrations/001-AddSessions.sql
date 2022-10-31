
BEGIN;

ALTER TABLE session ADD COLUMN session_id varchar(255);
ALTER TABLE session ADD COLUMN session_data json;

UPDATE session SET session_data = '{}'::json WHERE session_data IS NULL;

UPDATE session SET session_id = '1' WHERE session_id IS NULL;

ALTER TABLE session ALTER COLUMN session_data SET NOT NULL;

ALTER TABLE session ALTER COLUMN session_id SET DEFAULT '1';
ALTER TABLE session ALTER COLUMN session_id SET NOT NULL;

COMMIT;