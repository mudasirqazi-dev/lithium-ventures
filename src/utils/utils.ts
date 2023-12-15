import moment from "moment";

class Utils {
  static formatToCurrency = (amount: string) => {
    amount = amount?.replace("$", "");
    return parseFloat(amount)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, "$&,")
      .replace(".00", "")
      .replace(".0", "");
  };
  static formatDateime = (value: string) => {
    return moment(value).format("ddd MMM DD, HH:mm");
  };
}

export default Utils;
