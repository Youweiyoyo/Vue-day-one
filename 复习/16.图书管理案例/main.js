const vm = new Vue({
  el: "#root",
  data: {
    books: [
      {
        id: 1,
        name: "《算法导论》",
        date: "2006-9",
        price: "85.00",
        count: 1,
      },
      {
        id: 2,
        name: "《算法导论》",
        date: "2006-9",
        price: "59.00",
        count: 1,
      },
      {
        id: 3,
        name: "《算法导论》",
        date: "2006-9",
        price: "39.00",
        count: 1,
      },
      {
        id: 4,
        name: "《算法导论》",
        date: "2006-9",
        price: "199.00",
        count: 1,
      },
    ],
  },
  methods: {
    augmentBtn(index) {
      this.books[index].count++;
    },
    subtractBtn(index) {
      this.books[index].count =
        this.books[index].count === 1 ? 1 : this.books[index].count - 1;
    },
    deleteBtn(index) {
      this.books.splice(index, 1);
    },
  },
  computed: {
    totalPrices() {
      let prices = 0;
      for (let book of this.books) {
        prices += parseInt(book.price) * book.count;
      }
      return prices;
    },
  },
  filters: {
    showPrice(price) {
      return "￥" + price.toFixed(2);
    },
  },
});
