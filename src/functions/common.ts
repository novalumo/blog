class Common {
  /**
   * get English Month
   * @param month
   * @returns
   */
  getEnglishMonth(month): string {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return monthNames[month - 1];
  }
}

export default Common;
