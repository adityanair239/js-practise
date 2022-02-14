const age = 14;
const isOldEnough = age >= 18;

if(isOldEnough)
{
    console.log("Is Old Enough");
}
else
{
    console.log(`Is Not Old Enough. Wait another ${18-age} years`);
}