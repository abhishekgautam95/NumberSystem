export type PageId = 
  | 'cover' 
  | 'intro' 
  | 'decimal' 
  | 'binary' 
  | 'octal'
  | 'hex' 
  | 'converter' 
  | 'arithmetic'
  | 'quiz' 
  | 'finish';

export interface UserState {
  xp: number;
  badges: string[];
}
