
export default class BookstoreService {

    data = [
        {
          id: 1,
          title: 'Code Complete (Developer Best Practices)',
          author: 'Steve McConnell',
          price: 25,
          coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51MEZDyKvZL._SX409_BO1,204,203,200_.jpg'
        },
        {
          id: 2,
          title: 'Grokking algorithms',
          author: 'Bhargava Aditya ',
          price: 41,
          coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrJDutY9mHO9QigjGhJ2sfuFVTaOiMyBNO0Qi1hHSzk5woEzOd'
        }
    ];

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
              // if (Math.random() > 0.75) {
              //   reject(new Error('blablabla'))
              // } else {
              //   resolve(this.data)
              // }
              resolve(this.data)
            }, 700)
        })
    }
}