let winnerAnnounced = false;

export const isWinnerAnnounced = (): boolean => winnerAnnounced;

export const setWinnerAnnounced = (value: boolean): void => {
  winnerAnnounced = value;
};
