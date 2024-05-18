import { Member } from './member.model';

export interface Course {
  image: string;
  name: string;
  level: string;
  date: string; // ou Date si vous utilisez des objets Date
  time: string;
  detail: string;
  coach: string;
  members: Member[]; // Ajoutez ce champ pour inclure les membres
}
