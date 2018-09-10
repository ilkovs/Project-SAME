USE SAME;

INSERT INTO users (firstname, lastname, password, last_login) VALUES ('Ron', 'Weasley', 'gryffindor88', '08/10/2018');
INSERT INTO users (firstname, lastname, password, last_login) VALUES ('Hermione', 'Granger', 'gryffindor99', '10/10/2018');
INSERT INTO users (firstname, lastname, password, last_login) VALUES ('Ginny', 'Weasley', 'gryffindor77', '01/01/2015');
INSERT INTO users (firstname, lastname, password, last_login) VALUES ('Harry', 'Potter', 'gryffindor55', '05/30/1999');

INSERT INTO plans (title, UserId) VALUES ('My weekend workout', 1);
INSERT INTO plans (title, UserId) VALUES ('Weekday workout', 3);
INSERT INTO plans (title, UserId) VALUES ('Mission impossible', 2);
INSERT INTO plans (title, UserId) VALUES ('My weekend workout 2', 1);

INSERT INTO plans (title, UserId) VALUES ('My weekend workout', 1);
INSERT INTO plans (title, UserId) VALUES ('Weekday workout', 1);
INSERT INTO dailyworkouts (id,weekday,lifts,muscleGroup1,muscleGroup2,PlanId) VALUES (1,1,"dip machine,dips - triceps version,dips - chest version,dumbbell flyes","triceps", "chest",1);
INSERT INTO dailyworkouts (id,weekday,lifts,muscleGroup1,muscleGroup2,PlanId) VALUES (2,2,"dip machine,dips - triceps version,dips - chest version,dumbbell flyes,drop push","triceps", "chest",1);

-- INSERT INTO muscles (group_name) VALUES ('abdominals');
-- INSERT INTO muscles (group_name) VALUES ('abductors');
-- INSERT INTO muscles (group_name) VALUES ('adductors');
-- INSERT INTO muscles (group_name) VALUES ('biceps');
-- INSERT INTO muscles (group_name) VALUES ('calves');
-- INSERT INTO muscles (group_name) VALUES ('chest');
-- INSERT INTO muscles (group_name) VALUES ('forearms');
-- INSERT INTO muscles (group_name) VALUES ('glutes');
-- INSERT INTO muscles (group_name) VALUES ('hamstrings');
-- INSERT INTO muscles (group_name) VALUES ('lats');
-- INSERT INTO muscles (group_name) VALUES ('lower back');
-- INSERT INTO muscles (group_name) VALUES ('middle back');
-- INSERT INTO muscles (group_name) VALUES ('neck');
-- INSERT INTO muscles (group_name) VALUES ('quadriceps');
-- INSERT INTO muscles (group_name) VALUES ('shoulders');
-- INSERT INTO muscles (group_name) VALUES ('traps');
-- INSERT INTO muscles (group_name) VALUES ('triceps');

INSERT INTO users (id, firstname, lastname, password, last_login) VALUES (7,'Ron', 'Weasley', 'gryffindor88', '08/10/2018');
INSERT INTO plans (title, UserId) VALUES ('My weekend workout', 7);
INSERT INTO plans (title, UserId) VALUES ('Weekday workout', 7);
INSERT INTO dailyworkouts (id,weekday,lifts,muscleGroup1,muscleGroup2,PlanId) VALUES (1,1,"dip machine,dips - triceps version,dips - chest version,dumbbell flyes","triceps", "chest",1);
INSERT INTO dailyworkouts (id,weekday,lifts,muscleGroup1,muscleGroup2,PlanId) VALUES (2,2,"dip machine,dips - triceps version,dips - chest version,dumbbell flyes,drop push","triceps", "chest",1);
