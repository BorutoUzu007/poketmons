import { ColumnDef } from '@tanstack/react-table'


export type SinglePlayerHistory = {
  id: number,
  closed_date: Date,
  room_mode_type: string,
  correct_answered: number
}

export const columns: ColumnDef<SinglePlayerHistory>[] = [
  {
    accessorKey: "closed_date",
    header: "Date Played",
  },
  {
    accessorKey: "room_mode_type",
    header: "Game Mode",
  },
  {
    accessorKey: "correct_answered",
    header: "Score",
  }
]


