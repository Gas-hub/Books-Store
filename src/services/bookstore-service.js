export default class BookstoreService {
  data = [
    {
      id: 1,
      title: 'The Room Where It Happened: A White House Memoir Hardcover – June 23, 2020',
      author: 'John Bolton',
      price: 39.99,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41l9MHTOfDL._SX329_BO1,204,203,200_.jpg'},
    {
      id: 2,
      title: 'The Roots of Resistance',
      author: 'Rivera Sun ',
      price: 47.95,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51pVV3m2sIL._SX322_BO1,204,203,200_.jpg'},
    {
      id: 3,
      title: `The Know Your Bill of Rights Book: Don't Lose Your Constitutional Rights--Learn Them!`,
      author: 'Sean Patrick ',
      price: 99,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51QCJ2TrfRL._SX331_BO1,204,203,200_.jpg'},
    {
      id: 4,
      title: `The Federalist Papers (Dover Thrift Editions)`,
      author: 'Alexander Hamilton ',
      price: 5.47,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51JzEUpx-SL._SX311_BO1,204,203,200_.jpg'},
    {
      id: 5,
      title: 'The Constitution and the Declaration of Independence: The Constitution of the United States of America',
      author: 'The Founding Fathers',
      price: 49.99,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51qkUSvxemL._SX311_BO1,204,203,200_.jpg'},  
    {
      id: 6,
      title: 'Never Look Back',
      author: 'Mary Burton',
      price: 55,
      coverImage: 'https://m.media-amazon.com/images/I/41-nVMyG0tL.jpg'}, 
    {  
      id: 7,
      title: 'The Bone Jar',
      author: ' S W Kane ',
      price: 38.97,
      coverImage: 'https://m.media-amazon.com/images/I/51SFjgaSk-L.jpg'},
    {        
      id: 8,
      title: 'Opium and Absinthe: A Novel ',
      author: 'Lydia Kang',
      price: 39.99,
      coverImage: 'https://m.media-amazon.com/images/I/51pmy7iGngL.jpg'},
    {
      id: 9,
      title: 'The Corpse Bridge: A Cooper & Fry Mystery ',
      author: ' Stephen Booth',
      price: 28.99,
      coverImage: 'https://m.media-amazon.com/images/I/61gn4k-hN7L.jpg'},
    {      
      id: 10,
      title: 'Hear No Evil: A chilling British detective crime thriller',
      author: 'J M Dalgliesh',
      price: 49.99,
      coverImage: 'https://m.media-amazon.com/images/I/41cEfXHLstL.jpg'},
    {           
      id: 11,
      title: 'Tell No Tales: A chilling British detective crime thriller',
      author: 'J M Dalgliesh ',
      price: 49.99,
      coverImage: 'https://m.media-amazon.com/images/I/41oChsPjzGL.jpg'},
    { 
      id: 12,
      title: 'Divided House',
      author: 'J M Dalgliesh',
      price: 15.95,
      coverImage: 'https://m.media-amazon.com/images/I/41xAtpqV4sL.jpg'}
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data);
      }, 700);
    });
  }
}