type Data = {
  view: string;
  entries: object[];
  editing: null;
  nextEntryId: number;
}

export const data: Data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1,
};

console.log(data);
