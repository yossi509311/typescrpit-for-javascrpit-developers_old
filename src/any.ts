import axios from 'axios';
export {};

let url: string =
  'http://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios.get(url).then(function (response) {
  interface Article {
    id: number;
    title: string;
    description: string;
  }

  //  let data: any; //Article[];
  let data: Article[];
  data = response.data;
  // data = [
  //   {
  //     id: 1,
  //     //      title: 2,
  //     title: 'title',
  //     description: 'description',
  //   },
  // ];
  console.log(data);
});
