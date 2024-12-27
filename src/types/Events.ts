export interface Event {
    id: number;
    year: string;
    title: string;
    text1: { title: string; content: string };
    text2?: { title: string; content: string };
    table1?: Table;
    table2?: Table;
    cards: Card[];
    image1?: string;
    image2?: string;
    imageTop?: string;
    layoutId: number;
  }

export interface Table {
  title: string;
  content: {
    cellTitle: string;
    cell: string;
  }[] 
}

export interface Card {
  title: string;
  subtitle: string;
  content: string;
  image?: string;
}