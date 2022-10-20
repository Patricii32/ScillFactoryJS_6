function func(num) {
    let base = true;
    let result;
    if (num > 1 && num <= 1000) {
        for (i = 2; i < num; i++) {
            if (i % 2 == 0) {
                base = false;
            }
        }
        if (result = base) {
            console.log(`Число ${num}  - простое число`);
        } else {
            console.log(`Число ${num} - составное число`);
        }}
      else if (num>1000) {
    console.log(`Данные неверны`);
}
return result;
}
func(17);

