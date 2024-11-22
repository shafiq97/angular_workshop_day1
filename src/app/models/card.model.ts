export class Card {
  date: string; // The date displayed on the card
  title: string; // Main title
  subtitle: string; // Subtitle text
  progressLabel: string; // Label for progress
  progressPercentage: number; // Progress in percentage (0-100)
  progressColor: string; // Color of the progress bar
  participants: Participant[]; // List of participants
  addParticipant: boolean; // Whether to show the "+" button
  timeLeft: string; // Remaining time displayed
  overflowMenu: boolean; // Whether to show the three-dot menu button

  constructor(
    date: string,
    title: string,
    subtitle: string,
    progressLabel: string,
    progressPercentage: number,
    progressColor: string,
    participants: Participant[],
    addParticipant: boolean,
    timeLeft: string,
    overflowMenu: boolean
  ) {
    this.date = date;
    this.title = title;
    this.subtitle = subtitle;
    this.progressLabel = progressLabel;
    this.progressPercentage = progressPercentage;
    this.progressColor = progressColor;
    this.participants = participants;
    this.addParticipant = addParticipant;
    this.timeLeft = timeLeft;
    this.overflowMenu = overflowMenu;
  }
}

// Subclass for Participants
export class Participant {
  name: string; // Participant name
  imageUrl: string; // Participant profile image URL

  constructor(name: string, imageUrl: string) {
    this.name = name;
    this.imageUrl = imageUrl;
  }
}
