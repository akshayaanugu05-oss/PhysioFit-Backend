
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'PhysioFit Backend is running!'
  });
});

app.post('/api/workouts', (req, res) => {
  const { exercise, mode, reps, formScore, duration } = req.body;

  if (!exercise || reps == null) {
    return res.status(400).json({
      error: 'Exercise and reps are required'
    });
  }

  res.status(201).json({
    message: 'Workout received successfully',
    workout: { exercise, mode, reps, formScore, duration }
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`PhysioFit backend running on port ${PORT}`);
});
