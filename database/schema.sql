-- AthleteOps Database Schema

CREATE DATABASE IF NOT EXISTS athleteops_db;
USE athleteops_db;

-- Users table (shared auth for all roles)
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role ENUM('admin', 'coach', 'athlete') NOT NULL DEFAULT 'athlete',
  avatar_url VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Teams
CREATE TABLE teams (
  id INT PRIMARY KEY AUTO_INCREMENT,
  team_name VARCHAR(200) NOT NULL,
  sport_type VARCHAR(100) NOT NULL,
  coach_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (coach_id) REFERENCES users(id) ON DELETE SET NULL
);

-- Athletes (extends user)
CREATE TABLE athletes (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL UNIQUE,
  age INT,
  gender ENUM('Male', 'Female', 'Other'),
  sport VARCHAR(100),
  team_id INT,
  height_cm DECIMAL(5,2),
  weight_kg DECIMAL(5,2),
  position VARCHAR(100),
  coach_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE SET NULL,
  FOREIGN KEY (coach_id) REFERENCES users(id) ON DELETE SET NULL
);

-- Training Programs
CREATE TABLE training_programs (
  id INT PRIMARY KEY AUTO_INCREMENT,
  athlete_id INT NOT NULL,
  workout_name VARCHAR(200) NOT NULL,
  workout_type ENUM('Strength', 'Cardio', 'Flexibility', 'Recovery', 'Sport-Specific') NOT NULL,
  duration_min INT,
  intensity ENUM('Low', 'Medium', 'High', 'Max') DEFAULT 'Medium',
  coach_notes TEXT,
  date_assigned DATE,
  status ENUM('Pending', 'In Progress', 'Completed') DEFAULT 'Pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (athlete_id) REFERENCES athletes(id) ON DELETE CASCADE
);

-- Performance Metrics
CREATE TABLE performance_metrics (
  id INT PRIMARY KEY AUTO_INCREMENT,
  athlete_id INT NOT NULL,
  metric_date DATE NOT NULL,
  speed_score DECIMAL(5,2),
  strength_score DECIMAL(5,2),
  endurance_score DECIMAL(5,2),
  recovery_score DECIMAL(5,2),
  training_load DECIMAL(5,2),
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (athlete_id) REFERENCES athletes(id) ON DELETE CASCADE
);

-- Injuries
CREATE TABLE injuries (
  id INT PRIMARY KEY AUTO_INCREMENT,
  athlete_id INT NOT NULL,
  injury_type VARCHAR(200) NOT NULL,
  severity ENUM('Minor', 'Moderate', 'Severe', 'Critical') NOT NULL,
  date_reported DATE NOT NULL,
  recovery_plan TEXT,
  status ENUM('Active', 'Recovering', 'Recovered') DEFAULT 'Active',
  doctor_notes TEXT,
  expected_return DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (athlete_id) REFERENCES athletes(id) ON DELETE CASCADE
);

-- Schedules
CREATE TABLE schedules (
  id INT PRIMARY KEY AUTO_INCREMENT,
  event_type ENUM('Training', 'Match', 'Recovery', 'Meeting') NOT NULL,
  athlete_id INT,
  team_id INT,
  event_date DATETIME NOT NULL,
  location VARCHAR(300),
  coach_id INT,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (athlete_id) REFERENCES athletes(id) ON DELETE CASCADE,
  FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE,
  FOREIGN KEY (coach_id) REFERENCES users(id) ON DELETE SET NULL
);

-- Notifications
CREATE TABLE notifications (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  title VARCHAR(300) NOT NULL,
  message TEXT,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
