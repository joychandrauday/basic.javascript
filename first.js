const price=1500;

if(price>=5000){
    const discount=price*10/100;
    const netPrice=price-discount;
    console.log(netPrice);
} else if (price<=2000){
    const discount=price*5/100;
    const netPrice=price-discount;
    console.log(netPrice);
}