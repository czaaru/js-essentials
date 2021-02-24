// Class Book

class Book {
  constructor(title, pageAmount, color, type, available, brandNew, secondHand) {
    this.title = title;
    this.pageAmount = pageAmount;
    this.color = color;
    this.type = type;
    this.available = available;
    this.howManyLeft = {
      new: brandNew,
      secondHand: secondHand,
    };
  }
  changeHowManyLeft(amountNew, amountSecondHand) {
    this.howManyLeft.new = amountNew;
    this.howManyLeft.secondHand = amountSecondHand;
  }
}

export default Book;
